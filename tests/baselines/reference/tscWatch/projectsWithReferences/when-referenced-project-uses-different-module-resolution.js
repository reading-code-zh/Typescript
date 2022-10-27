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
{"compilerOptions":{"composite":true,"moduleResolution":"classic"},"files":["b.ts"],"references":[{"path":"tsconfig.a.json"}]}

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
import {A} from "a";export const b = new A();

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
var a_1 = require("a");
exports.b = new a_1.A();


//// [/user/username/projects/transitiveReferences/b.d.ts]
import { A } from "a";
export declare const b: A;


//// [/user/username/projects/transitiveReferences/tsconfig.b.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.d.ts","./b.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-8728835846-export declare class A {\n}\n",{"version":"-19869990292-import {A} from \"a\";export const b = new A();","signature":"1870369234-import { A } from \"a\";\nexport declare const b: A;\n"}],"options":{"composite":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./b.d.ts"},"version":"FakeTSVersion"}

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
        "version": "-19869990292-import {A} from \"a\";export const b = new A();",
        "signature": "1870369234-import { A } from \"a\";\nexport declare const b: A;\n"
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
  "size": 887
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
