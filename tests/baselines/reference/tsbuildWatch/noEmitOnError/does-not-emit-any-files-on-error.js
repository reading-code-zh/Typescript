Input::
//// [/user/username/projects/noEmitOnError/tsconfig.json]
{
    "compilerOptions": {
        "outDir": "./dev-build",
        "noEmitOnError": true
    }
}


//// [/user/username/projects/noEmitOnError/shared/types/db.ts]
export interface A {
    name: string;
}

//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
;

//// [/user/username/projects/noEmitOnError/src/other.ts]
console.log("hi");
export { }

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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/a/lib/tsc.js -b -w -verbose
Output::
>> Screen clear
[[90m12:00:31 AM[0m] Starting compilation in watch mode...

[[90m12:00:32 AM[0m] Projects in this build: 
    * tsconfig.json

[[90m12:00:33 AM[0m] Project 'tsconfig.json' is out of date because output file 'dev-build/shared/types/db.js' does not exist

[[90m12:00:34 AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m

[[90m12:00:35 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

PolledWatches::

FsWatches::
/user/username/projects/noemitonerror/tsconfig.json:
  {}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {}
/user/username/projects/noemitonerror/src/main.ts:
  {}
/user/username/projects/noemitonerror/src/other.ts:
  {}

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {}

exitCode:: ExitStatus.undefined


Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Output::
>> Screen clear
[[90m12:00:39 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:40 AM[0m] Project 'tsconfig.json' is out of date because output file 'dev-build/shared/types/db.js' does not exist

[[90m12:00:41 AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m

[[90m12:00:42 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::

PolledWatches::

FsWatches::
/user/username/projects/noemitonerror/tsconfig.json:
  {}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {}
/user/username/projects/noemitonerror/src/main.ts:
  {}
/user/username/projects/noemitonerror/src/other.ts:
  {}

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {}

exitCode:: ExitStatus.undefined


Change:: Fix Syntax error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
};


Output::
>> Screen clear
[[90m12:00:46 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:47 AM[0m] Project 'tsconfig.json' is out of date because output file 'dev-build/shared/types/db.js' does not exist

[[90m12:00:48 AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[[90m12:01:06 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/noemitonerror/shared/types/db.ts (computed .d.ts)
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)
/user/username/projects/noemitonerror/src/other.ts (computed .d.ts)

PolledWatches::

FsWatches::
/user/username/projects/noemitonerror/tsconfig.json:
  {}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {}
/user/username/projects/noemitonerror/src/main.ts:
  {}
/user/username/projects/noemitonerror/src/other.ts:
  {}

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/noEmitOnError/dev-build/shared/types/db.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
exports.__esModule = true;
var a = {
    lastName: 'sdsd'
};


//// [/user/username/projects/noEmitOnError/dev-build/src/other.js]
"use strict";
exports.__esModule = true;
console.log("hi");



Change:: Semantic Error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = 10;


Output::
>> Screen clear
[[90m12:01:10 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:11 AM[0m] Project 'tsconfig.json' is out of date because output 'dev-build/shared/types/db.js' is older than input 'src/main.ts'

[[90m12:01:12 AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m2[0m const a: string = 10;
[7m [0m [91m      ~[0m

[[90m12:01:13 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

PolledWatches::

FsWatches::
/user/username/projects/noemitonerror/tsconfig.json:
  {}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {}
/user/username/projects/noemitonerror/src/main.ts:
  {}
/user/username/projects/noemitonerror/src/other.ts:
  {}

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {}

exitCode:: ExitStatus.undefined


Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Output::
>> Screen clear
[[90m12:01:18 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:19 AM[0m] Project 'tsconfig.json' is out of date because output 'dev-build/shared/types/db.js' is older than input 'src/main.ts'

[[90m12:01:20 AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[96msrc/main.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m2[0m const a: string = 10;
[7m [0m [91m      ~[0m

[[90m12:01:21 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

PolledWatches::

FsWatches::
/user/username/projects/noemitonerror/tsconfig.json:
  {}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {}
/user/username/projects/noemitonerror/src/main.ts:
  {}
/user/username/projects/noemitonerror/src/other.ts:
  {}

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {}

exitCode:: ExitStatus.undefined


Change:: Fix Semantic Error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = "hello";


Output::
>> Screen clear
[[90m12:01:25 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:26 AM[0m] Project 'tsconfig.json' is out of date because output 'dev-build/shared/types/db.js' is older than input 'src/main.ts'

[[90m12:01:27 AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[[90m12:01:32 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/noEmitOnError/tsconfig.json'...

[[90m12:01:34 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

PolledWatches::

FsWatches::
/user/username/projects/noemitonerror/tsconfig.json:
  {}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {}
/user/username/projects/noemitonerror/src/main.ts:
  {}
/user/username/projects/noemitonerror/src/other.ts:
  {}

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/noEmitOnError/dev-build/shared/types/db.js] file changed its modified time
//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
exports.__esModule = true;
var a = "hello";


//// [/user/username/projects/noEmitOnError/dev-build/src/other.js] file changed its modified time

Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Output::
>> Screen clear
[[90m12:01:38 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:39 AM[0m] Project 'tsconfig.json' is out of date because output 'dev-build/shared/types/db.js' is older than input 'src/main.ts'

[[90m12:01:40 AM[0m] Building project '/user/username/projects/noEmitOnError/tsconfig.json'...

[[90m12:01:41 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/noEmitOnError/tsconfig.json'...

[[90m12:01:43 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

PolledWatches::

FsWatches::
/user/username/projects/noemitonerror/tsconfig.json:
  {}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {}
/user/username/projects/noemitonerror/src/main.ts:
  {}
/user/username/projects/noemitonerror/src/other.ts:
  {}

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/noEmitOnError/dev-build/shared/types/db.js] file changed its modified time
//// [/user/username/projects/noEmitOnError/dev-build/src/main.js] file changed its modified time
//// [/user/username/projects/noEmitOnError/dev-build/src/other.js] file changed its modified time
