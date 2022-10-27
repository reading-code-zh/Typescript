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

//// [/user/username/projects/transitiveReferences/tsconfig.a.json]
{"compilerOptions": {"composite": true}, "files": ["a.ts"]}


//// [/user/username/projects/transitiveReferences/tsconfig.b.json]
{
    "compilerOptions": {
        "composite": true,
        "baseUrl": "./",
        "paths": {
            "@ref/*": [ "./*" ]
        }
    },
    "files": [ "b.ts" ],
    "references": [ { "path": "tsconfig.a.json" } ]
}


//// [/user/username/projects/transitiveReferences/tsconfig.c.json]
{
    "files": [ "c.ts" ],
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@ref/*": [ "./refs/*" ]
        }
    },
    "references": [ { "path": "tsconfig.b.json" } ]
}


//// [/user/username/projects/transitiveReferences/a.ts]
export class A {}


//// [/user/username/projects/transitiveReferences/b.ts]
import {A} from '@ref/a';
export const b = new A();


//// [/user/username/projects/transitiveReferences/c.ts]
import {b} from './b';
import {X} from "@ref/a";
b;
X;

//// [/user/username/projects/transitiveReferences/refs/a.d.ts]
export class X {}
export class A {}


//// [/user/username/projects/transitiveReferences/a.js]
"use strict";
exports.__esModule = true;
exports.A = void 0;
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports.A = A;


//// [/user/username/projects/transitiveReferences/a.d.ts]
export declare class A {
}


//// [/user/username/projects/transitiveReferences/tsconfig.a.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-8566332115-export class A {}\r\n","signature":"-8728835846-export declare class A {\n}\n"}],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./a.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/transitiveReferences/tsconfig.a.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "-8566332115-export class A {}\r\n",
        "signature": "-8728835846-export declare class A {\n}\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts"
    ],
    "latestChangedDtsFile": "./a.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 749
}

//// [/user/username/projects/transitiveReferences/b.js]
"use strict";
exports.__esModule = true;
exports.b = void 0;
var a_1 = require("@ref/a");
exports.b = new a_1.A();


//// [/user/username/projects/transitiveReferences/b.d.ts]
import { A } from '@ref/a';
export declare const b: A;


//// [/user/username/projects/transitiveReferences/tsconfig.b.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.d.ts","./b.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-8728835846-export declare class A {\n}\n",{"version":"-13104686224-import {A} from '@ref/a';\r\nexport const b = new A();\r\n","signature":"-9732944696-import { A } from '@ref/a';\nexport declare const b: A;\n"}],"options":{"composite":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./b.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/transitiveReferences/tsconfig.b.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.d.ts",
      "./b.ts"
    ],
    "fileNamesList": [
      [
        "./a.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./a.d.ts": {
        "version": "-8728835846-export declare class A {\n}\n",
        "signature": "-8728835846-export declare class A {\n}\n"
      },
      "./b.ts": {
        "version": "-13104686224-import {A} from '@ref/a';\r\nexport const b = new A();\r\n",
        "signature": "-9732944696-import { A } from '@ref/a';\nexport declare const b: A;\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./b.ts": [
        "./a.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./b.ts": [
        "./a.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.d.ts",
      "./b.ts"
    ],
    "latestChangedDtsFile": "./b.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 902
}

//// [/user/username/projects/transitiveReferences/c.js]
"use strict";
exports.__esModule = true;
var b_1 = require("./b");
var a_1 = require("@ref/a");
b_1.b;
a_1.X;



/a/lib/tsc.js -w -p tsconfig.c.json
Output::
>> Screen clear
[[90m12:00:53 AM[0m] Starting compilation in watch mode...

[[90m12:00:57 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/transitivereferences/a.d.ts (used version)
/user/username/projects/transitivereferences/b.d.ts (used version)
/user/username/projects/transitivereferences/refs/a.d.ts (used version)
/user/username/projects/transitivereferences/c.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/a.d.ts:
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts:
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/tsconfig.a.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/user/username/projects/transitivereferences/b.d.ts:
  {}
/user/username/projects/transitivereferences/a.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c.js] file written with same contents

Change:: non local edit b ts, and build b

Input::
//// [/user/username/projects/transitiveReferences/b.ts]
import {A} from '@ref/a';
export const b = new A();
export function gfoo() { }

//// [/user/username/projects/transitiveReferences/b.js]
"use strict";
exports.__esModule = true;
exports.gfoo = exports.b = void 0;
var a_1 = require("@ref/a");
exports.b = new a_1.A();
function gfoo() { }
exports.gfoo = gfoo;


//// [/user/username/projects/transitiveReferences/b.d.ts]
import { A } from '@ref/a';
export declare const b: A;
export declare function gfoo(): void;


//// [/user/username/projects/transitiveReferences/tsconfig.b.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.d.ts","./b.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-8728835846-export declare class A {\n}\n",{"version":"-23418138964-import {A} from '@ref/a';\r\nexport const b = new A();\r\nexport function gfoo() { }","signature":"4376023469-import { A } from '@ref/a';\nexport declare const b: A;\nexport declare function gfoo(): void;\n"}],"options":{"composite":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./b.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/transitiveReferences/tsconfig.b.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.d.ts",
      "./b.ts"
    ],
    "fileNamesList": [
      [
        "./a.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./a.d.ts": {
        "version": "-8728835846-export declare class A {\n}\n",
        "signature": "-8728835846-export declare class A {\n}\n"
      },
      "./b.ts": {
        "version": "-23418138964-import {A} from '@ref/a';\r\nexport const b = new A();\r\nexport function gfoo() { }",
        "signature": "4376023469-import { A } from '@ref/a';\nexport declare const b: A;\nexport declare function gfoo(): void;\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./b.ts": [
        "./a.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./b.ts": [
        "./a.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.d.ts",
      "./b.ts"
    ],
    "latestChangedDtsFile": "./b.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 966
}


Output::
>> Screen clear
[[90m12:01:13 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:17 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/c.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/b.d.ts (used version)
/user/username/projects/transitivereferences/c.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/a.d.ts:
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts:
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/tsconfig.a.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/user/username/projects/transitivereferences/b.d.ts:
  {}
/user/username/projects/transitivereferences/a.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c.js] file written with same contents

Change:: edit on config file

Input::
//// [/user/username/projects/transitiveReferences/tsconfig.c.json]
{"files":["c.ts"],"compilerOptions":{"baseUrl":"./","paths":{"@ref/*":["./nrefs/*"]}},"references":[{"path":"tsconfig.b.json"}]}

//// [/user/username/projects/transitiveReferences/nrefs/a.d.ts]
export class X {}
export class A {}



Output::
>> Screen clear
[[90m12:01:25 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:29 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./nrefs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/nrefs/a.d.ts (used version)
/user/username/projects/transitivereferences/c.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/a.d.ts:
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts:
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/nrefs/a.d.ts:
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/tsconfig.a.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/user/username/projects/transitivereferences/b.d.ts:
  {}
/user/username/projects/transitivereferences/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences/nrefs/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/nrefs:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c.js] file written with same contents

Change:: Revert config file edit

Input::
//// [/user/username/projects/transitiveReferences/tsconfig.c.json]
{"files":["c.ts"],"compilerOptions":{"baseUrl":"./","paths":{"@ref/*":["./refs/*"]}},"references":[{"path":"tsconfig.b.json"}]}


Output::
>> Screen clear
[[90m12:01:33 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:37 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/refs/a.d.ts (used version)
/user/username/projects/transitivereferences/c.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/a.d.ts:
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts:
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/tsconfig.a.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/user/username/projects/transitivereferences/b.d.ts:
  {}
/user/username/projects/transitivereferences/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c.js] file written with same contents

Change:: edit in referenced config file

Input::
//// [/user/username/projects/transitiveReferences/tsconfig.b.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["./nrefs/*"]}},"files":["b.ts"],"references":[{"path":"tsconfig.a.json"}]}


Output::
>> Screen clear
[[90m12:01:41 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:42 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/nrefs/a.d.ts (used version)
/user/username/projects/transitivereferences/b.d.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/nrefs/a.d.ts:
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts:
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/nrefs/a.d.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/tsconfig.a.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/user/username/projects/transitivereferences/b.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/nrefs/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/refs:
  {}
/user/username/projects/transitivereferences/nrefs:
  {}

exitCode:: ExitStatus.undefined


Change:: Revert referenced config file edit

Input::
//// [/user/username/projects/transitiveReferences/tsconfig.b.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["./refs/*"]}},"files":["b.ts"],"references":[{"path":"tsconfig.a.json"}]}


Output::
>> Screen clear
[[90m12:01:47 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:48 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/b.d.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/b.d.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts:
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/tsconfig.a.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/user/username/projects/transitivereferences/b.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined


Change:: deleting referenced config file

Input::
//// [/user/username/projects/transitiveReferences/tsconfig.b.json] deleted

Output::
>> Screen clear
[[90m12:01:50 AM[0m] File change detected. Starting incremental compilation...

[96mtsconfig.c.json[0m:[93m1[0m:[93m100[0m - [91merror[0m[90m TS6053: [0mFile '/user/username/projects/transitiveReferences/tsconfig.b.json' not found.

[7m1[0m {"files":["c.ts"],"compilerOptions":{"baseUrl":"./","paths":{"@ref/*":["./refs/*"]}},"references":[{"path":"tsconfig.b.json"}]}
[7m [0m [91m                                                                                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[[90m12:01:57 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/b.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/b.ts
/user/username/projects/transitiveReferences/c.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/b.ts (computed .d.ts)
/user/username/projects/transitivereferences/c.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/b.ts:
  /user/username/projects/transitiveReferences/b.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/b.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/b.js] file written with same contents
//// [/user/username/projects/transitiveReferences/c.js] file written with same contents

Change:: Revert deleting referenced config file

Input::
//// [/user/username/projects/transitiveReferences/tsconfig.b.json]
{
    "compilerOptions": {
        "composite": true,
        "baseUrl": "./",
        "paths": {
            "@ref/*": [ "./*" ]
        }
    },
    "files": [ "b.ts" ],
    "references": [ { "path": "tsconfig.a.json" } ]
}



Output::
>> Screen clear
[[90m12:02:00 AM[0m] File change detected. Starting incremental compilation...

[[90m12:02:04 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/c.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/a.d.ts (used version)
/user/username/projects/transitivereferences/b.d.ts (used version)
/user/username/projects/transitivereferences/c.ts (computed .d.ts)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/a.d.ts:
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts:
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/tsconfig.a.json:
  {}
/user/username/projects/transitivereferences/b.d.ts:
  {}
/user/username/projects/transitivereferences/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/c.js] file written with same contents

Change:: deleting transitively referenced config file

Input::
//// [/user/username/projects/transitiveReferences/tsconfig.a.json] deleted

Output::
>> Screen clear
[[90m12:02:06 AM[0m] File change detected. Starting incremental compilation...

[96mtsconfig.b.json[0m:[93m10[0m:[93m21[0m - [91merror[0m[90m TS6053: [0mFile '/user/username/projects/transitiveReferences/tsconfig.a.json' not found.

[7m10[0m     "references": [ { "path": "tsconfig.a.json" } ]
[7m  [0m [91m                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[[90m12:02:10 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/a.ts
/user/username/projects/transitiveReferences/b.d.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/a.ts (computed .d.ts)
/user/username/projects/transitivereferences/b.d.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/a.ts:
  /user/username/projects/transitiveReferences/a.ts
/user/username/projects/transitiveReferences/b.d.ts:
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/tsconfig.a.json:
  {}
/user/username/projects/transitivereferences/b.d.ts:
  {}
/user/username/projects/transitivereferences/a.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/transitiveReferences/a.js] file written with same contents

Change:: Revert deleting transitively referenced config file

Input::
//// [/user/username/projects/transitiveReferences/tsconfig.a.json]
{"compilerOptions": {"composite": true}, "files": ["a.ts"]}



Output::
>> Screen clear
[[90m12:02:14 AM[0m] File change detected. Starting incremental compilation...

[[90m12:02:15 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/transitiveReferences/c.ts"]
Program options: {"baseUrl":"/user/username/projects/transitiveReferences","paths":{"@ref/*":["./refs/*"]},"pathsBasePath":"/user/username/projects/transitiveReferences","watch":true,"project":"/user/username/projects/transitiveReferences/tsconfig.c.json","configFilePath":"/user/username/projects/transitiveReferences/tsconfig.c.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts
/user/username/projects/transitiveReferences/c.ts

Shape signatures in builder refreshed for::
/user/username/projects/transitivereferences/a.d.ts (used version)
/user/username/projects/transitivereferences/b.d.ts (used version)
/user/username/projects/transitivereferences/c.ts (used version)

Dependencies for::
/a/lib/lib.d.ts:
  /a/lib/lib.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/c.ts
/user/username/projects/transitiveReferences/a.d.ts:
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/b.d.ts:
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts
/user/username/projects/transitiveReferences/refs/a.d.ts:
  /user/username/projects/transitiveReferences/refs/a.d.ts
/user/username/projects/transitiveReferences/c.ts:
  /user/username/projects/transitiveReferences/c.ts
  /user/username/projects/transitiveReferences/refs/a.d.ts
  /user/username/projects/transitiveReferences/b.d.ts
  /user/username/projects/transitiveReferences/a.d.ts

PolledWatches::
/user/username/projects/transitivereferences/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/transitivereferences/tsconfig.c.json:
  {}
/user/username/projects/transitivereferences/tsconfig.b.json:
  {}
/user/username/projects/transitivereferences/c.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/transitivereferences/refs/a.d.ts:
  {}
/user/username/projects/transitivereferences/tsconfig.a.json:
  {}
/user/username/projects/transitivereferences/b.d.ts:
  {}
/user/username/projects/transitivereferences/a.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/transitivereferences/refs:
  {}

exitCode:: ExitStatus.undefined

