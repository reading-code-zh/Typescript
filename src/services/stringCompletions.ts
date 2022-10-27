/* @internal */
namespace ts.Completions.StringCompletions {
    interface NameAndKindSet {
        add(value: NameAndKind): void;
        has(name: string): boolean;
        values(): Iterator<NameAndKind>;
    }
    const kindPrecedence = {
        [ScriptElementKind.directory]: 0,
        [ScriptElementKind.scriptElement]: 1,
        [ScriptElementKind.externalModuleName]: 2,
    };
    function createNameAndKindSet(): NameAndKindSet {
        const map = new Map<string, NameAndKind>();
        function add(value: NameAndKind) {
            const existing = map.get(value.name);
            if (!existing || kindPrecedence[existing.kind] < kindPrecedence[value.kind]) {
                map.set(value.name, value);
            }
        }
        return {
            add,
            has: map.has.bind(map),
            values: map.values.bind(map),
        };
    }

    export function getStringLiteralCompletions(
        sourceFile: SourceFile,
        position: number,
        contextToken: Node | undefined,
        options: CompilerOptions,
        host: LanguageServiceHost,
        program: Program,
        log: Log,
        preferences: UserPreferences): CompletionInfo | undefined {
        if (isInReferenceComment(sourceFile, position)) {
            const entries = getTripleSlashReferenceCompletion(sourceFile, position, options, host);
            return entries && convertPathCompletions(entries);
        }
        if (isInString(sourceFile, position, contextToken)) {
            if (!contextToken || !isStringLiteralLike(contextToken)) return undefined;
            const entries = getStringLiteralCompletionEntries(sourceFile, contextToken, position, program.getTypeChecker(), options, host, preferences);
            return convertStringLiteralCompletions(entries, contextToken, sourceFile, host, program, log, options, preferences);
        }
    }

    function convertStringLiteralCompletions(
        completion: StringLiteralCompletion | undefined,
        contextToken: StringLiteralLike,
        sourceFile: SourceFile,
        host: LanguageServiceHost,
        program: Program,
        log: Log,
        options: CompilerOptions,
        preferences: UserPreferences,
    ): CompletionInfo | undefined {
        if (completion === undefined) {
            return undefined;
        }

        const optionalReplacementSpan = createTextSpanFromStringLiteralLikeContent(contextToken);
        switch (completion.kind) {
            case StringLiteralCompletionKind.Paths:
                return convertPathCompletions(completion.paths);
            case StringLiteralCompletionKind.Properties: {
                const entries = createSortedArray<CompletionEntry>();
                getCompletionEntriesFromSymbols(
                    completion.symbols,
                    entries,
                    contextToken,
                    contextToken,
                    sourceFile,
                    sourceFile,
                    host,
                    program,
                    ScriptTarget.ESNext,
                    log,
                    CompletionKind.String,
                    preferences,
                    options,
                    /*formatContext*/ undefined,
                ); // Target will not be used, so arbitrary
                return { isGlobalCompletion: false, isMemberCompletion: true, isNewIdentifierLocation: completion.hasIndexSignature, optionalReplacementSpan, entries };
            }
            case StringLiteralCompletionKind.Types: {
                const entries = completion.types.map(type => ({
                    name: type.value,
                    kindModifiers: ScriptElementKindModifier.none,
                    kind: ScriptElementKind.string,
                    sortText: SortText.LocationPriority,
                    replacementSpan: getReplacementSpanForContextToken(contextToken)
                }));
                return { isGlobalCompletion: false, isMemberCompletion: false, isNewIdentifierLocation: completion.isNewIdentifier, optionalReplacementSpan, entries };
            }
            default:
                return Debug.assertNever(completion);
        }
    }

    export function getStringLiteralCompletionDetails(name: string, sourceFile: SourceFile, position: number, contextToken: Node | undefined, checker: TypeChecker, options: CompilerOptions, host: LanguageServiceHost, cancellationToken: CancellationToken, preferences: UserPreferences) {
        if (!contextToken || !isStringLiteralLike(contextToken)) return undefined;
        const completions = getStringLiteralCompletionEntries(sourceFile, contextToken, position, checker, options, host, preferences);
        return completions && stringLiteralCompletionDetails(name, contextToken, completions, sourceFile, checker, cancellationToken);
    }

    function stringLiteralCompletionDetails(name: string, location: Node, completion: StringLiteralCompletion, sourceFile: SourceFile, checker: TypeChecker, cancellationToken: CancellationToken): CompletionEntryDetails | undefined {
        switch (completion.kind) {
            case StringLiteralCompletionKind.Paths: {
                const match = find(completion.paths, p => p.name === name);
                return match && createCompletionDetails(name, kindModifiersFromExtension(match.extension), match.kind, [textPart(name)]);
            }
            case StringLiteralCompletionKind.Properties: {
                const match = find(completion.symbols, s => s.name === name);
                return match && createCompletionDetailsForSymbol(match, checker, sourceFile, location, cancellationToken);
            }
            case StringLiteralCompletionKind.Types:
                return find(completion.types, t => t.value === name) ? createCompletionDetails(name, ScriptElementKindModifier.none, ScriptElementKind.typeElement, [textPart(name)]) : undefined;
            default:
                return Debug.assertNever(completion);
        }
    }

    function convertPathCompletions(pathCompletions: readonly PathCompletion[]): CompletionInfo {
        const isGlobalCompletion = false; // We don't want the editor to offer any other completions, such as snippets, inside a comment.
        const isNewIdentifierLocation = true; // The user may type in a path that doesn't yet exist, creating a "new identifier" with respect to the collection of identifiers the server is aware of.
        const entries = pathCompletions.map(({ name, kind, span, extension }): CompletionEntry =>
            ({ name, kind, kindModifiers: kindModifiersFromExtension(extension), sortText: SortText.LocationPriority, replacementSpan: span }));
        return { isGlobalCompletion, isMemberCompletion: false, isNewIdentifierLocation, entries };
    }
    function kindModifiersFromExtension(extension: Extension | undefined): ScriptElementKindModifier {
        switch (extension) {
            case Extension.Dts: return ScriptElementKindModifier.dtsModifier;
            case Extension.Js: return ScriptElementKindModifier.jsModifier;
            case Extension.Json: return ScriptElementKindModifier.jsonModifier;
            case Extension.Jsx: return ScriptElementKindModifier.jsxModifier;
            case Extension.Ts: return ScriptElementKindModifier.tsModifier;
            case Extension.Tsx: return ScriptElementKindModifier.tsxModifier;
            case Extension.Dmts: return ScriptElementKindModifier.dmtsModifier;
            case Extension.Mjs: return ScriptElementKindModifier.mjsModifier;
            case Extension.Mts: return ScriptElementKindModifier.mtsModifier;
            case Extension.Dcts: return ScriptElementKindModifier.dctsModifier;
            case Extension.Cjs: return ScriptElementKindModifier.cjsModifier;
            case Extension.Cts: return ScriptElementKindModifier.ctsModifier;
            case Extension.TsBuildInfo: return Debug.fail(`Extension ${Extension.TsBuildInfo} is unsupported.`);
            case undefined: return ScriptElementKindModifier.none;
            default:
                return Debug.assertNever(extension);
        }
    }

    const enum StringLiteralCompletionKind { Paths, Properties, Types }
    interface StringLiteralCompletionsFromProperties {
        readonly kind: StringLiteralCompletionKind.Properties;
        readonly symbols: readonly Symbol[];
        readonly hasIndexSignature: boolean;
    }
    interface StringLiteralCompletionsFromTypes {
        readonly kind: StringLiteralCompletionKind.Types;
        readonly types: readonly StringLiteralType[];
        readonly isNewIdentifier: boolean;
    }
    type StringLiteralCompletion = { readonly kind: StringLiteralCompletionKind.Paths, readonly paths: readonly PathCompletion[] } | StringLiteralCompletionsFromProperties | StringLiteralCompletionsFromTypes;
    function getStringLiteralCompletionEntries(sourceFile: SourceFile, node: StringLiteralLike, position: number, typeChecker: TypeChecker, compilerOptions: CompilerOptions, host: LanguageServiceHost, preferences: UserPreferences): StringLiteralCompletion | undefined {
        const parent = walkUpParentheses(node.parent);
        switch (parent.kind) {
            case SyntaxKind.LiteralType: {
                const grandParent = walkUpParentheses(parent.parent);
                switch (grandParent.kind) {
                    case SyntaxKind.ExpressionWithTypeArguments:
                    case SyntaxKind.TypeReference: {
                        const typeArgument = findAncestor(parent, n => n.parent === grandParent) as LiteralTypeNode;
                        if (typeArgument) {
                            return { kind: StringLiteralCompletionKind.Types, types: getStringLiteralTypes(typeChecker.getTypeArgumentConstraint(typeArgument)), isNewIdentifier: false };
                        }
                        return undefined;
                    }
                    case SyntaxKind.IndexedAccessType:
                        // Get all apparent property names
                        // i.e. interface Foo {
                        //          foo: string;
                        //          bar: string;
                        //      }
                        //      let x: Foo["/*completion position*/"]
                        const { indexType, objectType } = grandParent as IndexedAccessTypeNode;
                        if (!rangeContainsPosition(indexType, position)) {
                            return undefined;
                        }
                        return stringLiteralCompletionsFromProperties(typeChecker.getTypeFromTypeNode(objectType));
                    case SyntaxKind.ImportType:
                        return { kind: StringLiteralCompletionKind.Paths, paths: getStringLiteralCompletionsFromModuleNames(sourceFile, node, compilerOptions, host, typeChecker, preferences) };
                    case SyntaxKind.UnionType: {
                        if (!isTypeReferenceNode(grandParent.parent)) {
                            return undefined;
                        }
                        const alreadyUsedTypes = getAlreadyUsedTypesInStringLiteralUnion(grandParent as UnionTypeNode, parent as LiteralTypeNode);
                        const types = getStringLiteralTypes(typeChecker.getTypeArgumentConstraint(grandParent as UnionTypeNode)).filter(t => !contains(alreadyUsedTypes, t.value));
                        return { kind: StringLiteralCompletionKind.Types, types, isNewIdentifier: false };
                    }
                    default:
                        return undefined;
                }
            }
            case SyntaxKind.PropertyAssignment:
                if (isObjectLiteralExpression(parent.parent) && (parent as PropertyAssignment).name === node) {
                    // Get quoted name of properties of the object literal expression
                    // i.e. interface ConfigFiles {
                    //          'jspm:dev': string
                    //      }
                    //      let files: ConfigFiles = {
                    //          '/*completion position*/'
                    //      }
                    //
                    //      function foo(c: ConfigFiles) {}
                    //      foo({
                    //          '/*completion position*/'
                    //      });
                    return stringLiteralCompletionsForObjectLiteral(typeChecker, parent.parent);
                }
                return fromContextualType();

            case SyntaxKind.ElementAccessExpression: {
                const { expression, argumentExpression } = parent as ElementAccessExpression;
                if (node === skipParentheses(argumentExpression)) {
                    // Get all names of properties on the expression
                    // i.e. interface A {
                    //      'prop1': string
                    // }
                    // let a: A;
                    // a['/*completion position*/']
                    return stringLiteralCompletionsFromProperties(typeChecker.getTypeAtLocation(expression));
                }
                return undefined;
            }

            case SyntaxKind.CallExpression:
            case SyntaxKind.NewExpression:
            case SyntaxKind.JsxAttribute:
                if (!isRequireCallArgument(node) && !isImportCall(parent)) {
                    const argumentInfo = SignatureHelp.getArgumentInfoForCompletions(parent.kind === SyntaxKind.JsxAttribute ? parent.parent : node, position, sourceFile);
                    // Get string literal completions from specialized signatures of the target
                    // i.e. declare function f(a: 'A');
                    // f("/*completion position*/")
                    return argumentInfo && getStringLiteralCompletionsFromSignature(argumentInfo.invocation, node, argumentInfo, typeChecker) || fromContextualType();
                }
                // falls through (is `require("")` or `require(""` or `import("")`)

            case SyntaxKind.ImportDeclaration:
            case SyntaxKind.ExportDeclaration:
            case SyntaxKind.ExternalModuleReference:
                // Get all known external module names or complete a path to a module
                // i.e. import * as ns from "/*completion position*/";
                //      var y = import("/*completion position*/");
                //      import x = require("/*completion position*/");
                //      var y = require("/*completion position*/");
                //      export * from "/*completion position*/";
                return { kind: StringLiteralCompletionKind.Paths, paths: getStringLiteralCompletionsFromModuleNames(sourceFile, node, compilerOptions, host, typeChecker, preferences) };

            default:
                return fromContextualType();
        }

        function fromContextualType(): StringLiteralCompletion {
            // Get completion for string literal from string literal type
            // i.e. var x: "hi" | "hello" = "/*completion position*/"
            return { kind: StringLiteralCompletionKind.Types, types: getStringLiteralTypes(getContextualTypeFromParent(node, typeChecker)), isNewIdentifier: false };
        }
    }

    function walkUpParentheses(node: Node) {
        switch (node.kind) {
            case SyntaxKind.ParenthesizedType:
                return walkUpParenthesizedTypes(node);
            case SyntaxKind.ParenthesizedExpression:
                return walkUpParenthesizedExpressions(node);
            default:
                return node;
        }
    }

    function getAlreadyUsedTypesInStringLiteralUnion(union: UnionTypeNode, current: LiteralTypeNode): readonly string[] {
        return mapDefined(union.types, type =>
            type !== current && isLiteralTypeNode(type) && isStringLiteral(type.literal) ? type.literal.text : undefined);
    }

    function getStringLiteralCompletionsFromSignature(call: CallLikeExpression, arg: StringLiteralLike, argumentInfo: SignatureHelp.ArgumentInfoForCompletions, checker: TypeChecker): StringLiteralCompletionsFromTypes | undefined {
        let isNewIdentifier = false;
        const uniques = new Map<string, true>();
        const candidates: Signature[] = [];
        const editingArgument = isJsxOpeningLikeElement(call) ? Debug.checkDefined(findAncestor(arg.parent, isJsxAttribute)) : arg;
        checker.getResolvedSignatureForStringLiteralCompletions(call, editingArgument, candidates);
        const types = flatMap(candidates, candidate => {
            if (!signatureHasRestParameter(candidate) && argumentInfo.argumentCount > candidate.parameters.length) return;
            let type = candidate.getTypeParameterAtPosition(argumentInfo.argumentIndex);
            if (isJsxOpeningLikeElement(call)) {
                const propType = checker.getTypeOfPropertyOfType(type, (editingArgument as JsxAttribute).name.text);
                if (propType) {
                    type = propType;
                }
            }
            isNewIdentifier = isNewIdentifier || !!(type.flags & TypeFlags.String);
            return getStringLiteralTypes(type, uniques);
        });
        return length(types) ? { kind: StringLiteralCompletionKind.Types, types, isNewIdentifier } : undefined;
    }

    function stringLiteralCompletionsFromProperties(type: Type | undefined): StringLiteralCompletionsFromProperties | undefined {
        return type && {
            kind: StringLiteralCompletionKind.Properties,
            symbols: filter(type.getApparentProperties(), prop => !(prop.valueDeclaration && isPrivateIdentifierClassElementDeclaration(prop.valueDeclaration))),
            hasIndexSignature: hasIndexSignature(type)
        };
    }

    function stringLiteralCompletionsForObjectLiteral(checker: TypeChecker, objectLiteralExpression: ObjectLiteralExpression): StringLiteralCompletionsFromProperties | undefined {
        const contextualType = checker.getContextualType(objectLiteralExpression);
        if (!contextualType) return undefined;

        const completionsType = checker.getContextualType(objectLiteralExpression, ContextFlags.Completions);
        const symbols = getPropertiesForObjectExpression(
            contextualType,
            completionsType,
            objectLiteralExpression,
            checker
        );

        return {
            kind: StringLiteralCompletionKind.Properties,
            symbols,
            hasIndexSignature: hasIndexSignature(contextualType)
        };
    }

    function getStringLiteralTypes(type: Type | undefined, uniques = new Map<string, true>()): readonly StringLiteralType[] {
        if (!type) return emptyArray;
        type = skipConstraint(type);
        return type.isUnion() ? flatMap(type.types, t => getStringLiteralTypes(t, uniques)) :
            type.isStringLiteral() && !(type.flags & TypeFlags.EnumLiteral) && addToSeen(uniques, type.value) ? [type] : emptyArray;
    }

    interface NameAndKind {
        readonly name: string;
        readonly kind: ScriptElementKind.scriptElement | ScriptElementKind.directory | ScriptElementKind.externalModuleName;
        readonly extension: Extension | undefined;
    }
    interface PathCompletion extends NameAndKind {
        readonly span: TextSpan | undefined;
    }

    function nameAndKind(name: string, kind: NameAndKind["kind"], extension: Extension | undefined): NameAndKind {
        return { name, kind, extension };
    }
    function directoryResult(name: string): NameAndKind {
        return nameAndKind(name, ScriptElementKind.directory, /*extension*/ undefined);
    }

    function addReplacementSpans(text: string, textStart: number, names: readonly NameAndKind[]): readonly PathCompletion[] {
        const span = getDirectoryFragmentTextSpan(text, textStart);
        const wholeSpan = text.length === 0 ? undefined : createTextSpan(textStart, text.length);
        return names.map(({ name, kind, extension }): PathCompletion =>
            Math.max(name.indexOf(directorySeparator), name.indexOf(altDirectorySeparator)) !== -1 ? { name, kind, extension, span: wholeSpan } : { name, kind, extension, span });
    }

    function getStringLiteralCompletionsFromModuleNames(sourceFile: SourceFile, node: LiteralExpression, compilerOptions: CompilerOptions, host: LanguageServiceHost, typeChecker: TypeChecker, preferences: UserPreferences): readonly PathCompletion[] {
        return addReplacementSpans(node.text, node.getStart(sourceFile) + 1, getStringLiteralCompletionsFromModuleNamesWorker(sourceFile, node, compilerOptions, host, typeChecker, preferences));
    }

    function getStringLiteralCompletionsFromModuleNamesWorker(sourceFile: SourceFile, node: LiteralExpression, compilerOptions: CompilerOptions, host: LanguageServiceHost, typeChecker: TypeChecker, preferences: UserPreferences): readonly NameAndKind[] {
        const literalValue = normalizeSlashes(node.text);
        const mode = isStringLiteralLike(node) ? getModeForUsageLocation(sourceFile, node) : undefined;

        const scriptPath = sourceFile.path;
        const scriptDirectory = getDirectoryPath(scriptPath);

        return isPathRelativeToScript(literalValue) || !compilerOptions.baseUrl && (isRootedDiskPath(literalValue) || isUrl(literalValue))
            ? getCompletionEntriesForRelativeModules(literalValue, scriptDirectory, compilerOptions, host, scriptPath, getIncludeExtensionOption())
            : getCompletionEntriesForNonRelativeModules(literalValue, scriptDirectory, mode, compilerOptions, host, getIncludeExtensionOption(), typeChecker);

        function getIncludeExtensionOption() {
            const mode = isStringLiteralLike(node) ? getModeForUsageLocation(sourceFile, node) : undefined;
            return preferences.importModuleSpecifierEnding === "js" || mode === ModuleKind.ESNext ? IncludeExtensionsOption.ModuleSpecifierCompletion : IncludeExtensionsOption.Exclude;
        }
    }

    interface ExtensionOptions {
        readonly extensions: readonly Extension[];
        readonly includeExtensionsOption: IncludeExtensionsOption;
    }
    function getExtensionOptions(compilerOptions: CompilerOptions, includeExtensionsOption = IncludeExtensionsOption.Exclude): ExtensionOptions {
        return { extensions: flatten(getSupportedExtensionsForModuleResolution(compilerOptions)), includeExtensionsOption };
    }
    function getCompletionEntriesForRelativeModules(literalValue: string, scriptDirectory: string, compilerOptions: CompilerOptions, host: LanguageServiceHost, scriptPath: Path, includeExtensions: IncludeExtensionsOption) {
        const extensionOptions = getExtensionOptions(compilerOptions, includeExtensions);
        if (compilerOptions.rootDirs) {
            return getCompletionEntriesForDirectoryFragmentWithRootDirs(
                compilerOptions.rootDirs, literalValue, scriptDirectory, extensionOptions, compilerOptions, host, scriptPath);
        }
        else {
            return arrayFrom(getCompletionEntriesForDirectoryFragment(literalValue, scriptDirectory, extensionOptions, host, scriptPath).values());
        }
    }

    function isEmitResolutionKindUsingNodeModules(compilerOptions: CompilerOptions): boolean {
        return getEmitModuleResolutionKind(compilerOptions) === ModuleResolutionKind.NodeJs ||
            getEmitModuleResolutionKind(compilerOptions) === ModuleResolutionKind.Node16 ||
            getEmitModuleResolutionKind(compilerOptions) === ModuleResolutionKind.NodeNext;
    }

    function isEmitModuleResolutionRespectingExportMaps(compilerOptions: CompilerOptions) {
        return getEmitModuleResolutionKind(compilerOptions) === ModuleResolutionKind.Node16 ||
        getEmitModuleResolutionKind(compilerOptions) === ModuleResolutionKind.NodeNext;
    }

    function getSupportedExtensionsForModuleResolution(compilerOptions: CompilerOptions): readonly Extension[][] {
        const extensions = getSupportedExtensions(compilerOptions);
        return isEmitResolutionKindUsingNodeModules(compilerOptions) ?
            getSupportedExtensionsWithJsonIfResolveJsonModule(compilerOptions, extensions) :
            extensions;
    }

    /**
     * Takes a script path and returns paths for all potential folders that could be merged with its
     * containing folder via the "rootDirs" compiler option
     */
    function getBaseDirectoriesFromRootDirs(rootDirs: string[], basePath: string, scriptDirectory: string, ignoreCase: boolean): readonly string[] {
        // Make all paths absolute/normalized if they are not already
        rootDirs = rootDirs.map(rootDirectory => normalizePath(isRootedDiskPath(rootDirectory) ? rootDirectory : combinePaths(basePath, rootDirectory)));

        // Determine the path to the directory containing the script relative to the root directory it is contained within
        const relativeDirectory = firstDefined(rootDirs, rootDirectory =>
            containsPath(rootDirectory, scriptDirectory, basePath, ignoreCase) ? scriptDirectory.substr(rootDirectory.length) : undefined)!; // TODO: GH#18217

        // Now find a path for each potential directory that is to be merged with the one containing the script
        return deduplicate<string>(
            [...rootDirs.map(rootDirectory => combinePaths(rootDirectory, relativeDirectory)), scriptDirectory],
            equateStringsCaseSensitive,
            compareStringsCaseSensitive);
    }

    function getCompletionEntriesForDirectoryFragmentWithRootDirs(rootDirs: string[], fragment: string, scriptDirectory: string, extensionOptions: ExtensionOptions, compilerOptions: CompilerOptions, host: LanguageServiceHost, exclude: string): readonly NameAndKind[] {
        const basePath = compilerOptions.project || host.getCurrentDirectory();
        const ignoreCase = !(host.useCaseSensitiveFileNames && host.useCaseSensitiveFileNames());
        const baseDirectories = getBaseDirectoriesFromRootDirs(rootDirs, basePath, scriptDirectory, ignoreCase);
        return flatMap(baseDirectories, baseDirectory => arrayFrom(getCompletionEntriesForDirectoryFragment(fragment, baseDirectory, extensionOptions, host, exclude).values()));
    }

    const enum IncludeExtensionsOption {
        Exclude,
        Include,
        ModuleSpecifierCompletion,
    }
    /**
     * Given a path ending at a directory, gets the completions for the path, and filters for those entries containing the basename.
     */
    function getCompletionEntriesForDirectoryFragment(
        fragment: string,
        scriptPath: string,
        extensionOptions: ExtensionOptions,
        host: LanguageServiceHost,
        exclude?: string,
        result = createNameAndKindSet()
    ): NameAndKindSet {
        if (fragment === undefined) {
            fragment = "";
        }

        fragment = normalizeSlashes(fragment);

        /**
         * Remove the basename from the path. Note that we don't use the basename to filter completions;
         * the client is responsible for refining completions.
         */
        if (!hasTrailingDirectorySeparator(fragment)) {
            fragment = getDirectoryPath(fragment);
        }

        if (fragment === "") {
            fragment = "." + directorySeparator;
        }

        fragment = ensureTrailingDirectorySeparator(fragment);

        const absolutePath = resolvePath(scriptPath, fragment);
        const baseDirectory = hasTrailingDirectorySeparator(absolutePath) ? absolutePath : getDirectoryPath(absolutePath);

        // check for a version redirect
        const packageJsonPath = findPackageJson(baseDirectory, host);
        if (packageJsonPath) {
            const packageJson = readJson(packageJsonPath, host as { readFile: (filename: string) => string | undefined });
            const typesVersions = (packageJson as any).typesVersions;
            if (typeof typesVersions === "object") {
                const versionPaths = getPackageJsonTypesVersionsPaths(typesVersions)?.paths;
                if (versionPaths) {
                    const packageDirectory = getDirectoryPath(packageJsonPath);
                    const pathInPackage = absolutePath.slice(ensureTrailingDirectorySeparator(packageDirectory).length);
                    if (addCompletionEntriesFromPaths(result, pathInPackage, packageDirectory, extensionOptions, host, versionPaths)) {
                        // A true result means one of the `versionPaths` was matched, which will block relative resolution
                        // to files and folders from here. All reachable paths given the pattern match are already added.
                        return result;
                    }
                }
            }
        }

        const ignoreCase = !(host.useCaseSensitiveFileNames && host.useCaseSensitiveFileNames());
        if (!tryDirectoryExists(host, baseDirectory)) return result;

        // Enumerate the available files if possible
        const files = tryReadDirectory(host, baseDirectory, extensionOptions.extensions, /*exclude*/ undefined, /*include*/ ["./*"]);

        if (files) {
            for (let filePath of files) {
                filePath = normalizePath(filePath);
                if (exclude && comparePaths(filePath, exclude, scriptPath, ignoreCase) === Comparison.EqualTo) {
                    continue;
                }

                const { name, extension } = getFilenameWithExtensionOption(getBaseFileName(filePath), host.getCompilationSettings(), extensionOptions.includeExtensionsOption);
                result.add(nameAndKind(name, ScriptElementKind.scriptElement, extension));
            }
        }

        // If possible, get folder completion as well
        const directories = tryGetDirectories(host, baseDirectory);

        if (directories) {
            for (const directory of directories) {
                const directoryName = getBaseFileName(normalizePath(directory));
                if (directoryName !== "@types") {
                    result.add(directoryResult(directoryName));
                }
            }
        }

        return result;
    }

    function getFilenameWithExtensionOption(name: string, compilerOptions: CompilerOptions, includeExtensionsOption: IncludeExtensionsOption): { name: string, extension: Extension | undefined } {
        const outputExtension = moduleSpecifiers.tryGetJSExtensionForFile(name, compilerOptions);
        if (includeExtensionsOption === IncludeExtensionsOption.Exclude && !fileExtensionIsOneOf(name, [Extension.Json, Extension.Mts, Extension.Cts, Extension.Dmts, Extension.Dcts, Extension.Mjs, Extension.Cjs])) {
            return { name: removeFileExtension(name), extension: tryGetExtensionFromPath(name) };
        }
        else if ((fileExtensionIsOneOf(name, [Extension.Mts, Extension.Cts, Extension.Dmts, Extension.Dcts, Extension.Mjs, Extension.Cjs]) || includeExtensionsOption === IncludeExtensionsOption.ModuleSpecifierCompletion) && outputExtension) {
            return { name: changeExtension(name, outputExtension), extension: outputExtension };
        }
        else {
            return { name, extension: tryGetExtensionFromPath(name) };
        }
    }

    /** @returns whether `fragment` was a match for any `paths` (which should indicate whether any other path completions should be offered) */
    function addCompletionEntriesFromPaths(
        result: NameAndKindSet,
        fragment: string,
        baseDirectory: string,
        extensionOptions: ExtensionOptions,
        host: LanguageServiceHost,
        paths: MapLike<string[]>
    ) {
        const getPatternsForKey = (key: string) => paths[key];
        const comparePaths = (a: string, b: string): Comparison => {
            const patternA = tryParsePattern(a);
            const patternB = tryParsePattern(b);
            const lengthA = typeof patternA === "object" ? patternA.prefix.length : a.length;
            const lengthB = typeof patternB === "object" ? patternB.prefix.length : b.length;
            return compareValues(lengthB, lengthA);
        };
        return addCompletionEntriesFromPathsOrExports(result, fragment, baseDirectory, extensionOptions, host, getOwnKeys(paths), getPatternsForKey, comparePaths);
    }

    /** @returns whether `fragment` was a match for any `paths` (which should indicate whether any other path completions should be offered) */
    function addCompletionEntriesFromPathsOrExports(
        result: NameAndKindSet,
        fragment: string,
        baseDirectory: string,
        extensionOptions: ExtensionOptions,
        host: LanguageServiceHost,
        keys: readonly string[],
        getPatternsForKey: (key: string) => string[] | undefined,
        comparePaths: (a: string, b: string) => Comparison,
    ) {
        let pathResults: { results: NameAndKind[], matchedPattern: boolean }[] = [];
        let matchedPath: string | undefined;
        for (const key of keys) {
            if (key === ".") continue;
            const keyWithoutLeadingDotSlash = key.replace(/^\.\//, ""); // remove leading "./"
            const patterns = getPatternsForKey(key);
            if (patterns) {
                const pathPattern = tryParsePattern(keyWithoutLeadingDotSlash);
                if (!pathPattern) continue;
                const isMatch = typeof pathPattern === "object" && isPatternMatch(pathPattern, fragment);
                const isLongestMatch = isMatch && (matchedPath === undefined || comparePaths(key, matchedPath) === Comparison.LessThan);
                if (isLongestMatch) {
                    // If this is a higher priority match than anything we've seen so far, previous results from matches are invalid, e.g.
                    // for `import {} from "some-package/|"` with a typesVersions:
                    // {
                    //   "bar/*": ["bar/*"], // <-- 1. We add 'bar', but 'bar/*' doesn't match yet.
                    //   "*": ["dist/*"],    // <-- 2. We match here and add files from dist. 'bar' is still ok because it didn't come from a match.
                    //   "foo/*": ["foo/*"]  // <-- 3. We matched '*' earlier and added results from dist, but if 'foo/*' also matched,
                    // }                               results in dist would not be visible. 'bar' still stands because it didn't come from a match.
                    //                                 This is especially important if `dist/foo` is a folder, because if we fail to clear results
                    //                                 added by the '*' match, after typing `"some-package/foo/|"` we would get file results from both
                    //                                 ./dist/foo and ./foo, when only the latter will actually be resolvable.
                    //                                 See pathCompletionsTypesVersionsWildcard6.ts.
                    matchedPath = key;
                    pathResults = pathResults.filter(r => !r.matchedPattern);
                }
                if (typeof pathPattern === "string" || matchedPath === undefined || comparePaths(key, matchedPath) !== Comparison.GreaterThan) {
                    pathResults.push({
                        matchedPattern: isMatch,
                        results: getCompletionsForPathMapping(keyWithoutLeadingDotSlash, patterns, fragment, baseDirectory, extensionOptions, host)
                            .map(({ name, kind, extension }) => nameAndKind(name, kind, extension)),
                    });
                }
            }
        }

        pathResults.forEach(pathResult => pathResult.results.forEach(r => result.add(r)));
        return matchedPath !== undefined;
    }

    /**
     * Check all of the declared modules and those in node modules. Possible sources of modules:
     *      Modules that are found by the type checker
     *      Modules found relative to "baseUrl" compliler options (including patterns from "paths" compiler option)
     *      Modules from node_modules (i.e. those listed in package.json)
     *          This includes all files that are found in node_modules/moduleName/ with acceptable file extensions
     */
    function getCompletionEntriesForNonRelativeModules(
        fragment: string,
        scriptPath: string,
        mode: SourceFile["impliedNodeFormat"],
        compilerOptions: CompilerOptions,
        host: LanguageServiceHost,
        includeExtensionsOption: IncludeExtensionsOption,
        typeChecker: TypeChecker,
    ): readonly NameAndKind[] {
        const { baseUrl, paths } = compilerOptions;

        const result = createNameAndKindSet();
        const extensionOptions = getExtensionOptions(compilerOptions, includeExtensionsOption);
        if (baseUrl) {
            const projectDir = compilerOptions.project || host.getCurrentDirectory();
            const absolute = normalizePath(combinePaths(projectDir, baseUrl));
            getCompletionEntriesForDirectoryFragment(fragment, absolute, extensionOptions, host, /*exclude*/ undefined, result);
            if (paths) {
                addCompletionEntriesFromPaths(result, fragment, absolute, extensionOptions, host, paths);
            }
        }

        const fragmentDirectory = getFragmentDirectory(fragment);
        for (const ambientName of getAmbientModuleCompletions(fragment, fragmentDirectory, typeChecker)) {
            result.add(nameAndKind(ambientName, ScriptElementKind.externalModuleName, /*extension*/ undefined));
        }

        getCompletionEntriesFromTypings(host, compilerOptions, scriptPath, fragmentDirectory, extensionOptions, result);

        if (isEmitResolutionKindUsingNodeModules(compilerOptions)) {
            // If looking for a global package name, don't just include everything in `node_modules` because that includes dependencies' own dependencies.
            // (But do if we didn't find anything, e.g. 'package.json' missing.)
            let foundGlobal = false;
            if (fragmentDirectory === undefined) {
                for (const moduleName of enumerateNodeModulesVisibleToScript(host, scriptPath)) {
                    const moduleResult = nameAndKind(moduleName, ScriptElementKind.externalModuleName, /*extension*/ undefined);
                    if (!result.has(moduleResult.name)) {
                        foundGlobal = true;
                        result.add(moduleResult);
                    }
                }
            }
            if (!foundGlobal) {
                let ancestorLookup: (directory: string) => void | undefined = ancestor => {
                    const nodeModules = combinePaths(ancestor, "node_modules");
                    if (tryDirectoryExists(host, nodeModules)) {
                        getCompletionEntriesForDirectoryFragment(fragment, nodeModules, extensionOptions, host, /*exclude*/ undefined, result);
                    }
                };
                if (fragmentDirectory && isEmitModuleResolutionRespectingExportMaps(compilerOptions)) {
                    const nodeModulesDirectoryLookup = ancestorLookup;
                    ancestorLookup = ancestor => {
                        const components = getPathComponents(fragment);
                        components.shift(); // shift off empty root
                        let packagePath = components.shift();
                        if (!packagePath) {
                            return nodeModulesDirectoryLookup(ancestor);
                        }
                        if (startsWith(packagePath, "@")) {
                            const subName = components.shift();
                            if (!subName) {
                                return nodeModulesDirectoryLookup(ancestor);
                            }
                            packagePath = combinePaths(packagePath, subName);
                        }
                        const packageDirectory = combinePaths(ancestor, "node_modules", packagePath);
                        const packageFile = combinePaths(packageDirectory, "package.json");
                        if (tryFileExists(host, packageFile)) {
                            const packageJson = readJson(packageFile, host);
                            const exports = (packageJson as any).exports;
                            if (exports) {
                                if (typeof exports !== "object" || exports === null) { // eslint-disable-line no-null/no-null
                                    return; // null exports or entrypoint only, no sub-modules available
                                }
                                const keys = getOwnKeys(exports);
                                const fragmentSubpath = components.join("/") + (components.length && hasTrailingDirectorySeparator(fragment) ? "/" : "");
                                const conditions = mode === ModuleKind.ESNext ? ["node", "import", "types"] : ["node", "require", "types"];
                                addCompletionEntriesFromPathsOrExports(
                                    result,
                                    fragmentSubpath,
                                    packageDirectory,
                                    extensionOptions,
                                    host,
                                    keys,
                                    key => singleElementArray(getPatternFromFirstMatchingCondition(exports[key], conditions)),
                                    comparePatternKeys);
                                return;
                            }
                        }
                        return nodeModulesDirectoryLookup(ancestor);
                    };
                }
                forEachAncestorDirectory(scriptPath, ancestorLookup);
            }
        }

        return arrayFrom(result.values());
    }

    function getPatternFromFirstMatchingCondition(target: unknown, conditions: readonly string[]): string | undefined {
        if (typeof target === "string") {
            return target;
        }
        if (target && typeof target === "object" && !isArray(target)) {
            for (const condition in target) {
                if (condition === "default" || conditions.indexOf(condition) > -1 || isApplicableVersionedTypesKey(conditions, condition)) {
                    const pattern = (target as MapLike<unknown>)[condition];
                    return getPatternFromFirstMatchingCondition(pattern, conditions);
                }
            }
        }
    }

    function getFragmentDirectory(fragment: string): string | undefined {
        return containsSlash(fragment) ? hasTrailingDirectorySeparator(fragment) ? fragment : getDirectoryPath(fragment) : undefined;
    }

    function getCompletionsForPathMapping(
        path: string,
        patterns: readonly string[],
        fragment: string,
        packageDirectory: string,
        extensionOptions: ExtensionOptions,
        host: LanguageServiceHost,
    ): readonly NameAndKind[] {
        if (!endsWith(path, "*")) {
            // For a path mapping "foo": ["/x/y/z.ts"], add "foo" itself as a completion.
            return !stringContains(path, "*") ? justPathMappingName(path, ScriptElementKind.scriptElement) : emptyArray;
        }

        const pathPrefix = path.slice(0, path.length - 1);
        const remainingFragment = tryRemovePrefix(fragment, pathPrefix);
        if (remainingFragment === undefined) {
            const starIsFullPathComponent = path[path.length - 2] === "/";
            return starIsFullPathComponent ? justPathMappingName(pathPrefix, ScriptElementKind.directory) : flatMap(patterns, pattern =>
                getModulesForPathsPattern("", packageDirectory, pattern, extensionOptions, host)?.map(({ name, ...rest }) => ({ name: pathPrefix + name, ...rest })));
        }
        return flatMap(patterns, pattern => getModulesForPathsPattern(remainingFragment, packageDirectory, pattern, extensionOptions, host));

        function justPathMappingName(name: string, kind: ScriptElementKind.directory | ScriptElementKind.scriptElement): readonly NameAndKind[] {
            return startsWith(name, fragment) ? [{ name: removeTrailingDirectorySeparator(name), kind, extension: undefined }] : emptyArray;
        }
    }

    function getModulesForPathsPattern(
        fragment: string,
        packageDirectory: string,
        pattern: string,
        extensionOptions: ExtensionOptions,
        host: LanguageServiceHost,
    ): readonly NameAndKind[] | undefined {
        if (!host.readDirectory) {
            return undefined;
        }

        const parsed = tryParsePattern(pattern);
        if (parsed === undefined || isString(parsed)) {
            return undefined;
        }

        // The prefix has two effective parts: the directory path and the base component after the filepath that is not a
        // full directory component. For example: directory/path/of/prefix/base*
        const normalizedPrefix = resolvePath(parsed.prefix);
        const normalizedPrefixDirectory = hasTrailingDirectorySeparator(parsed.prefix) ? normalizedPrefix : getDirectoryPath(normalizedPrefix);
        const normalizedPrefixBase = hasTrailingDirectorySeparator(parsed.prefix) ? "" : getBaseFileName(normalizedPrefix);

        const fragmentHasPath = containsSlash(fragment);
        const fragmentDirectory = fragmentHasPath ? hasTrailingDirectorySeparator(fragment) ? fragment : getDirectoryPath(fragment) : undefined;

        // Try and expand the prefix to include any path from the fragment so that we can limit the readDirectory call
        const expandedPrefixDirectory = fragmentHasPath ? combinePaths(normalizedPrefixDirectory, normalizedPrefixBase + fragmentDirectory) : normalizedPrefixDirectory;

        const normalizedSuffix = normalizePath(parsed.suffix);
        // Need to normalize after combining: If we combinePaths("a", "../b"), we want "b" and not "a/../b".
        const baseDirectory = normalizePath(combinePaths(packageDirectory, expandedPrefixDirectory));
        const completePrefix = fragmentHasPath ? baseDirectory : ensureTrailingDirectorySeparator(baseDirectory) + normalizedPrefixBase;

        // If we have a suffix, then we read the directory all the way down to avoid returning completions for
        // directories that don't contain files that would match the suffix. A previous comment here was concerned
        // about the case where `normalizedSuffix` includes a `?` character, which should be interpreted literally,
        // but will match any single character as part of the `include` pattern in `tryReadDirectory`. This is not
        // a problem, because (in the extremely unusual circumstance where the suffix has a `?` in it) a `?`
        // interpreted as "any character" can only return *too many* results as compared to the literal
        // interpretation, so we can filter those superfluous results out via `trimPrefixAndSuffix` as we've always
        // done.
        const includeGlob = normalizedSuffix ? "**/*" + normalizedSuffix : "./*";

        const matches = mapDefined(tryReadDirectory(host, baseDirectory, extensionOptions.extensions, /*exclude*/ undefined, [includeGlob]), match => {
            const trimmedWithPattern = trimPrefixAndSuffix(match);
            if (trimmedWithPattern) {
                if (containsSlash(trimmedWithPattern)) {
                    return directoryResult(getPathComponents(removeLeadingDirectorySeparator(trimmedWithPattern))[1]);
                }
                const { name, extension } = getFilenameWithExtensionOption(trimmedWithPattern, host.getCompilationSettings(), extensionOptions.includeExtensionsOption);
                return nameAndKind(name, ScriptElementKind.scriptElement, extension);
            }
        });

        // If we had a suffix, we already recursively searched for all possible files that could match
        // it and returned the directories leading to those files. Otherwise, assume any directory could
        // have something valid to import.
        const directories = normalizedSuffix
            ? emptyArray
            : mapDefined(tryGetDirectories(host, baseDirectory), dir => dir === "node_modules" ? undefined : directoryResult(dir));
        return [...matches, ...directories];

        function trimPrefixAndSuffix(path: string): string | undefined {
            const inner = withoutStartAndEnd(normalizePath(path), completePrefix, normalizedSuffix);
            return inner === undefined ? undefined : removeLeadingDirectorySeparator(inner);
        }
    }

    function withoutStartAndEnd(s: string, start: string, end: string): string | undefined {
        return startsWith(s, start) && endsWith(s, end) ? s.slice(start.length, s.length - end.length) : undefined;
    }

    function removeLeadingDirectorySeparator(path: string): string {
        return path[0] === directorySeparator ? path.slice(1) : path;
    }

    function getAmbientModuleCompletions(fragment: string, fragmentDirectory: string | undefined, checker: TypeChecker): readonly string[] {
        // Get modules that the type checker picked up
        const ambientModules = checker.getAmbientModules().map(sym => stripQuotes(sym.name));
        const nonRelativeModuleNames = ambientModules.filter(moduleName => startsWith(moduleName, fragment));

        // Nested modules of the form "module-name/sub" need to be adjusted to only return the string
        // after the last '/' that appears in the fragment because that's where the replacement span
        // starts
        if (fragmentDirectory !== undefined) {
            const moduleNameWithSeparator = ensureTrailingDirectorySeparator(fragmentDirectory);
            return nonRelativeModuleNames.map(nonRelativeModuleName => removePrefix(nonRelativeModuleName, moduleNameWithSeparator));
        }
        return nonRelativeModuleNames;
    }

    function getTripleSlashReferenceCompletion(sourceFile: SourceFile, position: number, compilerOptions: CompilerOptions, host: LanguageServiceHost): readonly PathCompletion[] | undefined {
        const token = getTokenAtPosition(sourceFile, position);
        const commentRanges = getLeadingCommentRanges(sourceFile.text, token.pos);
        const range = commentRanges && find(commentRanges, commentRange => position >= commentRange.pos && position <= commentRange.end);
        if (!range) {
            return undefined;
        }
        const text = sourceFile.text.slice(range.pos, position);
        const match = tripleSlashDirectiveFragmentRegex.exec(text);
        if (!match) {
            return undefined;
        }

        const [, prefix, kind, toComplete] = match;
        const scriptPath = getDirectoryPath(sourceFile.path);
        const names = kind === "path" ? getCompletionEntriesForDirectoryFragment(toComplete, scriptPath, getExtensionOptions(compilerOptions, IncludeExtensionsOption.Include), host, sourceFile.path)
            : kind === "types" ? getCompletionEntriesFromTypings(host, compilerOptions, scriptPath, getFragmentDirectory(toComplete), getExtensionOptions(compilerOptions))
            : Debug.fail();
        return addReplacementSpans(toComplete, range.pos + prefix.length, arrayFrom(names.values()));
    }

    function getCompletionEntriesFromTypings(host: LanguageServiceHost, options: CompilerOptions, scriptPath: string, fragmentDirectory: string | undefined, extensionOptions: ExtensionOptions, result = createNameAndKindSet()): NameAndKindSet {
        // Check for typings specified in compiler options
        const seen = new Map<string, true>();

        const typeRoots = tryAndIgnoreErrors(() => getEffectiveTypeRoots(options, host)) || emptyArray;

        for (const root of typeRoots) {
            getCompletionEntriesFromDirectories(root);
        }

        // Also get all @types typings installed in visible node_modules directories
        for (const packageJson of findPackageJsons(scriptPath, host)) {
            const typesDir = combinePaths(getDirectoryPath(packageJson), "node_modules/@types");
            getCompletionEntriesFromDirectories(typesDir);
        }

        return result;

        function getCompletionEntriesFromDirectories(directory: string): void {
            if (!tryDirectoryExists(host, directory)) return;

            for (const typeDirectoryName of tryGetDirectories(host, directory)) {
                const packageName = unmangleScopedPackageName(typeDirectoryName);
                if (options.types && !contains(options.types, packageName)) continue;

                if (fragmentDirectory === undefined) {
                    if (!seen.has(packageName)) {
                        result.add(nameAndKind(packageName, ScriptElementKind.externalModuleName, /*extension*/ undefined));
                        seen.set(packageName, true);
                    }
                }
                else {
                    const baseDirectory = combinePaths(directory, typeDirectoryName);
                    const remainingFragment = tryRemoveDirectoryPrefix(fragmentDirectory, packageName, hostGetCanonicalFileName(host));
                    if (remainingFragment !== undefined) {
                        getCompletionEntriesForDirectoryFragment(remainingFragment, baseDirectory, extensionOptions, host, /*exclude*/ undefined, result);
                    }
                }
            }
        }
    }

    function enumerateNodeModulesVisibleToScript(host: LanguageServiceHost, scriptPath: string): readonly string[] {
        if (!host.readFile || !host.fileExists) return emptyArray;

        const result: string[] = [];
        for (const packageJson of findPackageJsons(scriptPath, host)) {
            const contents = readJson(packageJson, host as { readFile: (filename: string) => string | undefined }); // Cast to assert that readFile is defined
            // Provide completions for all non @types dependencies
            for (const key of nodeModulesDependencyKeys) {
                const dependencies: object | undefined = (contents as any)[key];
                if (!dependencies) continue;
                for (const dep in dependencies) {
                    if (hasProperty(dependencies, dep) && !startsWith(dep, "@types/")) {
                        result.push(dep);
                    }
                }
            }
        }
        return result;
    }

    // Replace everything after the last directory separator that appears
    function getDirectoryFragmentTextSpan(text: string, textStart: number): TextSpan | undefined {
        const index = Math.max(text.lastIndexOf(directorySeparator), text.lastIndexOf(altDirectorySeparator));
        const offset = index !== -1 ? index + 1 : 0;
        // If the range is an identifier, span is unnecessary.
        const length = text.length - offset;
        return length === 0 || isIdentifierText(text.substr(offset, length), ScriptTarget.ESNext) ? undefined : createTextSpan(textStart + offset, length);
    }

    // Returns true if the path is explicitly relative to the script (i.e. relative to . or ..)
    function isPathRelativeToScript(path: string) {
        if (path && path.length >= 2 && path.charCodeAt(0) === CharacterCodes.dot) {
            const slashIndex = path.length >= 3 && path.charCodeAt(1) === CharacterCodes.dot ? 2 : 1;
            const slashCharCode = path.charCodeAt(slashIndex);
            return slashCharCode === CharacterCodes.slash || slashCharCode === CharacterCodes.backslash;
        }
        return false;
    }

    /**
     * Matches a triple slash reference directive with an incomplete string literal for its path. Used
     * to determine if the caret is currently within the string literal and capture the literal fragment
     * for completions.
     * For example, this matches
     *
     * /// <reference path="fragment
     *
     * but not
     *
     * /// <reference path="fragment"
     */
    const tripleSlashDirectiveFragmentRegex = /^(\/\/\/\s*<reference\s+(path|types)\s*=\s*(?:'|"))([^\3"]*)$/;

    const nodeModulesDependencyKeys: readonly string[] = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];

    function containsSlash(fragment: string) {
        return stringContains(fragment, directorySeparator);
    }

    /**
     * Matches
     *   require(""
     *   require("")
     */
    function isRequireCallArgument(node: Node) {
        return isCallExpression(node.parent) && firstOrUndefined(node.parent.arguments) === node
            && isIdentifier(node.parent.expression) && node.parent.expression.escapedText === "require";
    }
}
