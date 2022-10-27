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

//// [/user/username/projects/myproject/a.js]


//// [/user/username/projects/myproject/b.ts]


//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"allowJs":true,"noEmit":true}}


/a/lib/tsc.js -b -w -verbose --incremental
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[[90m12:00:24 AM[0m] Projects in this build: 
    * tsconfig.json

[[90m12:00:25 AM[0m] Project 'tsconfig.json' is out of date because output file 'tsconfig.tsbuildinfo' does not exist

[[90m12:00:26 AM[0m] Building project '/user/username/projects/myproject/tsconfig.json'...

[[90m12:00:32 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.js","/user/username/projects/myproject/b.ts"]
Program options: {"allowJs":true,"noEmit":true,"watch":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.js
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.js
/user/username/projects/myproject/b.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.js (used version)
/user/username/projects/myproject/b.ts (used version)

PolledWatches::

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.js:
  {}
/user/username/projects/myproject/b.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.js","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"5381-","5381-"],"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3],"affectedFilesPendingEmit":[[2,1],[3,1]]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.js",
      "./b.ts"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.js": {
        "version": "5381-",
        "signature": "5381-"
      },
      "./b.ts": {
        "version": "5381-",
        "signature": "5381-"
      }
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.js",
      "./b.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./a.js",
        "Full"
      ],
      [
        "./b.ts",
        "Full"
      ]
    ]
  },
  "version": "FakeTSVersion",
  "size": 730
}


Change:: No change

Input::
//// [/user/username/projects/myproject/a.js] file written with same contents

Output::
>> Screen clear
[[90m12:00:36 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:37 AM[0m] Project 'tsconfig.json' is out of date because output 'tsconfig.tsbuildinfo' is older than input 'a.js'

[[90m12:00:38 AM[0m] Building project '/user/username/projects/myproject/tsconfig.json'...

[[90m12:00:39 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.js","/user/username/projects/myproject/b.ts"]
Program options: {"allowJs":true,"noEmit":true,"watch":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.js
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

PolledWatches::

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.js:
  {}
/user/username/projects/myproject/b.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined


Change:: change

Input::
//// [/user/username/projects/myproject/a.js]
const x = 10;


Output::
>> Screen clear
[[90m12:00:43 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:44 AM[0m] Project 'tsconfig.json' is out of date because output 'tsconfig.tsbuildinfo' is older than input 'a.js'

[[90m12:00:45 AM[0m] Building project '/user/username/projects/myproject/tsconfig.json'...

[[90m12:00:53 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.js","/user/username/projects/myproject/b.ts"]
Program options: {"allowJs":true,"noEmit":true,"watch":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.js
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.js
/user/username/projects/myproject/b.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.js (computed .d.ts)
/user/username/projects/myproject/b.ts (used version)

PolledWatches::

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.js:
  {}
/user/username/projects/myproject/b.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.js","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"5029505981-const x = 10;","signature":"-3042032780-declare const x: 10;\n","affectsGlobalScope":true},"5381-"],"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3],"affectedFilesPendingEmit":[[2,1],[3,1]]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.js",
      "./b.ts"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.js": {
        "version": "5029505981-const x = 10;",
        "signature": "-3042032780-declare const x: 10;\n",
        "affectsGlobalScope": true
      },
      "./b.ts": {
        "version": "5381-",
        "signature": "5381-"
      }
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.js",
      "./b.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "./a.js",
        "Full"
      ],
      [
        "./b.ts",
        "Full"
      ]
    ]
  },
  "version": "FakeTSVersion",
  "size": 836
}

