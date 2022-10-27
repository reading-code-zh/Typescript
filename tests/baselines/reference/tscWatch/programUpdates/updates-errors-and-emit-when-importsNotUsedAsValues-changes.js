Input::
//// [/user/username/projects/myproject/a.ts]
export class C {}

//// [/user/username/projects/myproject/b.ts]
import {C} from './a';
export function f(p: C) { return p; }

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{}}

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
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[[90m12:00:28 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)
/user/username/projects/myproject/b.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
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
exports.C = void 0;
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
exports.C = C;


//// [/user/username/projects/myproject/b.js]
"use strict";
exports.__esModule = true;
exports.f = void 0;
function f(p) { return p; }
exports.f = f;



Change:: Set to "remove"

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"importsNotUsedAsValues":"remove"}}


Output::
>> Screen clear
[[90m12:00:32 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:39 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"importsNotUsedAsValues":0,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

No shapes updated in the builder::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
//// [/user/username/projects/myproject/b.js] file written with same contents

Change:: Set to "error"

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"importsNotUsedAsValues":"error"}}


Output::
>> Screen clear
[[90m12:00:43 AM[0m] File change detected. Starting incremental compilation...

[96mb.ts[0m:[93m1[0m:[93m1[0m - [91merror[0m[90m TS1371: [0mThis import is never used as a value and must use 'import type' because 'importsNotUsedAsValues' is set to 'error'.

[7m1[0m import {C} from './a';
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~[0m

[[90m12:00:50 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"importsNotUsedAsValues":2,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

No shapes updated in the builder::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
//// [/user/username/projects/myproject/b.js]
"use strict";
exports.__esModule = true;
exports.f = void 0;
require("./a");
function f(p) { return p; }
exports.f = f;



Change:: Set to "preserve"

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"importsNotUsedAsValues":"preserve"}}


Output::
>> Screen clear
[[90m12:00:54 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:01 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"importsNotUsedAsValues":1,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

No shapes updated in the builder::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
//// [/user/username/projects/myproject/b.js] file written with same contents
