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

//// [/a/b/f1.ts]

                export * from "../c/f2";
                export * from "../d/f3";

//// [/a/c/f2.ts]
export let x = 1;

//// [/a/d/f3.ts]
export let y = 1;


/a/lib/tsc.js --w /a/c/f2.ts /a/d/f3.ts
Output::
>> Screen clear
[[90m12:00:21 AM[0m] Starting compilation in watch mode...

[[90m12:00:26 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/c/f2.ts","/a/d/f3.ts"]
Program options: {"allowNonTsExtensions":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/c/f2.ts
/a/d/f3.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/c/f2.ts
/a/d/f3.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/c/f2.ts (used version)
/a/d/f3.ts (used version)

PolledWatches::

FsWatches::
/a/c/f2.ts:
  {}
/a/d/f3.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/c/f2.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 1;


//// [/a/d/f3.js]
"use strict";
exports.__esModule = true;
exports.y = void 0;
exports.y = 1;



createing separate watcher
Output::
>> Screen clear
[[90m12:00:27 AM[0m] Starting compilation in watch mode...

[[90m12:00:36 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/f1.ts"]
Program options: {"allowNonTsExtensions":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/c/f2.ts
/a/d/f3.ts
/a/b/f1.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/c/f2.ts
/a/d/f3.ts
/a/b/f1.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/c/f2.ts (used version)
/a/d/f3.ts (used version)
/a/b/f1.ts (used version)

PolledWatches::

FsWatches::
/a/c/f2.ts:
  {}
/a/d/f3.ts:
  {}
/a/lib/lib.d.ts:
  {}
/a/b/f1.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/c/f2.js] file written with same contents
//// [/a/d/f3.js] file written with same contents
//// [/a/b/f1.js]
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(require("../c/f2"), exports);
__exportStar(require("../d/f3"), exports);



First program is not updated:: true
Second program is not updated:: true