Input::
//// [/a/b/moduleFile1.ts]
export function Foo() { };

//// [/a/b/file1Consumer1.ts]
import {Foo} from "./moduleFile1"; export var y = 10;

//// [/a/b/file1Consumer2.ts]
import {Foo} from "./moduleFile1"; let z = 10;

//// [/a/b/globalFile3.ts]
interface GlobalFoo { age: number }

//// [/a/b/moduleFile2.ts]
export var Foo4 = 10;

//// [/a/b/tsconfig.json]
{"compilerOptions":{"isolatedModules":true}}

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


/a/lib/tsc.js --w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[96ma/b/globalFile3.ts[0m:[93m1[0m:[93m1[0m - [91merror[0m[90m TS1208: [0m'globalFile3.ts' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.

[7m1[0m interface GlobalFoo { age: number }
[7m [0m [91m~~~~~~~~~[0m

[[90m12:00:34 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/a/b/file1Consumer1.ts","/a/b/file1Consumer2.ts","/a/b/globalFile3.ts","/a/b/moduleFile1.ts","/a/b/moduleFile2.ts"]
Program options: {"isolatedModules":true,"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/modulefile1.ts (used version)
/a/b/file1consumer1.ts (used version)
/a/b/file1consumer2.ts (used version)
/a/b/globalfile3.ts (used version)
/a/b/modulefile2.ts (used version)

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/file1consumer1.ts:
  {}
/a/b/modulefile1.ts:
  {}
/a/b/file1consumer2.ts:
  {}
/a/b/globalfile3.ts:
  {}
/a/b/modulefile2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/a/b:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/moduleFile1.js]
"use strict";
exports.__esModule = true;
exports.Foo = void 0;
function Foo() { }
exports.Foo = Foo;
;


//// [/a/b/file1Consumer1.js]
"use strict";
exports.__esModule = true;
exports.y = void 0;
exports.y = 10;


//// [/a/b/file1Consumer2.js]
"use strict";
exports.__esModule = true;
var z = 10;


//// [/a/b/globalFile3.js]


//// [/a/b/moduleFile2.js]
"use strict";
exports.__esModule = true;
exports.Foo4 = void 0;
exports.Foo4 = 10;



Change:: Change the content of moduleFile1 to `export var T: number;export function Foo() { };`

Input::
//// [/a/b/moduleFile1.ts]
export var T: number;export function Foo() { };


Output::
>> Screen clear
[[90m12:00:38 AM[0m] File change detected. Starting incremental compilation...

[96ma/b/globalFile3.ts[0m:[93m1[0m:[93m1[0m - [91merror[0m[90m TS1208: [0m'globalFile3.ts' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.

[7m1[0m interface GlobalFoo { age: number }
[7m [0m [91m~~~~~~~~~[0m

[[90m12:00:42 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/a/b/file1Consumer1.ts","/a/b/file1Consumer2.ts","/a/b/globalFile3.ts","/a/b/moduleFile1.ts","/a/b/moduleFile2.ts"]
Program options: {"isolatedModules":true,"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts
/a/b/globalFile3.ts
/a/b/moduleFile2.ts

Semantic diagnostics in builder refreshed for::
/a/b/moduleFile1.ts
/a/b/file1Consumer1.ts
/a/b/file1Consumer2.ts

Shape signatures in builder refreshed for::
/a/b/modulefile1.ts (computed .d.ts)
/a/b/file1consumer2.ts (used version)
/a/b/file1consumer1.ts (used version)

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/file1consumer1.ts:
  {}
/a/b/modulefile1.ts:
  {}
/a/b/file1consumer2.ts:
  {}
/a/b/globalfile3.ts:
  {}
/a/b/modulefile2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/a/b:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/moduleFile1.js]
"use strict";
exports.__esModule = true;
exports.Foo = exports.T = void 0;
function Foo() { }
exports.Foo = Foo;
;


