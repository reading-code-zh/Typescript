namespace ts.tscWatch {
    import projectsLocation = TestFSWithWatch.tsbuildProjectsLocation;
    describe("unittests:: tsbuildWatch:: watchMode:: program updates", () => {
        const enum SubProject {
            core = "core",
            logic = "logic",
            tests = "tests",
            ui = "ui"
        }
        type ReadonlyFile = Readonly<File>;
        /** [tsconfig, index] | [tsconfig, index, anotherModule, someDecl] */
        type SubProjectFiles = [tsconfig: ReadonlyFile, index: ReadonlyFile] | [tsconfig: ReadonlyFile, index: ReadonlyFile, anotherModule: ReadonlyFile, someDecl: ReadonlyFile];
        function projectFilePath(subProject: SubProject, baseFileName: string) {
            return `${TestFSWithWatch.getTsBuildProjectFilePath("sample1", subProject)}/${baseFileName.toLowerCase()}`;
        }

        function projectFile(subProject: SubProject, baseFileName: string): File {
            return TestFSWithWatch.getTsBuildProjectFile("sample1", `${subProject}/${baseFileName}`);
        }

        function subProjectFiles(subProject: SubProject, anotherModuleAndSomeDecl?: true): SubProjectFiles {
            const tsconfig = projectFile(subProject, "tsconfig.json");
            const index = projectFile(subProject, "index.ts");
            if (!anotherModuleAndSomeDecl) {
                return [tsconfig, index];
            }
            const anotherModule = projectFile(SubProject.core, "anotherModule.ts");
            const someDecl = projectFile(SubProject.core, "some_decl.ts");
            return [tsconfig, index, anotherModule, someDecl];
        }

        function changeFile(fileName: string | (() => string), content: string | (() => string), caption: string): TscWatchCompileChange {
            return {
                caption,
                change: sys => sys.writeFile(isString(fileName) ? fileName : fileName(), isString(content) ? content : content()),
                timeouts: checkSingleTimeoutQueueLengthAndRun, // Builds core
            };
        }

        function changeCore(content: () => string, caption: string) {
            return changeFile(() => core[1].path, content, caption);
        }

        let core: SubProjectFiles;
        let logic: SubProjectFiles;
        let tests: SubProjectFiles;
        let ui: SubProjectFiles;
        let allFiles: readonly File[];

        before(() => {
            core = subProjectFiles(SubProject.core, /*anotherModuleAndSomeDecl*/ true);
            logic = subProjectFiles(SubProject.logic);
            tests = subProjectFiles(SubProject.tests);
            ui = subProjectFiles(SubProject.ui);
            allFiles = [libFile, ...core, ...logic, ...tests, ...ui];
        });

        after(() => {
            core = undefined!;
            logic = undefined!;
            tests = undefined!;
            ui = undefined!;
            allFiles = undefined!;
        });

        verifyTscWatch({
            scenario: "programUpdates",
            subScenario: "creates solution in watch mode",
            commandLineArgs: ["-b", "-w", `sample1/${SubProject.tests}`],
            sys: () => createWatchedSystem(allFiles, { currentDirectory: projectsLocation }),
            changes: emptyArray
        });

        it("verify building references watches only those projects", () => {
            const { sys, baseline, oldSnap, cb, getPrograms } = createBaseline(createWatchedSystem(allFiles, { currentDirectory: projectsLocation }));
            const host = createSolutionBuilderWithWatchHostForBaseline(sys, cb);
            const solutionBuilder = createSolutionBuilderWithWatch(host, [`sample1/${SubProject.tests}`], { watch: true });
            solutionBuilder.buildReferences(`sample1/${SubProject.tests}`);
            runWatchBaseline({
                scenario: "programUpdates",
                subScenario: "verify building references watches only those projects",
                commandLineArgs: ["--b", "--w"],
                sys,
                baseline,
                oldSnap,
                getPrograms,
                changes: emptyArray,
                watchOrSolution: solutionBuilder
            });
        });

        describe("validates the changes and watched files", () => {
            const newFileWithoutExtension = "newFile";
            const newFile: File = {
                path: projectFilePath(SubProject.core, `${newFileWithoutExtension}.ts`),
                content: `export const newFileConst = 30;`
            };

            function verifyProjectChanges(subScenario: string, allFilesGetter: () => readonly File[]) {
                const buildLogicAndTests: TscWatchCompileChange = {
                    caption: "Build logic and tests",
                    change: noop,
                    timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout,
                };

                verifyTscWatch({
                    scenario: "programUpdates",
                    subScenario: `${subScenario}/change builds changes and reports found errors message`,
                    commandLineArgs: ["-b", "-w", `sample1/${SubProject.tests}`],
                    sys: () => createWatchedSystem(
                        allFilesGetter(),
                        { currentDirectory: projectsLocation }
                    ),
                    changes: [
                        changeCore(() => `${core[1].content}
export class someClass { }`, "Make change to core"),
                        buildLogicAndTests,
                        // Another change requeues and builds it
                        changeCore(() => core[1].content, "Revert core file"),
                        buildLogicAndTests,
                        {
                            caption: "Make two changes",
                            change: sys => {
                                const change1 = `${core[1].content}
export class someClass { }`;
                                sys.writeFile(core[1].path, change1);
                                assert.equal(sys.writtenFiles.size, 1);
                                sys.writtenFiles.clear();
                                sys.writeFile(core[1].path, `${change1}
export class someClass2 { }`);
                            },
                            timeouts: checkSingleTimeoutQueueLengthAndRun, // Builds core
                        },
                        buildLogicAndTests,
                    ]
                });

                verifyTscWatch({
                    scenario: "programUpdates",
                    subScenario: `${subScenario}/non local change does not start build of referencing projects`,
                    commandLineArgs: ["-b", "-w", `sample1/${SubProject.tests}`],
                    sys: () => createWatchedSystem(
                        allFilesGetter(),
                        { currentDirectory: projectsLocation }
                    ),
                    changes: [
                        changeCore(() => `${core[1].content}
function foo() { }`, "Make local change to core"),
                    ]
                });

                function changeNewFile(newFileContent: string) {
                    return changeFile(newFile.path, newFileContent, "Change to new File and build core");
                }
                verifyTscWatch({
                    scenario: "programUpdates",
                    subScenario: `${subScenario}/builds when new file is added, and its subsequent updates`,
                    commandLineArgs: ["-b", "-w", `sample1/${SubProject.tests}`],
                    sys: () => createWatchedSystem(
                        allFilesGetter(),
                        { currentDirectory: projectsLocation }
                    ),
                    changes: [
                        changeNewFile(newFile.content),
                        buildLogicAndTests,
                        changeNewFile(`${newFile.content}
export class someClass2 { }`),
                        buildLogicAndTests,
                    ]
                });
            }

            describe("with simple project reference graph", () => {
                verifyProjectChanges(
                    "with simple project reference graph",
                    () => allFiles
                );
            });

            describe("with circular project reference", () => {
                verifyProjectChanges(
                    "with circular project reference",
                    () => {
                        const [coreTsconfig, ...otherCoreFiles] = core;
                        const circularCoreConfig: File = {
                            path: coreTsconfig.path,
                            content: JSON.stringify({
                                compilerOptions: { composite: true, declaration: true },
                                references: [{ path: "../tests", circular: true }]
                            })
                        };
                        return [libFile, circularCoreConfig, ...otherCoreFiles, ...logic, ...tests];
                    }
                );
            });
        });

        verifyTscWatch({
            scenario: "programUpdates",
            subScenario: "watches config files that are not present",
            commandLineArgs: ["-b", "-w", `sample1/${SubProject.tests}`],
            sys: () => createWatchedSystem(
                [libFile, ...core, logic[1], ...tests],
                { currentDirectory: projectsLocation }
            ),
            changes: [
                {
                    caption: "Write logic tsconfig and build logic",
                    change: sys => sys.writeFile(logic[0].path, logic[0].content),
                    timeouts: checkSingleTimeoutQueueLengthAndRun, // Builds logic
                },
                {
                    caption: "Build Tests",
                    change: noop,
                    // Build tests
                    timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout,
                }
            ]
        });

        describe("when referenced using prepend, builds referencing project even for non local change", () => {
            let coreIndex: File;
            before(() => {
                coreIndex = {
                    path: core[1].path,
                    content: `function foo() { return 10; }`
                };
            });
            after(() => {
                coreIndex = undefined!;
            });
            const buildLogic: TscWatchCompileChange = {
                caption: "Build logic",
                change: noop,
                // Builds logic
                timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout,
            };
            verifyTscWatch({
                scenario: "programUpdates",
                subScenario: "when referenced using prepend builds referencing project even for non local change",
                commandLineArgs: ["-b", "-w", `sample1/${SubProject.logic}`],
                sys: () => {
                    const coreTsConfig: File = {
                        path: core[0].path,
                        content: JSON.stringify({
                            compilerOptions: { composite: true, declaration: true, outFile: "index.js" }
                        })
                    };
                    const logicTsConfig: File = {
                        path: logic[0].path,
                        content: JSON.stringify({
                            compilerOptions: { composite: true, declaration: true, outFile: "index.js" },
                            references: [{ path: "../core", prepend: true }]
                        })
                    };
                    const logicIndex: File = {
                        path: logic[1].path,
                        content: `function bar() { return foo() + 1 };`
                    };
                    return createWatchedSystem([libFile, coreTsConfig, coreIndex, logicTsConfig, logicIndex], { currentDirectory: projectsLocation });
                },
                changes: [
                    changeCore(() => `${coreIndex.content}
function myFunc() { return 10; }`, "Make non local change and build core"),
                    buildLogic,
                    changeCore(() => `${coreIndex.content}
function myFunc() { return 100; }`, "Make local change and build core"),
                    buildLogic,
                ]
            });
        });

        describe("when referenced project change introduces error in the down stream project and then fixes it", () => {
            const subProjectLibrary = `${projectsLocation}/sample1/Library`;
            const libraryTs: File = {
                path: `${subProjectLibrary}/library.ts`,
                content: `
interface SomeObject
{
    message: string;
}

export function createSomeObject(): SomeObject
{
    return {
        message: "new Object"
    };
}`
            };
            verifyTscWatch({
                scenario: "programUpdates",
                subScenario: "when referenced project change introduces error in the down stream project and then fixes it",
                commandLineArgs: ["-b", "-w", "App"],
                sys: () => {
                    const libraryTsconfig: File = {
                        path: `${subProjectLibrary}/tsconfig.json`,
                        content: JSON.stringify({ compilerOptions: { composite: true } })
                    };
                    const subProjectApp = `${projectsLocation}/sample1/App`;
                    const appTs: File = {
                        path: `${subProjectApp}/app.ts`,
                        content: `import { createSomeObject } from "../Library/library";
createSomeObject().message;`
                    };
                    const appTsconfig: File = {
                        path: `${subProjectApp}/tsconfig.json`,
                        content: JSON.stringify({ references: [{ path: "../Library" }] })
                    };

                    const files = [libFile, libraryTs, libraryTsconfig, appTs, appTsconfig];
                    return createWatchedSystem(files, { currentDirectory: `${projectsLocation}/sample1` });
                },
                changes: [
                    {
                        caption: "Introduce error",
                        // Change message in library to message2
                        change: sys => sys.writeFile(libraryTs.path, libraryTs.content.replace(/message/g, "message2")),
                        timeouts: sys => {
                            sys.checkTimeoutQueueLengthAndRun(1); // Build library
                            sys.checkTimeoutQueueLengthAndRun(1); // Build App
                        },
                    },
                    {
                        caption: "Fix error",
                        // Revert library changes
                        change: sys => sys.writeFile(libraryTs.path, libraryTs.content),
                        timeouts: sys => {
                            sys.checkTimeoutQueueLengthAndRun(1); // Build library
                            sys.checkTimeoutQueueLengthAndRun(1); // Build App
                        },
                    },
                ]
            });

        });

        describe("reports errors in all projects on incremental compile", () => {
            function verifyIncrementalErrors(subScenario: string, buildOptions: readonly string[]) {
                verifyTscWatch({
                    scenario: "programUpdates",
                    subScenario: `reportErrors/${subScenario}`,
                    commandLineArgs: ["-b", "-w", `sample1/${SubProject.tests}`, ...buildOptions],
                    sys: () => createWatchedSystem(allFiles, { currentDirectory: projectsLocation }),
                    changes: [
                        {
                            caption: "change logic",
                            change: sys => sys.writeFile(logic[1].path, `${logic[1].content}
let y: string = 10;`),
                            // Builds logic
                            timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout,
                        },
                        {
                            caption: "change core",
                            change: sys => sys.writeFile(core[1].path, `${core[1].content}
let x: string = 10;`),
                            // Builds core
                            timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout,
                        }
                    ]
                });
            }
            verifyIncrementalErrors("when preserveWatchOutput is not used", emptyArray);
            verifyIncrementalErrors("when preserveWatchOutput is passed on command line", ["--preserveWatchOutput"]);

            describe("when declaration emit errors are present", () => {
                const solution = "solution";
                const subProject = "app";
                const subProjectLocation = `${projectsLocation}/${solution}/${subProject}`;
                const fileWithError: File = {
                    path: `${subProjectLocation}/fileWithError.ts`,
                    content: `export var myClassWithError = class {
        tags() { }
        private p = 12
    };`
                };
                const fileWithFixedError: File = {
                    path: fileWithError.path,
                    content: fileWithError.content.replace("private p = 12", "")
                };
                const fileWithoutError: File = {
                    path: `${subProjectLocation}/fileWithoutError.ts`,
                    content: `export class myClass { }`
                };
                const tsconfig: File = {
                    path: `${subProjectLocation}/tsconfig.json`,
                    content: JSON.stringify({ compilerOptions: { composite: true } })
                };

                function incrementalBuild(sys: WatchedSystem) {
                    sys.checkTimeoutQueueLengthAndRun(1); // Build the app
                    sys.checkTimeoutQueueLength(0);
                }

                const fixError: TscWatchCompileChange = {
                    caption: "Fix error in fileWithError",
                    // Fix error
                    change: sys => sys.writeFile(fileWithError.path, fileWithFixedError.content),
                    timeouts: incrementalBuild
                };

                const changeFileWithoutError: TscWatchCompileChange = {
                    caption: "Change fileWithoutError",
                    change: sys => sys.writeFile(fileWithoutError.path, fileWithoutError.content.replace(/myClass/g, "myClass2")),
                    timeouts: incrementalBuild
                };

                verifyTscWatch({
                    scenario: "programUpdates",
                    subScenario: "reportErrors/declarationEmitErrors/when fixing error files all files are emitted",
                    commandLineArgs: ["-b", "-w", subProject],
                    sys: () => createWatchedSystem(
                        [libFile, fileWithError, fileWithoutError, tsconfig],
                        { currentDirectory: `${projectsLocation}/${solution}` }
                    ),
                    changes: [
                        fixError
                    ]
                });

                verifyTscWatch({
                    scenario: "programUpdates",
                    subScenario: "reportErrors/declarationEmitErrors/when file with no error changes",
                    commandLineArgs: ["-b", "-w", subProject],
                    sys: () => createWatchedSystem(
                        [libFile, fileWithError, fileWithoutError, tsconfig],
                        { currentDirectory: `${projectsLocation}/${solution}` }
                    ),
                    changes: [
                        changeFileWithoutError
                    ]
                });

                describe("when reporting errors on introducing error", () => {
                    const introduceError: TscWatchCompileChange = {
                        caption: "Introduce error",
                        change: sys => sys.writeFile(fileWithError.path, fileWithError.content),
                        timeouts: incrementalBuild,
                    };

                    verifyTscWatch({
                        scenario: "programUpdates",
                        subScenario: "reportErrors/declarationEmitErrors/introduceError/when fixing errors only changed file is emitted",
                        commandLineArgs: ["-b", "-w", subProject],
                        sys: () => createWatchedSystem(
                            [libFile, fileWithFixedError, fileWithoutError, tsconfig],
                            { currentDirectory: `${projectsLocation}/${solution}` }
                        ),
                        changes: [
                            introduceError,
                            fixError
                        ]
                    });

                    verifyTscWatch({
                        scenario: "programUpdates",
                        subScenario: "reportErrors/declarationEmitErrors/introduceError/when file with no error changes",
                        commandLineArgs: ["-b", "-w", subProject],
                        sys: () => createWatchedSystem(
                            [libFile, fileWithFixedError, fileWithoutError, tsconfig],
                            { currentDirectory: `${projectsLocation}/${solution}` }
                        ),
                        changes: [
                            introduceError,
                            changeFileWithoutError
                        ]
                    });
                });
            });
        });

        verifyTscWatch({
            scenario: "programUpdates",
            subScenario: "incremental updates in verbose mode",
            commandLineArgs: ["-b", "-w", `sample1/${SubProject.tests}`, "-verbose"],
            sys: () => createWatchedSystem(allFiles, { currentDirectory: projectsLocation }),
            changes: [
                {
                    caption: "Make non dts change",
                    change: sys => sys.writeFile(logic[1].path, `${logic[1].content}
function someFn() { }`),
                    timeouts: sys => {
                        sys.checkTimeoutQueueLengthAndRun(1); // build logic and updates tests
                        sys.checkTimeoutQueueLength(0);
                    },
                },
                {
                    caption: "Make dts change",
                    change: sys => sys.writeFile(logic[1].path, `${logic[1].content}
export function someFn() { }`),
                    timeouts: sys => {
                        sys.checkTimeoutQueueLengthAndRun(1); // build logic
                        sys.checkTimeoutQueueLengthAndRun(1); // build tests
                    },
                }
            ],
        });

        verifyTscWatch({
            scenario: "programUpdates",
            subScenario: "works when noUnusedParameters changes to false",
            commandLineArgs: ["-b", "-w"],
            sys: () => {
                const index: File = {
                    path: `${projectRoot}/index.ts`,
                    content: `const fn = (a: string, b: string) => b;`
                };
                const configFile: File = {
                    path: `${projectRoot}/tsconfig.json`,
                    content: JSON.stringify({
                        compilerOptions: {
                            noUnusedParameters: true
                        }
                    })
                };
                return createWatchedSystem([index, configFile, libFile], { currentDirectory: projectRoot });
            },
            changes: [
                {
                    caption: "Change tsconfig to set noUnusedParameters to false",
                    change: sys => sys.writeFile(`${projectRoot}/tsconfig.json`, JSON.stringify({
                        compilerOptions: {
                            noUnusedParameters: false
                        }
                    })),
                    timeouts: runQueuedTimeoutCallbacks,
                },
            ]
        });

        verifyTscWatch({
            scenario: "programUpdates",
            subScenario: "should not trigger recompilation because of program emit",
            commandLineArgs: ["-b", "-w", `sample1/${SubProject.core}`, "-verbose"],
            sys: () => createWatchedSystem([libFile, ...core], { currentDirectory: projectsLocation }),
            changes: [
                noopChange,
                {
                    caption: "Add new file",
                    change: sys => sys.writeFile(`sample1/${SubProject.core}/file3.ts`, `export const y = 10;`),
                    timeouts: checkSingleTimeoutQueueLengthAndRun
                },
                noopChange,
            ]
        });

        verifyTscWatch({
            scenario: "programUpdates",
            subScenario: "should not trigger recompilation because of program emit with outDir specified",
            commandLineArgs: ["-b", "-w", `sample1/${SubProject.core}`, "-verbose"],
            sys: () => {
                const [coreConfig, ...rest] = core;
                const newCoreConfig: File = { path: coreConfig.path, content: JSON.stringify({ compilerOptions: { composite: true, outDir: "outDir" } }) };
                return createWatchedSystem([libFile, newCoreConfig, ...rest], { currentDirectory: projectsLocation });
            },
            changes: [
                noopChange,
                {
                    caption: "Add new file",
                    change: sys => sys.writeFile(`sample1/${SubProject.core}/file3.ts`, `export const y = 10;`),
                    timeouts: checkSingleTimeoutQueueLengthAndRun
                },
                noopChange
            ]
        });

        verifyTscWatch({
            scenario: "programUpdates",
            subScenario: "works with extended source files",
            commandLineArgs: ["-b", "-w", "-v", "project1.tsconfig.json", "project2.tsconfig.json"],
            sys: () => {
                const alphaExtendedConfigFile: File = {
                    path: "/a/b/alpha.tsconfig.json",
                    content: "{}"
                };
                const project1Config: File = {
                    path: "/a/b/project1.tsconfig.json",
                    content: JSON.stringify({
                        extends: "./alpha.tsconfig.json",
                        compilerOptions: {
                            composite: true,
                        },
                        files: [commonFile1.path, commonFile2.path]
                    })
                };
                const bravoExtendedConfigFile: File = {
                    path: "/a/b/bravo.tsconfig.json",
                    content: JSON.stringify({
                        extends: "./alpha.tsconfig.json"
                    })
                };
                const otherFile: File = {
                    path: "/a/b/other.ts",
                    content: "let z = 0;",
                };
                const project2Config: File = {
                    path: "/a/b/project2.tsconfig.json",
                    content: JSON.stringify({
                        extends: "./bravo.tsconfig.json",
                        compilerOptions: {
                            composite: true,
                        },
                        files: [otherFile.path]
                    })
                };
                return createWatchedSystem([
                    libFile,
                    alphaExtendedConfigFile, project1Config, commonFile1, commonFile2,
                    bravoExtendedConfigFile, project2Config, otherFile
                ], { currentDirectory: "/a/b" });
            },
            changes: [
                {
                    caption: "Modify alpha config",
                    change: sys => sys.writeFile("/a/b/alpha.tsconfig.json", JSON.stringify({
                        compilerOptions: { strict: true }
                    })),
                    timeouts: checkSingleTimeoutQueueLengthAndRun // Build project1
                },
                {
                    caption: "Build project 2",
                    change: noop,
                    timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout // Build project2
                },
                {
                    caption: "change bravo config",
                    change: sys => sys.writeFile("/a/b/bravo.tsconfig.json", JSON.stringify({
                        extends: "./alpha.tsconfig.json",
                        compilerOptions: { strict: false }
                    })),
                    timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout // Build project2
                },
                {
                    caption: "project 2 extends alpha",
                    change: sys => sys.writeFile("/a/b/project2.tsconfig.json", JSON.stringify({
                        extends: "./alpha.tsconfig.json",
                    })),
                    timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout // Build project2
                },
                {
                    caption: "update aplha config",
                    change: sys => sys.writeFile("/a/b/alpha.tsconfig.json", "{}"),
                    timeouts: checkSingleTimeoutQueueLengthAndRun, // build project1
                },
                {
                    caption: "Build project 2",
                    change: noop,
                    timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout // Build project2
                },
            ]
        });

        verifyTscWatch({
            scenario: "programUpdates",
            subScenario: "works correctly when project with extended config is removed",
            commandLineArgs: ["-b", "-w", "-v"],
            sys: () => {
                const alphaExtendedConfigFile: File = {
                    path: "/a/b/alpha.tsconfig.json",
                    content: JSON.stringify({
                        compilerOptions: {
                            strict: true
                        }
                    })
                };
                const project1Config: File = {
                    path: "/a/b/project1.tsconfig.json",
                    content: JSON.stringify({
                        extends: "./alpha.tsconfig.json",
                        compilerOptions: {
                            composite: true,
                        },
                        files: [commonFile1.path, commonFile2.path]
                    })
                };
                const bravoExtendedConfigFile: File = {
                    path: "/a/b/bravo.tsconfig.json",
                    content: JSON.stringify({
                        compilerOptions: {
                            strict: true
                        }
                    })
                };
                const otherFile: File = {
                    path: "/a/b/other.ts",
                    content: "let z = 0;",
                };
                const project2Config: File = {
                    path: "/a/b/project2.tsconfig.json",
                    content: JSON.stringify({
                        extends: "./bravo.tsconfig.json",
                        compilerOptions: {
                            composite: true,
                        },
                        files: [otherFile.path]
                    })
                };
                const configFile: File = {
                    path: "/a/b/tsconfig.json",
                    content: JSON.stringify({
                        references: [
                            {
                                path: "./project1.tsconfig.json",
                            },
                            {
                                path: "./project2.tsconfig.json",
                            },
                        ],
                        files: [],
                    })
                };
                return createWatchedSystem([
                    libFile, configFile,
                    alphaExtendedConfigFile, project1Config, commonFile1, commonFile2,
                    bravoExtendedConfigFile, project2Config, otherFile
                ], { currentDirectory: "/a/b" });
            },
            changes: [
                {
                    caption: "Remove project2 from base config",
                    change: sys => sys.modifyFile("/a/b/tsconfig.json", JSON.stringify({
                        references: [
                            {
                                path: "./project1.tsconfig.json",
                            },
                        ],
                        files: [],
                    })),
                    timeouts: checkSingleTimeoutQueueLengthAndRunAndVerifyNoTimeout,
                }
            ]
        });

        verifyTscWatch({
            scenario: "programUpdates",
            subScenario: "tsbuildinfo has error",
            sys: () => createWatchedSystem({
                "/src/project/main.ts": "export const x = 10;",
                "/src/project/tsconfig.json": "{}",
                "/src/project/tsconfig.tsbuildinfo": "Some random string",
                [libFile.path]: libFile.content,
            }),
            commandLineArgs: ["--b", "src/project", "-i", "-w"],
            changes: emptyArray
        });
    });
}