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

//// [/src/packages/pkg1/src/index.ts]
export interface IThing {
  a: string;
}
export interface IThings {
  thing1: IThing;
}

//// [/src/packages/pkg1/tsconfig.json]
{"extends":"../../tsconfig","compilerOptions":{"outDir":"lib"},"include":["src"]}

//// [/src/packages/pkg2/src/index.ts]
import { IThings } from '@fluentui/pkg1';
export function fn4() {
  const a: IThings = { thing1: { a: 'b' } };
  return a.thing1;
}

//// [/src/packages/pkg2/tsconfig.json]
{"extends":"../../tsconfig","compilerOptions":{"outDir":"lib"},"include":["src"],"references":[{"path":"../pkg1"}]}

//// [/src/tsconfig.json]
{"compilerOptions":{"composite":true,"baseUrl":".","paths":{"@fluentui/*":["packages/*/src"]}}}



Output::
/lib/tsc --b /src/packages/pkg2/tsconfig.json --verbose
[[90m12:00:16 AM[0m] Projects in this build: 
    * src/packages/pkg1/tsconfig.json
    * src/packages/pkg2/tsconfig.json

[[90m12:00:17 AM[0m] Project 'src/packages/pkg1/tsconfig.json' is out of date because output file 'src/packages/pkg1/lib/tsconfig.tsbuildinfo' does not exist

[[90m12:00:18 AM[0m] Building project '/src/packages/pkg1/tsconfig.json'...

[[90m12:00:26 AM[0m] Project 'src/packages/pkg2/tsconfig.json' is out of date because output file 'src/packages/pkg2/lib/tsconfig.tsbuildinfo' does not exist

[[90m12:00:27 AM[0m] Building project '/src/packages/pkg2/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/packages/pkg1/lib/src/index.d.ts]
export interface IThing {
    a: string;
}
export interface IThings {
    thing1: IThing;
}


//// [/src/packages/pkg1/lib/src/index.js]
"use strict";
exports.__esModule = true;


//// [/src/packages/pkg1/lib/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.d.ts","../src/index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-2072077482-export interface IThing {\n  a: string;\n}\nexport interface IThings {\n  thing1: IThing;\n}","signature":"-5386205042-export interface IThing {\r\n    a: string;\r\n}\r\nexport interface IThings {\r\n    thing1: IThing;\r\n}\r\n"}],"options":{"composite":true,"outDir":"./"},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./src/index.d.ts"},"version":"FakeTSVersion"}

//// [/src/packages/pkg1/lib/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.d.ts",
      "../src/index.ts"
    ],
    "fileInfos": {
      "../../../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../src/index.ts": {
        "version": "-2072077482-export interface IThing {\n  a: string;\n}\nexport interface IThings {\n  thing1: IThing;\n}",
        "signature": "-5386205042-export interface IThing {\r\n    a: string;\r\n}\r\nexport interface IThings {\r\n    thing1: IThing;\r\n}\r\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.d.ts",
      "../src/index.ts"
    ],
    "latestChangedDtsFile": "./src/index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1010
}

//// [/src/packages/pkg2/lib/src/index.d.ts]
export declare function fn4(): import("@fluentui/pkg1").IThing;


//// [/src/packages/pkg2/lib/src/index.js]
"use strict";
exports.__esModule = true;
exports.fn4 = void 0;
function fn4() {
    var a = { thing1: { a: 'b' } };
    return a.thing1;
}
exports.fn4 = fn4;


//// [/src/packages/pkg2/lib/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.d.ts","../../pkg1/lib/src/index.d.ts","../src/index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-5386205042-export interface IThing {\r\n    a: string;\r\n}\r\nexport interface IThings {\r\n    thing1: IThing;\r\n}\r\n",{"version":"8515046367-import { IThings } from '@fluentui/pkg1';\nexport function fn4() {\n  const a: IThings = { thing1: { a: 'b' } };\n  return a.thing1;\n}","signature":"-9447422063-export declare function fn4(): import(\"@fluentui/pkg1\").IThing;\r\n"}],"options":{"composite":true,"outDir":"./"},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./src/index.d.ts"},"version":"FakeTSVersion"}

//// [/src/packages/pkg2/lib/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.d.ts",
      "../../pkg1/lib/src/index.d.ts",
      "../src/index.ts"
    ],
    "fileNamesList": [
      [
        "../../pkg1/lib/src/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../../pkg1/lib/src/index.d.ts": {
        "version": "-5386205042-export interface IThing {\r\n    a: string;\r\n}\r\nexport interface IThings {\r\n    thing1: IThing;\r\n}\r\n",
        "signature": "-5386205042-export interface IThing {\r\n    a: string;\r\n}\r\nexport interface IThings {\r\n    thing1: IThing;\r\n}\r\n"
      },
      "../src/index.ts": {
        "version": "8515046367-import { IThings } from '@fluentui/pkg1';\nexport function fn4() {\n  const a: IThings = { thing1: { a: 'b' } };\n  return a.thing1;\n}",
        "signature": "-9447422063-export declare function fn4(): import(\"@fluentui/pkg1\").IThing;\r\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/index.ts": [
        "../../pkg1/lib/src/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../src/index.ts": [
        "../../pkg1/lib/src/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.d.ts",
      "../../pkg1/lib/src/index.d.ts",
      "../src/index.ts"
    ],
    "latestChangedDtsFile": "./src/index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1200
}

