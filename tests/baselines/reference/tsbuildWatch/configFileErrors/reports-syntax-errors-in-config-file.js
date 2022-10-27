Input::
//// [/user/username/projects/myproject/a.ts]
export function foo() { }

//// [/user/username/projects/myproject/b.ts]
export function bar() { }

//// [/user/username/projects/myproject/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
    },
    "files": [
        "a.ts"
        "b.ts"
    ]
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


/a/lib/tsc.js --b -w
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[96mtsconfig.json[0m:[93m7[0m:[93m9[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m7[0m         "b.ts"
[7m [0m [91m        ~~~~~~[0m

[[90m12:00:29 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"composite":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

PolledWatches::

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","signature":false,"affectsGlobalScope":true},{"version":"4646078106-export function foo() { }","signature":false},{"version":"1045484683-export function bar() { }","signature":false}],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"changeFileSet":[1,2,3]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "4646078106-export function foo() { }"
      },
      "./b.ts": {
        "version": "1045484683-export function bar() { }"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "changeFileSet": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 765
}


Change:: reports syntax errors after change to config file

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
    },
    "files": [
        "a.ts"
        "b.ts"
    ]
}


Output::
>> Screen clear
[[90m12:00:33 AM[0m] File change detected. Starting incremental compilation...

[96mtsconfig.json[0m:[93m8[0m:[93m9[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m8[0m         "b.ts"
[7m [0m [91m        ~~~~~~[0m

[[90m12:00:34 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"composite":true,"declaration":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

PolledWatches::

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: reports syntax errors after change to ts file

Input::
//// [/user/username/projects/myproject/a.ts]
export function fooBar() { }


Output::
>> Screen clear
[[90m12:00:38 AM[0m] File change detected. Starting incremental compilation...

[96mtsconfig.json[0m:[93m8[0m:[93m9[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m8[0m         "b.ts"
[7m [0m [91m        ~~~~~~[0m

[[90m12:00:39 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"composite":true,"declaration":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

PolledWatches::

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: reports error when there is no change to tsconfig file

Input::
//// [/user/username/projects/myproject/tsconfig.json] file written with same contents

Output::
>> Screen clear
[[90m12:00:43 AM[0m] File change detected. Starting incremental compilation...

[96mtsconfig.json[0m:[93m8[0m:[93m9[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m8[0m         "b.ts"
[7m [0m [91m        ~~~~~~[0m

[[90m12:00:44 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"composite":true,"declaration":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

PolledWatches::

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: builds after fixing config file errors

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"composite":true,"declaration":true},"files":["a.ts","b.ts"]}


Output::
>> Screen clear
[[90m12:00:49 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:05 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts"]
Program options: {"composite":true,"declaration":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
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
/user/username/projects/myproject/a.ts (computed .d.ts)
/user/username/projects/myproject/b.ts (computed .d.ts)

PolledWatches::

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3260843409-export function fooBar() { }","signature":"-6611919720-export declare function fooBar(): void;\n"},{"version":"1045484683-export function bar() { }","signature":"-2904461644-export declare function bar(): void;\n"}],"options":{"composite":true,"declaration":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./b.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "-3260843409-export function fooBar() { }",
        "signature": "-6611919720-export declare function fooBar(): void;\n"
      },
      "./b.ts": {
        "version": "1045484683-export function bar() { }",
        "signature": "-2904461644-export declare function bar(): void;\n"
      }
    },
    "options": {
      "composite": true,
      "declaration": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts"
    ],
    "latestChangedDtsFile": "./b.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 914
}

//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;
exports.fooBar = void 0;
function fooBar() { }
exports.fooBar = fooBar;


//// [/user/username/projects/myproject/a.d.ts]
export declare function fooBar(): void;


//// [/user/username/projects/myproject/b.js]
"use strict";
exports.__esModule = true;
exports.bar = void 0;
function bar() { }
exports.bar = bar;


//// [/user/username/projects/myproject/b.d.ts]
export declare function bar(): void;


