Input::
//// [/user/username/projects/myproject/a.ts]
import * as data from './data.json'

//// [/user/username/projects/myproject/data.json]
{ "foo": 1 }

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"moduleResolution":"node"}}

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


/a/lib/tsc.js -w
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[96ma.ts[0m:[93m1[0m:[93m23[0m - [91merror[0m[90m TS2732: [0mCannot find module './data.json'. Consider using '--resolveJsonModule' to import module with '.json' extension.

[7m1[0m import * as data from './data.json'
[7m [0m [91m                      ~~~~~~~~~~~~~[0m

[[90m12:00:26 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"moduleResolution":2,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)

PolledWatches::
/user/username/projects/myproject/data.json:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;



Change:: Enable resolveJsonModule

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"moduleResolution":"node","resolveJsonModule":true}}


Output::
>> Screen clear
[[90m12:00:30 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:34 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"moduleResolution":2,"resolveJsonModule":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/data.json
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/data.json
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/data.json (computed .d.ts)
/user/username/projects/myproject/a.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/data.json:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/data.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
