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

//// [/a/b/alpha.tsconfig.json]
{}

//// [/a/b/project1.tsconfig.json]
{"extends":"./alpha.tsconfig.json","compilerOptions":{"composite":true},"files":["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]}

//// [/a/b/commonFile1.ts]
let x = 1

//// [/a/b/commonFile2.ts]
let y = 1

//// [/a/b/bravo.tsconfig.json]
{"extends":"./alpha.tsconfig.json"}

//// [/a/b/project2.tsconfig.json]
{"extends":"./bravo.tsconfig.json","compilerOptions":{"composite":true},"files":["/a/b/other.ts"]}

//// [/a/b/other.ts]
let z = 0;


/a/lib/tsc.js -b -w -v project1.tsconfig.json project2.tsconfig.json
Output::
>> Screen clear
[[90m12:00:25 AM[0m] Starting compilation in watch mode...

[[90m12:00:26 AM[0m] Projects in this build: 
    * project1.tsconfig.json
    * project2.tsconfig.json

[[90m12:00:27 AM[0m] Project 'project1.tsconfig.json' is out of date because output file 'project1.tsconfig.tsbuildinfo' does not exist

[[90m12:00:28 AM[0m] Building project '/a/b/project1.tsconfig.json'...

[[90m12:00:42 AM[0m] Project 'project2.tsconfig.json' is out of date because output file 'project2.tsconfig.tsbuildinfo' does not exist

[[90m12:00:43 AM[0m] Building project '/a/b/project2.tsconfig.json'...

[[90m12:00:53 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]
Program options: {"composite":true,"watch":true,"configFilePath":"/a/b/project1.tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/commonfile1.ts (computed .d.ts during emit)
/a/b/commonfile2.ts (computed .d.ts during emit)

Program root files: ["/a/b/other.ts"]
Program options: {"composite":true,"watch":true,"configFilePath":"/a/b/project2.tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/other.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/other.ts (computed .d.ts during emit)

PolledWatches::

FsWatches::
/a/b/project1.tsconfig.json:
  {}
/a/b/alpha.tsconfig.json:
  {}
/a/b/commonfile1.ts:
  {}
/a/b/commonfile2.ts:
  {}
/a/b/project2.tsconfig.json:
  {}
/a/b/bravo.tsconfig.json:
  {}
/a/b/other.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js]
var x = 1;


//// [/a/b/commonFile1.d.ts]
declare let x: number;


//// [/a/b/commonFile2.js]
var y = 1;


//// [/a/b/commonFile2.d.ts]
declare let y: number;


//// [/a/b/project1.tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./commonfile1.ts","./commonfile2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"2167136208-let x = 1","signature":"2842409786-declare let x: number;\n","affectsGlobalScope":true},{"version":"2168322129-let y = 1","signature":"784887931-declare let y: number;\n","affectsGlobalScope":true}],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[2,3,1],"latestChangedDtsFile":"./commonFile2.d.ts"},"version":"FakeTSVersion"}

//// [/a/b/project1.tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./commonfile1.ts",
      "./commonfile2.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./commonfile1.ts": {
        "version": "2167136208-let x = 1",
        "signature": "2842409786-declare let x: number;\n",
        "affectsGlobalScope": true
      },
      "./commonfile2.ts": {
        "version": "2168322129-let y = 1",
        "signature": "784887931-declare let y: number;\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "./commonfile1.ts",
      "./commonfile2.ts",
      "../lib/lib.d.ts"
    ],
    "latestChangedDtsFile": "./commonFile2.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 896
}

//// [/a/b/other.js]
var z = 0;


//// [/a/b/other.d.ts]
declare let z: number;


//// [/a/b/project2.tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./other.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"2874288940-let z = 0;","signature":"-1272633924-declare let z: number;\n","affectsGlobalScope":true}],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[2,1],"latestChangedDtsFile":"./other.d.ts"},"version":"FakeTSVersion"}

//// [/a/b/project2.tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./other.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./other.ts": {
        "version": "2874288940-let z = 0;",
        "signature": "-1272633924-declare let z: number;\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "./other.ts",
      "../lib/lib.d.ts"
    ],
    "latestChangedDtsFile": "./other.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 755
}


Change:: Modify alpha config

Input::
//// [/a/b/alpha.tsconfig.json]
{"compilerOptions":{"strict":true}}


Output::
>> Screen clear
[[90m12:00:57 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:58 AM[0m] Project 'project1.tsconfig.json' is out of date because output 'project1.tsconfig.tsbuildinfo' is older than input 'alpha.tsconfig.json'

[[90m12:00:59 AM[0m] Building project '/a/b/project1.tsconfig.json'...



Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]
Program options: {"strict":true,"composite":true,"watch":true,"configFilePath":"/a/b/project1.tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

No shapes updated in the builder::

PolledWatches::

FsWatches::
/a/b/project1.tsconfig.json:
  {}
/a/b/alpha.tsconfig.json:
  {}
/a/b/commonfile1.ts:
  {}
/a/b/commonfile2.ts:
  {}
/a/b/project2.tsconfig.json:
  {}
/a/b/bravo.tsconfig.json:
  {}
/a/b/other.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js]
"use strict";
var x = 1;


//// [/a/b/commonFile2.js]
"use strict";
var y = 1;


//// [/a/b/project1.tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./commonfile1.ts","./commonfile2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"2167136208-let x = 1","signature":"2842409786-declare let x: number;\n","affectsGlobalScope":true},{"version":"2168322129-let y = 1","signature":"784887931-declare let y: number;\n","affectsGlobalScope":true}],"options":{"composite":true,"strict":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[2,3,1],"latestChangedDtsFile":"./commonFile2.d.ts"},"version":"FakeTSVersion"}

//// [/a/b/project1.tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./commonfile1.ts",
      "./commonfile2.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./commonfile1.ts": {
        "version": "2167136208-let x = 1",
        "signature": "2842409786-declare let x: number;\n",
        "affectsGlobalScope": true
      },
      "./commonfile2.ts": {
        "version": "2168322129-let y = 1",
        "signature": "784887931-declare let y: number;\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "strict": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "./commonfile1.ts",
      "./commonfile2.ts",
      "../lib/lib.d.ts"
    ],
    "latestChangedDtsFile": "./commonFile2.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 910
}


Change:: Build project 2

Input::

Output::
[[90m12:01:13 AM[0m] Project 'project2.tsconfig.json' is out of date because output 'project2.tsconfig.tsbuildinfo' is older than input 'alpha.tsconfig.json'

[[90m12:01:14 AM[0m] Building project '/a/b/project2.tsconfig.json'...

[[90m12:01:25 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/other.ts"]
Program options: {"strict":true,"composite":true,"watch":true,"configFilePath":"/a/b/project2.tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/other.ts

No shapes updated in the builder::

PolledWatches::

FsWatches::
/a/b/project1.tsconfig.json:
  {}
/a/b/alpha.tsconfig.json:
  {}
/a/b/commonfile1.ts:
  {}
/a/b/commonfile2.ts:
  {}
/a/b/project2.tsconfig.json:
  {}
/a/b/bravo.tsconfig.json:
  {}
/a/b/other.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/other.js]
"use strict";
var z = 0;


//// [/a/b/project2.tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./other.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"2874288940-let z = 0;","signature":"-1272633924-declare let z: number;\n","affectsGlobalScope":true}],"options":{"composite":true,"strict":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[2,1],"latestChangedDtsFile":"./other.d.ts"},"version":"FakeTSVersion"}

//// [/a/b/project2.tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./other.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./other.ts": {
        "version": "2874288940-let z = 0;",
        "signature": "-1272633924-declare let z: number;\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "strict": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "./other.ts",
      "../lib/lib.d.ts"
    ],
    "latestChangedDtsFile": "./other.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 769
}


Change:: change bravo config

Input::
//// [/a/b/bravo.tsconfig.json]
{"extends":"./alpha.tsconfig.json","compilerOptions":{"strict":false}}


Output::
>> Screen clear
[[90m12:01:29 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:30 AM[0m] Project 'project2.tsconfig.json' is out of date because output 'project2.tsconfig.tsbuildinfo' is older than input 'bravo.tsconfig.json'

[[90m12:01:31 AM[0m] Building project '/a/b/project2.tsconfig.json'...

[[90m12:01:42 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/other.ts"]
Program options: {"strict":false,"composite":true,"watch":true,"configFilePath":"/a/b/project2.tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/other.ts

No shapes updated in the builder::

PolledWatches::

FsWatches::
/a/b/project1.tsconfig.json:
  {}
/a/b/alpha.tsconfig.json:
  {}
/a/b/commonfile1.ts:
  {}
/a/b/commonfile2.ts:
  {}
/a/b/project2.tsconfig.json:
  {}
/a/b/bravo.tsconfig.json:
  {}
/a/b/other.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/b/other.js]
var z = 0;


//// [/a/b/project2.tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./other.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"2874288940-let z = 0;","signature":"-1272633924-declare let z: number;\n","affectsGlobalScope":true}],"options":{"composite":true,"strict":false},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[2,1],"latestChangedDtsFile":"./other.d.ts"},"version":"FakeTSVersion"}

//// [/a/b/project2.tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./other.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./other.ts": {
        "version": "2874288940-let z = 0;",
        "signature": "-1272633924-declare let z: number;\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "strict": false
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "./other.ts",
      "../lib/lib.d.ts"
    ],
    "latestChangedDtsFile": "./other.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 770
}


Change:: project 2 extends alpha

Input::
//// [/a/b/project2.tsconfig.json]
{"extends":"./alpha.tsconfig.json"}


Output::
>> Screen clear
[[90m12:01:46 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:47 AM[0m] Project 'project2.tsconfig.json' is out of date because output 'commonFile1.js' is older than input 'project2.tsconfig.json'

[[90m12:01:48 AM[0m] Building project '/a/b/project2.tsconfig.json'...

[[90m12:01:59 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts","/a/b/other.ts"]
Program options: {"strict":true,"watch":true,"configFilePath":"/a/b/project2.tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts
/a/b/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts
/a/b/other.ts

Shape signatures in builder refreshed for::
/a/b/commonfile1.ts (computed .d.ts)
/a/b/commonfile2.ts (computed .d.ts)
/a/b/other.ts (computed .d.ts)

PolledWatches::

FsWatches::
/a/b/project1.tsconfig.json:
  {}
/a/b/alpha.tsconfig.json:
  {}
/a/b/commonfile1.ts:
  {}
/a/b/commonfile2.ts:
  {}
/a/b/project2.tsconfig.json:
  {}
/a/b/other.ts:
  {}

FsWatchesRecursive::
/a/b:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js] file written with same contents
//// [/a/b/commonFile2.js] file written with same contents
//// [/a/b/other.js]
"use strict";
var z = 0;



Change:: update aplha config

Input::
//// [/a/b/alpha.tsconfig.json]
{}


Output::
>> Screen clear
[[90m12:02:04 AM[0m] File change detected. Starting incremental compilation...

[[90m12:02:05 AM[0m] Project 'project1.tsconfig.json' is out of date because output 'project1.tsconfig.tsbuildinfo' is older than input 'alpha.tsconfig.json'

[[90m12:02:06 AM[0m] Building project '/a/b/project1.tsconfig.json'...



Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]
Program options: {"composite":true,"watch":true,"configFilePath":"/a/b/project1.tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

No shapes updated in the builder::

PolledWatches::

FsWatches::
/a/b/project1.tsconfig.json:
  {}
/a/b/alpha.tsconfig.json:
  {}
/a/b/commonfile1.ts:
  {}
/a/b/commonfile2.ts:
  {}
/a/b/project2.tsconfig.json:
  {}
/a/b/other.ts:
  {}

FsWatchesRecursive::
/a/b:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js]
var x = 1;


//// [/a/b/commonFile2.js]
var y = 1;


//// [/a/b/project1.tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./commonfile1.ts","./commonfile2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"2167136208-let x = 1","signature":"2842409786-declare let x: number;\n","affectsGlobalScope":true},{"version":"2168322129-let y = 1","signature":"784887931-declare let y: number;\n","affectsGlobalScope":true}],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[2,3,1],"latestChangedDtsFile":"./commonFile2.d.ts"},"version":"FakeTSVersion"}

//// [/a/b/project1.tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./commonfile1.ts",
      "./commonfile2.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./commonfile1.ts": {
        "version": "2167136208-let x = 1",
        "signature": "2842409786-declare let x: number;\n",
        "affectsGlobalScope": true
      },
      "./commonfile2.ts": {
        "version": "2168322129-let y = 1",
        "signature": "784887931-declare let y: number;\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "./commonfile1.ts",
      "./commonfile2.ts",
      "../lib/lib.d.ts"
    ],
    "latestChangedDtsFile": "./commonFile2.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 896
}


Change:: Build project 2

Input::

Output::
[[90m12:02:20 AM[0m] Project 'project2.tsconfig.json' is out of date because output 'commonFile1.js' is older than input 'alpha.tsconfig.json'

[[90m12:02:21 AM[0m] Building project '/a/b/project2.tsconfig.json'...

[[90m12:02:32 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts","/a/b/other.ts"]
Program options: {"watch":true,"configFilePath":"/a/b/project2.tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts
/a/b/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts
/a/b/other.ts

No shapes updated in the builder::

PolledWatches::

FsWatches::
/a/b/project1.tsconfig.json:
  {}
/a/b/alpha.tsconfig.json:
  {}
/a/b/commonfile1.ts:
  {}
/a/b/commonfile2.ts:
  {}
/a/b/project2.tsconfig.json:
  {}
/a/b/other.ts:
  {}

FsWatchesRecursive::
/a/b:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js] file written with same contents
//// [/a/b/commonFile2.js] file written with same contents
//// [/a/b/other.js]
var z = 0;


