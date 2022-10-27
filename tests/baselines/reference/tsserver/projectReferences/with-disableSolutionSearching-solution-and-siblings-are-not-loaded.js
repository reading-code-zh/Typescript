Info 0    [00:00:34.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:00:35.000] request:
    {
      "seq": 0,
      "type": "request",
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/solution/compiler/program.ts"
      }
    }
Before request
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/solution/tsconfig.json]
{"files":[],"include":[],"references":[{"path":"./compiler"},{"path":"./services"}]}

//// [/user/username/projects/solution/compiler/tsconfig.json]
{"compilerOptions":{"composite":true,"module":"none","disableSolutionSearching":true},"files":["./types.ts","./program.ts"]}

//// [/user/username/projects/solution/compiler/types.ts]

                namespace ts {
                    export interface Program {
                        getSourceFiles(): string[];
                    }
                }

//// [/user/username/projects/solution/compiler/program.ts]

                namespace ts {
                    export const program: Program = {
                        getSourceFiles: () => [getSourceFile()]
                    };
                    function getSourceFile() { return "something"; }
                }

//// [/user/username/projects/solution/services/tsconfig.json]
{"compilerOptions":{"composite":true},"files":["./services.ts"],"references":[{"path":"../compiler"}]}

//// [/user/username/projects/solution/services/services.ts]

                namespace ts {
                    const result = program.getSourceFiles();
                }


PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 2    [00:00:36.000] Search path: /user/username/projects/solution/compiler
Info 3    [00:00:37.000] For info: /user/username/projects/solution/compiler/program.ts :: Config file name: /user/username/projects/solution/compiler/tsconfig.json
Info 4    [00:00:38.000] Creating configuration project /user/username/projects/solution/compiler/tsconfig.json
Info 5    [00:00:39.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/compiler/tsconfig.json 2000 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Config file
Info 6    [00:00:40.000] Config: /user/username/projects/solution/compiler/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/solution/compiler/types.ts",
  "/user/username/projects/solution/compiler/program.ts"
 ],
 "options": {
  "composite": true,
  "module": 0,
  "disableSolutionSearching": true,
  "configFilePath": "/user/username/projects/solution/compiler/tsconfig.json"
 }
}
Info 7    [00:00:41.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/compiler/types.ts 500 undefined WatchType: Closed Script info
Info 8    [00:00:42.000] Starting updateGraphWorker: Project: /user/username/projects/solution/compiler/tsconfig.json
Info 9    [00:00:43.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 10   [00:00:44.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/compiler/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info 11   [00:00:45.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/compiler/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info 12   [00:00:46.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info 13   [00:00:47.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/compiler/tsconfig.json WatchType: Type roots
Info 14   [00:00:48.000] Finishing updateGraphWorker: Project: /user/username/projects/solution/compiler/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 15   [00:00:49.000] Project '/user/username/projects/solution/compiler/tsconfig.json' (Configured)
Info 16   [00:00:50.000] 	Files (3)
	/a/lib/lib.d.ts
	/user/username/projects/solution/compiler/types.ts
	/user/username/projects/solution/compiler/program.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	types.ts
	  Part of 'files' list in tsconfig.json
	program.ts
	  Part of 'files' list in tsconfig.json

Info 17   [00:00:51.000] -----------------------------------------------
Info 18   [00:00:52.000] Project '/user/username/projects/solution/compiler/tsconfig.json' (Configured)
Info 18   [00:00:53.000] 	Files (3)

Info 18   [00:00:54.000] -----------------------------------------------
Info 18   [00:00:55.000] Open files: 
Info 18   [00:00:56.000] 	FileName: /user/username/projects/solution/compiler/program.ts ProjectRootPath: undefined
Info 18   [00:00:57.000] 		Projects: /user/username/projects/solution/compiler/tsconfig.json
After request

PolledWatches::
/user/username/projects/solution/compiler/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/solution/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/solution/compiler/tsconfig.json:
  {}
/user/username/projects/solution/compiler/types.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 18   [00:00:58.000] response:
    {
      "responseRequired": false
    }
Info 19   [00:00:59.000] request:
    {
      "command": "references",
      "arguments": {
        "file": "/user/username/projects/solution/compiler/program.ts",
        "line": 4,
        "offset": 25
      },
      "seq": 1,
      "type": "request"
    }
Before request

PolledWatches::
/user/username/projects/solution/compiler/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/solution/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/solution/compiler/tsconfig.json:
  {}
/user/username/projects/solution/compiler/types.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 20   [00:01:00.000] Finding references to /user/username/projects/solution/compiler/program.ts position 110 in project /user/username/projects/solution/compiler/tsconfig.json
After request

PolledWatches::
/user/username/projects/solution/compiler/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/solution/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/solution/compiler/tsconfig.json:
  {}
/user/username/projects/solution/compiler/types.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 21   [00:01:01.000] response:
    {
      "response": {
        "refs": [
          {
            "file": "/user/username/projects/solution/compiler/types.ts",
            "start": {
              "line": 4,
              "offset": 25
            },
            "end": {
              "line": 4,
              "offset": 39
            },
            "contextStart": {
              "line": 4,
              "offset": 25
            },
            "contextEnd": {
              "line": 4,
              "offset": 52
            },
            "lineText": "                        getSourceFiles(): string[];",
            "isWriteAccess": false,
            "isDefinition": false
          },
          {
            "file": "/user/username/projects/solution/compiler/program.ts",
            "start": {
              "line": 4,
              "offset": 25
            },
            "end": {
              "line": 4,
              "offset": 39
            },
            "contextStart": {
              "line": 4,
              "offset": 25
            },
            "contextEnd": {
              "line": 4,
              "offset": 64
            },
            "lineText": "                        getSourceFiles: () => [getSourceFile()]",
            "isWriteAccess": true,
            "isDefinition": true
          }
        ],
        "symbolName": "getSourceFiles",
        "symbolStartOffset": 25,
        "symbolDisplayString": "(method) ts.Program.getSourceFiles(): string[]"
      },
      "responseRequired": true
    }