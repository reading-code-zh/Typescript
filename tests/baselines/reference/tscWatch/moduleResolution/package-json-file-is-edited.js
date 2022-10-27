Input::
//// [/user/username/projects/myproject/src/tsconfig.json]
{"compilerOptions":{"target":"es2016","module":"Node16","outDir":"../out"}}

//// [/user/username/projects/myproject/src/fileA.ts]
import { foo } from "./fileB.mjs";
foo();


//// [/user/username/projects/myproject/project/src/fileB.mts]
export function foo() {
}


//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0"}

//// [/a/lib/lib.es2016.full.d.ts]
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


/a/lib/tsc.js --w --p src --extendedDiagnostics -traceResolution --explainFiles
Output::
[[90m12:00:31 AM[0m] Starting compilation in watch mode...

Current directory: /user/username/projects/myproject CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/fileA.ts"]
  options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
File '/user/username/projects/myproject/src/package.json' does not exist.
Found 'package.json' at '/user/username/projects/myproject/package.json'.
'package.json' does not have a 'typesVersions' field.
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileA.ts 250 undefined Source file
======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'TypeScript'.
File '/user/username/projects/myproject/src/fileB.mjs.ts' does not exist.
File '/user/username/projects/myproject/src/fileB.mjs.tsx' does not exist.
File '/user/username/projects/myproject/src/fileB.mjs.d.ts' does not exist.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mts' does not exist.
File '/user/username/projects/myproject/src/fileB.d.mts' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'JavaScript'.
File '/user/username/projects/myproject/src/fileB.mjs.js' does not exist.
File '/user/username/projects/myproject/src/fileB.mjs.jsx' does not exist.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mjs' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
======== Module name './fileB.mjs' was not resolved. ========
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 0 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 0 undefined Failed Lookup Locations
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
FileWatcher:: Added:: WatchInfo: /a/lib/lib.es2016.full.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2307: [0mCannot find module './fileB.mjs' or its corresponding type declarations.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileA.ts
  Matched by default include pattern '**/*'
  File is CommonJS module because 'package.json' does not have field "type"
[[90m12:00:37 AM[0m] Found 1 error. Watching for file changes.

DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Wild card directory


Program root files: ["/user/username/projects/myproject/src/fileA.ts"]
Program options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.es2016.full.d.ts
/user/username/projects/myproject/src/fileA.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.es2016.full.d.ts
/user/username/projects/myproject/src/fileA.ts

Shape signatures in builder refreshed for::
/a/lib/lib.es2016.full.d.ts (used version)
/user/username/projects/myproject/src/filea.ts (used version)

PolledWatches::
/user/username/projects/myproject/src/fileb.mjs:
  {"pollingInterval":500}
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json:
  {}
/user/username/projects/myproject/src/filea.ts:
  {}
/user/username/projects/myproject/src:
  {}
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/out/fileA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileB_mjs_1 = require("./fileB.mjs");
(0, fileB_mjs_1.foo)();



Change:: Modify package json file to add type module

Input::
//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0","type":"module"}


Output::
FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling update
Synchronizing program
[[90m12:00:41 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/fileA.ts"]
  options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Found 'package.json' at '/user/username/projects/myproject/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in ESM mode with conditions 'node', 'import', 'types'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'TypeScript'.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mts' does not exist.
File '/user/username/projects/myproject/src/fileB.d.mts' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'JavaScript'.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mjs' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
======== Module name './fileB.mjs' was not resolved. ========
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2307: [0mCannot find module './fileB.mjs' or its corresponding type declarations.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileA.ts
  Matched by default include pattern '**/*'
  File is ECMAScript module because 'package.json' has field "type" with value "module"
[[90m12:00:45 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/fileA.ts"]
Program options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/user/username/projects/myproject/src/fileA.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/src/fileA.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/src/filea.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json:
  {}
/user/username/projects/myproject/src/filea.ts:
  {}
/user/username/projects/myproject/src:
  {}
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/out/fileA.js]
import { foo } from "./fileB.mjs";
foo();



Change:: Modify package.json file to remove type module

Input::
//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0"}


Output::
FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling update
Synchronizing program
[[90m12:00:50 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/fileA.ts"]
  options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Found 'package.json' at '/user/username/projects/myproject/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'TypeScript'.
File '/user/username/projects/myproject/src/fileB.mjs.ts' does not exist.
File '/user/username/projects/myproject/src/fileB.mjs.tsx' does not exist.
File '/user/username/projects/myproject/src/fileB.mjs.d.ts' does not exist.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mts' does not exist.
File '/user/username/projects/myproject/src/fileB.d.mts' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'JavaScript'.
File '/user/username/projects/myproject/src/fileB.mjs.js' does not exist.
File '/user/username/projects/myproject/src/fileB.mjs.jsx' does not exist.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mjs' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
======== Module name './fileB.mjs' was not resolved. ========
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2307: [0mCannot find module './fileB.mjs' or its corresponding type declarations.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileA.ts
  Matched by default include pattern '**/*'
  File is CommonJS module because 'package.json' does not have field "type"
[[90m12:00:54 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/fileA.ts"]
Program options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/user/username/projects/myproject/src/fileA.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/src/fileA.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/src/filea.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/src/fileb.mjs:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json:
  {}
/user/username/projects/myproject/src/filea.ts:
  {}
/user/username/projects/myproject/src:
  {}
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/out/fileA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileB_mjs_1 = require("./fileB.mjs");
(0, fileB_mjs_1.foo)();



Change:: Delete package.json

Input::
//// [/user/username/projects/myproject/package.json] deleted

Output::
FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling update
Synchronizing program
[[90m12:00:56 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/fileA.ts"]
  options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' does not exist.
File '/user/username/projects/package.json' does not exist.
File '/user/username/package.json' does not exist.
File '/user/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts' of old program, it was not resolved.
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined File location affecting resolution
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2307: [0mCannot find module './fileB.mjs' or its corresponding type declarations.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileA.ts
  Matched by default include pattern '**/*'
  File is CommonJS module because 'package.json' was not found
[[90m12:00:57 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/fileA.ts"]
Program options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/user/username/projects/myproject/src/fileA.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

PolledWatches::
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/src/fileb.mjs:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json:
  {}
/user/username/projects/myproject/src/filea.ts:
  {}
/user/username/projects/myproject/src:
  {}
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

exitCode:: ExitStatus.undefined


Change:: Modify package json file to add type module

Input::
//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0","type":"module"}


Output::
FileWatcher:: Triggered with /user/username/projects/myproject/package.json 0:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 0:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling update
Synchronizing program
[[90m12:01:01 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/fileA.ts"]
  options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Found 'package.json' at '/user/username/projects/myproject/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in ESM mode with conditions 'node', 'import', 'types'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'TypeScript'.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mts' does not exist.
File '/user/username/projects/myproject/src/fileB.d.mts' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'JavaScript'.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mjs' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
======== Module name './fileB.mjs' was not resolved. ========
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
FileWatcher:: Close:: WatchInfo: /user/username/projects/package.json 2000 undefined File location affecting resolution
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2307: [0mCannot find module './fileB.mjs' or its corresponding type declarations.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileA.ts
  Matched by default include pattern '**/*'
  File is ECMAScript module because 'package.json' has field "type" with value "module"
[[90m12:01:05 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/fileA.ts"]
Program options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/user/username/projects/myproject/src/fileA.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/src/fileA.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/src/filea.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json:
  {}
/user/username/projects/myproject/src/filea.ts:
  {}
/user/username/projects/myproject/src:
  {}
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/out/fileA.js]
import { foo } from "./fileB.mjs";
foo();



Change:: Delete package.json

Input::
//// [/user/username/projects/myproject/package.json] deleted

Output::
FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling invalidateFailedLookup
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined File location affecting resolution
Scheduling update
Synchronizing program
[[90m12:01:07 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/fileA.ts"]
  options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' does not exist.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
File '/user/username/package.json' does not exist according to earlier cached lookups.
File '/user/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'TypeScript'.
File '/user/username/projects/myproject/src/fileB.mjs.ts' does not exist.
File '/user/username/projects/myproject/src/fileB.mjs.tsx' does not exist.
File '/user/username/projects/myproject/src/fileB.mjs.d.ts' does not exist.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mts' does not exist.
File '/user/username/projects/myproject/src/fileB.d.mts' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file type 'JavaScript'.
File '/user/username/projects/myproject/src/fileB.mjs.js' does not exist.
File '/user/username/projects/myproject/src/fileB.mjs.jsx' does not exist.
File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/user/username/projects/myproject/src/fileB.mjs' does not exist.
Directory '/user/username/projects/myproject/src/fileB.mjs' does not exist, skipping all lookups in it.
======== Module name './fileB.mjs' was not resolved. ========
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileB.mjs 1 undefined Failed Lookup Locations
File '/a/lib/package.json' does not exist according to earlier cached lookups.
File '/a/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined File location affecting resolution
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2307: [0mCannot find module './fileB.mjs' or its corresponding type declarations.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileA.ts
  Matched by default include pattern '**/*'
  File is CommonJS module because 'package.json' was not found
[[90m12:01:11 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/fileA.ts"]
Program options: {"target":3,"module":100,"outDir":"/user/username/projects/myproject/out","watch":true,"project":"/user/username/projects/myproject/src","extendedDiagnostics":true,"traceResolution":true,"explainFiles":true,"configFilePath":"/user/username/projects/myproject/src/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.es2016.full.d.ts
/user/username/projects/myproject/src/fileA.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/src/fileA.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/src/filea.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/src/fileb.mjs:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json:
  {}
/user/username/projects/myproject/src/filea.ts:
  {}
/user/username/projects/myproject/src:
  {}
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/out/fileA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileB_mjs_1 = require("./fileB.mjs");
(0, fileB_mjs_1.foo)();


