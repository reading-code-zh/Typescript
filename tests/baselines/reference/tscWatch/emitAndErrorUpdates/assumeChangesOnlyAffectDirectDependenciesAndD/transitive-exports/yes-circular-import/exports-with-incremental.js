Input::
//// [/user/username/projects/myproject/lib1/tools/tools.interface.ts]
export interface ITest {
    title: string;
}

//// [/user/username/projects/myproject/lib1/tools/public.ts]
export * from "./tools.interface";

//// [/user/username/projects/myproject/app.ts]
import { Data } from "lib2/public";
export class App {
    public constructor() {
        new Data().test();
    }
}

//// [/user/username/projects/myproject/lib2/public.ts]
export * from "./data";

//// [/user/username/projects/myproject/lib1/public.ts]
export * from "./tools/public";

//// [/user/username/projects/myproject/lib2/data.ts]
import { ITest } from "lib1/public"; import { Data2 } from "./data2";
export class Data {
    public dat?: Data2; public test() {
        const result: ITest = {
            title: "title"
        }
        return result;
    }
}

//// [/user/username/projects/myproject/lib2/data2.ts]
import { Data } from "./data";
export class Data2 {
    public dat?: Data;
}

//// [/user/username/projects/myproject/tsconfig.json]
{"files":["app.ts"],"compilerOptions":{"baseUrl":"."}}

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


/a/lib/tsc.js --w --assumeChangesOnlyAffectDirectDependencies --d --incremental
Output::
>> Screen clear
[[90m12:00:39 AM[0m] Starting compilation in watch mode...

[[90m12:01:10 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/app.ts"]
Program options: {"baseUrl":"/user/username/projects/myproject","watch":true,"assumeChangesOnlyAffectDirectDependencies":true,"declaration":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/lib1/tools/tools.interface.ts (computed .d.ts during emit)
/user/username/projects/myproject/lib1/tools/public.ts (computed .d.ts during emit)
/user/username/projects/myproject/lib1/public.ts (computed .d.ts during emit)
/user/username/projects/myproject/lib2/data2.ts (computed .d.ts during emit)
/user/username/projects/myproject/lib2/data.ts (computed .d.ts during emit)
/user/username/projects/myproject/lib2/public.ts (computed .d.ts during emit)
/user/username/projects/myproject/app.ts (computed .d.ts during emit)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/app.ts:
  {}
/user/username/projects/myproject/lib2/public.ts:
  {}
/user/username/projects/myproject/lib2/data.ts:
  {}
/user/username/projects/myproject/lib1/public.ts:
  {}
/user/username/projects/myproject/lib1/tools/public.ts:
  {}
/user/username/projects/myproject/lib1/tools/tools.interface.ts:
  {}
/user/username/projects/myproject/lib2/data2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/lib1/tools/tools.interface.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/myproject/lib1/tools/tools.interface.d.ts]
export interface ITest {
    title: string;
}


//// [/user/username/projects/myproject/lib1/tools/public.js]
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
__exportStar(require("./tools.interface"), exports);


//// [/user/username/projects/myproject/lib1/tools/public.d.ts]
export * from "./tools.interface";


//// [/user/username/projects/myproject/lib1/public.js]
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
__exportStar(require("./tools/public"), exports);


//// [/user/username/projects/myproject/lib1/public.d.ts]
export * from "./tools/public";


//// [/user/username/projects/myproject/lib2/data2.js]
"use strict";
exports.__esModule = true;
exports.Data2 = void 0;
var Data2 = /** @class */ (function () {
    function Data2() {
    }
    return Data2;
}());
exports.Data2 = Data2;


//// [/user/username/projects/myproject/lib2/data2.d.ts]
import { Data } from "./data";
export declare class Data2 {
    dat?: Data;
}


//// [/user/username/projects/myproject/lib2/data.js]
"use strict";
exports.__esModule = true;
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.test = function () {
        var result = {
            title: "title"
        };
        return result;
    };
    return Data;
}());
exports.Data = Data;


//// [/user/username/projects/myproject/lib2/data.d.ts]
import { ITest } from "lib1/public";
import { Data2 } from "./data2";
export declare class Data {
    dat?: Data2;
    test(): ITest;
}


//// [/user/username/projects/myproject/lib2/public.js]
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
__exportStar(require("./data"), exports);


//// [/user/username/projects/myproject/lib2/public.d.ts]
export * from "./data";


//// [/user/username/projects/myproject/app.js]
"use strict";
exports.__esModule = true;
exports.App = void 0;
var public_1 = require("lib2/public");
var App = /** @class */ (function () {
    function App() {
        new public_1.Data().test();
    }
    return App;
}());
exports.App = App;


//// [/user/username/projects/myproject/app.d.ts]
export declare class App {
    constructor();
}


//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./lib1/tools/tools.interface.ts","./lib1/tools/public.ts","./lib1/public.ts","./lib2/data2.ts","./lib2/data.ts","./lib2/public.ts","./app.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-4369626085-export interface ITest {\n    title: string;\n}","signature":"-2463740027-export interface ITest {\n    title: string;\n}\n"},{"version":"-13301115055-export * from \"./tools.interface\";","signature":"-13735034501-export * from \"./tools.interface\";\n"},{"version":"-5078933600-export * from \"./tools/public\";","signature":"-4396051542-export * from \"./tools/public\";\n"},{"version":"-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}","signature":"-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n"},{"version":"-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}","signature":"-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n"},{"version":"-9530042629-export * from \"./data\";","signature":"-9548728731-export * from \"./data\";\n"},{"version":"-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}","signature":"-18990360330-export declare class App {\n    constructor();\n}\n"}],"options":{"assumeChangesOnlyAffectDirectDependencies":true,"declaration":true},"fileIdsList":[[7],[3],[2],[4,5],[6]],"referencedMap":[[8,1],[4,2],[3,3],[6,4],[5,5],[7,5]],"exportedModulesMap":[[4,2],[3,3],[6,4],[5,5],[7,5]],"semanticDiagnosticsPerFile":[1,8,4,3,2,6,5,7]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./lib1/tools/tools.interface.ts",
      "./lib1/tools/public.ts",
      "./lib1/public.ts",
      "./lib2/data2.ts",
      "./lib2/data.ts",
      "./lib2/public.ts",
      "./app.ts"
    ],
    "fileNamesList": [
      [
        "./lib2/public.ts"
      ],
      [
        "./lib1/tools/public.ts"
      ],
      [
        "./lib1/tools/tools.interface.ts"
      ],
      [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      [
        "./lib2/data.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./lib1/tools/tools.interface.ts": {
        "version": "-4369626085-export interface ITest {\n    title: string;\n}",
        "signature": "-2463740027-export interface ITest {\n    title: string;\n}\n"
      },
      "./lib1/tools/public.ts": {
        "version": "-13301115055-export * from \"./tools.interface\";",
        "signature": "-13735034501-export * from \"./tools.interface\";\n"
      },
      "./lib1/public.ts": {
        "version": "-5078933600-export * from \"./tools/public\";",
        "signature": "-4396051542-export * from \"./tools/public\";\n"
      },
      "./lib2/data2.ts": {
        "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "signature": "-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n"
      },
      "./lib2/data.ts": {
        "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "signature": "-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n"
      },
      "./lib2/public.ts": {
        "version": "-9530042629-export * from \"./data\";",
        "signature": "-9548728731-export * from \"./data\";\n"
      },
      "./app.ts": {
        "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "signature": "-18990360330-export declare class App {\n    constructor();\n}\n"
      }
    },
    "options": {
      "assumeChangesOnlyAffectDirectDependencies": true,
      "declaration": true
    },
    "referencedMap": {
      "./app.ts": [
        "./lib2/public.ts"
      ],
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/tools.interface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "exportedModulesMap": {
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/tools.interface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./app.ts",
      "./lib1/public.ts",
      "./lib1/tools/public.ts",
      "./lib1/tools/tools.interface.ts",
      "./lib2/data.ts",
      "./lib2/data2.ts",
      "./lib2/public.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 2313
}


Change:: Rename property title to title2 of interface ITest to initialize signatures

Input::
//// [/user/username/projects/myproject/lib1/tools/tools.interface.ts]
export interface ITest {
    title2: string;
}


Output::
>> Screen clear
[[90m12:01:16 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:32 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/app.ts"]
Program options: {"baseUrl":"/user/username/projects/myproject","watch":true,"assumeChangesOnlyAffectDirectDependencies":true,"declaration":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/lib1/tools/tools.interface.ts (computed .d.ts)
/user/username/projects/myproject/lib1/tools/public.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/app.ts:
  {}
/user/username/projects/myproject/lib2/public.ts:
  {}
/user/username/projects/myproject/lib2/data.ts:
  {}
/user/username/projects/myproject/lib1/public.ts:
  {}
/user/username/projects/myproject/lib1/tools/public.ts:
  {}
/user/username/projects/myproject/lib1/tools/tools.interface.ts:
  {}
/user/username/projects/myproject/lib2/data2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/lib1/tools/tools.interface.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/tools.interface.d.ts]
export interface ITest {
    title2: string;
}


//// [/user/username/projects/myproject/lib1/tools/public.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/public.d.ts] file written with same contents
//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./lib1/tools/tools.interface.ts","./lib1/tools/public.ts","./lib1/public.ts","./lib2/data2.ts","./lib2/data.ts","./lib2/public.ts","./app.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3501597171-export interface ITest {\n    title2: string;\n}","signature":"-3883556937-export interface ITest {\n    title2: string;\n}\n"},{"version":"-13301115055-export * from \"./tools.interface\";","signature":"-13735034501-export * from \"./tools.interface\";\n"},{"version":"-5078933600-export * from \"./tools/public\";","signature":"-4396051542-export * from \"./tools/public\";\n"},{"version":"-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}","signature":"-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n"},{"version":"-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}","signature":"-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n"},{"version":"-9530042629-export * from \"./data\";","signature":"-9548728731-export * from \"./data\";\n"},{"version":"-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}","signature":"-18990360330-export declare class App {\n    constructor();\n}\n"}],"options":{"assumeChangesOnlyAffectDirectDependencies":true,"declaration":true},"fileIdsList":[[7],[3],[2],[4,5],[6]],"referencedMap":[[8,1],[4,2],[3,3],[6,4],[5,5],[7,5]],"exportedModulesMap":[[4,2],[3,3],[6,4],[5,5],[7,5]],"semanticDiagnosticsPerFile":[1,8,4,3,2,6,5,7]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./lib1/tools/tools.interface.ts",
      "./lib1/tools/public.ts",
      "./lib1/public.ts",
      "./lib2/data2.ts",
      "./lib2/data.ts",
      "./lib2/public.ts",
      "./app.ts"
    ],
    "fileNamesList": [
      [
        "./lib2/public.ts"
      ],
      [
        "./lib1/tools/public.ts"
      ],
      [
        "./lib1/tools/tools.interface.ts"
      ],
      [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      [
        "./lib2/data.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./lib1/tools/tools.interface.ts": {
        "version": "-3501597171-export interface ITest {\n    title2: string;\n}",
        "signature": "-3883556937-export interface ITest {\n    title2: string;\n}\n"
      },
      "./lib1/tools/public.ts": {
        "version": "-13301115055-export * from \"./tools.interface\";",
        "signature": "-13735034501-export * from \"./tools.interface\";\n"
      },
      "./lib1/public.ts": {
        "version": "-5078933600-export * from \"./tools/public\";",
        "signature": "-4396051542-export * from \"./tools/public\";\n"
      },
      "./lib2/data2.ts": {
        "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "signature": "-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n"
      },
      "./lib2/data.ts": {
        "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "signature": "-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n"
      },
      "./lib2/public.ts": {
        "version": "-9530042629-export * from \"./data\";",
        "signature": "-9548728731-export * from \"./data\";\n"
      },
      "./app.ts": {
        "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "signature": "-18990360330-export declare class App {\n    constructor();\n}\n"
      }
    },
    "options": {
      "assumeChangesOnlyAffectDirectDependencies": true,
      "declaration": true
    },
    "referencedMap": {
      "./app.ts": [
        "./lib2/public.ts"
      ],
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/tools.interface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "exportedModulesMap": {
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/tools.interface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./app.ts",
      "./lib1/public.ts",
      "./lib1/tools/public.ts",
      "./lib1/tools/tools.interface.ts",
      "./lib2/data.ts",
      "./lib2/data2.ts",
      "./lib2/public.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 2315
}


Change:: Rename property title2 to title of interface ITest to revert back to original text

Input::
//// [/user/username/projects/myproject/lib1/tools/tools.interface.ts]
export interface ITest {
    title: string;
}


Output::
>> Screen clear
[[90m12:01:39 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:55 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/app.ts"]
Program options: {"baseUrl":"/user/username/projects/myproject","watch":true,"assumeChangesOnlyAffectDirectDependencies":true,"declaration":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/lib1/tools/tools.interface.ts (computed .d.ts)
/user/username/projects/myproject/lib1/tools/public.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/app.ts:
  {}
/user/username/projects/myproject/lib2/public.ts:
  {}
/user/username/projects/myproject/lib2/data.ts:
  {}
/user/username/projects/myproject/lib1/public.ts:
  {}
/user/username/projects/myproject/lib1/tools/public.ts:
  {}
/user/username/projects/myproject/lib1/tools/tools.interface.ts:
  {}
/user/username/projects/myproject/lib2/data2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/lib1/tools/tools.interface.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/tools.interface.d.ts]
export interface ITest {
    title: string;
}


//// [/user/username/projects/myproject/lib1/tools/public.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/public.d.ts] file written with same contents
//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./lib1/tools/tools.interface.ts","./lib1/tools/public.ts","./lib1/public.ts","./lib2/data2.ts","./lib2/data.ts","./lib2/public.ts","./app.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-4369626085-export interface ITest {\n    title: string;\n}","signature":"-2463740027-export interface ITest {\n    title: string;\n}\n"},{"version":"-13301115055-export * from \"./tools.interface\";","signature":"-13735034501-export * from \"./tools.interface\";\n"},{"version":"-5078933600-export * from \"./tools/public\";","signature":"-4396051542-export * from \"./tools/public\";\n"},{"version":"-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}","signature":"-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n"},{"version":"-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}","signature":"-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n"},{"version":"-9530042629-export * from \"./data\";","signature":"-9548728731-export * from \"./data\";\n"},{"version":"-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}","signature":"-18990360330-export declare class App {\n    constructor();\n}\n"}],"options":{"assumeChangesOnlyAffectDirectDependencies":true,"declaration":true},"fileIdsList":[[7],[3],[2],[4,5],[6]],"referencedMap":[[8,1],[4,2],[3,3],[6,4],[5,5],[7,5]],"exportedModulesMap":[[4,2],[3,3],[6,4],[5,5],[7,5]],"semanticDiagnosticsPerFile":[1,8,4,3,2,6,5,7]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./lib1/tools/tools.interface.ts",
      "./lib1/tools/public.ts",
      "./lib1/public.ts",
      "./lib2/data2.ts",
      "./lib2/data.ts",
      "./lib2/public.ts",
      "./app.ts"
    ],
    "fileNamesList": [
      [
        "./lib2/public.ts"
      ],
      [
        "./lib1/tools/public.ts"
      ],
      [
        "./lib1/tools/tools.interface.ts"
      ],
      [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      [
        "./lib2/data.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./lib1/tools/tools.interface.ts": {
        "version": "-4369626085-export interface ITest {\n    title: string;\n}",
        "signature": "-2463740027-export interface ITest {\n    title: string;\n}\n"
      },
      "./lib1/tools/public.ts": {
        "version": "-13301115055-export * from \"./tools.interface\";",
        "signature": "-13735034501-export * from \"./tools.interface\";\n"
      },
      "./lib1/public.ts": {
        "version": "-5078933600-export * from \"./tools/public\";",
        "signature": "-4396051542-export * from \"./tools/public\";\n"
      },
      "./lib2/data2.ts": {
        "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "signature": "-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n"
      },
      "./lib2/data.ts": {
        "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "signature": "-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n"
      },
      "./lib2/public.ts": {
        "version": "-9530042629-export * from \"./data\";",
        "signature": "-9548728731-export * from \"./data\";\n"
      },
      "./app.ts": {
        "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "signature": "-18990360330-export declare class App {\n    constructor();\n}\n"
      }
    },
    "options": {
      "assumeChangesOnlyAffectDirectDependencies": true,
      "declaration": true
    },
    "referencedMap": {
      "./app.ts": [
        "./lib2/public.ts"
      ],
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/tools.interface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "exportedModulesMap": {
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/tools.interface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./app.ts",
      "./lib1/public.ts",
      "./lib1/tools/public.ts",
      "./lib1/tools/tools.interface.ts",
      "./lib2/data.ts",
      "./lib2/data2.ts",
      "./lib2/public.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 2313
}


Change:: Rename property title to title2 of interface ITest

Input::
//// [/user/username/projects/myproject/lib1/tools/tools.interface.ts]
export interface ITest {
    title2: string;
}


Output::
>> Screen clear
[[90m12:02:02 AM[0m] File change detected. Starting incremental compilation...

[[90m12:02:18 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/app.ts"]
Program options: {"baseUrl":"/user/username/projects/myproject","watch":true,"assumeChangesOnlyAffectDirectDependencies":true,"declaration":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts
/user/username/projects/myproject/lib1/public.ts
/user/username/projects/myproject/lib2/data2.ts
/user/username/projects/myproject/lib2/data.ts
/user/username/projects/myproject/lib2/public.ts
/user/username/projects/myproject/app.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/lib1/tools/tools.interface.ts
/user/username/projects/myproject/lib1/tools/public.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/lib1/tools/tools.interface.ts (computed .d.ts)
/user/username/projects/myproject/lib1/tools/public.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/app.ts:
  {}
/user/username/projects/myproject/lib2/public.ts:
  {}
/user/username/projects/myproject/lib2/data.ts:
  {}
/user/username/projects/myproject/lib1/public.ts:
  {}
/user/username/projects/myproject/lib1/tools/public.ts:
  {}
/user/username/projects/myproject/lib1/tools/tools.interface.ts:
  {}
/user/username/projects/myproject/lib2/data2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/lib1/tools/tools.interface.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/tools.interface.d.ts]
export interface ITest {
    title2: string;
}


//// [/user/username/projects/myproject/lib1/tools/public.js] file written with same contents
//// [/user/username/projects/myproject/lib1/tools/public.d.ts] file written with same contents
//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./lib1/tools/tools.interface.ts","./lib1/tools/public.ts","./lib1/public.ts","./lib2/data2.ts","./lib2/data.ts","./lib2/public.ts","./app.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3501597171-export interface ITest {\n    title2: string;\n}","signature":"-3883556937-export interface ITest {\n    title2: string;\n}\n"},{"version":"-13301115055-export * from \"./tools.interface\";","signature":"-13735034501-export * from \"./tools.interface\";\n"},{"version":"-5078933600-export * from \"./tools/public\";","signature":"-4396051542-export * from \"./tools/public\";\n"},{"version":"-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}","signature":"-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n"},{"version":"-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}","signature":"-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n"},{"version":"-9530042629-export * from \"./data\";","signature":"-9548728731-export * from \"./data\";\n"},{"version":"-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}","signature":"-18990360330-export declare class App {\n    constructor();\n}\n"}],"options":{"assumeChangesOnlyAffectDirectDependencies":true,"declaration":true},"fileIdsList":[[7],[3],[2],[4,5],[6]],"referencedMap":[[8,1],[4,2],[3,3],[6,4],[5,5],[7,5]],"exportedModulesMap":[[4,2],[3,3],[6,4],[5,5],[7,5]],"semanticDiagnosticsPerFile":[1,8,4,3,2,6,5,7]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./lib1/tools/tools.interface.ts",
      "./lib1/tools/public.ts",
      "./lib1/public.ts",
      "./lib2/data2.ts",
      "./lib2/data.ts",
      "./lib2/public.ts",
      "./app.ts"
    ],
    "fileNamesList": [
      [
        "./lib2/public.ts"
      ],
      [
        "./lib1/tools/public.ts"
      ],
      [
        "./lib1/tools/tools.interface.ts"
      ],
      [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      [
        "./lib2/data.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./lib1/tools/tools.interface.ts": {
        "version": "-3501597171-export interface ITest {\n    title2: string;\n}",
        "signature": "-3883556937-export interface ITest {\n    title2: string;\n}\n"
      },
      "./lib1/tools/public.ts": {
        "version": "-13301115055-export * from \"./tools.interface\";",
        "signature": "-13735034501-export * from \"./tools.interface\";\n"
      },
      "./lib1/public.ts": {
        "version": "-5078933600-export * from \"./tools/public\";",
        "signature": "-4396051542-export * from \"./tools/public\";\n"
      },
      "./lib2/data2.ts": {
        "version": "-11055285700-import { Data } from \"./data\";\nexport class Data2 {\n    public dat?: Data;\n}",
        "signature": "-17387821545-import { Data } from \"./data\";\nexport declare class Data2 {\n    dat?: Data;\n}\n"
      },
      "./lib2/data.ts": {
        "version": "-2056074887-import { ITest } from \"lib1/public\"; import { Data2 } from \"./data2\";\nexport class Data {\n    public dat?: Data2; public test() {\n        const result: ITest = {\n            title: \"title\"\n        }\n        return result;\n    }\n}",
        "signature": "-14170088573-import { ITest } from \"lib1/public\";\nimport { Data2 } from \"./data2\";\nexport declare class Data {\n    dat?: Data2;\n    test(): ITest;\n}\n"
      },
      "./lib2/public.ts": {
        "version": "-9530042629-export * from \"./data\";",
        "signature": "-9548728731-export * from \"./data\";\n"
      },
      "./app.ts": {
        "version": "-14937286564-import { Data } from \"lib2/public\";\nexport class App {\n    public constructor() {\n        new Data().test();\n    }\n}",
        "signature": "-18990360330-export declare class App {\n    constructor();\n}\n"
      }
    },
    "options": {
      "assumeChangesOnlyAffectDirectDependencies": true,
      "declaration": true
    },
    "referencedMap": {
      "./app.ts": [
        "./lib2/public.ts"
      ],
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/tools.interface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "exportedModulesMap": {
      "./lib1/public.ts": [
        "./lib1/tools/public.ts"
      ],
      "./lib1/tools/public.ts": [
        "./lib1/tools/tools.interface.ts"
      ],
      "./lib2/data.ts": [
        "./lib1/public.ts",
        "./lib2/data2.ts"
      ],
      "./lib2/data2.ts": [
        "./lib2/data.ts"
      ],
      "./lib2/public.ts": [
        "./lib2/data.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./app.ts",
      "./lib1/public.ts",
      "./lib1/tools/public.ts",
      "./lib1/tools/tools.interface.ts",
      "./lib2/data.ts",
      "./lib2/data2.ts",
      "./lib2/public.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 2315
}
