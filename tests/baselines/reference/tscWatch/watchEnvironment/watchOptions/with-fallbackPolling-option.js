Input::
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

//// [/a/b/commonFile1.ts]
let x = 1

//// [/a/b/commonFile2.ts]
let y = 1

//// [/a/b/tsconfig.json]
{"watchOptions":{"fallbackPolling":"PriorityInterval"}}


/a/lib/tsc.js -w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:17 AM[0m] Starting compilation in watch mode...

sysLog:: /a/b/tsconfig.json:: Changing to watchFile
sysLog:: /a/b/commonFile1.ts:: Changing to watchFile
sysLog:: /a/b/commonFile2.ts:: Changing to watchFile
sysLog:: /a/lib/lib.d.ts:: Changing to watchFile
[[90m12:00:22 AM[0m] Found 0 errors. Watching for file changes.

sysLog:: /a/b:: Changing to watchFile


Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/commonfile1.ts (used version)
/a/b/commonfile2.ts (used version)

PolledWatches::
/a/b/tsconfig.json:
  {"pollingInterval":2000}
/a/b/commonfile1.ts:
  {"pollingInterval":250}
/a/b/commonfile2.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}
/a/b/node_modules/@types:
  {"pollingInterval":500}
/a/b:
  {"pollingInterval":500}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js]
var x = 1;


//// [/a/b/commonFile2.js]
var y = 1;


