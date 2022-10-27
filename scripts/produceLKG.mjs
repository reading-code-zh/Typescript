import childProcess from "child_process";
import fs from "fs-extra";
import path from "path";
import glob from "glob";
import url from "url";

const __filename = url.fileURLToPath(new URL(import.meta.url));
const __dirname = path.dirname(__filename);

const root = path.join(__dirname, "..");
const source = path.join(root, "built/local");
const dest = path.join(root, "lib");
const copyright = fs.readFileSync(path.join(__dirname, "../CopyrightNotice.txt"), "utf-8");

async function produceLKG() {
    console.log(`Building LKG from ${source} to ${dest}`);
    await copyLibFiles();
    await copyLocalizedDiagnostics();
    await copyTypesMap();
    await copyScriptOutputs();
    await copyDeclarationOutputs();
    await buildProtocol();
    await writeGitAttributes();
}

async function copyLibFiles() {
    await copyFilesWithGlob("lib?(.*).d.ts");
}

async function copyLocalizedDiagnostics() {
    const dir = await fs.readdir(source);
    const ignoredFolders = ["enu"];

    for (const d of dir) {
        const fileName = path.join(source, d);
        if (
            fs.statSync(fileName).isDirectory() &&
            ignoredFolders.indexOf(d) < 0
        ) {
            await fs.copy(fileName, path.join(dest, d));
        }
    }
}

async function copyTypesMap() {
    await copyFromBuiltLocal("typesMap.json"); // Cannot accommodate copyright header
}

async function buildProtocol() {
    const protocolScript = path.join(__dirname, "buildProtocol.mjs");
    if (!fs.existsSync(protocolScript)) {
        throw new Error(`Expected protocol script ${protocolScript} to exist`);
    }

    const protocolInput = path.join(__dirname, "../src/server/protocol.ts");
    const protocolServices = path.join(source, "typescriptServices.d.ts");
    const protocolOutput = path.join(dest, "protocol.d.ts");

    console.log(`Building ${protocolOutput}...`);
    await exec(protocolScript, [protocolInput, protocolServices, protocolOutput]);
}

async function copyScriptOutputs() {
    await copyWithCopyright("cancellationToken.js");
    await copyWithCopyright("tsc.release.js", "tsc.js");
    await copyWithCopyright("tsserver.js");
    await copyWithCopyright("dynamicImportCompat.js");
    await copyFromBuiltLocal("tsserverlibrary.js"); // copyright added by build
    await copyFromBuiltLocal("typescript.js"); // copyright added by build
    await copyFromBuiltLocal("typescriptServices.js"); // copyright added by build
    await copyWithCopyright("typingsInstaller.js");
    await copyWithCopyright("watchGuard.js");
}

async function copyDeclarationOutputs() {
    await copyFromBuiltLocal("tsserverlibrary.d.ts"); // copyright added by build
    await copyFromBuiltLocal("typescript.d.ts"); // copyright added by build
    await copyFromBuiltLocal("typescriptServices.d.ts"); // copyright added by build
}

async function writeGitAttributes() {
    await fs.writeFile(path.join(dest, ".gitattributes"), `* text eol=lf`, "utf-8");
}

/**
 * @param {string} fileName
 * @param {string} destName
 */
async function copyWithCopyright(fileName, destName = fileName) {
    const content = await fs.readFile(path.join(source, fileName), "utf-8");
    await fs.writeFile(path.join(dest, destName), copyright + "\n" + content);
}

/**
 * @param {string} fileName
 */
async function copyFromBuiltLocal(fileName) {
    await fs.copy(path.join(source, fileName), path.join(dest, fileName));
}

/**
 * @param {string} pattern
 */
async function copyFilesWithGlob(pattern) {
    const files = glob.sync(pattern, { cwd: source }).map(f => path.basename(f));
    for (const f of files) {
        await copyFromBuiltLocal(f);
    }
    console.log(`Copied ${files.length} files matching pattern ${pattern}`);
}

/**
 * @param {string} path
 * @param {string[]} args
 */
async function exec(path, args = []) {
    const cmdLine = ["node", path, ...args].join(" ");
    console.log(cmdLine);
    childProcess.execSync(cmdLine);
}

process.on("unhandledRejection", err => {
    throw err;
});
produceLKG().then(() => console.log("Done"), err => {
    throw err;
});
