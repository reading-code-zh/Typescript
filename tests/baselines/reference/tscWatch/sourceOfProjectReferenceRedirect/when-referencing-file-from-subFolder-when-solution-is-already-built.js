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

//// [/user/username/projects/myproject/packages/B/package.json]
{}

//// [/user/username/projects/myproject/packages/A/tsconfig.json]
{"compilerOptions":{"outDir":"lib","rootDir":"src","composite":true},"include":["src"],"references":[{"path":"../B"}]}

//// [/user/username/projects/myproject/packages/B/tsconfig.json]
{"compilerOptions":{"outDir":"lib","rootDir":"src","composite":true},"include":["src"]}

//// [/user/username/projects/myproject/packages/A/src/test.ts]
import { foo } from 'b/lib/foo';
import { bar } from 'b/lib/bar/foo';
foo();
bar();


//// [/user/username/projects/myproject/packages/B/src/foo.ts]
export function foo() { }

//// [/user/username/projects/myproject/packages/B/src/bar/foo.ts]
export function bar() { }

//// [/user/username/projects/myproject/node_modules/b] symlink(/user/username/projects/myproject/packages/B)
//// [/user/username/projects/myproject/packages/B/lib/foo.js]
"use strict";
exports.__esModule = true;
exports.foo = void 0;
function foo() { }
exports.foo = foo;


//// [/user/username/projects/myproject/packages/B/lib/foo.d.ts]
export declare function foo(): void;


//// [/user/username/projects/myproject/packages/B/lib/bar/foo.js]
"use strict";
exports.__esModule = true;
exports.bar = void 0;
function bar() { }
exports.bar = bar;


//// [/user/username/projects/myproject/packages/B/lib/bar/foo.d.ts]
export declare function bar(): void;


//// [/user/username/projects/myproject/packages/B/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","./src/foo.ts","./src/bar/foo.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"4646078106-export function foo() { }","signature":"-5677608893-export declare function foo(): void;\n"},{"version":"1045484683-export function bar() { }","signature":"-2904461644-export declare function bar(): void;\n"}],"options":{"composite":true,"outDir":"./lib","rootDir":"./src"},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,3,2],"latestChangedDtsFile":"./lib/bar/foo.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/packages/B/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "./src/foo.ts",
      "./src/bar/foo.ts"
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./src/foo.ts": {
        "version": "4646078106-export function foo() { }",
        "signature": "-5677608893-export declare function foo(): void;\n"
      },
      "./src/bar/foo.ts": {
        "version": "1045484683-export function bar() { }",
        "signature": "-2904461644-export declare function bar(): void;\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./lib",
      "rootDir": "./src"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "./src/bar/foo.ts",
      "./src/foo.ts"
    ],
    "latestChangedDtsFile": "./lib/bar/foo.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 955
}

//// [/user/username/projects/myproject/packages/A/lib/test.js]
"use strict";
exports.__esModule = true;
var foo_1 = require("b/lib/foo");
var foo_2 = require("b/lib/bar/foo");
(0, foo_1.foo)();
(0, foo_2.bar)();


//// [/user/username/projects/myproject/packages/A/lib/test.d.ts]
export {};


//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../b/lib/foo.d.ts","../b/lib/bar/foo.d.ts","./src/test.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-5677608893-export declare function foo(): void;\n","-2904461644-export declare function bar(): void;\n",{"version":"14700910833-import { foo } from 'b/lib/foo';\nimport { bar } from 'b/lib/bar/foo';\nfoo();\nbar();\n","signature":"-3531856636-export {};\n"}],"options":{"composite":true,"outDir":"./lib","rootDir":"./src"},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,3,2],"latestChangedDtsFile":"./lib/test.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "../b/lib/foo.d.ts",
      "../b/lib/bar/foo.d.ts",
      "./src/test.ts"
    ],
    "fileNamesList": [
      [
        "../b/lib/foo.d.ts",
        "../b/lib/bar/foo.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../b/lib/foo.d.ts": {
        "version": "-5677608893-export declare function foo(): void;\n",
        "signature": "-5677608893-export declare function foo(): void;\n"
      },
      "../b/lib/bar/foo.d.ts": {
        "version": "-2904461644-export declare function bar(): void;\n",
        "signature": "-2904461644-export declare function bar(): void;\n"
      },
      "./src/test.ts": {
        "version": "14700910833-import { foo } from 'b/lib/foo';\nimport { bar } from 'b/lib/bar/foo';\nfoo();\nbar();\n",
        "signature": "-3531856636-export {};\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./lib",
      "rootDir": "./src"
    },
    "referencedMap": {
      "./src/test.ts": [
        "../b/lib/foo.d.ts",
        "../b/lib/bar/foo.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "./src/test.ts",
      "../b/lib/bar/foo.d.ts",
      "../b/lib/foo.d.ts"
    ],
    "latestChangedDtsFile": "./lib/test.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1035
}


/a/lib/tsc.js --w --p /user/username/projects/myproject/packages/A/tsconfig.json
Output::
>> Screen clear
[[90m12:01:16 AM[0m] Starting compilation in watch mode...

[[90m12:01:23 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/packages/A/src/test.ts"]
Program options: {"outDir":"/user/username/projects/myproject/packages/A/lib","rootDir":"/user/username/projects/myproject/packages/A/src","composite":true,"configFilePath":"/user/username/projects/myproject/packages/A/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/packages/B/src/foo.ts
/user/username/projects/myproject/packages/B/src/bar/foo.ts
/user/username/projects/myproject/packages/A/src/test.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/packages/B/src/foo.ts
/user/username/projects/myproject/packages/B/src/bar/foo.ts
/user/username/projects/myproject/packages/A/src/test.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/packages/b/src/foo.ts (used version)
/user/username/projects/myproject/packages/a/src/test.ts (computed .d.ts)
/user/username/projects/myproject/packages/b/src/bar/foo.ts (used version)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/a/src/test.ts:
  {}
/user/username/projects/myproject/packages/b/src/foo.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar/foo.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/packages/A/lib/test.js] file written with same contents
//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../b/src/foo.ts","../b/src/bar/foo.ts","./src/test.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"4646078106-export function foo() { }","1045484683-export function bar() { }",{"version":"14700910833-import { foo } from 'b/lib/foo';\nimport { bar } from 'b/lib/bar/foo';\nfoo();\nbar();\n","signature":"-3531856636-export {};\n"}],"options":{"composite":true,"outDir":"./lib","rootDir":"./src"},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,3,2],"latestChangedDtsFile":"./lib/test.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "../b/src/foo.ts",
      "../b/src/bar/foo.ts",
      "./src/test.ts"
    ],
    "fileNamesList": [
      [
        "../b/src/foo.ts",
        "../b/src/bar/foo.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../b/src/foo.ts": {
        "version": "4646078106-export function foo() { }",
        "signature": "4646078106-export function foo() { }"
      },
      "../b/src/bar/foo.ts": {
        "version": "1045484683-export function bar() { }",
        "signature": "1045484683-export function bar() { }"
      },
      "./src/test.ts": {
        "version": "14700910833-import { foo } from 'b/lib/foo';\nimport { bar } from 'b/lib/bar/foo';\nfoo();\nbar();\n",
        "signature": "-3531856636-export {};\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./lib",
      "rootDir": "./src"
    },
    "referencedMap": {
      "./src/test.ts": [
        "../b/src/foo.ts",
        "../b/src/bar/foo.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "./src/test.ts",
      "../b/src/bar/foo.ts",
      "../b/src/foo.ts"
    ],
    "latestChangedDtsFile": "./lib/test.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1003
}

