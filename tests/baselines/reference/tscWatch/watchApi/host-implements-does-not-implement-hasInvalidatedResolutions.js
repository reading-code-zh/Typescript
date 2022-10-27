Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"traceResolution":true,"extendedDiagnostics":true},"files":["main.ts"]}

//// [/user/username/projects/myproject/main.ts]
import { foo } from "./other";

//// [/user/username/projects/myproject/other.d.ts]
export function foo(): void;

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


/a/lib/tsc.js --w
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

Current directory: /user/username/projects/myproject CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/main.ts"]
  options: {"traceResolution":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/main.ts 250 undefined Source file
======== Resolving module './other' from '/user/username/projects/myproject/main.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/other', target file type 'TypeScript'.
File '/user/username/projects/myproject/other.ts' does not exist.
File '/user/username/projects/myproject/other.tsx' does not exist.
File '/user/username/projects/myproject/other.d.ts' exist - use it as a name resolution result.
======== Module name './other' was successfully resolved to '/user/username/projects/myproject/other.d.ts'. ========
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/other.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
[[90m12:00:26 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/main.ts"]
Program options: {"traceResolution":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/other.d.ts
/user/username/projects/myproject/main.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/other.d.ts
/user/username/projects/myproject/main.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/other.d.ts (used version)
/user/username/projects/myproject/main.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/main.ts:
  {}
/user/username/projects/myproject/other.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/main.js]
"use strict";
exports.__esModule = true;



Change:: write other with same contents

Input::
//// [/user/username/projects/myproject/other.d.ts] file changed its modified time

Output::
FileWatcher:: Triggered with /user/username/projects/myproject/other.d.ts 1:: WatchInfo: /user/username/projects/myproject/other.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/other.d.ts 1:: WatchInfo: /user/username/projects/myproject/other.d.ts 250 undefined Source file
Synchronizing program
[[90m12:00:29 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/main.ts"]
  options: {"traceResolution":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
======== Resolving module './other' from '/user/username/projects/myproject/main.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/other', target file type 'TypeScript'.
File '/user/username/projects/myproject/other.ts' does not exist.
File '/user/username/projects/myproject/other.tsx' does not exist.
File '/user/username/projects/myproject/other.d.ts' exist - use it as a name resolution result.
======== Module name './other' was successfully resolved to '/user/username/projects/myproject/other.d.ts'. ========
[[90m12:00:30 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/main.ts"]
Program options: {"traceResolution":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/other.d.ts
/user/username/projects/myproject/main.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/main.ts:
  {}
/user/username/projects/myproject/other.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: change other file

Input::
//// [/user/username/projects/myproject/other.d.ts]
export function foo(): void;export function bar(): void;


Output::
FileWatcher:: Triggered with /user/username/projects/myproject/other.d.ts 1:: WatchInfo: /user/username/projects/myproject/other.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/other.d.ts 1:: WatchInfo: /user/username/projects/myproject/other.d.ts 250 undefined Source file
Synchronizing program
[[90m12:00:33 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/main.ts"]
  options: {"traceResolution":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
======== Resolving module './other' from '/user/username/projects/myproject/main.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/other', target file type 'TypeScript'.
File '/user/username/projects/myproject/other.ts' does not exist.
File '/user/username/projects/myproject/other.tsx' does not exist.
File '/user/username/projects/myproject/other.d.ts' exist - use it as a name resolution result.
======== Module name './other' was successfully resolved to '/user/username/projects/myproject/other.d.ts'. ========
[[90m12:00:37 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/main.ts"]
Program options: {"traceResolution":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/other.d.ts
/user/username/projects/myproject/main.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/other.d.ts
/user/username/projects/myproject/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/other.d.ts (used version)
/user/username/projects/myproject/main.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/main.ts:
  {}
/user/username/projects/myproject/other.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/main.js] file written with same contents

Change:: write other with same contents but write ts file

Input::
//// [/user/username/projects/myproject/other.d.ts] file changed its modified time
//// [/user/username/projects/myproject/other.ts]
export function foo() {}


Output::
FileWatcher:: Triggered with /user/username/projects/myproject/other.d.ts 1:: WatchInfo: /user/username/projects/myproject/other.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/other.d.ts 1:: WatchInfo: /user/username/projects/myproject/other.d.ts 250 undefined Source file
Synchronizing program
[[90m12:00:42 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/main.ts"]
  options: {"traceResolution":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
======== Resolving module './other' from '/user/username/projects/myproject/main.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module as file / folder, candidate module location '/user/username/projects/myproject/other', target file type 'TypeScript'.
File '/user/username/projects/myproject/other.ts' exist - use it as a name resolution result.
======== Module name './other' was successfully resolved to '/user/username/projects/myproject/other.ts'. ========
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/other.ts 250 undefined Source file
[[90m12:00:48 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/main.ts"]
Program options: {"traceResolution":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/other.ts
/user/username/projects/myproject/main.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/other.ts
/user/username/projects/myproject/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/other.ts (computed .d.ts)
/user/username/projects/myproject/main.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/main.ts:
  {}
/user/username/projects/myproject/other.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/other.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/main.js] file written with same contents
//// [/user/username/projects/myproject/other.js]
"use strict";
exports.__esModule = true;
exports.foo = void 0;
function foo() { }
exports.foo = foo;


