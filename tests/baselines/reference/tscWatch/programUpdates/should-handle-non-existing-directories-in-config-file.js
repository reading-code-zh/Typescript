Input::
//// [/a/src/app.ts]
let x = 1;

//// [/a/tsconfig.json]
{"compilerOptions":{},"include":["src/**/*","notexistingfolder/*"]}

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


/a/lib/tsc.js -w -p /a/tsconfig.json
Output::
>> Screen clear
[[90m12:00:15 AM[0m] Starting compilation in watch mode...

[[90m12:00:18 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/src/app.ts"]
Program options: {"watch":true,"project":"/a/tsconfig.json","configFilePath":"/a/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/src/app.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/src/app.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/src/app.ts (used version)

PolledWatches::
/a/node_modules/@types:
  {"pollingInterval":500}
/a/notexistingfolder:
  {"pollingInterval":500}

FsWatches::
/a/tsconfig.json:
  {}
/a/src/app.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/a/src:
  {}

exitCode:: ExitStatus.undefined

//// [/a/src/app.js]
var x = 1;


