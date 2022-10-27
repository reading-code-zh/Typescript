Info 0    [00:00:43.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:00:44.000] request:
    {
      "seq": 0,
      "type": "request",
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/packages/A/src/index.ts"
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

//// [/user/username/projects/myproject/packages/B/package.json]
{"main":"lib/index.js","types":"lib/index.d.ts"}

//// [/user/username/projects/myproject/packages/A/tsconfig.json]
{"compilerOptions":{"outDir":"lib","rootDir":"src","composite":true},"include":["src"],"references":[{"path":"../B"}]}

//// [/user/username/projects/myproject/packages/B/tsconfig.json]
{"compilerOptions":{"outDir":"lib","rootDir":"src","composite":true},"include":["src"]}

//// [/user/username/projects/myproject/packages/A/src/index.ts]
import { foo } from 'b';
import { bar } from 'b/lib/bar';
foo();
bar();


//// [/user/username/projects/myproject/packages/B/src/index.ts]
export function foo() { }

//// [/user/username/projects/myproject/packages/B/src/bar.ts]
export function bar() { }

//// [/user/username/projects/myproject/node_modules/b] symlink(/user/username/projects/myproject/packages/B)

PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 2    [00:00:45.000] Search path: /user/username/projects/myproject/packages/A/src
Info 3    [00:00:46.000] For info: /user/username/projects/myproject/packages/A/src/index.ts :: Config file name: /user/username/projects/myproject/packages/A/tsconfig.json
Info 4    [00:00:47.000] Creating configuration project /user/username/projects/myproject/packages/A/tsconfig.json
Info 5    [00:00:48.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/A/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Config file
Info 6    [00:00:49.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/myproject/packages/A/tsconfig.json","reason":"Creating possible configured project for /user/username/projects/myproject/packages/A/src/index.ts to open"}}
Info 7    [00:00:50.000] Config: /user/username/projects/myproject/packages/A/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/packages/A/src/index.ts"
 ],
 "options": {
  "outDir": "/user/username/projects/myproject/packages/A/lib",
  "rootDir": "/user/username/projects/myproject/packages/A/src",
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/packages/A/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/packages/B",
   "originalPath": "../B"
  }
 ]
}
Info 8    [00:00:51.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/a/src 1 undefined Config: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Wild card directory
Info 9    [00:00:52.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/a/src 1 undefined Config: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Wild card directory
Info 10   [00:00:53.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/packages/A/tsconfig.json
Info 11   [00:00:54.000] Config: /user/username/projects/myproject/packages/B/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/packages/B/src/bar.ts",
  "/user/username/projects/myproject/packages/B/src/index.ts"
 ],
 "options": {
  "outDir": "/user/username/projects/myproject/packages/B/lib",
  "rootDir": "/user/username/projects/myproject/packages/B/src",
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/packages/B/tsconfig.json"
 }
}
Info 12   [00:00:55.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/B/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Config file
Info 13   [00:00:56.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/b/src 1 undefined Config: /user/username/projects/myproject/packages/B/tsconfig.json WatchType: Wild card directory
Info 14   [00:00:57.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/b/src 1 undefined Config: /user/username/projects/myproject/packages/B/tsconfig.json WatchType: Wild card directory
Info 15   [00:00:58.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/B/src/index.ts 500 undefined WatchType: Closed Script info
Info 16   [00:00:59.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/B/src/bar.ts 500 undefined WatchType: Closed Script info
Info 17   [00:01:00.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 18   [00:01:01.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/A/src 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Failed Lookup Locations
Info 19   [00:01:02.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/A/src 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Failed Lookup Locations
Info 20   [00:01:03.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/A/node_modules 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Failed Lookup Locations
Info 21   [00:01:04.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/A/node_modules 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Failed Lookup Locations
Info 22   [00:01:05.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/node_modules 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Failed Lookup Locations
Info 23   [00:01:06.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/node_modules 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Failed Lookup Locations
Info 24   [00:01:07.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Failed Lookup Locations
Info 25   [00:01:08.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Failed Lookup Locations
Info 26   [00:01:09.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/B/package.json 2000 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: File location affecting resolution
Info 27   [00:01:10.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/A/node_modules/@types 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Type roots
Info 28   [00:01:11.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/A/node_modules/@types 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Type roots
Info 29   [00:01:12.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/node_modules/@types 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Type roots
Info 30   [00:01:13.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/packages/node_modules/@types 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Type roots
Info 31   [00:01:14.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Type roots
Info 32   [00:01:15.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/packages/A/tsconfig.json WatchType: Type roots
Info 33   [00:01:16.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/packages/A/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 34   [00:01:17.000] Project '/user/username/projects/myproject/packages/A/tsconfig.json' (Configured)
Info 35   [00:01:18.000] 	Files (4)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/packages/B/src/index.ts
	/user/username/projects/myproject/packages/B/src/bar.ts
	/user/username/projects/myproject/packages/A/src/index.ts


	../../../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	../B/src/index.ts
	  Imported via 'b' from file 'src/index.ts'
	../B/src/bar.ts
	  Imported via 'b/lib/bar' from file 'src/index.ts'
	src/index.ts
	  Matched by include pattern 'src' in 'tsconfig.json'

Info 36   [00:01:19.000] -----------------------------------------------
Info 37   [00:01:20.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/myproject/packages/A/tsconfig.json"}}
Info 38   [00:01:21.000] event:
    {"seq":0,"type":"event","event":"telemetry","body":{"telemetryEventName":"projectInfo","payload":{"projectId":"8c5cfb88fb6a6125ddaca4c198af63d261c8feb2786e348cbf3223fcf8461e16","fileStats":{"js":0,"jsSize":0,"jsx":0,"jsxSize":0,"ts":3,"tsSize":122,"tsx":0,"tsxSize":0,"dts":1,"dtsSize":334,"deferred":0,"deferredSize":0},"compilerOptions":{"outDir":"","rootDir":"","composite":true},"typeAcquisition":{"enable":false,"include":false,"exclude":false},"extends":false,"files":false,"include":true,"exclude":false,"compileOnSave":false,"configFileName":"tsconfig.json","projectType":"configured","languageServiceEnabled":true,"version":"FakeVersion"}}}
Info 39   [00:01:22.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/user/username/projects/myproject/packages/A/src/index.ts","configFile":"/user/username/projects/myproject/packages/A/tsconfig.json","diagnostics":[]}}
Info 40   [00:01:23.000] Search path: /user/username/projects/myproject/packages/A
Info 41   [00:01:24.000] For info: /user/username/projects/myproject/packages/A/tsconfig.json :: No config files found.
Info 42   [00:01:25.000] Project '/user/username/projects/myproject/packages/A/tsconfig.json' (Configured)
Info 42   [00:01:26.000] 	Files (4)

Info 42   [00:01:27.000] -----------------------------------------------
Info 42   [00:01:28.000] Open files: 
Info 42   [00:01:29.000] 	FileName: /user/username/projects/myproject/packages/A/src/index.ts ProjectRootPath: undefined
Info 42   [00:01:30.000] 		Projects: /user/username/projects/myproject/packages/A/tsconfig.json
After request

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 42   [00:01:31.000] response:
    {
      "responseRequired": false
    }
Info 43   [00:01:32.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/packages/A/src/index.ts"
        ]
      },
      "seq": 1,
      "type": "request"
    }
Before request

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

After request

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 44   [00:01:33.000] response:
    {
      "responseRequired": false
    }
Before checking timeout queue length (1) and running

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 45   [00:01:34.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/packages/A/src/index.ts","diagnostics":[]}}
After checking timeout queue length (1) and running

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Before running immediate callbacks and checking length (1)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 46   [00:01:35.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/packages/A/src/index.ts","diagnostics":[]}}
Before running immediate callbacks and checking length (1)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Before running immediate callbacks and checking length (1)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 47   [00:01:36.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/packages/A/src/index.ts","diagnostics":[]}}
Info 48   [00:01:37.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":1}}
Before running immediate callbacks and checking length (1)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 49   [00:01:38.000] request:
    {
      "command": "updateOpen",
      "arguments": {
        "changedFiles": [
          {
            "fileName": "/user/username/projects/myproject/packages/A/src/index.ts",
            "textChanges": [
              {
                "newText": "\n",
                "start": {
                  "line": 5,
                  "offset": 1
                },
                "end": {
                  "line": 5,
                  "offset": 1
                }
              }
            ]
          }
        ]
      },
      "seq": 2,
      "type": "request"
    }
Before request

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

After request

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 50   [00:01:39.000] response:
    {
      "response": true,
      "responseRequired": true
    }
Info 51   [00:01:40.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/packages/A/src/index.ts"
        ]
      },
      "seq": 3,
      "type": "request"
    }
Before request

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

After request

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 52   [00:01:41.000] response:
    {
      "responseRequired": false
    }
Before checking timeout queue length (1) and running

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 53   [00:01:42.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/packages/A/tsconfig.json
Info 54   [00:01:43.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/packages/A/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 55   [00:01:44.000] Different program with same set of files
Info 56   [00:01:45.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/packages/A/src/index.ts","diagnostics":[]}}
After checking timeout queue length (1) and running

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Before running immediate callbacks and checking length (1)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 57   [00:01:46.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/packages/A/src/index.ts","diagnostics":[]}}
Before running immediate callbacks and checking length (1)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Before running immediate callbacks and checking length (1)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

Info 58   [00:01:47.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/packages/A/src/index.ts","diagnostics":[]}}
Info 59   [00:01:48.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":3}}
Before running immediate callbacks and checking length (1)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/node_modules:
  {}
