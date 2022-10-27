Input::
//// [c:/project/a.ts]

export const a = 1;
export const b = 2;


//// [c:/project/b.ts]

import { a } from "C://project/a"
import { b } from "c://project/a"

a;b;


//// [c:/a/lib/lib.d.ts]
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

//// [c:/project/tsconfig.json]
{"compilerOptions":{"forceConsistentCasingInFileNames":true}}


c:/a/lib/tsc.js --w --p c://project --explainFiles
Output::
>> Screen clear
[[90m12:00:17 AM[0m] Starting compilation in watch mode...

a/lib/lib.d.ts
  Default library for target 'es3'
project/a.ts
  Matched by default include pattern '**/*'
  Imported via "C://project/a" from file 'project/b.ts'
  Imported via "c://project/a" from file 'project/b.ts'
project/b.ts
  Matched by default include pattern '**/*'
[[90m12:00:22 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["c:/project/a.ts","c:/project/b.ts"]
Program options: {"forceConsistentCasingInFileNames":true,"watch":true,"project":"c:/project","explainFiles":true,"configFilePath":"c:/project/tsconfig.json"}
Program structureReused: Not
Program files::
c:/a/lib/lib.d.ts
c:/project/a.ts
c:/project/b.ts

Semantic diagnostics in builder refreshed for::
c:/a/lib/lib.d.ts
c:/project/a.ts
c:/project/b.ts

Shape signatures in builder refreshed for::
c:/a/lib/lib.d.ts (used version)
c:/project/a.ts (used version)
c:/project/b.ts (used version)

PolledWatches::
c:/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
c:/project/tsconfig.json:
  {}
c:/project/a.ts:
  {}
c:/project/b.ts:
  {}
c:/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
c:/project:
  {}

exitCode:: ExitStatus.undefined

//// [c:/project/a.js]
"use strict";
exports.__esModule = true;
exports.b = exports.a = void 0;
exports.a = 1;
exports.b = 2;


//// [c:/project/b.js]
"use strict";
exports.__esModule = true;
var a_1 = require("C://project/a");
var a_2 = require("c://project/a");
a_1.a;
a_2.b;



Change:: Prepend a line to moduleA

Input::
//// [c:/project/a.ts]
// some comment
                        
export const a = 1;
export const b = 2;



Output::
>> Screen clear
[[90m12:00:25 AM[0m] File change detected. Starting incremental compilation...

a/lib/lib.d.ts
  Default library for target 'es3'
project/a.ts
  Matched by default include pattern '**/*'
  Imported via "C://project/a" from file 'project/b.ts'
  Imported via "c://project/a" from file 'project/b.ts'
project/b.ts
  Matched by default include pattern '**/*'
[[90m12:00:32 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["c:/project/a.ts","c:/project/b.ts"]
Program options: {"forceConsistentCasingInFileNames":true,"watch":true,"project":"c:/project","explainFiles":true,"configFilePath":"c:/project/tsconfig.json"}
Program structureReused: Completely
Program files::
c:/a/lib/lib.d.ts
c:/project/a.ts
c:/project/b.ts

Semantic diagnostics in builder refreshed for::
c:/project/a.ts
c:/project/b.ts

Shape signatures in builder refreshed for::
c:/project/a.ts (computed .d.ts)
c:/project/b.ts (computed .d.ts)

PolledWatches::
c:/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
c:/project/tsconfig.json:
  {}
c:/project/a.ts:
  {}
c:/project/b.ts:
  {}
c:/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
c:/project:
  {}

exitCode:: ExitStatus.undefined

//// [c:/project/a.js]
"use strict";
// some comment
exports.__esModule = true;
exports.b = exports.a = void 0;
exports.a = 1;
exports.b = 2;


//// [c:/project/b.js] file written with same contents
