Input::
//// [/a/b/projects/myProject/src/file1.ts]
import module1 = require("module1");
module1("hello");

//// [/a/b/projects/myProject/src/file2.ts]
import module11 = require("module1");
module11("hello");

//// [/a/b/projects/myProject/node_modules/module1/index.js]
module.exports = options => { return options.toString(); }

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

//// [/a/b/projects/myProject/src/tsconfig.json]
{"compilerOptions":{"allowJs":true,"rootDir":".","outDir":"../dist","moduleResolution":"node","maxNodeModuleJsDepth":1}}


/a/lib/tsc.js --w -p /a/b/projects/myProject/src
Output::
>> Screen clear
[[90m12:00:29 AM[0m] Starting compilation in watch mode...

[[90m12:00:37 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/projects/myProject/src/file1.ts","/a/b/projects/myProject/src/file2.ts"]
Program options: {"allowJs":true,"rootDir":"/a/b/projects/myProject/src","outDir":"/a/b/projects/myProject/dist","moduleResolution":2,"maxNodeModuleJsDepth":1,"watch":true,"project":"/a/b/projects/myProject/src","configFilePath":"/a/b/projects/myProject/src/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/projects/myProject/node_modules/module1/index.js
/a/b/projects/myProject/src/file1.ts
/a/b/projects/myProject/src/file2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/projects/myProject/node_modules/module1/index.js
/a/b/projects/myProject/src/file1.ts
/a/b/projects/myProject/src/file2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/projects/myproject/node_modules/module1/index.js (used version)
/a/b/projects/myproject/src/file1.ts (used version)
/a/b/projects/myproject/src/file2.ts (used version)

PolledWatches::
/a/b/projects/myproject/src/node_modules:
  {"pollingInterval":500}
/a/b/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/a/b/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/projects/myproject/src/tsconfig.json:
  {}
/a/b/projects/myproject/src/file1.ts:
  {}
/a/b/projects/myproject/node_modules/module1/index.js:
  {}
/a/b/projects/myproject/src/file2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/a/b/projects/myproject/node_modules:
  {}
/a/b/projects/myproject/src:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/projects/myProject/dist/file1.js]
"use strict";
exports.__esModule = true;
var module1 = require("module1");
module1("hello");


//// [/a/b/projects/myProject/dist/file2.js]
"use strict";
exports.__esModule = true;
var module11 = require("module1");
module11("hello");



Change:: Add new line to file1

Input::
//// [/a/b/projects/myProject/src/file1.ts]
import module1 = require("module1");
module1("hello");
;


Output::
>> Screen clear
[[90m12:00:40 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:44 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/projects/myProject/src/file1.ts","/a/b/projects/myProject/src/file2.ts"]
Program options: {"allowJs":true,"rootDir":"/a/b/projects/myProject/src","outDir":"/a/b/projects/myProject/dist","moduleResolution":2,"maxNodeModuleJsDepth":1,"watch":true,"project":"/a/b/projects/myProject/src","configFilePath":"/a/b/projects/myProject/src/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/a/b/projects/myProject/node_modules/module1/index.js
/a/b/projects/myProject/src/file1.ts
/a/b/projects/myProject/src/file2.ts

Semantic diagnostics in builder refreshed for::
/a/b/projects/myProject/src/file1.ts

Shape signatures in builder refreshed for::
/a/b/projects/myproject/src/file1.ts (computed .d.ts)

PolledWatches::
/a/b/projects/myproject/src/node_modules:
  {"pollingInterval":500}
/a/b/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/a/b/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/projects/myproject/src/tsconfig.json:
  {}
/a/b/projects/myproject/src/file1.ts:
  {}
/a/b/projects/myproject/node_modules/module1/index.js:
  {}
/a/b/projects/myproject/src/file2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/a/b/projects/myproject/node_modules:
  {}
/a/b/projects/myproject/src:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/projects/myProject/dist/file1.js]
"use strict";
exports.__esModule = true;
var module1 = require("module1");
module1("hello");
;


