Input::
//// [/lib/lib.d.ts]
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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/src/folder/index.ts]
export const x = 10;

//// [/src/src/folder/tsconfig.json]
{
    "files": ["index.ts"],
    "compilerOptions": {
        "composite": true
    }
}

//// [/src/src/folder2/index.ts]
export const x = 10;

//// [/src/src/folder2/tsconfig.json]
{
    "files": ["index.ts"],
    "compilerOptions": {
        "composite": true
    }
}

//// [/src/src/tsconfig.json]
{
    "files": [],
    "compilerOptions": {
        "composite": true
    },
    "references": [ 
        { "path": "./folder" },
        { "path": "./folder2"}
    ]
  }

//// [/src/tests/index.ts]
export const x = 10;

//// [/src/tests/tsconfig.json]
{
    "files": ["index.ts"],
    "compilerOptions": {
        "composite": true
    },
    "references": [
        { "path": "../src" }
    ]
}

//// [/src/tsconfig.json]
{
  "files": [],
  "compilerOptions": {
    "composite": true
  },
  "references": [ 
      { "path": "./src" },
      { "path": "./tests"}
  ]
}



Output::
/lib/tsc --b /src --verbose
[[90m12:00:06 AM[0m] Projects in this build: 
    * src/src/folder/tsconfig.json
    * src/src/folder2/tsconfig.json
    * src/src/tsconfig.json
    * src/tests/tsconfig.json
    * src/tsconfig.json

[[90m12:00:07 AM[0m] Project 'src/src/folder/tsconfig.json' is out of date because output file 'src/src/folder/tsconfig.tsbuildinfo' does not exist

[[90m12:00:08 AM[0m] Building project '/src/src/folder/tsconfig.json'...

[[90m12:00:14 AM[0m] Project 'src/src/folder2/tsconfig.json' is out of date because output file 'src/src/folder2/tsconfig.tsbuildinfo' does not exist

[[90m12:00:15 AM[0m] Building project '/src/src/folder2/tsconfig.json'...

[[90m12:00:21 AM[0m] Project 'src/tests/tsconfig.json' is out of date because output file 'src/tests/tsconfig.tsbuildinfo' does not exist

[[90m12:00:22 AM[0m] Building project '/src/tests/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/src/folder/index.d.ts]
export declare const x = 10;


//// [/src/src/folder/index.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/src/folder/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n"}],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/src/folder/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 835
}

//// [/src/src/folder2/index.d.ts]
export declare const x = 10;


//// [/src/src/folder2/index.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/src/folder2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n"}],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/src/folder2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 835
}

//// [/src/tests/index.d.ts]
export declare const x = 10;


//// [/src/tests/index.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n"}],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 832
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b /src --verbose
[[90m12:00:28 AM[0m] Projects in this build: 
    * src/src/folder/tsconfig.json
    * src/src/folder2/tsconfig.json
    * src/src/tsconfig.json
    * src/tests/tsconfig.json
    * src/tsconfig.json

[[90m12:00:29 AM[0m] Project 'src/src/folder/tsconfig.json' is up to date because newest input 'src/src/folder/index.ts' is older than output 'src/src/folder/tsconfig.tsbuildinfo'

[[90m12:00:30 AM[0m] Project 'src/src/folder2/tsconfig.json' is up to date because newest input 'src/src/folder2/index.ts' is older than output 'src/src/folder2/tsconfig.tsbuildinfo'

[[90m12:00:31 AM[0m] Project 'src/tests/tsconfig.json' is up to date because newest input 'src/tests/index.ts' is older than output 'src/tests/tsconfig.tsbuildinfo'

exitCode:: ExitStatus.Success


