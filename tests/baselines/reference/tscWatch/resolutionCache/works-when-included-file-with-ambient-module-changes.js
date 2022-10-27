Input::
//// [/a/b/foo.ts]

import * as fs from "fs";
import * as u from "url";


//// [/a/b/bar.d.ts]

declare module "url" {
    export interface Url {
        href?: string;
    }
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


/a/lib/tsc.js --w /a/b/foo.ts /a/b/bar.d.ts
Output::
>> Screen clear
[[90m12:00:15 AM[0m] Starting compilation in watch mode...

[96mfoo.ts[0m:[93m2[0m:[93m21[0m - [91merror[0m[90m TS2307: [0mCannot find module 'fs' or its corresponding type declarations.

[7m2[0m import * as fs from "fs";
[7m [0m [91m                    ~~~~[0m

[[90m12:00:18 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/a/b/foo.ts","/a/b/bar.d.ts"]
Program options: {"watch":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/foo.ts
/a/b/bar.d.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/foo.ts
/a/b/bar.d.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/foo.ts (used version)
/a/b/bar.d.ts (used version)

PolledWatches::
/a/b/node_modules:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/foo.ts:
  {}
/a/b/bar.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/foo.js]
"use strict";
exports.__esModule = true;



Change:: Add fs definition

Input::
//// [/a/b/bar.d.ts]

declare module "url" {
    export interface Url {
        href?: string;
    }
}

declare module "fs" {
    export interface Stats {
        isFile(): boolean;
    }
}



Output::
>> Screen clear
[[90m12:00:21 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:25 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/foo.ts","/a/b/bar.d.ts"]
Program options: {"watch":true}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/a/b/foo.ts
/a/b/bar.d.ts

Semantic diagnostics in builder refreshed for::
/a/b/foo.ts
/a/b/bar.d.ts

Shape signatures in builder refreshed for::
/a/b/bar.d.ts (used version)
/a/b/foo.ts (computed .d.ts)

PolledWatches::
/a/b/node_modules:
  {"pollingInterval":500}
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/foo.ts:
  {}
/a/b/bar.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/foo.js] file written with same contents
