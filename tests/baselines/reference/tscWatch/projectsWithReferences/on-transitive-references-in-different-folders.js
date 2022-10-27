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

//// [/user/username/projects/transitiveReferences/a/tsconfig.json]
{"compilerOptions":{"composite":true},"files":["index.ts"]}

//// [/user/username/projects/transitiveReferences/b/tsconfig.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["../*"]}},"files":["index.ts"],"references":[{"path":"../a"}]}

//// [/user/username/projects/transitiveReferences/c/tsconfig.json]
{"compilerOptions":{"baseUrl":"./","paths":{"@ref/*":["../refs/*"]}},"files":["index.ts"],"references":[{"path":"../b"}]}

//// [/user/username/projects/transitiveReferences/a/index.ts]
export class A {}

//// [/user/username/projects/transitiveReferences/b/index.ts]
import {A} from '@ref/a';
export const b = new A();

//// [/user/username/projects/transitiveReferences/c/index.ts]
import {b} from '../b';
import {X} from "@ref/a";
b;
X;

//// [/user/username/projects/transitiveReferences/refs/a.d.ts]
export class X {}
export class A {}


//// [/user/username/projects/transitiveReferences/a/index.js]
"use strict";
exports.__esModule = true;
exports.A = void 0;
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports.A = A;


//// [/user/username/projects/transitiveReferences/a/index.d.ts]
export declare class A {
}


//// [/user/username/projects/transitiveReferences/a/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-7264743946-export class A {}","signature":"-8728835846-export declare class A {\n}\n"}],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/transitiveReferences/a/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "version": "-7264743946-export class A {}",
        "signature": "-8728835846-export declare class A {\n}\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 756
}

//// [/user/username/projects/transitiveReferences/b/index.js]
"use strict";
exports.__esModule = true;
exports.b = void 0;
var a_1 = require("@ref/a");
exports.b = new a_1.A();


//// [/user/username/projects/transitiveReferences/b/index.d.ts]
import { A } from '@ref/a';
export declare const b: A;


//// [/user/username/projects/transitiveReferences/b/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../a/index.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-8728835846-export declare class A {\n}\n",{"version":"-2591036212-import {A} from '@ref/a';\nexport const b = new A();","signature":"-9732944696-import { A } from '@ref/a';\nexport declare const b: A;\n"}],"options":{"composite":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/transitiveReferences/b/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../a/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../a/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../a/index.d.ts": {
        "version": "-8728835846-export declare class A {\n}\n",
        "signature": "-8728835846-export declare class A {\n}\n"
      },
      "./index.ts": {
        "version": "-2591036212-import {A} from '@ref/a';\nexport const b = new A();",
        "signature": "-9732944696-import { A } from '@ref/a';\nexport declare const b: A;\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./index.ts": [
        "../a/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.ts": [
        "../a/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../a/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 913
}

//// [/user/username/projects/transitiveReferences/c/index.js]
"use strict";
exports.__esModule = true;
var b_1 = require("../b");
var a_1 = require("@ref/a");
b_1.b;
a_1.X;



/a/lib/tsc.js -w -p c
Output::
>> Screen clear
[[90m12:00:59 AM[0m] Starting compilation in watch mode...

[[90m12:01:03 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/transitivereferences/a/index.d.ts (used version)
/user/username/projects/transitivereferences/b/index.d.ts (used version)
/user/username/projects/transitivereferences/refs/a.d.ts (used version)
/user/username/projects/transitivereferences/c/index.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/a/index.d.ts:
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts:
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/a/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/b/index.d.ts:
  {}
/user/username/projects/transitivereferences/a/index.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/refs:
  {}
/user/username/projects/transitivereferences/a:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c/index.js] file written with same contents

Change:: non local edit b ts, and build b

Input::
//// [/user/username/projects/transitiveReferences/b/index.ts]
import {A} from '@ref/a';
export const b = new A();export function gfoo() { }

//// [/user/username/projects/transitiveReferences/b/index.js]
"use strict";
exports.__esModule = true;
exports.gfoo = exports.b = void 0;
var a_1 = require("@ref/a");
exports.b = new a_1.A();
function gfoo() { }
exports.gfoo = gfoo;


//// [/user/username/projects/transitiveReferences/b/index.d.ts]
import { A } from '@ref/a';
export declare const b: A;
export declare function gfoo(): void;


//// [/user/username/projects/transitiveReferences/b/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../a/index.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-8728835846-export declare class A {\n}\n",{"version":"1841609480-import {A} from '@ref/a';\nexport const b = new A();export function gfoo() { }","signature":"4376023469-import { A } from '@ref/a';\nexport declare const b: A;\nexport declare function gfoo(): void;\n"}],"options":{"composite":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/transitiveReferences/b/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../a/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../a/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../a/index.d.ts": {
        "version": "-8728835846-export declare class A {\n}\n",
        "signature": "-8728835846-export declare class A {\n}\n"
      },
      "./index.ts": {
        "version": "1841609480-import {A} from '@ref/a';\nexport const b = new A();export function gfoo() { }",
        "signature": "4376023469-import { A } from '@ref/a';\nexport declare const b: A;\nexport declare function gfoo(): void;\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./index.ts": [
        "../a/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.ts": [
        "../a/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../a/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 976
}


Output::
>> Screen clear
[[90m12:01:19 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:23 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/b/index.d.ts (used version)
/user/username/projects/transitivereferences/c/index.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/a/index.d.ts:
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts:
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/a/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/b/index.d.ts:
  {}
/user/username/projects/transitivereferences/a/index.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/refs:
  {}
/user/username/projects/transitivereferences/a:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c/index.js] file written with same contents

Change:: edit on config file

Input::
//// [/user/username/projects/transitiveReferences/c/tsconfig.json]
{"compilerOptions":{"baseUrl":"./","paths":{"@ref/*":["../nrefs/*"]}},"files":["index.ts"],"references":[{"path":"../b"}]}

//// [/user/username/projects/transitiveReferences/nrefs/a.d.ts]
export class X {}
export class A {}



Output::
>> Screen clear
[[90m12:01:31 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:35 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../nrefs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/nrefs/a.d.ts (used version)
/user/username/projects/transitivereferences/c/index.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/a/index.d.ts:
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts:
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/nrefs/a.d.ts:
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/a/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/user/username/projects/transitivereferences/b/index.d.ts:
  {}
/user/username/projects/transitivereferences/a/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/nrefs/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/nrefs:
  {}
/user/username/projects/transitivereferences/a:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c/index.js] file written with same contents

Change:: Revert config file edit

Input::
//// [/user/username/projects/transitiveReferences/c/tsconfig.json]
{"compilerOptions":{"baseUrl":"./","paths":{"@ref/*":["../refs/*"]}},"files":["index.ts"],"references":[{"path":"../b"}]}


Output::
>> Screen clear
[[90m12:01:39 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:43 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/refs/a.d.ts (used version)
/user/username/projects/transitivereferences/c/index.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/a/index.d.ts:
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts:
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/a/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/user/username/projects/transitivereferences/b/index.d.ts:
  {}
/user/username/projects/transitivereferences/a/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/refs:
  {}
/user/username/projects/transitivereferences/a:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c/index.js] file written with same contents

Change:: edit in referenced config file

Input::
//// [/user/username/projects/transitiveReferences/b/tsconfig.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["../nrefs/*"]}},"files":["index.ts"],"references":[{"path":"../a"}]}


Output::
>> Screen clear
[[90m12:01:47 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:48 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/nrefs/a.d.ts (used version)
/user/username/projects/transitivereferences/b/index.d.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/nrefs/a.d.ts:
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts:
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/a/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/user/username/projects/transitivereferences/b/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/nrefs/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/refs:
  {}
/user/username/projects/transitivereferences/nrefs:
  {}

exitCode:: ExitStatus.undefined


Change:: Revert referenced config file edit

Input::
//// [/user/username/projects/transitiveReferences/b/tsconfig.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["../refs/*"]}},"files":["index.ts"],"references":[{"path":"../a"}]}


Output::
>> Screen clear
[[90m12:01:53 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:54 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/b/index.d.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/b/index.d.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts:
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/a/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/user/username/projects/transitivereferences/b/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined


Change:: deleting referenced config file

Input::
//// [/user/username/projects/transitiveReferences/b/tsconfig.json] deleted

Output::
>> Screen clear
[[90m12:01:56 AM[0m] File change detected. Starting incremental compilation...

[96mc/tsconfig.json[0m:[93m1[0m:[93m105[0m - [91merror[0m[90m TS6053: [0mFile '/user/username/projects/transitiveReferences/b' not found.

[7m1[0m {"compilerOptions":{"baseUrl":"./","paths":{"@ref/*":["../refs/*"]}},"files":["index.ts"],"references":[{"path":"../b"}]}
[7m [0m [91m                                                                                                        ~~~~~~~~~~~~~~~[0m

[[90m12:02:03 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/b/index.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/b/index.ts
/user/username/projects/transitiveReferences/c/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/b/index.ts (computed .d.ts)
/user/username/projects/transitivereferences/c/index.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/b/index.ts:
  /user/username/projects/transitiveReferences/b/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/b/index.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/b/index.js] file written with same contents
//// [/user/username/projects/transitiveReferences/c/index.js] file written with same contents

Change:: Revert deleting referenced config file

Input::
//// [/user/username/projects/transitiveReferences/b/tsconfig.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["../*"]}},"files":["index.ts"],"references":[{"path":"../a"}]}


Output::
>> Screen clear
[[90m12:02:06 AM[0m] File change detected. Starting incremental compilation...

[[90m12:02:10 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/a/index.d.ts (used version)
/user/username/projects/transitivereferences/b/index.d.ts (used version)
/user/username/projects/transitivereferences/c/index.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/a/index.d.ts:
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts:
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/a/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/index.d.ts:
  {}
/user/username/projects/transitivereferences/a/index.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/refs:
  {}
/user/username/projects/transitivereferences/a:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c/index.js] file written with same contents

Change:: deleting transitively referenced config file

Input::
//// [/user/username/projects/transitiveReferences/a/tsconfig.json] deleted

Output::
>> Screen clear
[[90m12:02:12 AM[0m] File change detected. Starting incremental compilation...

[96mb/tsconfig.json[0m:[93m1[0m:[93m117[0m - [91merror[0m[90m TS6053: [0mFile '/user/username/projects/transitiveReferences/a' not found.

[7m1[0m {"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["../*"]}},"files":["index.ts"],"references":[{"path":"../a"}]}
[7m [0m [91m                                                                                                                    ~~~~~~~~~~~~~~~[0m

[[90m12:02:16 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a/index.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/a/index.ts
/user/username/projects/transitiveReferences/b/index.d.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/a/index.ts (computed .d.ts)
/user/username/projects/transitivereferences/b/index.d.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a/index.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/a/index.ts:
  /user/username/projects/transitiveReferences/a/index.ts
/user/username/projects/transitiveReferences/b/index.d.ts:
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/a/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/index.d.ts:
  {}
/user/username/projects/transitivereferences/a/index.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/refs:
  {}
/user/username/projects/transitivereferences/a:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/a/index.js] file written with same contents

Change:: Revert deleting transitively referenced config file

Input::
//// [/user/username/projects/transitiveReferences/a/tsconfig.json]
{"compilerOptions":{"composite":true},"files":["index.ts"]}


Output::
>> Screen clear
[[90m12:02:20 AM[0m] File change detected. Starting incremental compilation...

[[90m12:02:21 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c/index.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences/c","paths":{"@ref/*":["../refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences/c","watch":true,"project":"/user/username/projects/transitiveReferences/c","configFilePath":"/user/username/projects/transitiveReferences/c/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts
/user/username/projects/transitiveReferences/c/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/a/index.d.ts (used version)
/user/username/projects/transitivereferences/b/index.d.ts (used version)
/user/username/projects/transitivereferences/c/index.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c/index.ts
/user/username/projects/transitiveReferences/a/index.d.ts:
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/b/index.d.ts:
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c/index.ts:
  /user/username/projects/transitiveReferences/c/index.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b/index.d.ts
  /user/username/projects/transitiveReferences/a/index.d.ts

PolledWatches::
/user/username/projects/transitivereferences/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/c/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/tsconfig.json:
  {}
/user/username/projects/transitivereferences/c/index.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/a/tsconfig.json:
  {}
/user/username/projects/transitivereferences/b/index.d.ts:
  {}
/user/username/projects/transitivereferences/a/index.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/b:
  {}
/user/username/projects/transitivereferences/refs:
  {}
/user/username/projects/transitivereferences/a:
  {}

exitCode:: ExitStatus.undefined

