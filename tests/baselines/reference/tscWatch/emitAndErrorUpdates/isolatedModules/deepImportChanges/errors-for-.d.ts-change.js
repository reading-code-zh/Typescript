Input::
//// [/user/username/projects/myproject/a.ts]
import {B} from './b';
declare var console: any;
let b = new B();
console.log(b.c.d);

//// [/user/username/projects/myproject/b.d.ts]
import {C} from './c';
export class B
{
    c: C;
}

//// [/user/username/projects/myproject/c.d.ts]
export class C
{
    d: number;
}

//// [/user/username/projects/myproject/tsconfig.json]
{}

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


/a/lib/tsc.js --w --isolatedModules
Output::
>> Screen clear
[[90m12:00:25 AM[0m] Starting compilation in watch mode...

[[90m12:00:28 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.d.ts","/user/username/projects/myproject/c.d.ts"]
Program options: {"watch":true,"isolatedModules":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/c.d.ts
/user/username/projects/myproject/b.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/c.d.ts
/user/username/projects/myproject/b.d.ts
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/c.d.ts (used version)
/user/username/projects/myproject/b.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/b.d.ts:
  {}
/user/username/projects/myproject/c.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;
var b_1 = require("./b");
var b = new b_1.B();
console.log(b.c.d);



Change:: Rename property d to d2 of class C to initialize signatures

Input::
//// [/user/username/projects/myproject/c.d.ts]
export class C
{
    d2: number;
}


Output::
>> Screen clear
[[90m12:00:32 AM[0m] File change detected. Starting incremental compilation...

[96ma.ts[0m:[93m4[0m:[93m17[0m - [91merror[0m[90m TS2339: [0mProperty 'd' does not exist on type 'C'.

[7m4[0m console.log(b.c.d);
[7m [0m [91m                ~[0m

[[90m12:00:33 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.d.ts","/user/username/projects/myproject/c.d.ts"]
Program options: {"watch":true,"isolatedModules":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/c.d.ts
/user/username/projects/myproject/b.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/c.d.ts
/user/username/projects/myproject/b.d.ts
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/c.d.ts (used version)
/user/username/projects/myproject/b.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/b.d.ts:
  {}
/user/username/projects/myproject/c.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined


Change:: Rename property d2 to d of class C to revert back to original text

Input::
//// [/user/username/projects/myproject/c.d.ts]
export class C
{
    d: number;
}


Output::
>> Screen clear
[[90m12:00:37 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:38 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.d.ts","/user/username/projects/myproject/c.d.ts"]
Program options: {"watch":true,"isolatedModules":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/c.d.ts
/user/username/projects/myproject/b.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/c.d.ts
/user/username/projects/myproject/b.d.ts
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/c.d.ts (used version)
/user/username/projects/myproject/b.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/b.d.ts:
  {}
/user/username/projects/myproject/c.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined


Change:: Rename property d to d2 of class C

Input::
//// [/user/username/projects/myproject/c.d.ts]
export class C
{
    d2: number;
}


Output::
>> Screen clear
[[90m12:00:42 AM[0m] File change detected. Starting incremental compilation...

[96ma.ts[0m:[93m4[0m:[93m17[0m - [91merror[0m[90m TS2339: [0mProperty 'd' does not exist on type 'C'.

[7m4[0m console.log(b.c.d);
[7m [0m [91m                ~[0m

[[90m12:00:43 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.d.ts","/user/username/projects/myproject/c.d.ts"]
Program options: {"watch":true,"isolatedModules":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/c.d.ts
/user/username/projects/myproject/b.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/c.d.ts
/user/username/projects/myproject/b.d.ts
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/c.d.ts (used version)
/user/username/projects/myproject/b.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/b.d.ts:
  {}
/user/username/projects/myproject/c.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

