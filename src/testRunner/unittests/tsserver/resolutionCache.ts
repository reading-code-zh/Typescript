namespace ts.projectSystem {
    describe("unittests:: tsserver:: resolutionCache:: tsserverProjectSystem extra resolution pass in server host", () => {
        it("can load typings that are proper modules", () => {
            const file1 = {
                path: "/a/b/app.js",
                content: `var x = require("lib")`
            };
            const lib = {
                path: "/a/cache/node_modules/@types/lib/index.d.ts",
                content: "export let x = 1"
            };
            const host: TestServerHost & ModuleResolutionHost = createServerHost([file1, lib]);
            const projectService = createProjectService(host, {
                typingsInstaller: new TestTypingsInstaller("/a/cache", /*throttleLimit*/5, host),
                logger: createLoggerWithInMemoryLogs(host)
            });

            projectService.setCompilerOptionsForInferredProjects({ traceResolution: true, allowJs: true });
            projectService.openClientFile(file1.path);
            baselineTsserverLogs("resolutionCache", "can load typings that are proper modules", projectService);
        });
    });

    describe("unittests:: tsserver:: resolutionCache:: tsserverProjectSystem watching @types", () => {
        it("works correctly when typings are added or removed", () => {
            const f1 = {
                path: "/a/b/app.ts",
                content: "let x = 1;"
            };
            const t1 = {
                path: "/a/b/node_modules/@types/lib1/index.d.ts",
                content: "export let a: number"
            };
            const t2 = {
                path: "/a/b/node_modules/@types/lib2/index.d.ts",
                content: "export let b: number"
            };
            const tsconfig = {
                path: "/a/b/tsconfig.json",
                content: JSON.stringify({
                    compilerOptions: {},
                    exclude: ["node_modules"]
                })
            };
            const host = createServerHost([f1, t1, tsconfig]);
            const projectService = createProjectService(host);

            projectService.openClientFile(f1.path);
            projectService.checkNumberOfProjects({ configuredProjects: 1 });
            checkProjectActualFiles(configuredProjectAt(projectService, 0), [f1.path, t1.path, tsconfig.path]);

            // delete t1
            host.deleteFile(t1.path);
            // run throttled operation
            host.runQueuedTimeoutCallbacks();

            projectService.checkNumberOfProjects({ configuredProjects: 1 });
            checkProjectActualFiles(configuredProjectAt(projectService, 0), [f1.path, tsconfig.path]);

            // create t2
            host.writeFile(t2.path, t2.content);
            // run throttled operation
            host.runQueuedTimeoutCallbacks();

            projectService.checkNumberOfProjects({ configuredProjects: 1 });
            checkProjectActualFiles(configuredProjectAt(projectService, 0), [f1.path, t2.path, tsconfig.path]);
        });
    });

    describe("unittests:: tsserver:: resolutionCache:: tsserverProjectSystem add the missing module file for inferred project", () => {
        it("should remove the `module not found` error", () => {
            const moduleFile = {
                path: "/a/b/moduleFile.ts",
                content: "export function bar() { };"
            };
            const file1 = {
                path: "/a/b/file1.ts",
                content: "import * as T from './moduleFile'; T.bar();"
            };
            const host = createServerHost([file1]);
            const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
            openFilesForSession([file1], session);
            const getErrRequest = makeSessionRequest<server.protocol.SemanticDiagnosticsSyncRequestArgs>(
                server.CommandNames.SemanticDiagnosticsSync,
                { file: file1.path }
            );
            session.executeCommand(getErrRequest);

            host.writeFile(moduleFile.path, moduleFile.content);
            host.runQueuedTimeoutCallbacks();

            // Make a change to trigger the program rebuild
            const changeRequest = makeSessionRequest<server.protocol.ChangeRequestArgs>(
                server.CommandNames.Change,
                { file: file1.path, line: 1, offset: 44, endLine: 1, endOffset: 44, insertString: "\n" }
            );
            session.executeCommand(changeRequest);

            // Recheck
            session.executeCommand(getErrRequest);
            baselineTsserverLogs("resolutionCache", "should remove the module not found error", session);
        });

        it("npm install @types works", () => {
            const folderPath = "/a/b/projects/temp";
            const file1: File = {
                path: `${folderPath}/a.ts`,
                content: 'import f = require("pad"); f;'
            };
            const host = createServerHost([file1, libFile]);
            const session = createSession(host, { canUseEvents: true, logger: createLoggerWithInMemoryLogs(host) });
            session.executeCommandSeq<protocol.OpenRequest>({
                command: server.CommandNames.Open,
                arguments: {
                    file: file1.path,
                    fileContent: file1.content,
                    scriptKindName: "TS",
                    projectRootPath: folderPath
                }
            });

            verifyGetErrRequest({ session, host, files: [file1] });

            const padIndex: File = {
                path: `${folderPath}/node_modules/@types/pad/index.d.ts`,
                content: "export = pad;declare function pad(length: number, text: string, char ?: string): string;"
            };
            host.ensureFileOrFolder(padIndex, /*ignoreWatchInvokedWithTriggerAsFileCreate*/ true);
            host.runQueuedTimeoutCallbacks(); // Scheduled invalidation of resolutions
            host.runQueuedTimeoutCallbacks(); // Actual update
            host.runQueuedTimeoutCallbacks();
            host.runQueuedImmediateCallbacks();
            baselineTsserverLogs("resolutionCache", `npm install @types works`, session);
        });

        it("suggestion diagnostics", () => {
            const file: File = {
                path: "/a.js",
                content: "function f(p) {}",
            };

            const host = createServerHost([file]);
            const session = createSession(host, { canUseEvents: true, logger: createLoggerWithInMemoryLogs(host) });

            session.executeCommandSeq<protocol.OpenRequest>({
                command: server.CommandNames.Open,
                arguments: { file: file.path, fileContent: file.content },
            });

            host.checkTimeoutQueueLength(0);
            verifyGetErrRequest({ session, host, files: [file] });
            baselineTsserverLogs("resolutionCache", `suggestion diagnostics`, session);
        });

        it("disable suggestion diagnostics", () => {
            const file: File = {
                path: "/a.js",
                content: 'require("b")',
            };

            const host = createServerHost([file]);
            const session = createSession(host, { canUseEvents: true, logger: createLoggerWithInMemoryLogs(host) });

            session.executeCommandSeq<protocol.OpenRequest>({
                command: server.CommandNames.Open,
                arguments: { file: file.path, fileContent: file.content },
            });

            session.executeCommandSeq<protocol.ConfigureRequest>({
                command: server.CommandNames.Configure,
                arguments: {
                    preferences: { disableSuggestions: true }
                },
            });

            host.checkTimeoutQueueLength(0);
            verifyGetErrRequest({ session, host, files: [file], skip: [{ suggestion: true }] });
            baselineTsserverLogs("resolutionCache", `disable suggestion diagnostics`, session);
        });

        it("suppressed diagnostic events", () => {
            const file: File = {
                path: "/a.ts",
                content: "1 = 2;",
            };

            const host = createServerHost([file]);
            const session = createSession(host, { canUseEvents: true, suppressDiagnosticEvents: true, logger: createLoggerWithInMemoryLogs(host) });

            session.executeCommandSeq<protocol.OpenRequest>({
                command: server.CommandNames.Open,
                arguments: { file: file.path, fileContent: file.content },
            });

            host.checkTimeoutQueueLength(0);
            session.executeCommandSeq<protocol.GeterrRequest>({
                command: server.CommandNames.Geterr,
                arguments: {
                    delay: 0,
                    files: [file.path],
                }
            });

            host.checkTimeoutQueueLength(0);
            session.executeCommandSeq<protocol.GeterrForProjectRequest>({
                command: server.CommandNames.Geterr,
                arguments: {
                    delay: 0,
                    file: file.path,
                }
            });

            host.checkTimeoutQueueLength(0);
            baselineTsserverLogs("resolutionCache", "suppressed diagnostic events", session);
        });
    });

    describe("unittests:: tsserver:: resolutionCache:: tsserverProjectSystem rename a module file and rename back", () => {
        it("should restore the states for inferred projects", () => {
            const moduleFile = {
                path: "/a/b/moduleFile.ts",
                content: "export function bar() { };"
            };
            const file1 = {
                path: "/a/b/file1.ts",
                content: "import * as T from './moduleFile'; T.bar();"
            };
            const host = createServerHost([moduleFile, file1]);
            const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });

            openFilesForSession([file1], session);
            const getErrRequest = makeSessionRequest<server.protocol.SemanticDiagnosticsSyncRequestArgs>(
                server.CommandNames.SemanticDiagnosticsSync,
                { file: file1.path }
            );
            session.executeCommand(getErrRequest);

            const moduleFileNewPath = "/a/b/moduleFile1.ts";
            host.renameFile(moduleFile.path, moduleFileNewPath);
            host.runQueuedTimeoutCallbacks();
            session.executeCommand(getErrRequest);

            host.renameFile(moduleFileNewPath, moduleFile.path);
            host.runQueuedTimeoutCallbacks();

            // Make a change to trigger the program rebuild
            const changeRequest = makeSessionRequest<server.protocol.ChangeRequestArgs>(
                server.CommandNames.Change,
                { file: file1.path, line: 1, offset: 44, endLine: 1, endOffset: 44, insertString: "\n" }
            );
            session.executeCommand(changeRequest);
            host.runQueuedTimeoutCallbacks();

            session.executeCommand(getErrRequest);
            baselineTsserverLogs("resolutionCache", "renaming module should restore the states for inferred projects", session);
        });

        it("should restore the states for configured projects", () => {
            const moduleFile = {
                path: "/a/b/moduleFile.ts",
                content: "export function bar() { };"
            };
            const file1 = {
                path: "/a/b/file1.ts",
                content: "import * as T from './moduleFile'; T.bar();"
            };
            const configFile = {
                path: "/a/b/tsconfig.json",
                content: `{}`
            };
            const host = createServerHost([moduleFile, file1, configFile]);
            const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });

            openFilesForSession([file1], session);
            const getErrRequest = makeSessionRequest<server.protocol.SemanticDiagnosticsSyncRequestArgs>(
                server.CommandNames.SemanticDiagnosticsSync,
                { file: file1.path }
            );
            session.executeCommand(getErrRequest);

            const moduleFileNewPath = "/a/b/moduleFile1.ts";
            host.renameFile(moduleFile.path, moduleFileNewPath);
            host.runQueuedTimeoutCallbacks();
            session.executeCommand(getErrRequest);

            host.renameFile(moduleFileNewPath, moduleFile.path);
            host.runQueuedTimeoutCallbacks();
            session.executeCommand(getErrRequest);
            baselineTsserverLogs("resolutionCache", "renaming module should restore the states for configured projects", session);
        });

        it("should property handle missing config files", () => {
            const f1 = {
                path: "/a/b/app.ts",
                content: "let x = 1"
            };
            const config = {
                path: "/a/b/tsconfig.json",
                content: "{}"
            };
            const projectName = "project1";
            const host = createServerHost([f1]);
            const projectService = createProjectService(host);
            projectService.openExternalProject({ rootFiles: toExternalFiles([f1.path, config.path]), options: {}, projectFileName: projectName });

            // should have one external project since config file is missing
            projectService.checkNumberOfProjects({ externalProjects: 1 });

            host.writeFile(config.path, config.content);
            projectService.openExternalProject({ rootFiles: toExternalFiles([f1.path, config.path]), options: {}, projectFileName: projectName });
            projectService.checkNumberOfProjects({ configuredProjects: 1 });
        });

        it("types should load from config file path if config exists", () => {
            const f1 = {
                path: "/a/b/app.ts",
                content: "let x = 1"
            };
            const config = {
                path: "/a/b/tsconfig.json",
                content: JSON.stringify({ compilerOptions: { types: ["node"], typeRoots: [] } })
            };
            const node = {
                path: "/a/b/node_modules/@types/node/index.d.ts",
                content: "declare var process: any"
            };
            const cwd = {
                path: "/a/c"
            };
            const host = createServerHost([f1, config, node, cwd], { currentDirectory: cwd.path });
            const projectService = createProjectService(host);
            projectService.openClientFile(f1.path);
            projectService.checkNumberOfProjects({ configuredProjects: 1 });
            checkProjectActualFiles(configuredProjectAt(projectService, 0), [f1.path, node.path, config.path]);
        });
    });

    describe("unittests:: tsserver:: resolutionCache:: tsserverProjectSystem module resolution caching", () => {
        const configFile: File = {
            path: `${tscWatch.projectRoot}/tsconfig.json`,
            content: JSON.stringify({ compilerOptions: { traceResolution: true } })
        };

        function getModules(module1Path: string, module2Path: string) {
            const module1: File = {
                path: module1Path,
                content: `export function module1() {}`
            };
            const module2: File = {
                path: module2Path,
                content: `export function module2() {}`
            };
            return { module1, module2 };
        }

        describe("from files in same folder", () => {
            function getFiles(fileContent: string) {
                const file1: File = {
                    path: `${tscWatch.projectRoot}/src/file1.ts`,
                    content: fileContent
                };
                const file2: File = {
                    path: `${tscWatch.projectRoot}/src/file2.ts`,
                    content: fileContent
                };
                return { file1, file2 };
            }

            it("relative module name", () => {
                const fileContent = `import { module1 } from "./module1";import { module2 } from "../module2";`;
                const { file1, file2 } = getFiles(fileContent);
                const { module1, module2 } = getModules(`${tscWatch.projectRoot}/src/module1.ts`, `${tscWatch.projectRoot}/module2.ts`);
                const files = [module1, module2, file1, file2, configFile, libFile];
                const host = createServerHost(files);
                const service = createProjectService(host, { logger: createLoggerWithInMemoryLogs(host) });
                service.openClientFile(file1.path);

                host.writeFile(file1.path, file1.content + fileContent);
                host.writeFile(file2.path, file2.content + fileContent);
                host.runQueuedTimeoutCallbacks();

                baselineTsserverLogs("resolutionCache", "relative module name from files in same folder", service);
            });

            it("non relative module name", () => {
                const fileContent = `import { module1 } from "module1";import { module2 } from "module2";`;
                const { file1, file2 } = getFiles(fileContent);
                const { module1, module2 } = getModules(`${tscWatch.projectRoot}/src/node_modules/module1/index.ts`, `${tscWatch.projectRoot}/node_modules/module2/index.ts`);
                const files = [module1, module2, file1, file2, configFile, libFile];
                const host = createServerHost(files);
                const service = createProjectService(host, { logger: createLoggerWithInMemoryLogs(host) });
                service.openClientFile(file1.path);

                host.writeFile(file1.path, file1.content + fileContent);
                host.writeFile(file2.path, file2.content + fileContent);
                host.runQueuedTimeoutCallbacks();
                baselineTsserverLogs("resolutionCache", "non relative module name from files in same folder", service);
            });
        });

        describe("from files in different folders", () => {
            function getFiles(fileContent1: string, fileContent2 = fileContent1, fileContent3 = fileContent1, fileContent4 = fileContent1) {
                const file1: File = {
                    path: `${tscWatch.projectRoot}/product/src/file1.ts`,
                    content: fileContent1
                };
                const file2: File = {
                    path: `${tscWatch.projectRoot}/product/src/feature/file2.ts`,
                    content: fileContent2
                };
                const file3: File = {
                    path: `${tscWatch.projectRoot}/product/test/src/file3.ts`,
                    content: fileContent3
                };
                const file4: File = {
                    path: `${tscWatch.projectRoot}/product/test/file4.ts`,
                    content: fileContent4
                };
                return { file1, file2, file3, file4 };
            }

            it("relative module name", () => {
                const fileContent1 = `import { module1 } from "./module1";import { module2 } from "../module2";`;
                const fileContent2 = `import { module1 } from "../module1";import { module2 } from "../../module2";`;
                const fileContent3 = `import { module1 } from "../../src/module1";import { module2 } from "../../module2";`;
                const fileContent4 = `import { module1 } from "../src/module1}";import { module2 } from "../module2";`;
                const { file1, file2, file3, file4 } = getFiles(fileContent1, fileContent2, fileContent3, fileContent4);
                const { module1, module2 } = getModules(`${tscWatch.projectRoot}/product/src/module1.ts`, `${tscWatch.projectRoot}/product/module2.ts`);
                const files = [module1, module2, file1, file2, file3, file4, configFile, libFile];
                const host = createServerHost(files);
                const service = createProjectService(host, { logger: createLoggerWithInMemoryLogs(host) });
                service.openClientFile(file1.path);

                host.writeFile(file1.path, file1.content + fileContent1);
                host.writeFile(file2.path, file2.content + fileContent2);
                host.writeFile(file3.path, file3.content + fileContent3);
                host.writeFile(file4.path, file4.content + fileContent4);
                host.runQueuedTimeoutCallbacks();
                baselineTsserverLogs("resolutionCache", "relative module name from files in different folders", service);
            });

            it("non relative module name", () => {
                const fileContent = `import { module1 } from "module1";import { module2 } from "module2";`;
                const { file1, file2, file3, file4 } = getFiles(fileContent);
                const { module1, module2 } = getModules(`${tscWatch.projectRoot}/product/node_modules/module1/index.ts`, `${tscWatch.projectRoot}/node_modules/module2/index.ts`);
                const files = [module1, module2, file1, file2, file3, file4, configFile, libFile];
                const host = createServerHost(files);
                const service = createProjectService(host, { logger: createLoggerWithInMemoryLogs(host) });
                service.openClientFile(file1.path);

                host.writeFile(file1.path, file1.content + fileContent);
                host.writeFile(file2.path, file2.content + fileContent);
                host.writeFile(file3.path, file3.content + fileContent);
                host.writeFile(file4.path, file4.content + fileContent);
                host.runQueuedTimeoutCallbacks();
                baselineTsserverLogs("resolutionCache", "non relative module name from files in different folders", service);
            });

            it("non relative module name from inferred project", () => {
                const module1Name = "module1";
                const module2Name = "module2";
                const file2Name = "./feature/file2";
                const file3Name = "../test/src/file3";
                const file4Name = "../test/file4";
                const importModuleContent = `import { module1 } from "${module1Name}";import { module2 } from "${module2Name}";`;
                const { file1, file2, file3, file4 } = getFiles(`import "${file2Name}"; import "${file4Name}"; import "${file3Name}"; ${importModuleContent}`, importModuleContent, importModuleContent, importModuleContent);
                const { module1, module2 } = getModules(`${tscWatch.projectRoot}/product/node_modules/module1/index.ts`, `${tscWatch.projectRoot}/node_modules/module2/index.ts`);
                const files = [module1, module2, file1, file2, file3, file4, libFile];
                const host = createServerHost(files);
                const service = createProjectService(host, { logger: createLoggerWithInMemoryLogs(host) });
                service.setCompilerOptionsForInferredProjects({ traceResolution: true });
                service.openClientFile(file1.path);
                host.writeFile(file1.path, file1.content + importModuleContent);
                host.writeFile(file2.path, file2.content + importModuleContent);
                host.writeFile(file3.path, file3.content + importModuleContent);
                host.writeFile(file4.path, file4.content + importModuleContent);
                host.runQueuedTimeoutCallbacks();
                baselineTsserverLogs("resolutionCache", "non relative module name from inferred project", service);
            });
        });

        describe("when watching directories for failed lookup locations in amd resolution", () => {
            function verifyModuleResolution(scenario: string, useNodeFile: boolean) {
                it(scenario, () => {
                    const nodeFile: File = {
                        path: `${tscWatch.projectRoot}/src/typings/node.d.ts`,
                        content: `
declare module "fs" {
    export interface something {
    }
}`
                    };
                    const electronFile: File = {
                        path: `${tscWatch.projectRoot}/src/typings/electron.d.ts`,
                        content: `
declare module 'original-fs' {
    import * as fs from 'fs';
    export = fs;
}`
                    };
                    const srcFile: File = {
                        path: `${tscWatch.projectRoot}/src/somefolder/srcfile.ts`,
                        content: `
import { x } from "somefolder/module1";
import { x } from "somefolder/module2";
const y = x;`
                    };
                    const moduleFile: File = {
                        path: `${tscWatch.projectRoot}/src/somefolder/module1.ts`,
                        content: `
export const x = 10;`
                    };
                    const configFile: File = {
                        path: `${tscWatch.projectRoot}/src/tsconfig.json`,
                        content: JSON.stringify({
                            compilerOptions: {
                                module: "amd",
                                moduleResolution: "classic",
                                target: "es5",
                                outDir: "../out",
                                baseUrl: "./",
                                typeRoots: ["typings"]
                            }
                        })
                    };

                    const files = [...(useNodeFile ? [nodeFile] : []), electronFile, srcFile, moduleFile, configFile, libFile];
                    const host = createServerHost(files);
                    const service = createProjectService(host, { logger: createLoggerWithInMemoryLogs(host) });
                    service.openClientFile(srcFile.path, srcFile.content, ScriptKind.TS, tscWatch.projectRoot);
                    baselineTsserverLogs("resolutionCache", scenario, service);
                });
            }
            verifyModuleResolution("when resolves to ambient module", /*useNodeFile*/ true);
            verifyModuleResolution("when resolution fails", /*useNodeFile*/ false);
        });

        describe("ignores files/folder changes in node_modules that start with '.'", () => {
            const npmCacheFile: File = {
                path: `${tscWatch.projectRoot}/node_modules/.cache/babel-loader/89c02171edab901b9926470ba6d5677e.ts`,
                content: JSON.stringify({ something: 10 })
            };
            const file1: File = {
                path: `${tscWatch.projectRoot}/test.ts`,
                content: `import { x } from "somemodule";`
            };
            const file2: File = {
                path: `${tscWatch.projectRoot}/node_modules/somemodule/index.d.ts`,
                content: `export const x = 10;`
            };
            it("when watching node_modules in inferred project for failed lookup/closed script infos", () => {
                const files = [libFile, file1, file2];
                const host = createServerHost(files);
                const service = createProjectService(host);
                service.openClientFile(file1.path);
                checkNumberOfProjects(service, { inferredProjects: 1 });
                const project = service.inferredProjects[0];
                checkProjectActualFiles(project, files.map(f => f.path));
                host.checkTimeoutQueueLength(0);

                host.ensureFileOrFolder(npmCacheFile);
                host.checkTimeoutQueueLength(0);
            });
            it("when watching node_modules as part of wild card directories in config project", () => {
                const config: File = {
                    path: `${tscWatch.projectRoot}/tsconfig.json`,
                    content: "{}"
                };
                const files = [libFile, file1, file2, config];
                const host = createServerHost(files);
                const service = createProjectService(host);
                service.openClientFile(file1.path);
                checkNumberOfProjects(service, { configuredProjects: 1 });
                const project = Debug.checkDefined(service.configuredProjects.get(config.path));
                checkProjectActualFiles(project, files.map(f => f.path));
                host.checkTimeoutQueueLength(0);

                host.ensureFileOrFolder(npmCacheFile);
                host.checkTimeoutQueueLength(0);
            });
        });

        describe("avoid unnecessary invalidation", () => {
            it("unnecessary lookup invalidation on save", () => {
                const fileContent = `import { module1 } from "module1";import { module2 } from "module2";`;
                const file1: File = {
                    path: `${tscWatch.projectRoot}/src/file1.ts`,
                    content: fileContent
                };
                const { module1, module2 } = getModules(`${tscWatch.projectRoot}/src/node_modules/module1/index.ts`, `${tscWatch.projectRoot}/node_modules/module2/index.ts`);
                const files = [module1, module2, file1, configFile, libFile];
                const host = createServerHost(files);
                const service = createProjectService(host, { logger: createLoggerWithInMemoryLogs(host) });
                service.openClientFile(file1.path);

                // invoke callback to simulate saving
                host.modifyFile(file1.path, file1.content, { invokeFileDeleteCreateAsPartInsteadOfChange: true });
                host.checkTimeoutQueueLengthAndRun(0);
                baselineTsserverLogs("resolutionCache", "avoid unnecessary lookup invalidation on save", service);
            });
        });
    });
}
