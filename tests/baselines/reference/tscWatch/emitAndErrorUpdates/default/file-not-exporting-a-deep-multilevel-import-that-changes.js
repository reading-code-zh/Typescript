Input::
//// [/user/username/projects/myproject/a.ts]
export interface Point {
    name: string;
    c: Coords;
}
export interface Coords {
    x2: number;
    y: number;
}

//// [/user/username/projects/myproject/b.ts]
import { Point } from "./a";
export interface PointWrapper extends Point {
}

//// [/user/username/projects/myproject/c.ts]
import { PointWrapper } from "./b";
export function getPoint(): PointWrapper {
    return {
        name: "test",
        c: {
            x: 1,
            y: 2
        }
    }
};

//// [/user/username/projects/myproject/d.ts]
import { getPoint } from "./c";
getPoint().c.x;

//// [/user/username/projects/myproject/e.ts]
import "./d";

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


/a/lib/tsc.js --w
Output::
>> Screen clear
[[90m12:00:29 AM[0m] Starting compilation in watch mode...

[96mc.ts[0m:[93m6[0m:[93m13[0m - [91merror[0m[90m TS2322: [0mType '{ x: number; y: number; }' is not assignable to type 'Coords'.
  Object literal may only specify known properties, and 'x' does not exist in type 'Coords'.

[7m6[0m             x: 1,
[7m [0m [91m            ~~~~[0m

  [96ma.ts[0m:[93m3[0m:[93m5[0m
    [7m3[0m     c: Coords;
    [7m [0m [96m    ~[0m
    The expected type comes from property 'c' which is declared here on type 'PointWrapper'

[96md.ts[0m:[93m2[0m:[93m14[0m - [91merror[0m[90m TS2339: [0mProperty 'x' does not exist on type 'Coords'.

[7m2[0m getPoint().c.x;
[7m [0m [91m             ~[0m

[[90m12:00:40 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts","/user/username/projects/myproject/d.ts","/user/username/projects/myproject/e.ts"]
Program options: {"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)
/user/username/projects/myproject/b.ts (used version)
/user/username/projects/myproject/c.ts (used version)
/user/username/projects/myproject/d.ts (used version)
/user/username/projects/myproject/e.ts (used version)

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
/user/username/projects/myproject/c.ts:
  {}
/user/username/projects/myproject/d.ts:
  {}
/user/username/projects/myproject/e.ts:
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


//// [/user/username/projects/myproject/b.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/myproject/c.js]
"use strict";
exports.__esModule = true;
exports.getPoint = void 0;
function getPoint() {
    return {
        name: "test",
        c: {
            x: 1,
            y: 2
        }
    };
}
exports.getPoint = getPoint;
;


//// [/user/username/projects/myproject/d.js]
"use strict";
exports.__esModule = true;
var c_1 = require("./c");
(0, c_1.getPoint)().c.x;


//// [/user/username/projects/myproject/e.js]
"use strict";
exports.__esModule = true;
require("./d");



Change:: Rename property x2 to x of interface Coords to initialize signatures

Input::
//// [/user/username/projects/myproject/a.ts]
export interface Point {
    name: string;
    c: Coords;
}
export interface Coords {
    x: number;
    y: number;
}


Output::
>> Screen clear
[[90m12:00:44 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:00 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts","/user/username/projects/myproject/d.ts","/user/username/projects/myproject/e.ts"]
Program options: {"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)
/user/username/projects/myproject/b.ts (computed .d.ts)
/user/username/projects/myproject/c.ts (computed .d.ts)
/user/username/projects/myproject/d.ts (computed .d.ts)
/user/username/projects/myproject/e.ts (computed .d.ts)

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
/user/username/projects/myproject/c.ts:
  {}
/user/username/projects/myproject/d.ts:
  {}
/user/username/projects/myproject/e.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
//// [/user/username/projects/myproject/b.js] file written with same contents
//// [/user/username/projects/myproject/c.js] file written with same contents
//// [/user/username/projects/myproject/d.js] file written with same contents
//// [/user/username/projects/myproject/e.js] file written with same contents

Change:: Rename property x to x2 of interface Coords to revert back to original text

Input::
//// [/user/username/projects/myproject/a.ts]
export interface Point {
    name: string;
    c: Coords;
}
export interface Coords {
    x2: number;
    y: number;
}


Output::
>> Screen clear
[[90m12:01:04 AM[0m] File change detected. Starting incremental compilation...

[96mc.ts[0m:[93m6[0m:[93m13[0m - [91merror[0m[90m TS2322: [0mType '{ x: number; y: number; }' is not assignable to type 'Coords'.
  Object literal may only specify known properties, and 'x' does not exist in type 'Coords'.

[7m6[0m             x: 1,
[7m [0m [91m            ~~~~[0m

  [96ma.ts[0m:[93m3[0m:[93m5[0m
    [7m3[0m     c: Coords;
    [7m [0m [96m    ~[0m
    The expected type comes from property 'c' which is declared here on type 'PointWrapper'

[96md.ts[0m:[93m2[0m:[93m14[0m - [91merror[0m[90m TS2339: [0mProperty 'x' does not exist on type 'Coords'.

[7m2[0m getPoint().c.x;
[7m [0m [91m             ~[0m

[[90m12:01:11 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts","/user/username/projects/myproject/d.ts","/user/username/projects/myproject/e.ts"]
Program options: {"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)
/user/username/projects/myproject/b.ts (computed .d.ts)
/user/username/projects/myproject/c.ts (used version)
/user/username/projects/myproject/d.ts (used version)

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
/user/username/projects/myproject/c.ts:
  {}
/user/username/projects/myproject/d.ts:
  {}
/user/username/projects/myproject/e.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
//// [/user/username/projects/myproject/b.js] file written with same contents

Change:: Rename property x2 to x of interface Coords

Input::
//// [/user/username/projects/myproject/a.ts]
export interface Point {
    name: string;
    c: Coords;
}
export interface Coords {
    x: number;
    y: number;
}


Output::
>> Screen clear
[[90m12:01:15 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:22 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts","/user/username/projects/myproject/d.ts","/user/username/projects/myproject/e.ts"]
Program options: {"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)
/user/username/projects/myproject/b.ts (computed .d.ts)
/user/username/projects/myproject/c.ts (used version)
/user/username/projects/myproject/d.ts (used version)
/user/username/projects/myproject/e.ts (used version)

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
/user/username/projects/myproject/c.ts:
  {}
/user/username/projects/myproject/d.ts:
  {}
/user/username/projects/myproject/e.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
//// [/user/username/projects/myproject/b.js] file written with same contents
