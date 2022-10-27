Input::
//// [/a/b/f1.ts]
let x = 1

//// [/a/b/f2.ts]
let y = 1

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

//// [/a/b/tsconfig.json]
{"compilerOptions":{},"files":["f1.ts","f2.ts"]}


/a/lib/tsc.js -w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:17 AM[0m] Starting compilation in watch mode...

[[90m12:00:22 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/f1.ts","/a/b/f2.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/f1.ts
/a/b/f2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/f1.ts
/a/b/f2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/f1.ts (used version)
/a/b/f2.ts (used version)

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/f1.ts:
  {}
/a/b/f2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/f1.js]
var x = 1;


//// [/a/b/f2.js]
var y = 1;



Change:: Modify config to set outFile option

Input::
//// [/a/b/tsconfig.json]
{"compilerOptions":{"outFile":"out.js"},"files":["f1.ts","f2.ts"]}


Output::
>> Screen clear
[[90m12:00:26 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:29 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/f1.ts","/a/b/f2.ts"]
Program options: {"outFile":"/a/b/out.js","watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/a/b/f1.ts
/a/b/f2.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/f1.ts:
  {}
/a/b/f2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/out.js]
var x = 1;
var y = 1;


