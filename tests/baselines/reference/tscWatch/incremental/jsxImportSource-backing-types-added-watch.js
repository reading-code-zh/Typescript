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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/users/username/projects/project/index.tsx]
export const App = () => <div propA={true}></div>;

//// [/users/username/projects/project/tsconfig.json]
{"compilerOptions":{"module":"commonjs","jsx":"react-jsx","incremental":true,"jsxImportSource":"react"}}


/a/lib/tsc.js -w
Output::
>> Screen clear
[[90m12:00:21 AM[0m] Starting compilation in watch mode...

[96mindex.tsx[0m:[93m1[0m:[93m26[0m - [91merror[0m[90m TS2307: [0mCannot find module 'react/jsx-runtime' or its corresponding type declarations.

[7m1[0m export const App = () => <div propA={true}></div>;
[7m [0m [91m                         ~~~~~~~~~~~~~~~~~~~~~~~~[0m

[[90m12:00:26 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/users/username/projects/project/index.tsx"]
Program options: {"module":1,"jsx":4,"incremental":true,"jsxImportSource":"react","watch":true,"configFilePath":"/users/username/projects/project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/index.tsx

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/users/username/projects/project/index.tsx

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/users/username/projects/project/index.tsx (used version)

PolledWatches::
/users/username/projects/project/node_modules:
  {"pollingInterval":500}
/users/username/projects/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/users/username/projects/project/tsconfig.json:
  {}
/users/username/projects/project/index.tsx:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/users/username/projects/project:
  {}

exitCode:: ExitStatus.undefined

//// [/users/username/projects/project/index.js]
"use strict";
exports.__esModule = true;
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var App = function () { return (0, jsx_runtime_1.jsx)("div", { propA: true }); };
exports.App = App;


//// [/users/username/projects/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./index.tsx"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-14760199789-export const App = () => <div propA={true}></div>;"],"options":{"jsx":4,"jsxImportSource":"react","module":1},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,[2,[{"file":"./index.tsx","start":25,"length":24,"messageText":"Cannot find module 'react/jsx-runtime' or its corresponding type declarations.","category":1,"code":2307}]]]},"version":"FakeTSVersion"}

//// [/users/username/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./index.tsx"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./index.tsx": {
        "version": "-14760199789-export const App = () => <div propA={true}></div>;",
        "signature": "-14760199789-export const App = () => <div propA={true}></div>;"
      }
    },
    "options": {
      "jsx": 4,
      "jsxImportSource": "react",
      "module": 1
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      [
        "./index.tsx",
        [
          {
            "file": "./index.tsx",
            "start": 25,
            "length": 24,
            "messageText": "Cannot find module 'react/jsx-runtime' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ]
    ]
  },
  "version": "FakeTSVersion",
  "size": 960
}


Change::

Input::
//// [/users/username/projects/project/node_modules/react/jsx-runtime/index.d.ts]
export namespace JSX {
    interface Element {}
    interface IntrinsicElements {
        div: {
            propA?: boolean;
        };
    }
}
export function jsx(...args: any[]): void;
export function jsxs(...args: any[]): void;
export const Fragment: unique symbol;


//// [/users/username/projects/project/node_modules/react/package.json]
{"name":"react","version":"0.0.1"}


Output::
>> Screen clear
[[90m12:00:39 AM[0m] Starting compilation in watch mode...

[[90m12:00:46 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/users/username/projects/project/index.tsx"]
Program options: {"module":1,"jsx":4,"incremental":true,"jsxImportSource":"react","watch":true,"configFilePath":"/users/username/projects/project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/node_modules/react/jsx-runtime/index.d.ts
/users/username/projects/project/index.tsx

Semantic diagnostics in builder refreshed for::
/users/username/projects/project/node_modules/react/jsx-runtime/index.d.ts
/users/username/projects/project/index.tsx

Shape signatures in builder refreshed for::
/users/username/projects/project/node_modules/react/jsx-runtime/index.d.ts (used version)
/users/username/projects/project/index.tsx (computed .d.ts)

PolledWatches::
/users/username/projects/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/users/username/projects/project/tsconfig.json:
  {}
/users/username/projects/project/index.tsx:
  {}
/users/username/projects/project/node_modules/react/jsx-runtime/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/users/username/projects/project/node_modules/react/package.json:
  {}

FsWatchesRecursive::
/users/username/projects/project/node_modules:
  {}
/users/username/projects/project:
  {}

exitCode:: ExitStatus.undefined

//// [/users/username/projects/project/index.js] file written with same contents
//// [/users/username/projects/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./node_modules/react/jsx-runtime/index.d.ts","./index.tsx"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-35656056833-export namespace JSX {\n    interface Element {}\n    interface IntrinsicElements {\n        div: {\n            propA?: boolean;\n        };\n    }\n}\nexport function jsx(...args: any[]): void;\nexport function jsxs(...args: any[]): void;\nexport const Fragment: unique symbol;\n",{"version":"-14760199789-export const App = () => <div propA={true}></div>;","signature":"-17269688391-export declare const App: () => import(\"react/jsx-runtime\").JSX.Element;\n"}],"options":{"jsx":4,"jsxImportSource":"react","module":1},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,3,2]},"version":"FakeTSVersion"}

//// [/users/username/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./node_modules/react/jsx-runtime/index.d.ts",
      "./index.tsx"
    ],
    "fileNamesList": [
      [
        "./node_modules/react/jsx-runtime/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./node_modules/react/jsx-runtime/index.d.ts": {
        "version": "-35656056833-export namespace JSX {\n    interface Element {}\n    interface IntrinsicElements {\n        div: {\n            propA?: boolean;\n        };\n    }\n}\nexport function jsx(...args: any[]): void;\nexport function jsxs(...args: any[]): void;\nexport const Fragment: unique symbol;\n",
        "signature": "-35656056833-export namespace JSX {\n    interface Element {}\n    interface IntrinsicElements {\n        div: {\n            propA?: boolean;\n        };\n    }\n}\nexport function jsx(...args: any[]): void;\nexport function jsxs(...args: any[]): void;\nexport const Fragment: unique symbol;\n"
      },
      "./index.tsx": {
        "version": "-14760199789-export const App = () => <div propA={true}></div>;",
        "signature": "-17269688391-export declare const App: () => import(\"react/jsx-runtime\").JSX.Element;\n"
      }
    },
    "options": {
      "jsx": 4,
      "jsxImportSource": "react",
      "module": 1
    },
    "referencedMap": {
      "./index.tsx": [
        "./node_modules/react/jsx-runtime/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.tsx": [
        "./node_modules/react/jsx-runtime/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./index.tsx",
      "./node_modules/react/jsx-runtime/index.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1281
}

