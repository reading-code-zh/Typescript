Input::
//// [/user/username/projects/myproject/Project/file1.ts]
export const x = 10;

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

//// [/user/username/projects/myproject/Project/tsconfig.json]
{"include":[".","./**/*.json"]}


/a/lib/tsc.js -w -p .
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[[90m12:00:26 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/Project/file1.ts"]
Program options: {"watch":true,"project":"/user/username/projects/myproject/Project","configFilePath":"/user/username/projects/myproject/Project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/Project/file1.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/Project/file1.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/project/file1.ts (used version)

PolledWatches::
/user/username/projects/myproject/project/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/project/tsconfig.json:
  {}
/user/username/projects/myproject/project/file1.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/project:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/Project/file1.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;



Change:: Write file2

Input::
//// [/user/username/projects/myproject/Project/file2.ts]
export const y = 10;


Output::
>> Screen clear
[[90m12:00:29 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:32 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/Project/file1.ts","/user/username/projects/myproject/Project/file2.ts"]
Program options: {"watch":true,"project":"/user/username/projects/myproject/Project","configFilePath":"/user/username/projects/myproject/Project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/Project/file1.ts
/user/username/projects/myproject/Project/file2.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/Project/file2.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/project/file2.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/project/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/project/tsconfig.json:
  {}
/user/username/projects/myproject/project/file1.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/project/file2.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/project:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/Project/file2.js]
"use strict";
exports.__esModule = true;
exports.y = void 0;
exports.y = 10;


