Input::
//// [/a/b/app.ts]
let x = 1

//// [/a/b/tsconfig.json]
{"compilerOptions":{"types":["node"],"typeRoots":[]}}

//// [/a/b/node_modules/@types/node/index.d.ts]
declare var process: any

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


/a/lib/tsc.js -w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:25 AM[0m] Starting compilation in watch mode...

[[90m12:00:28 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/app.ts"]
Program options: {"types":["node"],"typeRoots":[],"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/app.ts
/a/b/node_modules/@types/node/index.d.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/app.ts
/a/b/node_modules/@types/node/index.d.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/app.ts (used version)
/a/b/node_modules/@types/node/index.d.ts (used version)

PolledWatches::

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/app.ts:
  {}
/a/b/node_modules/@types/node/index.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/a/b/node_modules:
  {}
/a/b:
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/app.js]
var x = 1;


