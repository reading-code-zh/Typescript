Input::
//// [/a/b/app.ts]
let x = 1

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

//// [/a/b/tsconfig.json]
{"include":["app.ts"]}


/a/lib/tsc.js -w -p /A/B/tsconfig.json
Output::
>> Screen clear
[[90m12:00:15 AM[0m] Starting compilation in watch mode...

[[90m12:00:18 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/A/B/app.ts"]
Program options: {"watch":true,"project":"/A/B/tsconfig.json","configFilePath":"/A/B/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/A/B/app.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/A/B/app.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/app.ts (used version)

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/app.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/A/B/app.js]
var x = 1;


