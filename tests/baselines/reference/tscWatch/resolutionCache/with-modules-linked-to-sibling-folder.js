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

//// [/user/username/projects/myproject/main/index.ts]
import { Foo } from '@scoped/linked-package'

//// [/user/username/projects/myproject/main/tsconfig.json]
{"compilerOptions":{"module":"commonjs","moduleResolution":"node","baseUrl":".","rootDir":"."},"files":["index.ts"]}

//// [/user/username/projects/myproject/main/node_modules/@scoped/linked-package] symlink(/user/username/projects/myproject/linked-package)
//// [/user/username/projects/myproject/linked-package/package.json]
{"name":"@scoped/linked-package","version":"0.0.1","types":"dist/index.d.ts","main":"dist/index.js"}

//// [/user/username/projects/myproject/linked-package/dist/index.d.ts]
export * from './other';

//// [/user/username/projects/myproject/linked-package/dist/other.d.ts]
export declare const Foo = "BAR";


/a/lib/tsc.js -w
Output::
>> Screen clear
[[90m12:00:39 AM[0m] Starting compilation in watch mode...

[[90m12:00:42 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/main/index.ts"]
Program options: {"module":1,"moduleResolution":2,"baseUrl":"/user/username/projects/myproject/main","rootDir":"/user/username/projects/myproject/main","watch":true,"configFilePath":"/user/username/projects/myproject/main/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/linked-package/dist/other.d.ts
/user/username/projects/myproject/linked-package/dist/index.d.ts
/user/username/projects/myproject/main/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/linked-package/dist/other.d.ts
/user/username/projects/myproject/linked-package/dist/index.d.ts
/user/username/projects/myproject/main/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/linked-package/dist/other.d.ts (used version)
/user/username/projects/myproject/linked-package/dist/index.d.ts (used version)
/user/username/projects/myproject/main/index.ts (used version)

PolledWatches::
/user/username/projects/myproject/main/@scoped:
  {"pollingInterval":500}
/user/username/projects/myproject/main/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/main/tsconfig.json:
  {}
/user/username/projects/myproject/main/index.ts:
  {}
/user/username/projects/myproject/linked-package/dist/index.d.ts:
  {}
/user/username/projects/myproject/linked-package/dist/other.d.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/linked-package/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/linked-package:
  {}
/user/username/projects/myproject/main/node_modules:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/main/index.js]
"use strict";
exports.__esModule = true;


