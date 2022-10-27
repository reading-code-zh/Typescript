namespace ts {
    describe("unittests:: tsbuild:: outFile:: on amd modules with --out", () => {
        let outFileFs: vfs.FileSystem;
        before(() => {
            outFileFs = loadProjectFromDisk("tests/projects/amdModulesWithOut");
        });
        after(() => {
            outFileFs = undefined!;
        });

        interface VerifyOutFileScenarioInput {
            subScenario: string;
            modifyFs?: (fs: vfs.FileSystem) => void;
            modifyAgainFs?: (fs: vfs.FileSystem) => void;
        }

        function verifyOutFileScenario({
            subScenario,
            modifyFs,
            modifyAgainFs
        }: VerifyOutFileScenarioInput) {
            verifyTscWithEdits({
                scenario: "amdModulesWithOut",
                subScenario,
                fs: () => outFileFs,
                commandLineArgs: ["--b", "/src/app", "--verbose"],
                baselineSourceMap: true,
                modifyFs,
                edits: [
                    {
                        subScenario: "incremental-declaration-doesnt-change",
                        modifyFs: fs => appendText(fs, "/src/lib/file1.ts", "console.log(x);")
                    },
                    ...(modifyAgainFs ? [{
                        subScenario: "incremental-headers-change-without-dts-changes",
                        modifyFs: modifyAgainFs
                    }] : emptyArray),
                ]
            });
        }

        describe("Prepend output with .tsbuildinfo", () => {
            verifyOutFileScenario({
                subScenario: "modules and globals mixed in amd",
            });

            // Prologues
            describe("Prologues", () => {
                verifyOutFileScenario({
                    subScenario: "multiple prologues in all projects",
                    modifyFs: fs => {
                        enableStrict(fs, "/src/lib/tsconfig.json");
                        addTestPrologue(fs, "/src/lib/file0.ts", `"myPrologue"`);
                        addTestPrologue(fs, "/src/lib/file2.ts", `"myPrologueFile"`);
                        addTestPrologue(fs, "/src/lib/global.ts", `"myPrologue3"`);
                        enableStrict(fs, "/src/app/tsconfig.json");
                        addTestPrologue(fs, "/src/app/file3.ts", `"myPrologue"`);
                        addTestPrologue(fs, "/src/app/file4.ts", `"myPrologue2";`);
                    },
                    modifyAgainFs: fs => addTestPrologue(fs, "/src/lib/file1.ts", `"myPrologue5"`)
                });
            });

            // Shebang
            describe("Shebang", () => {
                // changes declaration because its emitted in .d.ts file
                verifyOutFileScenario({
                    subScenario: "shebang in all projects",
                    modifyFs: fs => {
                        addShebang(fs, "lib", "file0");
                        addShebang(fs, "lib", "file1");
                        addShebang(fs, "app", "file3");
                    },
                });
            });

            // emitHelpers
            describe("emitHelpers", () => {
                verifyOutFileScenario({
                    subScenario: "multiple emitHelpers in all projects",
                    modifyFs: fs => {
                        addSpread(fs, "lib", "file0");
                        addRest(fs, "lib", "file1");
                        addRest(fs, "app", "file3");
                        addSpread(fs, "app", "file4");
                    },
                    modifyAgainFs: fs => removeRest(fs, "lib", "file1")
                });
            });

            // triple slash refs
            describe("triple slash refs", () => {
                // changes declaration because its emitted in .d.ts file
                verifyOutFileScenario({
                    subScenario: "triple slash refs in all projects",
                    modifyFs: fs => {
                        addTripleSlashRef(fs, "lib", "file0");
                        addTripleSlashRef(fs, "app", "file4");
                    }
                });
            });

            describe("stripInternal", () => {
                function stripInternalScenario(fs: vfs.FileSystem) {
                    const internal = "/*@internal*/";
                    replaceText(fs, "/src/app/tsconfig.json", `"composite": true,`, `"composite": true,
"stripInternal": true,`);
                    replaceText(fs, "/src/lib/file0.ts", "const", `${internal} const`);
                    appendText(fs, "/src/lib/file1.ts", `
export class normalC {
    ${internal} constructor() { }
    ${internal} prop: string;
    ${internal} method() { }
    ${internal} get c() { return 10; }
    ${internal} set c(val: number) { }
}
export namespace normalN {
    ${internal} export class C { }
    ${internal} export function foo() {}
    ${internal} export namespace someNamespace { export class C {} }
    ${internal} export namespace someOther.something { export class someClass {} }
    ${internal} export import someImport = someNamespace.C;
    ${internal} export type internalType = internalC;
    ${internal} export const internalConst = 10;
    ${internal} export enum internalEnum { a, b, c }
}
${internal} export class internalC {}
${internal} export function internalfoo() {}
${internal} export namespace internalNamespace { export class someClass {} }
${internal} export namespace internalOther.something { export class someClass {} }
${internal} export import internalImport = internalNamespace.someClass;
${internal} export type internalType = internalC;
${internal} export const internalConst = 10;
${internal} export enum internalEnum { a, b, c }`);
                }

                // Verify initial + incremental edits
                verifyOutFileScenario({
                    subScenario: "stripInternal",
                    modifyFs: stripInternalScenario,
                    modifyAgainFs: fs => replaceText(fs, "/src/lib/file1.ts", `export const`, `/*@internal*/ export const`),
                });
            });

            describe("when the module resolution finds original source file", () => {
                function modifyFs(fs: vfs.FileSystem) {
                    // Make lib to output to parent dir
                    replaceText(fs, "/src/lib/tsconfig.json", `"outFile": "module.js"`, `"outFile": "../module.js", "rootDir": "../"`);
                    // Change reference to file1 module to resolve to lib/file1
                    replaceText(fs, "/src/app/file3.ts", "file1", "lib/file1");
                }

                verifyTsc({
                    scenario: "amdModulesWithOut",
                    subScenario: "when the module resolution finds original source file",
                    fs: () => outFileFs,
                    commandLineArgs: ["-b", "/src/app", "--verbose"],
                    modifyFs,
                    baselineSourceMap: true,
                });
            });
        });
    });
}
