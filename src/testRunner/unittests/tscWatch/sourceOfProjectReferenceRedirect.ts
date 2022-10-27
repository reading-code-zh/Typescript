namespace ts.tscWatch {
    import getFileFromProject = TestFSWithWatch.getTsBuildProjectFile;
    describe("unittests:: tsc-watch:: watchAPI:: with sourceOfProjectReferenceRedirect", () => {
        interface VerifyWatchInput {
            files: readonly TestFSWithWatch.FileOrFolderOrSymLink[];
            config: string;
            subScenario: string;
        }

        function verifyWatch({ files, config, subScenario }: VerifyWatchInput, alreadyBuilt: boolean) {
            const { sys, baseline, oldSnap, cb, getPrograms } = createBaseline(
                createWatchedSystem(files),
                alreadyBuilt ? (sys, originalRead) => {
                    solutionBuildWithBaseline(sys, [config], originalRead);
                    sys.clearOutput();
                } : undefined
            );
            const host = createWatchCompilerHostOfConfigFileForBaseline({
                configFileName: config,
                system: sys,
                cb,
            });
            host.useSourceOfProjectReferenceRedirect = returnTrue;
            const watch = createWatchProgram(host);
            runWatchBaseline({
                scenario: "sourceOfProjectReferenceRedirect",
                subScenario: `${subScenario}${alreadyBuilt ? " when solution is already built" : ""}`,
                commandLineArgs: ["--w", "--p", config],
                sys,
                baseline,
                oldSnap,
                getPrograms,
                changes: emptyArray,
                watchOrSolution: watch
            });
        }

        function verifyScenario(input: () => VerifyWatchInput) {
            it("when solution is not built", () => {
                verifyWatch(input(), /*alreadyBuilt*/ false);
            });

            it("when solution is already built", () => {
                verifyWatch(input(), /*alreadyBuilt*/ true);
            });
        }

        describe("with simple project", () => {
            verifyScenario(() => {
                const baseConfig = getFileFromProject("demo", "tsconfig-base.json");
                const coreTs = getFileFromProject("demo", "core/utilities.ts");
                const coreConfig = getFileFromProject("demo", "core/tsconfig.json");
                const animalTs = getFileFromProject("demo", "animals/animal.ts");
                const dogTs = getFileFromProject("demo", "animals/dog.ts");
                const indexTs = getFileFromProject("demo", "animals/index.ts");
                const animalsConfig = getFileFromProject("demo", "animals/tsconfig.json");
                return {
                    files: [{ path: libFile.path, content: libContent }, baseConfig, coreTs, coreConfig, animalTs, dogTs, indexTs, animalsConfig],
                    config: animalsConfig.path,
                    subScenario: "with simple project"
                };
            });
        });

        describe("when references are monorepo like with symlinks", () => {
            interface Packages {
                bPackageJson: File;
                aTest: File;
                bFoo: File;
                bBar: File;
                bSymlink: SymLink;
                subScenario: string;
            }
            function verifySymlinkScenario(packages: () => Packages) {
                describe("when preserveSymlinks is turned off", () => {
                    verifySymlinkScenarioWorker(packages, {});
                });
                describe("when preserveSymlinks is turned on", () => {
                    verifySymlinkScenarioWorker(packages, { preserveSymlinks: true });
                });
            }

            function verifySymlinkScenarioWorker(packages: () => Packages, extraOptions: CompilerOptions) {
                verifyScenario(() => {
                    const { bPackageJson, aTest, bFoo, bBar, bSymlink, subScenario } = packages();
                    const aConfig = config("A", extraOptions, ["../B"]);
                    const bConfig = config("B", extraOptions);
                    return {
                        files: [libFile, bPackageJson, aConfig, bConfig, aTest, bFoo, bBar, bSymlink],
                        config: aConfig.path,
                        subScenario: `${subScenario}${extraOptions.preserveSymlinks ? " with preserveSymlinks" : ""}`
                    };
                });
            }

            function config(packageName: string, extraOptions: CompilerOptions, references?: string[]): File {
                return {
                    path: `${projectRoot}/packages/${packageName}/tsconfig.json`,
                    content: JSON.stringify({
                        compilerOptions: {
                            outDir: "lib",
                            rootDir: "src",
                            composite: true,
                            ...extraOptions
                        },
                        include: ["src"],
                        ...(references ? { references: references.map(path => ({ path })) } : {})
                    })
                };
            }

            function file(packageName: string, fileName: string, content: string): File {
                return {
                    path: `${projectRoot}/packages/${packageName}/src/${fileName}`,
                    content
                };
            }

            function verifyMonoRepoLike(scope = "") {
                describe("when packageJson has types field", () => {
                    verifySymlinkScenario(() => ({
                        bPackageJson: {
                            path: `${projectRoot}/packages/B/package.json`,
                            content: JSON.stringify({
                                main: "lib/index.js",
                                types: "lib/index.d.ts"
                            })
                        },
                        aTest: file("A", "index.ts", `import { foo } from '${scope}b';
import { bar } from '${scope}b/lib/bar';
foo();
bar();
`),
                        bFoo: file("B", "index.ts", `export function foo() { }`),
                        bBar: file("B", "bar.ts", `export function bar() { }`),
                        bSymlink: {
                            path: `${projectRoot}/node_modules/${scope}b`,
                            symLink: `${projectRoot}/packages/B`
                        },
                        subScenario: `when packageJson has types field${scope ? " with scoped package" : ""}`
                    }));
                });

                describe("when referencing file from subFolder", () => {
                    verifySymlinkScenario(() => ({
                        bPackageJson: {
                            path: `${projectRoot}/packages/B/package.json`,
                            content: "{}"
                        },
                        aTest: file("A", "test.ts", `import { foo } from '${scope}b/lib/foo';
import { bar } from '${scope}b/lib/bar/foo';
foo();
bar();
`),
                        bFoo: file("B", "foo.ts", `export function foo() { }`),
                        bBar: file("B", "bar/foo.ts", `export function bar() { }`),
                        bSymlink: {
                            path: `${projectRoot}/node_modules/${scope}b`,
                            symLink: `${projectRoot}/packages/B`
                        },
                        subScenario: `when referencing file from subFolder${scope ? " with scoped package" : ""}`
                    }));
                });
            }
            describe("when package is not scoped", () => {
                verifyMonoRepoLike();
            });
            describe("when package is scoped", () => {
                verifyMonoRepoLike("@issue/");
            });
        });
    });
}
