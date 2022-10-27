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

//// [/user/username/projects/myproject/src/file1.ts]
import { x } from "file2";

//// [/user/username/projects/myproject/node_modules/file2/index.d.ts]
export const x = 10;

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"outDir":"dist","declaration":true}}


/a/lib/tsc.js --w -p /user/username/projects/myproject/tsconfig.json
Output::
>> Screen clear
[[90m12:00:29 AM[0m] Starting compilation in watch mode...

[[90m12:00:37 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/file1.ts"]
Program options: {"outDir":"/user/username/projects/myproject/dist","declaration":true,"watch":true,"project":"/user/username/projects/myproject/tsconfig.json","configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/node_modules/file2/index.d.ts
/user/username/projects/myproject/src/file1.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/node_modules/file2/index.d.ts
/user/username/projects/myproject/src/file1.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/node_modules/file2/index.d.ts (used version)
/user/username/projects/myproject/src/file1.ts (computed .d.ts during emit)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/src/file1.ts:
  {}
/user/username/projects/myproject/node_modules/file2/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/src:
  {}
/user/username/projects/myproject/node_modules:
  {}
/user/username/projects/myproject/node_modules/file2:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/dist:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/dist/file1.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/myproject/dist/file1.d.ts]
export {};



Change:: No change

Input::

Output::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/src/file1.ts:
  {}
/user/username/projects/myproject/node_modules/file2/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/src:
  {}
/user/username/projects/myproject/node_modules:
  {}
/user/username/projects/myproject/node_modules/file2:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/dist:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: Add new file, should schedule and run timeout to update directory watcher

Input::
//// [/user/username/projects/myproject/src/file3.ts]
export const y = 10;


Output::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/src/file1.ts:
  {}
/user/username/projects/myproject/node_modules/file2/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/src:
  {}
/user/username/projects/myproject/node_modules:
  {}
/user/username/projects/myproject/node_modules/file2:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/dist:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: Actual program update to include new file

Input::

Output::
>> Screen clear
[[90m12:00:41 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:46 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/file1.ts","/user/username/projects/myproject/src/file3.ts"]
Program options: {"outDir":"/user/username/projects/myproject/dist","declaration":true,"watch":true,"project":"/user/username/projects/myproject/tsconfig.json","configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/node_modules/file2/index.d.ts
/user/username/projects/myproject/src/file1.ts
/user/username/projects/myproject/src/file3.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/src/file3.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/src/file3.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/src/file1.ts:
  {}
/user/username/projects/myproject/node_modules/file2/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/src:
  {}
/user/username/projects/myproject/node_modules:
  {}
/user/username/projects/myproject/node_modules/file2:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/dist:
  {}
/user/username/projects/myproject/src/file3.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/dist/file3.js]
"use strict";
exports.__esModule = true;
exports.y = void 0;
exports.y = 10;


//// [/user/username/projects/myproject/dist/file3.d.ts]
export declare const y = 10;



Change:: After program emit with new file, should schedule and run timeout to update directory watcher

Input::

Output::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/src/file1.ts:
  {}
/user/username/projects/myproject/node_modules/file2/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/src:
  {}
/user/username/projects/myproject/node_modules:
  {}
/user/username/projects/myproject/node_modules/file2:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/dist:
  {}
/user/username/projects/myproject/src/file3.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: No change

Input::

Output::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/src/file1.ts:
  {}
/user/username/projects/myproject/node_modules/file2/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/src:
  {}
/user/username/projects/myproject/node_modules:
  {}
/user/username/projects/myproject/node_modules/file2:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/dist:
  {}
/user/username/projects/myproject/src/file3.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

