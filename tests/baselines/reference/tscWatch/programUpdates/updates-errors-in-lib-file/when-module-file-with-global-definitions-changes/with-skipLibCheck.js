Input::
//// [/user/username/projects/myproject/a.ts]
export {}
declare global {
interface Document {
    fullscreen: boolean;
}
var y: number;
}

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
interface Document {
    readonly fullscreen: boolean;
}


/a/lib/tsc.js -w /user/username/projects/myproject/a.ts --skipLibCheck
Output::
>> Screen clear
[[90m12:00:19 AM[0m] Starting compilation in watch mode...

[96ma.ts[0m:[93m4[0m:[93m5[0m - [91merror[0m[90m TS2687: [0mAll declarations of 'fullscreen' must have identical modifiers.

[7m4[0m     fullscreen: boolean;
[7m [0m [91m    ~~~~~~~~~~[0m

[[90m12:00:22 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"watch":true,"skipLibCheck":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/a.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;



Change:: Remove document declaration from file

Input::
//// [/user/username/projects/myproject/a.ts]
export {}
declare global {
var x: string;
var y: number;
}


Output::
>> Screen clear
[[90m12:00:26 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:30 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"watch":true,"skipLibCheck":true}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/a.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents

Change:: Rever the file to contain document declaration

Input::
//// [/user/username/projects/myproject/a.ts]
export {}
declare global {
interface Document {
    fullscreen: boolean;
}
var y: number;
}


Output::
>> Screen clear
[[90m12:00:34 AM[0m] File change detected. Starting incremental compilation...

[96ma.ts[0m:[93m4[0m:[93m5[0m - [91merror[0m[90m TS2687: [0mAll declarations of 'fullscreen' must have identical modifiers.

[7m4[0m     fullscreen: boolean;
[7m [0m [91m    ~~~~~~~~~~[0m

[[90m12:00:38 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"watch":true,"skipLibCheck":true}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/a.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
