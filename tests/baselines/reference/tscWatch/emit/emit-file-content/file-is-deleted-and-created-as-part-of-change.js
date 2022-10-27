Input::
//// [/home/username/project/app/file.ts]
var a = 10;

//// [/home/username/project/tsconfig.json]
{"include":["app/**/*.ts"]}

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


/a/lib/tsc.js -w
Output::
>> Screen clear
[[90m12:00:21 AM[0m] Starting compilation in watch mode...

[[90m12:00:24 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/home/username/project/app/file.ts"]
Program options: {"watch":true,"configFilePath":"/home/username/project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/home/username/project/app/file.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/home/username/project/app/file.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/home/username/project/app/file.ts (used version)

PolledWatches::
/home/username/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/home/username/project/tsconfig.json:
  {}
/home/username/project/app/file.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/home/username/project/app:
  {}

exitCode:: ExitStatus.undefined

//// [/home/username/project/app/file.js]
var a = 10;



Change:: file is deleted and then created to modify content

Input::
//// [/home/username/project/app/file.ts]
var a = 10;
var b = 10;


Output::
>> Screen clear
[[90m12:00:28 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:32 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/home/username/project/app/file.ts"]
Program options: {"watch":true,"configFilePath":"/home/username/project/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/home/username/project/app/file.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/home/username/project/app/file.ts

Shape signatures in builder refreshed for::
/home/username/project/app/file.ts (computed .d.ts)

PolledWatches::
/home/username/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/home/username/project/tsconfig.json:
  {}
/home/username/project/app/file.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/home/username/project/app:
  {}

exitCode:: ExitStatus.undefined

//// [/home/username/project/app/file.js]
var a = 10;
var b = 10;


