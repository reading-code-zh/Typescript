const ts = require("../built/local/typescript");

const filename = "./input.ts";
const program = ts.createProgram([filename], {
    allowJs: false
});
const sourceFile = program.getSourceFile(filename);