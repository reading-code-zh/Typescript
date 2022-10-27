namespace ts.projectSystem {
    describe("unittests:: tsserver:: with project references and compile on save", () => {
        const dependecyLocation = `${tscWatch.projectRoot}/dependency`;
        const usageLocation = `${tscWatch.projectRoot}/usage`;
        const dependencyTs: File = {
            path: `${dependecyLocation}/fns.ts`,
            content: `export function fn1() { }
export function fn2() { }
`
        };
        const dependencyConfig: File = {
            path: `${dependecyLocation}/tsconfig.json`,
            content: JSON.stringify({
                compilerOptions: { composite: true, declarationDir: "../decls" },
                compileOnSave: true
            })
        };
        const usageTs: File = {
            path: `${usageLocation}/usage.ts`,
            content: `import {
    fn1,
    fn2,
} from '../decls/fns'
fn1();
fn2();
`
        };
        const usageConfig: File = {
            path: `${usageLocation}/tsconfig.json`,
            content: JSON.stringify({
                compileOnSave: true,
                references: [{ path: "../dependency" }]
            })
        };

        const localChange = "function fn3() { }";
        const change = `export ${localChange}`;

        describe("when dependency project is not open", () => {
            describe("Of usageTs", () => {
                it("with initial file open, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage", session);
                });
                it("with initial file open, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage with project", session);
                });
                it("with local change to dependency, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    host.writeFile(dependencyTs.path, `${dependencyTs.content}${localChange}`);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage and local change to dependency", session);
                });
                it("with local change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    host.writeFile(dependencyTs.path, `${dependencyTs.content}${localChange}`);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage with project and local change to dependency", session);
                });
                it("with local change to usage, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage and local change to usage", session);
                });
                it("with local change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage with project and local change to usage", session);
                });
                it("with change to dependency, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    host.writeFile(dependencyTs.path, `${dependencyTs.content}${change}`);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage and change to depenedency", session);
                });
                it("with change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    host.writeFile(dependencyTs.path, `${dependencyTs.content}${change}`);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage with project and change to depenedency", session);
                });
                it("with change to usage, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage and change to usage", session);
                });
                it("with change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on usage with project and change to usage", session);
                });
            });

            describe("Of dependencyTs in usage project", () => {
                it("with initial file open, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency", session);
                });
                it("with initial file open, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency with project", session);
                });
                it("with local change to dependency, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    host.writeFile(dependencyTs.path, `${dependencyTs.content}${localChange}`);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency and local change to dependency", session);
                });
                it("with local change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    host.writeFile(dependencyTs.path, `${dependencyTs.content}${localChange}`);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency with project and local change to dependency", session);
                });
                it("with local change to usage, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency and local change to usage", session);
                });
                it("with local change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency with project and local change to usage", session);
                });
                it("with change to dependency, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    host.writeFile(dependencyTs.path, `${dependencyTs.content}${change}`);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency and change to dependency", session);
                });
                it("with change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    host.writeFile(dependencyTs.path, `${dependencyTs.content}${change}`);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency with project and change to dependency", session);
                });
                it("with change to usage, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency and change to usage", session);
                });
                it("with change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "when dependency project is not open and save on dependency with project and change to usage", session);
                });
            });
        });

        describe("when the depedency file is open", () => {
            describe("Of usageTs", () => {
                it("with initial file open, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage", session);
                });
                it("with initial file open, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage with project", session);
                });
                it("with local change to dependency, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage and local change to dependency", session);
                });
                it("with local change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage and local change to dependency with file", session);
                });
                it("with local change to usage, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage and local change to usage", session);
                });
                it("with local change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage and local change to usage with project", session);
                });
                it("with change to dependency, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage and change to dependency", session);
                });
                it("with change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage with project and change to dependency", session);
                });
                it("with change to usage, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage and change to usage", session);
                });
                it("with change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: usageTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on usage with project and change to usage", session);
                });
            });

            describe("Of dependencyTs in usage project", () => {
                it("with initial file open, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with usage project", session);
                });
                it("with local change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with usage project and local change to dependency", session);
                });
                it("with local change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with usage project and local change to usage", session);
                });
                it("with change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with usage project and change to dependency", session);
                });
                it("with change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: usageConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with usage project and change to usage", session);
                });
            });

            describe("Of dependencyTs", () => {
                it("with initial file open, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency", session);
                });
                it("with initial file open, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with project", session);
                });
                it("with local change to dependency, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency and local change to dependency", session);
                });
                it("with local change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with project and local change to dependency", session);
                });
                it("with local change to usage, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency and local change to usage", session);
                });
                it("with local change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: localChange
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with project and local change to usage", session);
                });
                it("with change to dependency, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency and change to dependency", session);
                });
                it("with change to dependency, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(dependencyTs.content);
                    const location = toLocation(dependencyTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: dependencyTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with project and change to dependency", session);
                });
                it("with change to usage, without specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency and change to usage", session);
                });
                it("with change to usage, with specifying project file", () => {
                    const host = createServerHost([dependencyTs, dependencyConfig, usageTs, usageConfig, libFile]);
                    const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                    openFilesForSession([usageTs, dependencyTs], session);

                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path }
                    });
                    const toLocation = protocolToLocation(usageTs.content);
                    const location = toLocation(usageTs.content.length);
                    session.executeCommandSeq<protocol.ChangeRequest>({
                        command: protocol.CommandTypes.Change,
                        arguments: {
                            file: usageTs.path,
                            ...location,
                            endLine: location.line,
                            endOffset: location.offset,
                            insertString: change
                        }
                    });

                    // Verify CompileOnSaveAffectedFileList
                    session.executeCommandSeq<protocol.CompileOnSaveAffectedFileListRequest>({
                        command: protocol.CommandTypes.CompileOnSaveAffectedFileList,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify CompileOnSaveEmit
                    session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                        command: protocol.CommandTypes.CompileOnSaveEmitFile,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });

                    // Verify EmitOutput
                    session.executeCommandSeq<protocol.EmitOutputRequest>({
                        command: protocol.CommandTypes.EmitOutput,
                        arguments: { file: dependencyTs.path, projectFileName: dependencyConfig.path }
                    });
                    baselineTsserverLogs("projectReferenceCompileOnSave", "save on dependency with project and change to usage", session);
                });
            });
        });
    });

    describe("unittests:: tsserver:: with project references and compile on save with external projects", () => {
        it("compile on save emits same output as project build", () => {
            const tsbaseJson: File = {
                path: `${tscWatch.projectRoot}/tsbase.json`,
                content: JSON.stringify({
                    compileOnSave: true,
                    compilerOptions: {
                        module: "none",
                        composite: true
                    }
                })
            };
            const buttonClass = `${tscWatch.projectRoot}/buttonClass`;
            const buttonConfig: File = {
                path: `${buttonClass}/tsconfig.json`,
                content: JSON.stringify({
                    extends: "../tsbase.json",
                    compilerOptions: {
                        outFile: "Source.js"
                    },
                    files: ["Source.ts"]
                })
            };
            const buttonSource: File = {
                path: `${buttonClass}/Source.ts`,
                content: `module Hmi {
    export class Button {
        public static myStaticFunction() {
        }
    }
}`
            };

            const siblingClass = `${tscWatch.projectRoot}/SiblingClass`;
            const siblingConfig: File = {
                path: `${siblingClass}/tsconfig.json`,
                content: JSON.stringify({
                    extends: "../tsbase.json",
                    references: [{
                        path: "../buttonClass/"
                    }],
                    compilerOptions: {
                        outFile: "Source.js"
                    },
                    files: ["Source.ts"]
                })
            };
            const siblingSource: File = {
                path: `${siblingClass}/Source.ts`,
                content: `module Hmi {
    export class Sibling {
        public mySiblingFunction() {
        }
    }
}`
            };
            const host = createServerHost([libFile, tsbaseJson, buttonConfig, buttonSource, siblingConfig, siblingSource], { useCaseSensitiveFileNames: true });

            // ts build should succeed
            tscWatch.ensureErrorFreeBuild(host, [siblingConfig.path]);

            const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
            openFilesForSession([siblingSource], session);

            session.executeCommandSeq<protocol.CompileOnSaveEmitFileRequest>({
                command: protocol.CommandTypes.CompileOnSaveEmitFile,
                arguments: {
                    file: siblingSource.path,
                    projectFileName: siblingConfig.path
                }
            });
            baselineTsserverLogs("projectReferenceCompileOnSave", "compile on save emits same output as project build with external project", session);
        });
    });
}