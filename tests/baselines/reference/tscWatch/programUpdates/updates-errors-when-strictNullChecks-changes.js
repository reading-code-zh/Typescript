Input::
//// [/user/username/projects/myproject/a.ts]
declare function foo(): null | { hello: any };
foo().hello

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{}}

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
[[90m12:00:21 AM[0m] Starting compilation in watch mode...

[[90m12:00:24 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
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
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
foo().hello;



Change:: Enable strict null checks

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"strictNullChecks":true}}


Output::
>> Screen clear
[[90m12:00:28 AM[0m] File change detected. Starting incremental compilation...

[96ma.ts[0m:[93m2[0m:[93m1[0m - [91merror[0m[90m TS2531: [0mObject is possibly 'null'.

[7m2[0m foo().hello
[7m [0m [91m~~~~~[0m

[[90m12:00:29 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"strictNullChecks":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

No shapes updated in the builder::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined


Change:: Set always strict false

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"strict":true,"alwaysStrict":false}}


Output::
>> Screen clear
[[90m12:00:33 AM[0m] File change detected. Starting incremental compilation...

[96ma.ts[0m:[93m2[0m:[93m1[0m - [91merror[0m[90m TS2531: [0mObject is possibly 'null'.

[7m2[0m foo().hello
[7m [0m [91m~~~~~[0m

[[90m12:00:34 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"strict":true,"alwaysStrict":false,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

No shapes updated in the builder::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined


Change:: Disable strict

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{}}


Output::
>> Screen clear
[[90m12:00:38 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:39 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

No shapes updated in the builder::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

