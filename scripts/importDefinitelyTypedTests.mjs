import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import * as childProcess from "child_process";
import url from "url";

const __filename = url.fileURLToPath(new URL(import.meta.url));
const __dirname = path.dirname(__filename);

main();
function main() {
    const [, progName, tscRoot, definitelyTypedRoot] = process.argv;
    if (process.argv.length !== 4) {
        if (process.argv.length < 2) {
            throw new Error("Expected at least 2 argv elements.");
        }
        console.log("Usage:");
        console.log(`    node ${path.relative(__dirname, progName)} [TypeScript Repo Root] [DefinitelyTyped Repo Root]`);
        return;
    }

    const tscPath = path.resolve(tscRoot, "built", "local", "tsc.js");
    const rwcTestPath = path.resolve(tscRoot, "internal", "cases", "rwc");
    const resolvedDefinitelyTypedRoot = path.resolve(definitelyTypedRoot);

    console.log(`Resolved TypeScript Compiler Path: '${tscPath}'.`);
    console.log(`Resolved TypeScript RWC Path: '${rwcTestPath}'.`);
    console.log(`Resolved DefinitelyTyped Repo Root: '${resolvedDefinitelyTypedRoot}'.`);
    importDefinitelyTypedTests(tscPath, rwcTestPath, resolvedDefinitelyTypedRoot);
}

/**
 * @param {string} path
 * @param {string} endingString
 * @returns {boolean}
 */
function filePathEndsWith(path, endingString) {
    const pathLen = path.length;
    const extLen = endingString.length;
    return pathLen > extLen && path.substr(pathLen - extLen, extLen).toLocaleLowerCase() === endingString.toLocaleLowerCase();
}

/**
 * @param {string} source
 * @param {string} destination
 */
function copyFileSync(source, destination) {
    const text = fs.readFileSync(source);
    fs.writeFileSync(destination, text);
}

/**
 * @param {string} tscPath
 * @param {string} rwcTestPath
 * @param {string} testCaseName
 * @param {string[]} testFiles
 * @param {string | undefined} responseFile
 */
function importDefinitelyTypedTest(tscPath, rwcTestPath, testCaseName, testFiles, responseFile) {
    let cmd = "node " + tscPath + " --module commonjs " + testFiles.join(" ");
    if (responseFile) {
        cmd += " @" + responseFile;
    }

    const testDirectoryName = testCaseName + "_" + Math.floor((Math.random() * 10000) + 1);
    const testDirectoryPath = path.join(os.tmpdir(), testDirectoryName);
    if (fs.existsSync(testDirectoryPath)) {
        throw new Error("Could not create test directory");
    }
    fs.mkdirSync(testDirectoryPath);

    childProcess.exec(cmd, {
        maxBuffer: 1 * 1024 * 1024,
        cwd: testDirectoryPath
    }, (error, stdout, stderr) => {
        console.log("importing " + testCaseName + " ...");
        console.log(cmd);

        if (error) {
            console.log("importing " + testCaseName + " ...");
            console.log(cmd);
            console.log("==> error " + JSON.stringify(error));
            console.log("==> stdout " + String(stdout));
            console.log("==> stderr " + String(stderr));
            console.log("\r\n");
            return;
        }

        // copy generated file to output location
        const outputFilePath = path.join(testDirectoryPath, "iocapture0.json");
        const testCasePath = path.join(rwcTestPath, "DefinitelyTyped_" + testCaseName + ".json");
        copyFileSync(outputFilePath, testCasePath);

        //console.log("output generated at: " + outputFilePath);

        if (!fs.existsSync(testCasePath)) {
            throw new Error("could not find test case at: " + testCasePath);
        }
        else {
            fs.unlinkSync(outputFilePath);
            fs.rmdirSync(testDirectoryPath);
            //console.log("testcase generated at: " + testCasePath);
            //console.log("Done.");
        }
        //console.log("\r\n");

    }).on("error", (error) => {
        console.log("==> error " + JSON.stringify(error));
        console.log("\r\n");
    });
}

/**
 * @param {string} tscPath
 * @param {string} rwcTestPath
 * @param {string} definitelyTypedRoot
 */
function importDefinitelyTypedTests(tscPath, rwcTestPath, definitelyTypedRoot) {
    fs.readdir(definitelyTypedRoot, (err, subDirectories) => {
        if (err) {
            throw err;
        }

        // When you just want to test the script out on one or two files,
        // just add a line like the following:
        //
        //   .filter(d => d.indexOf("sipml") >= 0 )
        subDirectories
            .filter(d => ["_infrastructure", "node_modules", ".git"].indexOf(d) < 0)
            .filter(i => fs.statSync(path.join(definitelyTypedRoot, i)).isDirectory())
            .forEach(d => {
                const directoryPath = path.join(definitelyTypedRoot, d);
                fs.readdir(directoryPath, (err, files) => {
                    if (err) {
                        throw err;
                    }

                    /** @type {string[]} */
                    const tsFiles = [];
                    /** @type {string[]} */
                    const testFiles = [];
                    /** @type {string | undefined} */
                    let paramFile;

                    for (const filePath of files.map(f => path.join(directoryPath, f))) {
                        if (filePathEndsWith(filePath, ".ts")) {
                            tsFiles.push(filePath);

                            if (filePathEndsWith(filePath, "-tests.ts")) {
                                testFiles.push(filePath);
                            }
                        }
                        else if (filePathEndsWith(filePath, ".tscparams")) {
                            paramFile = filePath;
                        }
                    }

                    if (testFiles.length === 0) {
                        // no test files but multiple d.ts's, e.g. winjs
                        const regexp = new RegExp(d + "(([-][0-9])|([\.]d[\.]ts))");
                        if (tsFiles.length > 1 && tsFiles.every(t => filePathEndsWith(t, ".d.ts") && regexp.test(t))) {
                            for (const fileName of tsFiles) {
                                importDefinitelyTypedTest(tscPath, rwcTestPath, path.basename(fileName, ".d.ts"), [fileName], paramFile);
                            }
                        }
                        else {
                            importDefinitelyTypedTest(tscPath, rwcTestPath, d, tsFiles, paramFile);
                        }
                    }
                    else {
                        for (const fileName of tsFiles) {
                            importDefinitelyTypedTest(tscPath, rwcTestPath, path.basename(fileName, "-tests.ts"), [fileName], paramFile);
                        }
                    }
                });
            });
    });
}
