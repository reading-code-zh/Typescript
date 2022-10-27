Input::
//// [/a/username/project/typescript.ts]
var z = 10;

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


/a/lib/tsc.js --w /a/username/project/typescript.ts
Output::
>> Screen clear
[[90m12:00:15 AM[0m] Starting compilation in watch mode...

[[90m12:00:18 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/username/project/typescript.ts"]
Program options: {"watch":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/username/project/typescript.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/username/project/typescript.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/username/project/typescript.ts (used version)

PolledWatches::

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/username/project/typescript.js]
var z = 10;



Change:: Time spent to Transition libFile and file1 to low priority queue

Input::

Output::

PolledWatches::

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: Make change to file

Input::
//// [/a/username/project/typescript.ts]
var zz30 = 100;


Output::

PolledWatches::

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: Callbacks: medium priority + high priority queue and scheduled program update

Input::

Output::
>> Screen clear
[[90m12:00:45 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:49 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/username/project/typescript.ts"]
Program options: {"watch":true}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/a/username/project/typescript.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/username/project/typescript.ts

Shape signatures in builder refreshed for::
/a/username/project/typescript.ts (computed .d.ts)

PolledWatches::

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/a/username/project/typescript.js]
var zz30 = 100;



Change:: Polling queues polled and everything is in the high polling queue

Input::

Output::

PolledWatches::

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

