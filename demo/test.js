const path = require("path");
const ts = require("../built/local/typescript");

const filename = path.join(__dirname, "./input.ts");
const program = ts.createProgram([filename], {
    allowJs: false
});
const sourceFile = program.getSourceFile(filename);
const typeChecker = program.getTypeChecker();

function visitNode(node) {
    if (node.kind === ts.SyntaxKind.TypeReference)  {
        const type = typeChecker.getTypeFromTypeNode(node);

        debugger;
    }

    node.forEachChild(child =>
        visitNode(child)
    );
}

visitNode(sourceFile);