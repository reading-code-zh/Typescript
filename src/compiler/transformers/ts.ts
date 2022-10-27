/*@internal*/
namespace ts {
    /**
     * Indicates whether to emit type metadata in the new format.
     */
    const USE_NEW_TYPE_METADATA_FORMAT = false;

    const enum TypeScriptSubstitutionFlags {
        /** Enables substitutions for namespace exports. */
        NamespaceExports = 1 << 1,
        /* Enables substitutions for unqualified enum members */
        NonQualifiedEnumMembers = 1 << 3
    }

    const enum ClassFacts {
        None = 0,
        HasStaticInitializedProperties = 1 << 0,
        HasConstructorDecorators = 1 << 1,
        HasMemberDecorators = 1 << 2,
        IsExportOfNamespace = 1 << 3,
        IsNamedExternalExport = 1 << 4,
        IsDefaultExternalExport = 1 << 5,
        IsDerivedClass = 1 << 6,
        UseImmediatelyInvokedFunctionExpression = 1 << 7,

        HasAnyDecorators = HasConstructorDecorators | HasMemberDecorators,
        NeedsName = HasStaticInitializedProperties | HasMemberDecorators,
        MayNeedImmediatelyInvokedFunctionExpression = HasAnyDecorators | HasStaticInitializedProperties,
        IsExported = IsExportOfNamespace | IsDefaultExternalExport | IsNamedExternalExport,
    }

    export function transformTypeScript(context: TransformationContext) {
        const {
            factory,
            getEmitHelperFactory: emitHelpers,
            startLexicalEnvironment,
            resumeLexicalEnvironment,
            endLexicalEnvironment,
            hoistVariableDeclaration,
        } = context;

        const resolver = context.getEmitResolver();
        const compilerOptions = context.getCompilerOptions();
        const languageVersion = getEmitScriptTarget(compilerOptions);
        const moduleKind = getEmitModuleKind(compilerOptions);
        const typeSerializer = compilerOptions.emitDecoratorMetadata ? createRuntimeTypeSerializer(context) : undefined;

        // Save the previous transformation hooks.
        const previousOnEmitNode = context.onEmitNode;
        const previousOnSubstituteNode = context.onSubstituteNode;

        // Set new transformation hooks.
        context.onEmitNode = onEmitNode;
        context.onSubstituteNode = onSubstituteNode;

        // Enable substitution for property/element access to emit const enum values.
        context.enableSubstitution(SyntaxKind.PropertyAccessExpression);
        context.enableSubstitution(SyntaxKind.ElementAccessExpression);

        // These variables contain state that changes as we descend into the tree.
        let currentSourceFile: SourceFile;
        let currentNamespace: ModuleDeclaration;
        let currentNamespaceContainerName: Identifier;
        let currentLexicalScope: SourceFile | Block | ModuleBlock | CaseBlock;
        let currentScopeFirstDeclarationsOfName: UnderscoreEscapedMap<Node> | undefined;
        let currentClassHasParameterProperties: boolean | undefined;

        /**
         * Keeps track of whether expression substitution has been enabled for specific edge cases.
         * They are persisted between each SourceFile transformation and should not be reset.
         */
        let enabledSubstitutions: TypeScriptSubstitutionFlags;

        /**
         * Keeps track of whether we are within any containing namespaces when performing
         * just-in-time substitution while printing an expression identifier.
         */
        let applicableSubstitutions: TypeScriptSubstitutionFlags;

        return transformSourceFileOrBundle;

        function transformSourceFileOrBundle(node: SourceFile | Bundle) {
            if (node.kind === SyntaxKind.Bundle) {
                return transformBundle(node);
            }
            return transformSourceFile(node);
        }

        function transformBundle(node: Bundle) {
            return factory.createBundle(node.sourceFiles.map(transformSourceFile), mapDefined(node.prepends, prepend => {
                if (prepend.kind === SyntaxKind.InputFiles) {
                    return createUnparsedSourceFile(prepend, "js");
                }
                return prepend;
            }));
        }

        /**
         * Transform TypeScript-specific syntax in a SourceFile.
         *
         * @param node A SourceFile node.
         */
        function transformSourceFile(node: SourceFile) {
            if (node.isDeclarationFile) {
                return node;
            }

            currentSourceFile = node;

            const visited = saveStateAndInvoke(node, visitSourceFile);
            addEmitHelpers(visited, context.readEmitHelpers());

            currentSourceFile = undefined!;
            return visited;
        }

        /**
         * Visits a node, saving and restoring state variables on the stack.
         *
         * @param node The node to visit.
         */
        function saveStateAndInvoke<T>(node: Node, f: (node: Node) => T): T {
            // Save state
            const savedCurrentScope = currentLexicalScope;
            const savedCurrentScopeFirstDeclarationsOfName = currentScopeFirstDeclarationsOfName;
            const savedCurrentClassHasParameterProperties = currentClassHasParameterProperties;

            // Handle state changes before visiting a node.
            onBeforeVisitNode(node);

            const visited = f(node);

            // Restore state
            if (currentLexicalScope !== savedCurrentScope) {
                currentScopeFirstDeclarationsOfName = savedCurrentScopeFirstDeclarationsOfName;
            }

            currentLexicalScope = savedCurrentScope;
            currentClassHasParameterProperties = savedCurrentClassHasParameterProperties;
            return visited;
        }

        /**
         * Performs actions that should always occur immediately before visiting a node.
         *
         * @param node The node to visit.
         */
        function onBeforeVisitNode(node: Node) {
            switch (node.kind) {
                case SyntaxKind.SourceFile:
                case SyntaxKind.CaseBlock:
                case SyntaxKind.ModuleBlock:
                case SyntaxKind.Block:
                    currentLexicalScope = node as SourceFile | CaseBlock | ModuleBlock | Block;
                    currentScopeFirstDeclarationsOfName = undefined;
                    break;

                case SyntaxKind.ClassDeclaration:
                case SyntaxKind.FunctionDeclaration:
                    if (hasSyntacticModifier(node, ModifierFlags.Ambient)) {
                        break;
                    }

                    // Record these declarations provided that they have a name.
                    if ((node as ClassDeclaration | FunctionDeclaration).name) {
                        recordEmittedDeclarationInScope(node as ClassDeclaration | FunctionDeclaration);
                    }
                    else {
                        // These nodes should always have names unless they are default-exports;
                        // however, class declaration parsing allows for undefined names, so syntactically invalid
                        // programs may also have an undefined name.
                        Debug.assert(node.kind === SyntaxKind.ClassDeclaration || hasSyntacticModifier(node, ModifierFlags.Default));
                    }

                    break;
            }
        }

        /**
         * General-purpose node visitor.
         *
         * @param node The node to visit.
         */
        function visitor(node: Node): VisitResult<Node> {
            return saveStateAndInvoke(node, visitorWorker);
        }

        /**
         * Visits and possibly transforms any node.
         *
         * @param node The node to visit.
         */
        function visitorWorker(node: Node): VisitResult<Node> {
            if (node.transformFlags & TransformFlags.ContainsTypeScript) {
                return visitTypeScript(node);
            }
            return node;
        }

        /**
         * Specialized visitor that visits the immediate children of a SourceFile.
         *
         * @param node The node to visit.
         */
        function sourceElementVisitor(node: Node): VisitResult<Node> {
            return saveStateAndInvoke(node, sourceElementVisitorWorker);
        }

        /**
         * Specialized visitor that visits the immediate children of a SourceFile.
         *
         * @param node The node to visit.
         */
        function sourceElementVisitorWorker(node: Node): VisitResult<Node> {
            switch (node.kind) {
                case SyntaxKind.ImportDeclaration:
                case SyntaxKind.ImportEqualsDeclaration:
                case SyntaxKind.ExportAssignment:
                case SyntaxKind.ExportDeclaration:
                    return visitElidableStatement(node as ImportDeclaration | ImportEqualsDeclaration | ExportAssignment | ExportDeclaration);
                default:
                    return visitorWorker(node);
            }
        }

        function visitElidableStatement(node: ImportDeclaration | ImportEqualsDeclaration | ExportAssignment | ExportDeclaration): VisitResult<Node> {
            const parsed = getParseTreeNode(node);
            if (parsed !== node) {
                // If the node has been transformed by a `before` transformer, perform no ellision on it
                // As the type information we would attempt to lookup to perform ellision is potentially unavailable for the synthesized nodes
                // We do not reuse `visitorWorker`, as the ellidable statement syntax kinds are technically unrecognized by the switch-case in `visitTypeScript`,
                // and will trigger debug failures when debug verbosity is turned up
                if (node.transformFlags & TransformFlags.ContainsTypeScript) {
                    // This node contains TypeScript, so we should visit its children.
                    return visitEachChild(node, visitor, context);
                }
                // Otherwise, we can just return the node
                return node;
            }
            switch (node.kind) {
                case SyntaxKind.ImportDeclaration:
                    return visitImportDeclaration(node);
                case SyntaxKind.ImportEqualsDeclaration:
                    return visitImportEqualsDeclaration(node);
                case SyntaxKind.ExportAssignment:
                    return visitExportAssignment(node);
                case SyntaxKind.ExportDeclaration:
                    return visitExportDeclaration(node);
                default:
                    Debug.fail("Unhandled ellided statement");
            }
        }

        /**
         * Specialized visitor that visits the immediate children of a namespace.
         *
         * @param node The node to visit.
         */
        function namespaceElementVisitor(node: Node): VisitResult<Node> {
            return saveStateAndInvoke(node, namespaceElementVisitorWorker);
        }

        /**
         * Specialized visitor that visits the immediate children of a namespace.
         *
         * @param node The node to visit.
         */
        function namespaceElementVisitorWorker(node: Node): VisitResult<Node> {
            if (node.kind === SyntaxKind.ExportDeclaration ||
                node.kind === SyntaxKind.ImportDeclaration ||
                node.kind === SyntaxKind.ImportClause ||
                (node.kind === SyntaxKind.ImportEqualsDeclaration &&
                 (node as ImportEqualsDeclaration).moduleReference.kind === SyntaxKind.ExternalModuleReference)) {
                // do not emit ES6 imports and exports since they are illegal inside a namespace
                return undefined;
            }
            else if (node.transformFlags & TransformFlags.ContainsTypeScript || hasSyntacticModifier(node, ModifierFlags.Export)) {
                return visitTypeScript(node);
            }

            return node;
        }

        /**
         * Gets a specialized visitor that visits the immediate children of a class with TypeScript syntax.
         *
         * @param parent The class containing the elements to visit.
         */
        function getClassElementVisitor(parent: ClassLikeDeclaration): (node: Node) => VisitResult<Node> {
            return node => saveStateAndInvoke(node, n => classElementVisitorWorker(n, parent));
        }

        /**
         * Specialized visitor that visits the immediate children of a class with TypeScript syntax.
         *
         * @param node The node to visit.
         */
        function classElementVisitorWorker(node: Node, parent: ClassLikeDeclaration): VisitResult<Node> {
            switch (node.kind) {
                case SyntaxKind.Constructor:
                    return visitConstructor(node as ConstructorDeclaration);

                case SyntaxKind.PropertyDeclaration:
                    // Property declarations are not TypeScript syntax, but they must be visited
                    // for the decorator transformation.
                    return visitPropertyDeclaration(node as PropertyDeclaration, parent);

                case SyntaxKind.GetAccessor:
                    // Get Accessors can have TypeScript modifiers, decorators, and type annotations.
                    return visitGetAccessor(node as GetAccessorDeclaration, parent);

                case SyntaxKind.SetAccessor:
                    // Set Accessors can have TypeScript modifiers and type annotations.
                    return visitSetAccessor(node as SetAccessorDeclaration, parent);

                case SyntaxKind.MethodDeclaration:
                    // TypeScript method declarations may have decorators, modifiers
                    // or type annotations.
                    return visitMethodDeclaration(node as MethodDeclaration, parent);

                case SyntaxKind.ClassStaticBlockDeclaration:
                    return visitEachChild(node, visitor, context);

                case SyntaxKind.SemicolonClassElement:
                    return node;

                case SyntaxKind.IndexSignature:
                    // Index signatures are elided
                    return;

                default:
                    return Debug.failBadSyntaxKind(node);
            }
        }

        function getObjectLiteralElementVisitor(parent: ObjectLiteralExpression): (node: Node) => VisitResult<Node> {
            return node => saveStateAndInvoke(node, n => objectLiteralElementVisitorWorker(n, parent));
        }

        function objectLiteralElementVisitorWorker(node: Node, parent: ObjectLiteralExpression): VisitResult<Node> {
            switch (node.kind) {
                case SyntaxKind.PropertyAssignment:
                case SyntaxKind.ShorthandPropertyAssignment:
                case SyntaxKind.SpreadAssignment:
                    return visitor(node);

                case SyntaxKind.GetAccessor:
                    // Get Accessors can have TypeScript modifiers, decorators, and type annotations.
                    return visitGetAccessor(node as GetAccessorDeclaration, parent);

                case SyntaxKind.SetAccessor:
                    // Set Accessors can have TypeScript modifiers and type annotations.
                    return visitSetAccessor(node as SetAccessorDeclaration, parent);

                case SyntaxKind.MethodDeclaration:
                    // TypeScript method declarations may have decorators, modifiers
                    // or type annotations.
                    return visitMethodDeclaration(node as MethodDeclaration, parent);

                default:
                    return Debug.failBadSyntaxKind(node);
            }
        }

        function modifierVisitor(node: Node): VisitResult<Node> {
            if (isDecorator(node)) return undefined;
            if (modifierToFlag(node.kind) & ModifierFlags.TypeScriptModifier) {
                return undefined;
            }
            else if (currentNamespace && node.kind === SyntaxKind.ExportKeyword) {
                return undefined;
            }

            return node;
        }

        /**
         * Branching visitor, visits a TypeScript syntax node.
         *
         * @param node The node to visit.
         */
        function visitTypeScript(node: Node): VisitResult<Node> {
            if (isStatement(node) && hasSyntacticModifier(node, ModifierFlags.Ambient)) {
                // TypeScript ambient declarations are elided, but some comments may be preserved.
                // See the implementation of `getLeadingComments` in comments.ts for more details.
                return factory.createNotEmittedStatement(node);
            }

            switch (node.kind) {
                case SyntaxKind.ExportKeyword:
                case SyntaxKind.DefaultKeyword:
                    // ES6 export and default modifiers are elided when inside a namespace.
                    return currentNamespace ? undefined : node;

                case SyntaxKind.PublicKeyword:
                case SyntaxKind.PrivateKeyword:
                case SyntaxKind.ProtectedKeyword:
                case SyntaxKind.AbstractKeyword:
                case SyntaxKind.OverrideKeyword:
                case SyntaxKind.ConstKeyword:
                case SyntaxKind.DeclareKeyword:
                case SyntaxKind.ReadonlyKeyword:
                case SyntaxKind.InKeyword:
                case SyntaxKind.OutKeyword:
                // TypeScript accessibility and readonly modifiers are elided
                // falls through
                case SyntaxKind.ArrayType:
                case SyntaxKind.TupleType:
                case SyntaxKind.OptionalType:
                case SyntaxKind.RestType:
                case SyntaxKind.TypeLiteral:
                case SyntaxKind.TypePredicate:
                case SyntaxKind.TypeParameter:
                case SyntaxKind.AnyKeyword:
                case SyntaxKind.UnknownKeyword:
                case SyntaxKind.BooleanKeyword:
                case SyntaxKind.StringKeyword:
                case SyntaxKind.NumberKeyword:
                case SyntaxKind.NeverKeyword:
                case SyntaxKind.VoidKeyword:
                case SyntaxKind.SymbolKeyword:
                case SyntaxKind.ConstructorType:
                case SyntaxKind.FunctionType:
                case SyntaxKind.TypeQuery:
                case SyntaxKind.TypeReference:
                case SyntaxKind.UnionType:
                case SyntaxKind.IntersectionType:
                case SyntaxKind.ConditionalType:
                case SyntaxKind.ParenthesizedType:
                case SyntaxKind.ThisType:
                case SyntaxKind.TypeOperator:
                case SyntaxKind.IndexedAccessType:
                case SyntaxKind.MappedType:
                case SyntaxKind.LiteralType:
                    // TypeScript type nodes are elided.
                    // falls through

                case SyntaxKind.IndexSignature:
                    // TypeScript index signatures are elided.
                    return undefined;

                case SyntaxKind.TypeAliasDeclaration:
                    // TypeScript type-only declarations are elided.
                    return factory.createNotEmittedStatement(node);

                case SyntaxKind.NamespaceExportDeclaration:
                    // TypeScript namespace export declarations are elided.
                    return undefined;

                case SyntaxKind.InterfaceDeclaration:
                    // TypeScript interfaces are elided, but some comments may be preserved.
                    // See the implementation of `getLeadingComments` in comments.ts for more details.
                    return factory.createNotEmittedStatement(node);

                case SyntaxKind.ClassDeclaration:
                    // This may be a class declaration with TypeScript syntax extensions.
                    //
                    // TypeScript class syntax extensions include:
                    // - decorators
                    // - optional `implements` heritage clause
                    // - parameter property assignments in the constructor
                    // - index signatures
                    // - method overload signatures
                    return visitClassDeclaration(node as ClassDeclaration);

                case SyntaxKind.ClassExpression:
                    // This may be a class expression with TypeScript syntax extensions.
                    //
                    // TypeScript class syntax extensions include:
                    // - decorators
                    // - optional `implements` heritage clause
                    // - parameter property assignments in the constructor
                    // - index signatures
                    // - method overload signatures
                    return visitClassExpression(node as ClassExpression);

                case SyntaxKind.HeritageClause:
                    // This may be a heritage clause with TypeScript syntax extensions.
                    //
                    // TypeScript heritage clause extensions include:
                    // - `implements` clause
                    return visitHeritageClause(node as HeritageClause);

                case SyntaxKind.ExpressionWithTypeArguments:
                    // TypeScript supports type arguments on an expression in an `extends` heritage clause.
                    return visitExpressionWithTypeArguments(node as ExpressionWithTypeArguments);

                case SyntaxKind.ObjectLiteralExpression:
                    return visitObjectLiteralExpression(node as ObjectLiteralExpression);

                case SyntaxKind.Constructor:
                case SyntaxKind.PropertyDeclaration:
                case SyntaxKind.MethodDeclaration:
                case SyntaxKind.GetAccessor:
                case SyntaxKind.SetAccessor:
                case SyntaxKind.ClassStaticBlockDeclaration:
                    return Debug.fail("Class and object literal elements must be visited with their respective visitors");

                case SyntaxKind.FunctionDeclaration:
                    // Typescript function declarations can have modifiers, decorators, and type annotations.
                    return visitFunctionDeclaration(node as FunctionDeclaration);

                case SyntaxKind.FunctionExpression:
                    // TypeScript function expressions can have modifiers and type annotations.
                    return visitFunctionExpression(node as FunctionExpression);

                case SyntaxKind.ArrowFunction:
                    // TypeScript arrow functions can have modifiers and type annotations.
                    return visitArrowFunction(node as ArrowFunction);

                case SyntaxKind.Parameter:
                    // This may be a parameter declaration with TypeScript syntax extensions.
                    //
                    // TypeScript parameter declaration syntax extensions include:
                    // - decorators
                    // - accessibility modifiers
                    // - the question mark (?) token for optional parameters
                    // - type annotations
                    // - this parameters
                    return visitParameter(node as ParameterDeclaration);

                case SyntaxKind.ParenthesizedExpression:
                    // ParenthesizedExpressions are TypeScript if their expression is a
                    // TypeAssertion or AsExpression
                    return visitParenthesizedExpression(node as ParenthesizedExpression);

                case SyntaxKind.TypeAssertionExpression:
                case SyntaxKind.AsExpression:
                    // TypeScript type assertions are removed, but their subtrees are preserved.
                    return visitAssertionExpression(node as AssertionExpression);

                case SyntaxKind.SatisfiesExpression:
                    return visitSatisfiesExpression(node as SatisfiesExpression);

                case SyntaxKind.CallExpression:
                    return visitCallExpression(node as CallExpression);

                case SyntaxKind.NewExpression:
                    return visitNewExpression(node as NewExpression);

                case SyntaxKind.TaggedTemplateExpression:
                    return visitTaggedTemplateExpression(node as TaggedTemplateExpression);

                case SyntaxKind.NonNullExpression:
                    // TypeScript non-null expressions are removed, but their subtrees are preserved.
                    return visitNonNullExpression(node as NonNullExpression);

                case SyntaxKind.EnumDeclaration:
                    // TypeScript enum declarations do not exist in ES6 and must be rewritten.
                    return visitEnumDeclaration(node as EnumDeclaration);

                case SyntaxKind.VariableStatement:
                    // TypeScript namespace exports for variable statements must be transformed.
                    return visitVariableStatement(node as VariableStatement);

                case SyntaxKind.VariableDeclaration:
                    return visitVariableDeclaration(node as VariableDeclaration);

                case SyntaxKind.ModuleDeclaration:
                    // TypeScript namespace declarations must be transformed.
                    return visitModuleDeclaration(node as ModuleDeclaration);

                case SyntaxKind.ImportEqualsDeclaration:
                    // TypeScript namespace or external module import.
                    return visitImportEqualsDeclaration(node as ImportEqualsDeclaration);

                case SyntaxKind.JsxSelfClosingElement:
                    return visitJsxSelfClosingElement(node as JsxSelfClosingElement);

                case SyntaxKind.JsxOpeningElement:
                    return visitJsxJsxOpeningElement(node as JsxOpeningElement);

                default:
                    // node contains some other TypeScript syntax
                    return visitEachChild(node, visitor, context);
            }
        }

        function visitSourceFile(node: SourceFile) {
            const alwaysStrict = getStrictOptionValue(compilerOptions, "alwaysStrict") &&
                !(isExternalModule(node) && moduleKind >= ModuleKind.ES2015) &&
                !isJsonSourceFile(node);

            return factory.updateSourceFile(
                node,
                visitLexicalEnvironment(node.statements, sourceElementVisitor, context, /*start*/ 0, alwaysStrict));
        }

        function visitObjectLiteralExpression(node: ObjectLiteralExpression) {
            return factory.updateObjectLiteralExpression(
                node,
                visitNodes(node.properties, getObjectLiteralElementVisitor(node), isObjectLiteralElement)
            );
        }

        function getClassFacts(node: ClassDeclaration, staticProperties: readonly PropertyDeclaration[]) {
            let facts = ClassFacts.None;
            if (some(staticProperties)) facts |= ClassFacts.HasStaticInitializedProperties;
            const extendsClauseElement = getEffectiveBaseTypeNode(node);
            if (extendsClauseElement && skipOuterExpressions(extendsClauseElement.expression).kind !== SyntaxKind.NullKeyword) facts |= ClassFacts.IsDerivedClass;
            if (classOrConstructorParameterIsDecorated(node)) facts |= ClassFacts.HasConstructorDecorators;
            if (childIsDecorated(node)) facts |= ClassFacts.HasMemberDecorators;
            if (isExportOfNamespace(node)) facts |= ClassFacts.IsExportOfNamespace;
            else if (isDefaultExternalModuleExport(node)) facts |= ClassFacts.IsDefaultExternalExport;
            else if (isNamedExternalModuleExport(node)) facts |= ClassFacts.IsNamedExternalExport;
            if (languageVersion <= ScriptTarget.ES5 && (facts & ClassFacts.MayNeedImmediatelyInvokedFunctionExpression)) facts |= ClassFacts.UseImmediatelyInvokedFunctionExpression;
            return facts;
        }

        function hasTypeScriptClassSyntax(node: Node) {
            return !!(node.transformFlags & TransformFlags.ContainsTypeScriptClassSyntax);
        }

        function isClassLikeDeclarationWithTypeScriptSyntax(node: ClassLikeDeclaration) {
            return hasDecorators(node)
                || some(node.typeParameters)
                || some(node.heritageClauses, hasTypeScriptClassSyntax)
                || some(node.members, hasTypeScriptClassSyntax);
        }

        function visitClassDeclaration(node: ClassDeclaration): VisitResult<Statement> {
            if (!isClassLikeDeclarationWithTypeScriptSyntax(node) && !(currentNamespace && hasSyntacticModifier(node, ModifierFlags.Export))) {
                return factory.updateClassDeclaration(
                    node,
                    visitNodes(node.modifiers, modifierVisitor, isModifier),
                    node.name,
                    /*typeParameters*/ undefined,
                    visitNodes(node.heritageClauses, visitor, isHeritageClause),
                    visitNodes(node.members, getClassElementVisitor(node), isClassElement)
                );
            }

            const staticProperties = getProperties(node, /*requireInitializer*/ true, /*isStatic*/ true);
            const facts = getClassFacts(node, staticProperties);

            if (facts & ClassFacts.UseImmediatelyInvokedFunctionExpression) {
                context.startLexicalEnvironment();
            }

            const name = node.name || (facts & ClassFacts.NeedsName ? factory.getGeneratedNameForNode(node) : undefined);
            const allDecorators = getAllDecoratorsOfClass(node);
            const decorators = transformAllDecoratorsOfDeclaration(node, node, allDecorators);

            // we do not emit modifiers on the declaration if we are emitting an IIFE
            const modifiers = !(facts & ClassFacts.UseImmediatelyInvokedFunctionExpression)
                ? visitNodes(node.modifiers, modifierVisitor, isModifier)
                : elideNodes(factory, node.modifiers); // preserve positions, if available

            //  ${modifiers} class ${name} ${heritageClauses} {
            //      ${members}
            //  }
            const classStatement = factory.updateClassDeclaration(
                node,
                concatenate<ModifierLike>(decorators, modifiers),
                name,
                /*typeParameters*/ undefined,
                visitNodes(node.heritageClauses, visitor, isHeritageClause),
                transformClassMembers(node)
            );

            // To better align with the old emitter, we should not emit a trailing source map
            // entry if the class has static properties.
            let emitFlags = getEmitFlags(node);
            if (facts & ClassFacts.HasStaticInitializedProperties) {
                emitFlags |= EmitFlags.NoTrailingSourceMap;
            }

            setEmitFlags(classStatement, emitFlags);

            let statements: Statement[] = [classStatement];

            if (facts & ClassFacts.UseImmediatelyInvokedFunctionExpression) {
                // When we emit a TypeScript class down to ES5, we must wrap it in an IIFE so that the
                // 'es2015' transformer can properly nest static initializers and decorators. The result
                // looks something like:
                //
                //  var C = function () {
                //      class C {
                //      }
                //      C.static_prop = 1;
                //      return C;
                //  }();
                //
                const closingBraceLocation = createTokenRange(skipTrivia(currentSourceFile.text, node.members.end), SyntaxKind.CloseBraceToken);
                const localName = factory.getInternalName(node);

                // The following partially-emitted expression exists purely to align our sourcemap
                // emit with the original emitter.
                const outer = factory.createPartiallyEmittedExpression(localName);
                setTextRangeEnd(outer, closingBraceLocation.end);
                setEmitFlags(outer, EmitFlags.NoComments);

                const statement = factory.createReturnStatement(outer);
                setTextRangePos(statement, closingBraceLocation.pos);
                setEmitFlags(statement, EmitFlags.NoComments | EmitFlags.NoTokenSourceMaps);
                statements.push(statement);

                insertStatementsAfterStandardPrologue(statements, context.endLexicalEnvironment());

                const iife = factory.createImmediatelyInvokedArrowFunction(statements);
                setEmitFlags(iife, EmitFlags.TypeScriptClassWrapper);

                const varStatement = factory.createVariableStatement(
                    /*modifiers*/ undefined,
                    factory.createVariableDeclarationList([
                        factory.createVariableDeclaration(
                            factory.getLocalName(node, /*allowComments*/ false, /*allowSourceMaps*/ false),
                            /*exclamationToken*/ undefined,
                            /*type*/ undefined,
                            iife
                        )
                    ])
                );

                setOriginalNode(varStatement, node);
                setCommentRange(varStatement, node);
                setSourceMapRange(varStatement, moveRangePastDecorators(node));
                startOnNewLine(varStatement);
                statements = [varStatement];
            }

            // If the class is exported as part of a TypeScript namespace, emit the namespace export.
            // Otherwise, if the class was exported at the top level and was decorated, emit an export
            // declaration or export default for the class.
            if (facts & ClassFacts.IsExportOfNamespace) {
                addExportMemberAssignment(statements, node);
            }
            else if (facts & ClassFacts.UseImmediatelyInvokedFunctionExpression || facts & ClassFacts.HasConstructorDecorators) {
                if (facts & ClassFacts.IsDefaultExternalExport) {
                    statements.push(factory.createExportDefault(factory.getLocalName(node, /*allowComments*/ false, /*allowSourceMaps*/ true)));
                }
                else if (facts & ClassFacts.IsNamedExternalExport) {
                    statements.push(factory.createExternalModuleExport(factory.getLocalName(node, /*allowComments*/ false, /*allowSourceMaps*/ true)));
                }
            }

            if (statements.length > 1) {
                // Add a DeclarationMarker as a marker for the end of the declaration
                statements.push(factory.createEndOfDeclarationMarker(node));
                setEmitFlags(classStatement, getEmitFlags(classStatement) | EmitFlags.HasEndOfDeclarationMarker);
            }

            return singleOrMany(statements);
        }

        function visitClassExpression(node: ClassExpression): Expression {
            const allDecorators = getAllDecoratorsOfClass(node);
            const decorators = transformAllDecoratorsOfDeclaration(node, node, allDecorators);
            return factory.updateClassExpression(
                node,
                decorators,
                node.name,
                /*typeParameters*/ undefined,
                visitNodes(node.heritageClauses, visitor, isHeritageClause),
                isClassLikeDeclarationWithTypeScriptSyntax(node) ?
                    transformClassMembers(node) :
                    visitNodes(node.members, getClassElementVisitor(node), isClassElement)
            );
        }

        /**
         * Transforms the members of a class.
         *
         * @param node The current class.
         */
        function transformClassMembers(node: ClassDeclaration | ClassExpression) {
            const members: ClassElement[] = [];
            const constructor = getFirstConstructorWithBody(node);
            const parametersWithPropertyAssignments = constructor &&
                filter(constructor.parameters, p => isParameterPropertyDeclaration(p, constructor));

            if (parametersWithPropertyAssignments) {
                for (const parameter of parametersWithPropertyAssignments) {
                    if (isIdentifier(parameter.name)) {
                        members.push(setOriginalNode(factory.createPropertyDeclaration(
                            /*modifiers*/ undefined,
                            parameter.name,
                            /*questionOrExclamationToken*/ undefined,
                            /*type*/ undefined,
                            /*initializer*/ undefined), parameter));
                    }
                }
            }

            addRange(members, visitNodes(node.members, getClassElementVisitor(node), isClassElement));
            return setTextRange(factory.createNodeArray(members), /*location*/ node.members);
        }

        /**
         * Transforms all of the decorators for a declaration into an array of expressions.
         *
         * @param node The declaration node.
         * @param allDecorators An object containing all of the decorators for the declaration.
         */
        function transformAllDecoratorsOfDeclaration(node: Declaration, container: ClassLikeDeclaration, allDecorators: AllDecorators | undefined) {
            if (!allDecorators) {
                return undefined;
            }

            const decorators = visitArray(allDecorators.decorators, visitor, isDecorator);
            const parameterDecorators = flatMap(allDecorators.parameters, transformDecoratorsOfParameter);
            const metadataDecorators = some(decorators) || some(parameterDecorators) ? getTypeMetadata(node, container) : undefined;
            const result = factory.createNodeArray(concatenate(concatenate(decorators, parameterDecorators), metadataDecorators));
            const pos = firstOrUndefined(allDecorators.decorators)?.pos ?? -1;
            const end = lastOrUndefined(allDecorators.decorators)?.end ?? -1;
            setTextRangePosEnd(result, pos, end);
            return result;
        }

        /**
         * Transforms the decorators of a parameter into decorators of the class/method.
         *
         * @param parameterDecorators The decorators for the parameter at the provided offset.
         * @param parameterOffset The offset of the parameter.
         */
        function transformDecoratorsOfParameter(parameterDecorators: Decorator[], parameterOffset: number) {
            if (parameterDecorators) {
                const decorators: Decorator[] = [];
                for (const parameterDecorator of parameterDecorators) {
                    const expression = visitNode(parameterDecorator.expression, visitor, isExpression);
                    const helper = emitHelpers().createParamHelper(expression, parameterOffset);
                    setTextRange(helper, parameterDecorator.expression);
                    setEmitFlags(helper, EmitFlags.NoComments);

                    const decorator = factory.createDecorator(helper);
                    setSourceMapRange(decorator, parameterDecorator.expression);
                    setCommentRange(decorator, parameterDecorator.expression);
                    setEmitFlags(decorator, EmitFlags.NoComments);
                    decorators.push(decorator);
                }
                return decorators;
            }
        }

        /**
         * Gets optional type metadata for a declaration.
         *
         * @param node The declaration node.
         */
        function getTypeMetadata(node: Declaration, container: ClassLikeDeclaration) {
            return USE_NEW_TYPE_METADATA_FORMAT ?
                getNewTypeMetadata(node, container) :
                getOldTypeMetadata(node, container);
        }

        function getOldTypeMetadata(node: Declaration, container: ClassLikeDeclaration) {
            if (typeSerializer) {
                let decorators: Decorator[] | undefined;
                if (shouldAddTypeMetadata(node)) {
                    const typeMetadata = emitHelpers().createMetadataHelper("design:type", typeSerializer.serializeTypeOfNode({ currentLexicalScope, currentNameScope: container }, node));
                    decorators = append(decorators, factory.createDecorator(typeMetadata));
                }
                if (shouldAddParamTypesMetadata(node)) {
                    const paramTypesMetadata = emitHelpers().createMetadataHelper("design:paramtypes", typeSerializer.serializeParameterTypesOfNode({ currentLexicalScope, currentNameScope: container }, node, container));
                    decorators = append(decorators, factory.createDecorator(paramTypesMetadata));
                }
                if (shouldAddReturnTypeMetadata(node)) {
                    const returnTypeMetadata = emitHelpers().createMetadataHelper("design:returntype", typeSerializer.serializeReturnTypeOfNode({ currentLexicalScope, currentNameScope: container }, node));
                    decorators = append(decorators, factory.createDecorator(returnTypeMetadata));
                }
                return decorators;
            }
        }

        function getNewTypeMetadata(node: Declaration, container: ClassLikeDeclaration) {
            if (typeSerializer) {
                let properties: ObjectLiteralElementLike[] | undefined;
                if (shouldAddTypeMetadata(node)) {
                    const typeProperty = factory.createPropertyAssignment("type", factory.createArrowFunction(/*modifiers*/ undefined, /*typeParameters*/ undefined, [], /*type*/ undefined, factory.createToken(SyntaxKind.EqualsGreaterThanToken), typeSerializer.serializeTypeOfNode({ currentLexicalScope, currentNameScope: container }, node)));
                    properties = append(properties, typeProperty);
                }
                if (shouldAddParamTypesMetadata(node)) {
                    const paramTypeProperty = factory.createPropertyAssignment("paramTypes", factory.createArrowFunction(/*modifiers*/ undefined, /*typeParameters*/ undefined, [], /*type*/ undefined, factory.createToken(SyntaxKind.EqualsGreaterThanToken), typeSerializer.serializeParameterTypesOfNode({ currentLexicalScope, currentNameScope: container }, node, container)));
                    properties = append(properties, paramTypeProperty);
                }
                if (shouldAddReturnTypeMetadata(node)) {
                    const returnTypeProperty = factory.createPropertyAssignment("returnType", factory.createArrowFunction(/*modifiers*/ undefined, /*typeParameters*/ undefined, [], /*type*/ undefined, factory.createToken(SyntaxKind.EqualsGreaterThanToken), typeSerializer.serializeReturnTypeOfNode({ currentLexicalScope, currentNameScope: container }, node)));
                    properties = append(properties, returnTypeProperty);
                }
                if (properties) {
                    const typeInfoMetadata = emitHelpers().createMetadataHelper("design:typeinfo", factory.createObjectLiteralExpression(properties, /*multiLine*/ true));
                    return [factory.createDecorator(typeInfoMetadata)];
                }
            }
        }

        /**
         * Determines whether to emit the "design:type" metadata based on the node's kind.
         * The caller should have already tested whether the node has decorators and whether the
         * emitDecoratorMetadata compiler option is set.
         *
         * @param node The node to test.
         */
        function shouldAddTypeMetadata(node: Declaration): node is MethodDeclaration | AccessorDeclaration | PropertyDeclaration {
            const kind = node.kind;
            return kind === SyntaxKind.MethodDeclaration
                || kind === SyntaxKind.GetAccessor
                || kind === SyntaxKind.SetAccessor
                || kind === SyntaxKind.PropertyDeclaration;
        }

        /**
         * Determines whether to emit the "design:returntype" metadata based on the node's kind.
         * The caller should have already tested whether the node has decorators and whether the
         * emitDecoratorMetadata compiler option is set.
         *
         * @param node The node to test.
         */
        function shouldAddReturnTypeMetadata(node: Declaration): node is MethodDeclaration {
            return node.kind === SyntaxKind.MethodDeclaration;
        }

        /**
         * Determines whether to emit the "design:paramtypes" metadata based on the node's kind.
         * The caller should have already tested whether the node has decorators and whether the
         * emitDecoratorMetadata compiler option is set.
         *
         * @param node The node to test.
         */
        function shouldAddParamTypesMetadata(node: Declaration): node is ClassLikeDeclaration & { _hasConstructorBrand: never } | MethodDeclaration | AccessorDeclaration {
            switch (node.kind) {
                case SyntaxKind.ClassDeclaration:
                case SyntaxKind.ClassExpression:
                    return getFirstConstructorWithBody(node as ClassLikeDeclaration) !== undefined;
                case SyntaxKind.MethodDeclaration:
                case SyntaxKind.GetAccessor:
                case SyntaxKind.SetAccessor:
                    return true;
            }
            return false;
        }

        /**
         * Gets an expression that represents a property name (for decorated properties or enums).
         * For a computed property, a name is generated for the node.
         *
         * @param member The member whose name should be converted into an expression.
         */
        function getExpressionForPropertyName(member: ClassElement | EnumMember, generateNameForComputedPropertyName: boolean): Expression {
            const name = member.name!;
            if (isPrivateIdentifier(name)) {
                return factory.createIdentifier("");
            }
            else if (isComputedPropertyName(name)) {
                return generateNameForComputedPropertyName && !isSimpleInlineableExpression(name.expression)
                    ? factory.getGeneratedNameForNode(name)
                    : name.expression;
            }
            else if (isIdentifier(name)) {
                return factory.createStringLiteral(idText(name));
            }
            else {
                return factory.cloneNode(name);
            }
        }

        /**
         * Visits the property name of a class element, for use when emitting property
         * initializers. For a computed property on a node with decorators, a temporary
         * value is stored for later use.
         *
         * @param member The member whose name should be visited.
         */
        function visitPropertyNameOfClassElement(member: ClassElement): PropertyName {
            const name = member.name!;
            // Computed property names need to be transformed into a hoisted variable when they are used more than once.
            // The names are used more than once when:
            //   - the property is non-static and its initializer is moved to the constructor (when there are parameter property assignments).
            //   - the property has a decorator.
            if (isComputedPropertyName(name) && ((!hasStaticModifier(member) && currentClassHasParameterProperties) || hasDecorators(member))) {
                const expression = visitNode(name.expression, visitor, isExpression);
                const innerExpression = skipPartiallyEmittedExpressions(expression);
                if (!isSimpleInlineableExpression(innerExpression)) {
                    const generatedName = factory.getGeneratedNameForNode(name);
                    hoistVariableDeclaration(generatedName);
                    return factory.updateComputedPropertyName(name, factory.createAssignment(generatedName, expression));
                }
            }
            return visitNode(name, visitor, isPropertyName);
        }

        /**
         * Transforms a HeritageClause with TypeScript syntax.
         *
         * This function will only be called when one of the following conditions are met:
         * - The node is a non-`extends` heritage clause that should be elided.
         * - The node is an `extends` heritage clause that should be visited, but only allow a single type.
         *
         * @param node The HeritageClause to transform.
         */
        function visitHeritageClause(node: HeritageClause): HeritageClause | undefined {
            if (node.token === SyntaxKind.ImplementsKeyword) {
                // implements clauses are elided
                return undefined;
            }
            return visitEachChild(node, visitor, context);
        }

        /**
         * Transforms an ExpressionWithTypeArguments with TypeScript syntax.
         *
         * This function will only be called when one of the following conditions are met:
         * - The node contains type arguments that should be elided.
         *
         * @param node The ExpressionWithTypeArguments to transform.
         */
        function visitExpressionWithTypeArguments(node: ExpressionWithTypeArguments): ExpressionWithTypeArguments {
            return factory.updateExpressionWithTypeArguments(
                node,
                visitNode(node.expression, visitor, isLeftHandSideExpression),
                /*typeArguments*/ undefined
            );
        }

        /**
         * Determines whether to emit a function-like declaration. We should not emit the
         * declaration if it does not have a body.
         *
         * @param node The declaration node.
         */
        function shouldEmitFunctionLikeDeclaration<T extends FunctionLikeDeclaration>(node: T): node is T & { body: NonNullable<T["body"]> } {
            return !nodeIsMissing(node.body);
        }

        function visitPropertyDeclaration(node: PropertyDeclaration, parent: ClassLikeDeclaration) {
            const isAmbient = node.flags & NodeFlags.Ambient || hasSyntacticModifier(node, ModifierFlags.Abstract);
            if (isAmbient && !hasDecorators(node)) {
                return undefined;
            }

            const allDecorators = getAllDecoratorsOfClassElement(node, parent);
            const decorators = transformAllDecoratorsOfDeclaration(node, parent, allDecorators);

            // Preserve a `declare x` property with decorators to be handled by the decorators transform
            if (isAmbient) {
                return factory.updatePropertyDeclaration(
                    node,
                    concatenate<ModifierLike>(decorators, factory.createModifiersFromModifierFlags(ModifierFlags.Ambient)),
                    visitNode(node.name, visitor, isPropertyName),
                    /*questionOrExclamationToken*/ undefined,
                    /*type*/ undefined,
                    /*initializer*/ undefined
                );
            }

            return factory.updatePropertyDeclaration(
                node,
                concatenate(decorators, visitNodes(node.modifiers, modifierVisitor, isModifierLike)),
                visitPropertyNameOfClassElement(node),
                /*questionOrExclamationToken*/ undefined,
                /*type*/ undefined,
                visitNode(node.initializer, visitor)
            );
        }

        function visitConstructor(node: ConstructorDeclaration) {
            if (!shouldEmitFunctionLikeDeclaration(node)) {
                return undefined;
            }

            return factory.updateConstructorDeclaration(
                node,
                /*modifiers*/ undefined,
                visitParameterList(node.parameters, visitor, context),
                transformConstructorBody(node.body, node)
            );
        }

        function transformConstructorBody(body: Block, constructor: ConstructorDeclaration) {
            const parametersWithPropertyAssignments = constructor &&
                filter(constructor.parameters, p => isParameterPropertyDeclaration(p, constructor));
            if (!some(parametersWithPropertyAssignments)) {
                return visitFunctionBody(body, visitor, context);
            }

            let statements: Statement[] = [];

            resumeLexicalEnvironment();

            const prologueStatementCount = factory.copyPrologue(body.statements, statements, /*ensureUseStrict*/ false, visitor);
            const superStatementIndex = findSuperStatementIndex(body.statements, prologueStatementCount);

            // If there was a super call, visit existing statements up to and including it
            if (superStatementIndex >= 0) {
                addRange(
                    statements,
                    visitNodes(body.statements, visitor, isStatement, prologueStatementCount, superStatementIndex + 1 - prologueStatementCount),
                );
            }

            // Transform parameters into property assignments. Transforms this:
            //
            //  constructor (public x, public y) {
            //  }
            //
            // Into this:
            //
            //  constructor (x, y) {
            //      this.x = x;
            //      this.y = y;
            //  }
            //
            const parameterPropertyAssignments = mapDefined(parametersWithPropertyAssignments, transformParameterWithPropertyAssignment);

            // If there is a super() call, the parameter properties go immediately after it
            if (superStatementIndex >= 0) {
                addRange(statements, parameterPropertyAssignments);
            }
            // Since there was no super() call, parameter properties are the first statements in the constructor after any prologue statements
            else {
                statements = [
                    ...statements.slice(0, prologueStatementCount),
                    ...parameterPropertyAssignments,
                    ...statements.slice(prologueStatementCount),
                ];
            }

            // Add remaining statements from the body, skipping the super() call if it was found and any (already added) prologue statements
            const start = superStatementIndex >= 0 ? superStatementIndex + 1 : prologueStatementCount;
            addRange(statements, visitNodes(body.statements, visitor, isStatement, start));

            // End the lexical environment.
            statements = factory.mergeLexicalEnvironment(statements, endLexicalEnvironment());
            const block = factory.createBlock(setTextRange(factory.createNodeArray(statements), body.statements), /*multiLine*/ true);
            setTextRange(block, /*location*/ body);
            setOriginalNode(block, body);
            return block;
        }

        /**
         * Transforms a parameter into a property assignment statement.
         *
         * @param node The parameter declaration.
         */
        function transformParameterWithPropertyAssignment(node: ParameterPropertyDeclaration) {
            const name = node.name;
            if (!isIdentifier(name)) {
                return undefined;
            }

            // TODO(rbuckton): Does this need to be parented?
            const propertyName = setParent(setTextRange(factory.cloneNode(name), name), name.parent);
            setEmitFlags(propertyName, EmitFlags.NoComments | EmitFlags.NoSourceMap);

            // TODO(rbuckton): Does this need to be parented?
            const localName = setParent(setTextRange(factory.cloneNode(name), name), name.parent);
            setEmitFlags(localName, EmitFlags.NoComments);

            return startOnNewLine(
                removeAllComments(
                    setTextRange(
                        setOriginalNode(
                            factory.createExpressionStatement(
                                factory.createAssignment(
                                    setTextRange(
                                        factory.createPropertyAccessExpression(
                                            factory.createThis(),
                                            propertyName
                                        ),
                                        node.name
                                    ),
                                    localName
                                )
                            ),
                            node
                        ),
                        moveRangePos(node, -1)
                    )
                )
            );
        }

        function visitMethodDeclaration(node: MethodDeclaration, parent: ClassLikeDeclaration | ObjectLiteralExpression) {
            if (!(node.transformFlags & TransformFlags.ContainsTypeScript)) {
                return node;
            }

            if (!shouldEmitFunctionLikeDeclaration(node)) {
                return undefined;
            }

            const allDecorators = isClassLike(parent) ? getAllDecoratorsOfClassElement(node, parent) : undefined;
            const decorators = isClassLike(parent) ? transformAllDecoratorsOfDeclaration(node, parent, allDecorators) : undefined;
            return factory.updateMethodDeclaration(
                node,
                concatenate(decorators, visitNodes(node.modifiers, modifierVisitor, isModifierLike)),
                node.asteriskToken,
                visitPropertyNameOfClassElement(node),
                /*questionToken*/ undefined,
                /*typeParameters*/ undefined,
                visitParameterList(node.parameters, visitor, context),
                /*type*/ undefined,
                visitFunctionBody(node.body, visitor, context)
            );
        }

        /**
         * Determines whether to emit an accessor declaration. We should not emit the
         * declaration if it does not have a body and is abstract.
         *
         * @param node The declaration node.
         */
        function shouldEmitAccessorDeclaration(node: AccessorDeclaration) {
            return !(nodeIsMissing(node.body) && hasSyntacticModifier(node, ModifierFlags.Abstract));
        }

        function visitGetAccessor(node: GetAccessorDeclaration, parent: ClassLikeDeclaration | ObjectLiteralExpression) {
            if (!(node.transformFlags & TransformFlags.ContainsTypeScript)) {
                return node;
            }

            if (!shouldEmitAccessorDeclaration(node)) {
                return undefined;
            }

            const decorators = isClassLike(parent) ?
                transformAllDecoratorsOfDeclaration(node, parent, getAllDecoratorsOfClassElement(node, parent)) :
                undefined;

            return factory.updateGetAccessorDeclaration(
                node,
                concatenate(decorators, visitNodes(node.modifiers, modifierVisitor, isModifierLike)),
                visitPropertyNameOfClassElement(node),
                visitParameterList(node.parameters, visitor, context),
                /*type*/ undefined,
                visitFunctionBody(node.body, visitor, context) || factory.createBlock([])
            );
        }

        function visitSetAccessor(node: SetAccessorDeclaration, parent: ClassLikeDeclaration | ObjectLiteralExpression) {
            if (!(node.transformFlags & TransformFlags.ContainsTypeScript)) {
                return node;
            }

            if (!shouldEmitAccessorDeclaration(node)) {
                return undefined;
            }

            const decorators = isClassLike(parent) ?
                transformAllDecoratorsOfDeclaration(node, parent, getAllDecoratorsOfClassElement(node, parent)) :
                undefined;

            return factory.updateSetAccessorDeclaration(
                node,
                concatenate(decorators, visitNodes(node.modifiers, modifierVisitor, isModifierLike)),
                visitPropertyNameOfClassElement(node),
                visitParameterList(node.parameters, visitor, context),
                visitFunctionBody(node.body, visitor, context) || factory.createBlock([])
            );
        }

        function visitFunctionDeclaration(node: FunctionDeclaration): VisitResult<Statement> {
            if (!shouldEmitFunctionLikeDeclaration(node)) {
                return factory.createNotEmittedStatement(node);
            }
            const updated = factory.updateFunctionDeclaration(
                node,
                visitNodes(node.modifiers, modifierVisitor, isModifier),
                node.asteriskToken,
                node.name,
                /*typeParameters*/ undefined,
                visitParameterList(node.parameters, visitor, context),
                /*type*/ undefined,
                visitFunctionBody(node.body, visitor, context) || factory.createBlock([])
            );
            if (isExportOfNamespace(node)) {
                const statements: Statement[] = [updated];
                addExportMemberAssignment(statements, node);
                return statements;
            }
            return updated;
        }

        function visitFunctionExpression(node: FunctionExpression): Expression {
            if (!shouldEmitFunctionLikeDeclaration(node)) {
                return factory.createOmittedExpression();
            }
            const updated = factory.updateFunctionExpression(
                node,
                visitNodes(node.modifiers, modifierVisitor, isModifier),
                node.asteriskToken,
                node.name,
                /*typeParameters*/ undefined,
                visitParameterList(node.parameters, visitor, context),
                /*type*/ undefined,
                visitFunctionBody(node.body, visitor, context) || factory.createBlock([])
            );
            return updated;
        }

        function visitArrowFunction(node: ArrowFunction) {
            const updated = factory.updateArrowFunction(
                node,
                visitNodes(node.modifiers, modifierVisitor, isModifier),
                /*typeParameters*/ undefined,
                visitParameterList(node.parameters, visitor, context),
                /*type*/ undefined,
                node.equalsGreaterThanToken,
                visitFunctionBody(node.body, visitor, context),
            );
            return updated;
        }

        function visitParameter(node: ParameterDeclaration) {
            if (parameterIsThisKeyword(node)) {
                return undefined;
            }

            const updated = factory.updateParameterDeclaration(
                node,
                elideNodes(factory, node.modifiers), // preserve positions, if available
                node.dotDotDotToken,
                visitNode(node.name, visitor, isBindingName),
                /*questionToken*/ undefined,
                /*type*/ undefined,
                visitNode(node.initializer, visitor, isExpression)
            );
            if (updated !== node) {
                // While we emit the source map for the node after skipping decorators and modifiers,
                // we need to emit the comments for the original range.
                setCommentRange(updated, node);
                setTextRange(updated, moveRangePastModifiers(node));
                setSourceMapRange(updated, moveRangePastModifiers(node));
                setEmitFlags(updated.name, EmitFlags.NoTrailingSourceMap);
            }
            return updated;
        }

        function visitVariableStatement(node: VariableStatement): Statement | undefined {
            if (isExportOfNamespace(node)) {
                const variables = getInitializedVariables(node.declarationList);
                if (variables.length === 0) {
                    // elide statement if there are no initialized variables.
                    return undefined;
                }

                return setTextRange(
                    factory.createExpressionStatement(
                        factory.inlineExpressions(
                            map(variables, transformInitializedVariable)
                        )
                    ),
                    node
                );
            }
            else {
                return visitEachChild(node, visitor, context);
            }
        }

        function transformInitializedVariable(node: InitializedVariableDeclaration): Expression {
            const name = node.name;
            if (isBindingPattern(name)) {
                return flattenDestructuringAssignment(
                    node,
                    visitor,
                    context,
                    FlattenLevel.All,
                    /*needsValue*/ false,
                    createNamespaceExportExpression
                );
            }
            else {
                return setTextRange(
                    factory.createAssignment(
                        getNamespaceMemberNameWithSourceMapsAndWithoutComments(name),
                        visitNode(node.initializer, visitor, isExpression)
                    ),
                    /*location*/ node
                );
            }
        }

        function visitVariableDeclaration(node: VariableDeclaration) {
            const updated = factory.updateVariableDeclaration(
                node,
                visitNode(node.name, visitor, isBindingName),
                /*exclamationToken*/ undefined,
                /*type*/ undefined,
                visitNode(node.initializer, visitor, isExpression));
            if (node.type) {
                setTypeNode(updated.name, node.type);
            }
            return updated;
        }

        function visitParenthesizedExpression(node: ParenthesizedExpression): Expression {
            const innerExpression = skipOuterExpressions(node.expression, ~OuterExpressionKinds.Assertions);
            if (isAssertionExpression(innerExpression)) {
                // Make sure we consider all nested cast expressions, e.g.:
                // (<any><number><any>-A).x;
                const expression = visitNode(node.expression, visitor, isExpression);

                // We have an expression of the form: (<Type>SubExpr). Emitting this as (SubExpr)
                // is really not desirable. We would like to emit the subexpression as-is. Omitting
                // the parentheses, however, could cause change in the semantics of the generated
                // code if the casted expression has a lower precedence than the rest of the
                // expression.
                //
                // To preserve comments, we return a "PartiallyEmittedExpression" here which will
                // preserve the position information of the original expression.
                //
                // Due to the auto-parenthesization rules used by the visitor and factory functions
                // we can safely elide the parentheses here, as a new synthetic
                // ParenthesizedExpression will be inserted if we remove parentheses too
                // aggressively.
                //
                // If there are leading comments on the expression itself, the emitter will handle ASI
                // for return, throw, and yield by re-introducing parenthesis during emit on an as-need
                // basis.
                return factory.createPartiallyEmittedExpression(expression, node);
            }

            return visitEachChild(node, visitor, context);
        }

        function visitAssertionExpression(node: AssertionExpression): Expression {
            const expression = visitNode(node.expression, visitor, isExpression);
            return factory.createPartiallyEmittedExpression(expression, node);
        }

        function visitNonNullExpression(node: NonNullExpression): Expression {
            const expression = visitNode(node.expression, visitor, isLeftHandSideExpression);
            return factory.createPartiallyEmittedExpression(expression, node);
        }

        function visitSatisfiesExpression(node: SatisfiesExpression): Expression {
            const expression = visitNode(node.expression, visitor, isExpression);
            return factory.createPartiallyEmittedExpression(expression, node);
        }

        function visitCallExpression(node: CallExpression) {
            return factory.updateCallExpression(
                node,
                visitNode(node.expression, visitor, isExpression),
                /*typeArguments*/ undefined,
                visitNodes(node.arguments, visitor, isExpression));
        }

        function visitNewExpression(node: NewExpression) {
            return factory.updateNewExpression(
                node,
                visitNode(node.expression, visitor, isExpression),
                /*typeArguments*/ undefined,
                visitNodes(node.arguments, visitor, isExpression));
        }

        function visitTaggedTemplateExpression(node: TaggedTemplateExpression) {
            return factory.updateTaggedTemplateExpression(
                node,
                visitNode(node.tag, visitor, isExpression),
                /*typeArguments*/ undefined,
                visitNode(node.template, visitor, isExpression));
        }

        function visitJsxSelfClosingElement(node: JsxSelfClosingElement) {
            return factory.updateJsxSelfClosingElement(
                node,
                visitNode(node.tagName, visitor, isJsxTagNameExpression),
                /*typeArguments*/ undefined,
                visitNode(node.attributes, visitor, isJsxAttributes));
        }

        function visitJsxJsxOpeningElement(node: JsxOpeningElement) {
            return factory.updateJsxOpeningElement(
                node,
                visitNode(node.tagName, visitor, isJsxTagNameExpression),
                /*typeArguments*/ undefined,
                visitNode(node.attributes, visitor, isJsxAttributes));
        }

        /**
         * Determines whether to emit an enum declaration.
         *
         * @param node The enum declaration node.
         */
        function shouldEmitEnumDeclaration(node: EnumDeclaration) {
            return !isEnumConst(node)
                || shouldPreserveConstEnums(compilerOptions);
        }

        /**
         * Visits an enum declaration.
         *
         * This function will be called any time a TypeScript enum is encountered.
         *
         * @param node The enum declaration node.
         */
        function visitEnumDeclaration(node: EnumDeclaration): VisitResult<Statement> {
            if (!shouldEmitEnumDeclaration(node)) {
                return factory.createNotEmittedStatement(node);
            }

            const statements: Statement[] = [];

            // We request to be advised when the printer is about to print this node. This allows
            // us to set up the correct state for later substitutions.
            let emitFlags = EmitFlags.AdviseOnEmitNode;

            // If needed, we should emit a variable declaration for the enum. If we emit
            // a leading variable declaration, we should not emit leading comments for the
            // enum body.
            const varAdded = addVarForEnumOrModuleDeclaration(statements, node);
            if (varAdded) {
                // We should still emit the comments if we are emitting a system module.
                if (moduleKind !== ModuleKind.System || currentLexicalScope !== currentSourceFile) {
                    emitFlags |= EmitFlags.NoLeadingComments;
                }
            }

            // `parameterName` is the declaration name used inside of the enum.
            const parameterName = getNamespaceParameterName(node);

            // `containerName` is the expression used inside of the enum for assignments.
            const containerName = getNamespaceContainerName(node);

            // `exportName` is the expression used within this node's container for any exported references.
            const exportName = hasSyntacticModifier(node, ModifierFlags.Export)
                ? factory.getExternalModuleOrNamespaceExportName(currentNamespaceContainerName, node, /*allowComments*/ false, /*allowSourceMaps*/ true)
                : factory.getLocalName(node, /*allowComments*/ false, /*allowSourceMaps*/ true);

            //  x || (x = {})
            //  exports.x || (exports.x = {})
            let moduleArg =
                factory.createLogicalOr(
                    exportName,
                    factory.createAssignment(
                        exportName,
                        factory.createObjectLiteralExpression()
                    )
                );

            if (hasNamespaceQualifiedExportName(node)) {
                // `localName` is the expression used within this node's containing scope for any local references.
                const localName = factory.getLocalName(node, /*allowComments*/ false, /*allowSourceMaps*/ true);

                //  x = (exports.x || (exports.x = {}))
                moduleArg = factory.createAssignment(localName, moduleArg);
            }

            //  (function (x) {
            //      x[x["y"] = 0] = "y";
            //      ...
            //  })(x || (x = {}));
            const enumStatement = factory.createExpressionStatement(
                factory.createCallExpression(
                    factory.createFunctionExpression(
                        /*modifiers*/ undefined,
                        /*asteriskToken*/ undefined,
                        /*name*/ undefined,
                        /*typeParameters*/ undefined,
                        [factory.createParameterDeclaration(/*modifiers*/ undefined, /*dotDotDotToken*/ undefined, parameterName)],
                        /*type*/ undefined,
                        transformEnumBody(node, containerName)
                    ),
                    /*typeArguments*/ undefined,
                    [moduleArg]
                )
            );

            setOriginalNode(enumStatement, node);
            if (varAdded) {
                // If a variable was added, synthetic comments are emitted on it, not on the moduleStatement.
                setSyntheticLeadingComments(enumStatement, undefined);
                setSyntheticTrailingComments(enumStatement, undefined);
            }
            setTextRange(enumStatement, node);
            addEmitFlags(enumStatement, emitFlags);
            statements.push(enumStatement);

            // Add a DeclarationMarker for the enum to preserve trailing comments and mark
            // the end of the declaration.
            statements.push(factory.createEndOfDeclarationMarker(node));
            return statements;
        }

        /**
         * Transforms the body of an enum declaration.
         *
         * @param node The enum declaration node.
         */
        function transformEnumBody(node: EnumDeclaration, localName: Identifier): Block {
            const savedCurrentNamespaceLocalName = currentNamespaceContainerName;
            currentNamespaceContainerName = localName;

            const statements: Statement[] = [];
            startLexicalEnvironment();
            const members = map(node.members, transformEnumMember);
            insertStatementsAfterStandardPrologue(statements, endLexicalEnvironment());
            addRange(statements, members);

            currentNamespaceContainerName = savedCurrentNamespaceLocalName;
            return factory.createBlock(
                setTextRange(factory.createNodeArray(statements), /*location*/ node.members),
                /*multiLine*/ true
            );
        }

        /**
         * Transforms an enum member into a statement.
         *
         * @param member The enum member node.
         */
        function transformEnumMember(member: EnumMember): Statement {
            // enums don't support computed properties
            // we pass false as 'generateNameForComputedPropertyName' for a backward compatibility purposes
            // old emitter always generate 'expression' part of the name as-is.
            const name = getExpressionForPropertyName(member, /*generateNameForComputedPropertyName*/ false);
            const valueExpression = transformEnumMemberDeclarationValue(member);
            const innerAssignment = factory.createAssignment(
                factory.createElementAccessExpression(
                    currentNamespaceContainerName,
                    name
                ),
                valueExpression
            );
            const outerAssignment = valueExpression.kind === SyntaxKind.StringLiteral ?
                innerAssignment :
                factory.createAssignment(
                    factory.createElementAccessExpression(
                        currentNamespaceContainerName,
                        innerAssignment
                    ),
                    name
                );
            return setTextRange(
                factory.createExpressionStatement(
                    setTextRange(
                        outerAssignment,
                        member
                    )
                ),
                member
            );
        }

        /**
         * Transforms the value of an enum member.
         *
         * @param member The enum member node.
         */
        function transformEnumMemberDeclarationValue(member: EnumMember): Expression {
            const value = resolver.getConstantValue(member);
            if (value !== undefined) {
                return typeof value === "string" ? factory.createStringLiteral(value) : factory.createNumericLiteral(value);
            }
            else {
                enableSubstitutionForNonQualifiedEnumMembers();
                if (member.initializer) {
                    return visitNode(member.initializer, visitor, isExpression);
                }
                else {
                    return factory.createVoidZero();
                }
            }
        }

        /**
         * Determines whether to elide a module declaration.
         *
         * @param node The module declaration node.
         */
        function shouldEmitModuleDeclaration(nodeIn: ModuleDeclaration) {
            const node = getParseTreeNode(nodeIn, isModuleDeclaration);
            if (!node) {
                // If we can't find a parse tree node, assume the node is instantiated.
                return true;
            }
            return isInstantiatedModule(node, shouldPreserveConstEnums(compilerOptions));
        }

        /**
         * Determines whether an exported declaration will have a qualified export name (e.g. `f.x`
         * or `exports.x`).
         */
        function hasNamespaceQualifiedExportName(node: Node) {
            return isExportOfNamespace(node)
                || (isExternalModuleExport(node)
                    && moduleKind !== ModuleKind.ES2015
                    && moduleKind !== ModuleKind.ES2020
                    && moduleKind !== ModuleKind.ES2022
                    && moduleKind !== ModuleKind.ESNext
                    && moduleKind !== ModuleKind.System);
        }

        /**
         * Records that a declaration was emitted in the current scope, if it was the first
         * declaration for the provided symbol.
         */
        function recordEmittedDeclarationInScope(node: FunctionDeclaration | ClassDeclaration | ModuleDeclaration | EnumDeclaration) {
            if (!currentScopeFirstDeclarationsOfName) {
                currentScopeFirstDeclarationsOfName = new Map();
            }

            const name = declaredNameInScope(node);
            if (!currentScopeFirstDeclarationsOfName.has(name)) {
                currentScopeFirstDeclarationsOfName.set(name, node);
            }
        }

        /**
         * Determines whether a declaration is the first declaration with
         * the same name emitted in the current scope.
         */
        function isFirstEmittedDeclarationInScope(node: ModuleDeclaration | EnumDeclaration) {
            if (currentScopeFirstDeclarationsOfName) {
                const name = declaredNameInScope(node);
                return currentScopeFirstDeclarationsOfName.get(name) === node;
            }
            return true;
        }

        function declaredNameInScope(node: FunctionDeclaration | ClassDeclaration | ModuleDeclaration | EnumDeclaration): __String {
            Debug.assertNode(node.name, isIdentifier);
            return node.name.escapedText;
        }

        /**
         * Adds a leading VariableStatement for a enum or module declaration.
         */
        function addVarForEnumOrModuleDeclaration(statements: Statement[], node: ModuleDeclaration | EnumDeclaration) {
            // Emit a variable statement for the module. We emit top-level enums as a `var`
            // declaration to avoid static errors in global scripts scripts due to redeclaration.
            // enums in any other scope are emitted as a `let` declaration.
            const statement = factory.createVariableStatement(
                visitNodes(node.modifiers, modifierVisitor, isModifier),
                factory.createVariableDeclarationList([
                    factory.createVariableDeclaration(
                        factory.getLocalName(node, /*allowComments*/ false, /*allowSourceMaps*/ true)
                    )
                ], currentLexicalScope.kind === SyntaxKind.SourceFile ? NodeFlags.None : NodeFlags.Let)
            );

            setOriginalNode(statement, node);

            recordEmittedDeclarationInScope(node);
            if (isFirstEmittedDeclarationInScope(node)) {
                // Adjust the source map emit to match the old emitter.
                if (node.kind === SyntaxKind.EnumDeclaration) {
                    setSourceMapRange(statement.declarationList, node);
                }
                else {
                    setSourceMapRange(statement, node);
                }

                // Trailing comments for module declaration should be emitted after the function closure
                // instead of the variable statement:
                //
                //     /** Module comment*/
                //     module m1 {
                //         function foo4Export() {
                //         }
                //     } // trailing comment module
                //
                // Should emit:
                //
                //     /** Module comment*/
                //     var m1;
                //     (function (m1) {
                //         function foo4Export() {
                //         }
                //     })(m1 || (m1 = {})); // trailing comment module
                //
                setCommentRange(statement, node);
                addEmitFlags(statement, EmitFlags.NoTrailingComments | EmitFlags.HasEndOfDeclarationMarker);
                statements.push(statement);
                return true;
            }
            else {
                // For an EnumDeclaration or ModuleDeclaration that merges with a preceeding
                // declaration we do not emit a leading variable declaration. To preserve the
                // begin/end semantics of the declararation and to properly handle exports
                // we wrap the leading variable declaration in a `MergeDeclarationMarker`.
                const mergeMarker = factory.createMergeDeclarationMarker(statement);
                setEmitFlags(mergeMarker, EmitFlags.NoComments | EmitFlags.HasEndOfDeclarationMarker);
                statements.push(mergeMarker);
                return false;
            }
        }

        /**
         * Visits a module declaration node.
         *
         * This function will be called any time a TypeScript namespace (ModuleDeclaration) is encountered.
         *
         * @param node The module declaration node.
         */
        function visitModuleDeclaration(node: ModuleDeclaration): VisitResult<Statement> {
            if (!shouldEmitModuleDeclaration(node)) {
                return factory.createNotEmittedStatement(node);
            }

            Debug.assertNode(node.name, isIdentifier, "A TypeScript namespace should have an Identifier name.");
            enableSubstitutionForNamespaceExports();

            const statements: Statement[] = [];

            // We request to be advised when the printer is about to print this node. This allows
            // us to set up the correct state for later substitutions.
            let emitFlags = EmitFlags.AdviseOnEmitNode;

            // If needed, we should emit a variable declaration for the module. If we emit
            // a leading variable declaration, we should not emit leading comments for the
            // module body.
            const varAdded = addVarForEnumOrModuleDeclaration(statements, node);
            if (varAdded) {
                // We should still emit the comments if we are emitting a system module.
                if (moduleKind !== ModuleKind.System || currentLexicalScope !== currentSourceFile) {
                    emitFlags |= EmitFlags.NoLeadingComments;
                }
            }

            // `parameterName` is the declaration name used inside of the namespace.
            const parameterName = getNamespaceParameterName(node);

            // `containerName` is the expression used inside of the namespace for exports.
            const containerName = getNamespaceContainerName(node);

            // `exportName` is the expression used within this node's container for any exported references.
            const exportName = hasSyntacticModifier(node, ModifierFlags.Export)
                ? factory.getExternalModuleOrNamespaceExportName(currentNamespaceContainerName, node, /*allowComments*/ false, /*allowSourceMaps*/ true)
                : factory.getLocalName(node, /*allowComments*/ false, /*allowSourceMaps*/ true);

            //  x || (x = {})
            //  exports.x || (exports.x = {})
            let moduleArg =
                factory.createLogicalOr(
                    exportName,
                    factory.createAssignment(
                        exportName,
                        factory.createObjectLiteralExpression()
                    )
                );

            if (hasNamespaceQualifiedExportName(node)) {
                // `localName` is the expression used within this node's containing scope for any local references.
                const localName = factory.getLocalName(node, /*allowComments*/ false, /*allowSourceMaps*/ true);

                //  x = (exports.x || (exports.x = {}))
                moduleArg = factory.createAssignment(localName, moduleArg);
            }

            //  (function (x_1) {
            //      x_1.y = ...;
            //  })(x || (x = {}));
            const moduleStatement = factory.createExpressionStatement(
                factory.createCallExpression(
                    factory.createFunctionExpression(
                        /*modifiers*/ undefined,
                        /*asteriskToken*/ undefined,
                        /*name*/ undefined,
                        /*typeParameters*/ undefined,
                        [factory.createParameterDeclaration(/*modifiers*/ undefined, /*dotDotDotToken*/ undefined, parameterName)],
                        /*type*/ undefined,
                        transformModuleBody(node, containerName)
                    ),
                    /*typeArguments*/ undefined,
                    [moduleArg]
                )
            );

            setOriginalNode(moduleStatement, node);
            if (varAdded) {
                // If a variable was added, synthetic comments are emitted on it, not on the moduleStatement.
                setSyntheticLeadingComments(moduleStatement, undefined);
                setSyntheticTrailingComments(moduleStatement, undefined);
            }
            setTextRange(moduleStatement, node);
            addEmitFlags(moduleStatement, emitFlags);
            statements.push(moduleStatement);

            // Add a DeclarationMarker for the namespace to preserve trailing comments and mark
            // the end of the declaration.
            statements.push(factory.createEndOfDeclarationMarker(node));
            return statements;
        }

        /**
         * Transforms the body of a module declaration.
         *
         * @param node The module declaration node.
         */
        function transformModuleBody(node: ModuleDeclaration, namespaceLocalName: Identifier): Block {
            const savedCurrentNamespaceContainerName = currentNamespaceContainerName;
            const savedCurrentNamespace = currentNamespace;
            const savedCurrentScopeFirstDeclarationsOfName = currentScopeFirstDeclarationsOfName;
            currentNamespaceContainerName = namespaceLocalName;
            currentNamespace = node;
            currentScopeFirstDeclarationsOfName = undefined;

            const statements: Statement[] = [];
            startLexicalEnvironment();

            let statementsLocation: TextRange | undefined;
            let blockLocation: TextRange | undefined;
            if (node.body) {
                if (node.body.kind === SyntaxKind.ModuleBlock) {
                    saveStateAndInvoke(node.body, body => addRange(statements, visitNodes((body as ModuleBlock).statements, namespaceElementVisitor, isStatement)));
                    statementsLocation = node.body.statements;
                    blockLocation = node.body;
                }
                else {
                    const result = visitModuleDeclaration(node.body as ModuleDeclaration);
                    if (result) {
                        if (isArray(result)) {
                            addRange(statements, result);
                        }
                        else {
                            statements.push(result);
                        }
                    }

                    const moduleBlock = getInnerMostModuleDeclarationFromDottedModule(node)!.body as ModuleBlock;
                    statementsLocation = moveRangePos(moduleBlock.statements, -1);
                }
            }

            insertStatementsAfterStandardPrologue(statements, endLexicalEnvironment());
            currentNamespaceContainerName = savedCurrentNamespaceContainerName;
            currentNamespace = savedCurrentNamespace;
            currentScopeFirstDeclarationsOfName = savedCurrentScopeFirstDeclarationsOfName;

            const block = factory.createBlock(
                setTextRange(
                    factory.createNodeArray(statements),
                    /*location*/ statementsLocation
                ),
                /*multiLine*/ true
            );
            setTextRange(block, blockLocation);

            // namespace hello.hi.world {
            //      function foo() {}
            //
            //      // TODO, blah
            // }
            //
            // should be emitted as
            //
            // var hello;
            // (function (hello) {
            //     var hi;
            //     (function (hi) {
            //         var world;
            //         (function (world) {
            //             function foo() { }
            //             // TODO, blah
            //         })(world = hi.world || (hi.world = {}));
            //     })(hi = hello.hi || (hello.hi = {}));
            // })(hello || (hello = {}));
            // We only want to emit comment on the namespace which contains block body itself, not the containing namespaces.
            if (!node.body || node.body.kind !== SyntaxKind.ModuleBlock) {
                setEmitFlags(block, getEmitFlags(block) | EmitFlags.NoComments);
            }
            return block;
        }

        function getInnerMostModuleDeclarationFromDottedModule(moduleDeclaration: ModuleDeclaration): ModuleDeclaration | undefined {
            if (moduleDeclaration.body!.kind === SyntaxKind.ModuleDeclaration) {
                const recursiveInnerModule = getInnerMostModuleDeclarationFromDottedModule(moduleDeclaration.body as ModuleDeclaration);
                return recursiveInnerModule || moduleDeclaration.body as ModuleDeclaration;
            }
        }

        /**
         * Visits an import declaration, eliding it if it is type-only or if it has an import clause that may be elided.
         *
         * @param node The import declaration node.
         */
        function visitImportDeclaration(node: ImportDeclaration): VisitResult<Statement> {
            if (!node.importClause) {
                // Do not elide a side-effect only import declaration.
                //  import "foo";
                return node;
            }
            if (node.importClause.isTypeOnly) {
                // Always elide type-only imports
                return undefined;
            }

            // Elide the declaration if the import clause was elided.
            const importClause = visitNode(node.importClause, visitImportClause, isImportClause);
            return importClause ||
                compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Preserve ||
                compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Error
                ? factory.updateImportDeclaration(
                    node,
                    /*modifiers*/ undefined,
                    importClause,
                    node.moduleSpecifier,
                    node.assertClause)
                : undefined;
        }

        /**
         * Visits an import clause, eliding it if its `name` and `namedBindings` may both be elided.
         *
         * @param node The import clause node.
         */
        function visitImportClause(node: ImportClause): VisitResult<ImportClause> {
            Debug.assert(!node.isTypeOnly);
            // Elide the import clause if we elide both its name and its named bindings.
            const name = shouldEmitAliasDeclaration(node) ? node.name : undefined;
            const namedBindings = visitNode(node.namedBindings, visitNamedImportBindings, isNamedImportBindings);
            return (name || namedBindings) ? factory.updateImportClause(node, /*isTypeOnly*/ false, name, namedBindings) : undefined;
        }

        /**
         * Visits named import bindings, eliding them if their targets, their references, and the compilation settings allow.
         *
         * @param node The named import bindings node.
         */
        function visitNamedImportBindings(node: NamedImportBindings): VisitResult<NamedImportBindings> {
            if (node.kind === SyntaxKind.NamespaceImport) {
                // Elide a namespace import if it is not referenced.
                return shouldEmitAliasDeclaration(node) ? node : undefined;
            }
            else {
                // Elide named imports if all of its import specifiers are elided and settings allow.
                const allowEmpty = compilerOptions.preserveValueImports && (
                    compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Preserve ||
                    compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Error);
                const elements = visitNodes(node.elements, visitImportSpecifier, isImportSpecifier);
                return allowEmpty || some(elements) ? factory.updateNamedImports(node, elements) : undefined;
            }
        }

        /**
         * Visits an import specifier, eliding it if its target, its references, and the compilation settings allow.
         *
         * @param node The import specifier node.
         */
        function visitImportSpecifier(node: ImportSpecifier): VisitResult<ImportSpecifier> {
            return !node.isTypeOnly && shouldEmitAliasDeclaration(node) ? node : undefined;
        }

        /**
         * Visits an export assignment, eliding it if it does not contain a clause that resolves
         * to a value.
         *
         * @param node The export assignment node.
         */
        function visitExportAssignment(node: ExportAssignment): VisitResult<Statement> {
            // Elide the export assignment if it does not reference a value.
            return resolver.isValueAliasDeclaration(node)
                ? visitEachChild(node, visitor, context)
                : undefined;
        }

        /**
         * Visits an export declaration, eliding it if it does not contain a clause that resolves to a value.
         *
         * @param node The export declaration node.
         */
        function visitExportDeclaration(node: ExportDeclaration): VisitResult<Statement> {
            if (node.isTypeOnly) {
                return undefined;
            }

            if (!node.exportClause || isNamespaceExport(node.exportClause)) {
                // never elide `export <whatever> from <whereever>` declarations -
                // they should be kept for sideffects/untyped exports, even when the
                // type checker doesn't know about any exports
                return node;
            }

            // Elide the export declaration if all of its named exports are elided.
            const allowEmpty = !!node.moduleSpecifier && (
                compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Preserve ||
                compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Error);
            const exportClause = visitNode(
                node.exportClause,
                (bindings: NamedExportBindings) => visitNamedExportBindings(bindings, allowEmpty),
                isNamedExportBindings);

            return exportClause
                ? factory.updateExportDeclaration(
                    node,
                    /*modifiers*/ undefined,
                    node.isTypeOnly,
                    exportClause,
                    node.moduleSpecifier,
                    node.assertClause)
                : undefined;
        }

        /**
         * Visits named exports, eliding it if it does not contain an export specifier that
         * resolves to a value.
         *
         * @param node The named exports node.
         */
        function visitNamedExports(node: NamedExports, allowEmpty: boolean): VisitResult<NamedExports> {
            // Elide the named exports if all of its export specifiers were elided.
            const elements = visitNodes(node.elements, visitExportSpecifier, isExportSpecifier);
            return allowEmpty || some(elements) ? factory.updateNamedExports(node, elements) : undefined;
        }

        function visitNamespaceExports(node: NamespaceExport): VisitResult<NamespaceExport> {
            return factory.updateNamespaceExport(node, visitNode(node.name, visitor, isIdentifier));
        }

        function visitNamedExportBindings(node: NamedExportBindings, allowEmpty: boolean): VisitResult<NamedExportBindings> {
            return isNamespaceExport(node) ? visitNamespaceExports(node) : visitNamedExports(node, allowEmpty);
        }

        /**
         * Visits an export specifier, eliding it if it does not resolve to a value.
         *
         * @param node The export specifier node.
         */
        function visitExportSpecifier(node: ExportSpecifier): VisitResult<ExportSpecifier> {
            // Elide an export specifier if it does not reference a value.
            return !node.isTypeOnly && resolver.isValueAliasDeclaration(node) ? node : undefined;
        }

        /**
         * Determines whether to emit an import equals declaration.
         *
         * @param node The import equals declaration node.
         */
        function shouldEmitImportEqualsDeclaration(node: ImportEqualsDeclaration) {
            // preserve old compiler's behavior: emit 'var' for import declaration (even if we do not consider them referenced) when
            // - current file is not external module
            // - import declaration is top level and target is value imported by entity name
            return shouldEmitAliasDeclaration(node)
                || (!isExternalModule(currentSourceFile)
                    && resolver.isTopLevelValueImportEqualsWithEntityName(node));
        }

        /**
         * Visits an import equals declaration.
         *
         * @param node The import equals declaration node.
         */
        function visitImportEqualsDeclaration(node: ImportEqualsDeclaration): VisitResult<Statement> {
            // Always elide type-only imports
            if (node.isTypeOnly) {
                return undefined;
            }

            if (isExternalModuleImportEqualsDeclaration(node)) {
                const isReferenced = shouldEmitAliasDeclaration(node);
                // If the alias is unreferenced but we want to keep the import, replace with 'import "mod"'.
                if (!isReferenced && compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Preserve) {
                    return setOriginalNode(
                        setTextRange(
                            factory.createImportDeclaration(
                                /*modifiers*/ undefined,
                                /*importClause*/ undefined,
                                node.moduleReference.expression,
                                /*assertClause*/ undefined
                            ),
                            node,
                        ),
                        node,
                    );
                }

                return isReferenced ? visitEachChild(node, visitor, context) : undefined;
            }

            if (!shouldEmitImportEqualsDeclaration(node)) {
                return undefined;
            }

            const moduleReference = createExpressionFromEntityName(factory, node.moduleReference as EntityName);
            setEmitFlags(moduleReference, EmitFlags.NoComments | EmitFlags.NoNestedComments);

            if (isNamedExternalModuleExport(node) || !isExportOfNamespace(node)) {
                //  export var ${name} = ${moduleReference};
                //  var ${name} = ${moduleReference};
                return setOriginalNode(
                    setTextRange(
                        factory.createVariableStatement(
                            visitNodes(node.modifiers, modifierVisitor, isModifier),
                            factory.createVariableDeclarationList([
                                setOriginalNode(
                                    factory.createVariableDeclaration(
                                        node.name,
                                        /*exclamationToken*/ undefined,
                                        /*type*/ undefined,
                                        moduleReference
                                    ),
                                    node
                                )
                            ])
                        ),
                        node
                    ),
                    node
                );
            }
            else {
                // exports.${name} = ${moduleReference};
                return setOriginalNode(
                    createNamespaceExport(
                        node.name,
                        moduleReference,
                        node
                    ),
                    node
                );
            }
        }

        /**
         * Gets a value indicating whether the node is exported from a namespace.
         *
         * @param node The node to test.
         */
        function isExportOfNamespace(node: Node) {
            return currentNamespace !== undefined && hasSyntacticModifier(node, ModifierFlags.Export);
        }

        /**
         * Gets a value indicating whether the node is exported from an external module.
         *
         * @param node The node to test.
         */
        function isExternalModuleExport(node: Node) {
            return currentNamespace === undefined && hasSyntacticModifier(node, ModifierFlags.Export);
        }

        /**
         * Gets a value indicating whether the node is a named export from an external module.
         *
         * @param node The node to test.
         */
        function isNamedExternalModuleExport(node: Node) {
            return isExternalModuleExport(node)
                && !hasSyntacticModifier(node, ModifierFlags.Default);
        }

        /**
         * Gets a value indicating whether the node is the default export of an external module.
         *
         * @param node The node to test.
         */
        function isDefaultExternalModuleExport(node: Node) {
            return isExternalModuleExport(node)
                && hasSyntacticModifier(node, ModifierFlags.Default);
        }

        function addExportMemberAssignment(statements: Statement[], node: ClassDeclaration | FunctionDeclaration) {
            const expression = factory.createAssignment(
                factory.getExternalModuleOrNamespaceExportName(currentNamespaceContainerName, node, /*allowComments*/ false, /*allowSourceMaps*/ true),
                factory.getLocalName(node)
            );
            setSourceMapRange(expression, createRange(node.name ? node.name.pos : node.pos, node.end));

            const statement = factory.createExpressionStatement(expression);
            setSourceMapRange(statement, createRange(-1, node.end));
            statements.push(statement);
        }

        function createNamespaceExport(exportName: Identifier, exportValue: Expression, location?: TextRange) {
            return setTextRange(
                factory.createExpressionStatement(
                    factory.createAssignment(
                        factory.getNamespaceMemberName(currentNamespaceContainerName, exportName, /*allowComments*/ false, /*allowSourceMaps*/ true),
                        exportValue
                    )
                ),
                location
            );
        }

        function createNamespaceExportExpression(exportName: Identifier, exportValue: Expression, location?: TextRange) {
            return setTextRange(factory.createAssignment(getNamespaceMemberNameWithSourceMapsAndWithoutComments(exportName), exportValue), location);
        }

        function getNamespaceMemberNameWithSourceMapsAndWithoutComments(name: Identifier) {
            return factory.getNamespaceMemberName(currentNamespaceContainerName, name, /*allowComments*/ false, /*allowSourceMaps*/ true);
        }

        /**
         * Gets the declaration name used inside of a namespace or enum.
         */
        function getNamespaceParameterName(node: ModuleDeclaration | EnumDeclaration) {
            const name = factory.getGeneratedNameForNode(node);
            setSourceMapRange(name, node.name);
            return name;
        }

        /**
         * Gets the expression used to refer to a namespace or enum within the body
         * of its declaration.
         */
        function getNamespaceContainerName(node: ModuleDeclaration | EnumDeclaration) {
            return factory.getGeneratedNameForNode(node);
        }

        function enableSubstitutionForNonQualifiedEnumMembers() {
            if ((enabledSubstitutions & TypeScriptSubstitutionFlags.NonQualifiedEnumMembers) === 0) {
                enabledSubstitutions |= TypeScriptSubstitutionFlags.NonQualifiedEnumMembers;
                context.enableSubstitution(SyntaxKind.Identifier);
            }
        }

        function enableSubstitutionForNamespaceExports() {
            if ((enabledSubstitutions & TypeScriptSubstitutionFlags.NamespaceExports) === 0) {
                enabledSubstitutions |= TypeScriptSubstitutionFlags.NamespaceExports;

                // We need to enable substitutions for identifiers and shorthand property assignments. This allows us to
                // substitute the names of exported members of a namespace.
                context.enableSubstitution(SyntaxKind.Identifier);
                context.enableSubstitution(SyntaxKind.ShorthandPropertyAssignment);

                // We need to be notified when entering and exiting namespaces.
                context.enableEmitNotification(SyntaxKind.ModuleDeclaration);
            }
        }

        function isTransformedModuleDeclaration(node: Node): boolean {
            return getOriginalNode(node).kind === SyntaxKind.ModuleDeclaration;
        }

        function isTransformedEnumDeclaration(node: Node): boolean {
            return getOriginalNode(node).kind === SyntaxKind.EnumDeclaration;
        }

        /**
         * Hook for node emit.
         *
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to emit.
         * @param emit A callback used to emit the node in the printer.
         */
        function onEmitNode(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void {
            const savedApplicableSubstitutions = applicableSubstitutions;
            const savedCurrentSourceFile = currentSourceFile;

            if (isSourceFile(node)) {
                currentSourceFile = node;
            }

            if (enabledSubstitutions & TypeScriptSubstitutionFlags.NamespaceExports && isTransformedModuleDeclaration(node)) {
                applicableSubstitutions |= TypeScriptSubstitutionFlags.NamespaceExports;
            }

            if (enabledSubstitutions & TypeScriptSubstitutionFlags.NonQualifiedEnumMembers && isTransformedEnumDeclaration(node)) {
                applicableSubstitutions |= TypeScriptSubstitutionFlags.NonQualifiedEnumMembers;
            }

            previousOnEmitNode(hint, node, emitCallback);

            applicableSubstitutions = savedApplicableSubstitutions;
            currentSourceFile = savedCurrentSourceFile;
        }

        /**
         * Hooks node substitutions.
         *
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to substitute.
         */
        function onSubstituteNode(hint: EmitHint, node: Node) {
            node = previousOnSubstituteNode(hint, node);
            if (hint === EmitHint.Expression) {
                return substituteExpression(node as Expression);
            }
            else if (isShorthandPropertyAssignment(node)) {
                return substituteShorthandPropertyAssignment(node);
            }

            return node;
        }

        function substituteShorthandPropertyAssignment(node: ShorthandPropertyAssignment): ObjectLiteralElementLike {
            if (enabledSubstitutions & TypeScriptSubstitutionFlags.NamespaceExports) {
                const name = node.name;
                const exportedName = trySubstituteNamespaceExportedName(name);
                if (exportedName) {
                    // A shorthand property with an assignment initializer is probably part of a
                    // destructuring assignment
                    if (node.objectAssignmentInitializer) {
                        const initializer = factory.createAssignment(exportedName, node.objectAssignmentInitializer);
                        return setTextRange(factory.createPropertyAssignment(name, initializer), node);
                    }
                    return setTextRange(factory.createPropertyAssignment(name, exportedName), node);
                }
            }
            return node;
        }

        function substituteExpression(node: Expression) {
            switch (node.kind) {
                case SyntaxKind.Identifier:
                    return substituteExpressionIdentifier(node as Identifier);
                case SyntaxKind.PropertyAccessExpression:
                    return substitutePropertyAccessExpression(node as PropertyAccessExpression);
                case SyntaxKind.ElementAccessExpression:
                    return substituteElementAccessExpression(node as ElementAccessExpression);
            }

            return node;
        }

        function substituteExpressionIdentifier(node: Identifier): Expression {
            return trySubstituteNamespaceExportedName(node)
                || node;
        }

        function trySubstituteNamespaceExportedName(node: Identifier): Expression | undefined {
            // If this is explicitly a local name, do not substitute.
            if (enabledSubstitutions & applicableSubstitutions && !isGeneratedIdentifier(node) && !isLocalName(node)) {
                // If we are nested within a namespace declaration, we may need to qualifiy
                // an identifier that is exported from a merged namespace.
                const container = resolver.getReferencedExportContainer(node, /*prefixLocals*/ false);
                if (container && container.kind !== SyntaxKind.SourceFile) {
                    const substitute =
                        (applicableSubstitutions & TypeScriptSubstitutionFlags.NamespaceExports && container.kind === SyntaxKind.ModuleDeclaration) ||
                        (applicableSubstitutions & TypeScriptSubstitutionFlags.NonQualifiedEnumMembers && container.kind === SyntaxKind.EnumDeclaration);
                    if (substitute) {
                        return setTextRange(
                            factory.createPropertyAccessExpression(factory.getGeneratedNameForNode(container), node),
                            /*location*/ node
                        );
                    }
                }
            }

            return undefined;
        }

        function substitutePropertyAccessExpression(node: PropertyAccessExpression) {
            return substituteConstantValue(node);
        }

        function substituteElementAccessExpression(node: ElementAccessExpression) {
            return substituteConstantValue(node);
        }

        function safeMultiLineComment(value: string): string {
            return value.replace(/\*\//g, "*_/");
        }

        function substituteConstantValue(node: PropertyAccessExpression | ElementAccessExpression): LeftHandSideExpression {
            const constantValue = tryGetConstEnumValue(node);
            if (constantValue !== undefined) {
                // track the constant value on the node for the printer in needsDotDotForPropertyAccess
                setConstantValue(node, constantValue);

                const substitute = typeof constantValue === "string" ? factory.createStringLiteral(constantValue) : factory.createNumericLiteral(constantValue);
                if (!compilerOptions.removeComments) {
                    const originalNode = getOriginalNode(node, isAccessExpression);

                    addSyntheticTrailingComment(substitute, SyntaxKind.MultiLineCommentTrivia, ` ${safeMultiLineComment(getTextOfNode(originalNode))} `);
                }
                return substitute;
            }

            return node;
        }

        function tryGetConstEnumValue(node: Node): string | number | undefined {
            if (compilerOptions.isolatedModules) {
                return undefined;
            }

            return isPropertyAccessExpression(node) || isElementAccessExpression(node) ? resolver.getConstantValue(node) : undefined;
        }

        function shouldEmitAliasDeclaration(node: Node): boolean {
            return isInJSFile(node) ||
                (compilerOptions.preserveValueImports
                    ? resolver.isValueAliasDeclaration(node)
                    : resolver.isReferencedAliasDeclaration(node));
        }
    }
}
