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

//// [/user/username/projects/sample1/core/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "declarationMap": true,
        "skipDefaultLibCheck": true
    }
}

//// [/user/username/projects/sample1/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }


//// [/user/username/projects/sample1/core/anotherModule.ts]
export const World = "hello";


//// [/user/username/projects/sample1/logic/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "sourceMap": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    },
    "references": [
        { "path": "../core" }
    ]
}


//// [/user/username/projects/sample1/logic/index.ts]
import * as c from '../core/index';
export function getSecondsInDay() {
    return c.multiply(10, 15);
}
import * as mod from '../core/anotherModule';
export const m = mod;


//// [/user/username/projects/sample1/tests/tsconfig.json]
{
    "references": [
        { "path": "../core" },
        { "path": "../logic" }
    ],
    "files": ["index.ts"],
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    }
}

//// [/user/username/projects/sample1/tests/index.ts]
import * as c from '../core/index';
import * as logic from '../logic/index';

c.leftPad("", 10);
logic.getSecondsInDay();

import * as mod from '../core/anotherModule';
export const m = mod;


//// [/user/username/projects/sample1/ui/tsconfig.json]
{
    "compilerOptions": {
        "skipDefaultLibCheck": true
    },
    "references": [
        { "path": "../logic/index" }
    ]
}


//// [/user/username/projects/sample1/ui/index.ts]
import * as logic from '../logic';

export function run() {
    console.log(logic.getSecondsInDay());
}



/a/lib/tsc.js -b -w sample1/tests -verbose
Output::
>> Screen clear
[[90m12:00:45 AM[0m] Starting compilation in watch mode...

[[90m12:00:46 AM[0m] Projects in this build: 
    * sample1/core/tsconfig.json
    * sample1/logic/tsconfig.json
    * sample1/tests/tsconfig.json

[[90m12:00:47 AM[0m] Project 'sample1/core/tsconfig.json' is out of date because output file 'sample1/core/tsconfig.tsbuildinfo' does not exist

[[90m12:00:48 AM[0m] Building project '/user/username/projects/sample1/core/tsconfig.json'...

[[90m12:01:06 AM[0m] Project 'sample1/logic/tsconfig.json' is out of date because output file 'sample1/logic/tsconfig.tsbuildinfo' does not exist

[[90m12:01:07 AM[0m] Building project '/user/username/projects/sample1/logic/tsconfig.json'...

[[90m12:01:19 AM[0m] Project 'sample1/tests/tsconfig.json' is out of date because output file 'sample1/tests/tsconfig.tsbuildinfo' does not exist

[[90m12:01:20 AM[0m] Building project '/user/username/projects/sample1/tests/tsconfig.json'...

[[90m12:01:30 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/sample1/core/anotherModule.ts","/user/username/projects/sample1/core/index.ts"]
Program options: {"composite":true,"declaration":true,"declarationMap":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/core/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/sample1/core/anothermodule.ts (computed .d.ts during emit)
/user/username/projects/sample1/core/index.ts (computed .d.ts during emit)

Program root files: ["/user/username/projects/sample1/logic/index.ts"]
Program options: {"composite":true,"declaration":true,"sourceMap":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/logic/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/core/anothermodule.d.ts (used version)
/user/username/projects/sample1/logic/index.ts (computed .d.ts during emit)

Program root files: ["/user/username/projects/sample1/tests/index.ts"]
Program options: {"composite":true,"declaration":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/tests/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/sample1/core/index.d.ts (used version)
/user/username/projects/sample1/core/anothermodule.d.ts (used version)
/user/username/projects/sample1/logic/index.d.ts (used version)
/user/username/projects/sample1/tests/index.ts (computed .d.ts during emit)

PolledWatches::

FsWatches::
/user/username/projects/sample1/core/tsconfig.json:
  {}
/user/username/projects/sample1/core/anothermodule.ts:
  {}
/user/username/projects/sample1/core/index.ts:
  {}
/user/username/projects/sample1/logic/tsconfig.json:
  {}
/user/username/projects/sample1/logic/index.ts:
  {}
/user/username/projects/sample1/tests/tsconfig.json:
  {}
/user/username/projects/sample1/tests/index.ts:
  {}

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {}
/user/username/projects/sample1/logic:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/core/anotherModule.js]
"use strict";
exports.__esModule = true;
exports.World = void 0;
exports.World = "hello";


//// [/user/username/projects/sample1/core/anotherModule.d.ts.map]
{"version":3,"file":"anotherModule.d.ts","sourceRoot":"","sources":["anotherModule.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,KAAK,UAAU,CAAC"}

//// [/user/username/projects/sample1/core/anotherModule.d.ts]
export declare const World = "hello";
//# sourceMappingURL=anotherModule.d.ts.map

//// [/user/username/projects/sample1/core/index.js]
"use strict";
exports.__esModule = true;
exports.multiply = exports.leftPad = exports.someString = void 0;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
exports.leftPad = leftPad;
function multiply(a, b) { return a * b; }
exports.multiply = multiply;


//// [/user/username/projects/sample1/core/index.d.ts.map]
{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,UAAU,EAAE,MAAsB,CAAC;AAChD,wBAAgB,OAAO,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB;AAC/D,wBAAgB,QAAQ,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,UAAmB"}

//// [/user/username/projects/sample1/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;
//# sourceMappingURL=index.d.ts.map

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./anothermodule.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-2676574883-export const World = \"hello\";\r\n","signature":"-9234818176-export declare const World = \"hello\";\n"},{"version":"-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n","signature":"-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n"}],"options":{"composite":true,"declaration":true,"declarationMap":true,"skipDefaultLibCheck":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./anothermodule.ts": {
        "version": "-2676574883-export const World = \"hello\";\r\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n"
      },
      "./index.ts": {
        "version": "-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1292
}

//// [/user/username/projects/sample1/logic/index.js.map]
{"version":3,"file":"index.js","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":";;;AAAA,iCAAmC;AACnC,SAAgB,eAAe;IAC3B,OAAO,CAAC,CAAC,QAAQ,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AAC9B,CAAC;AAFD,0CAEC;AACD,2CAA6C;AAChC,QAAA,CAAC,GAAG,GAAG,CAAC"}

//// [/user/username/projects/sample1/logic/index.js]
"use strict";
exports.__esModule = true;
exports.m = exports.getSecondsInDay = void 0;
var c = require("../core/index");
function getSecondsInDay() {
    return c.multiply(10, 15);
}
exports.getSecondsInDay = getSecondsInDay;
var mod = require("../core/anotherModule");
exports.m = mod;
//# sourceMappingURL=index.js.map

//// [/user/username/projects/sample1/logic/index.d.ts]
export declare function getSecondsInDay(): number;
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map","-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map",{"version":"-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n","signature":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"}],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3],[3]],"referencedMap":[[4,1]],"exportedModulesMap":[[4,2]],"semanticDiagnosticsPerFile":[1,3,2,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/anothermodule.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../core/index.d.ts": {
        "version": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map",
        "signature": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map"
      },
      "../core/anothermodule.d.ts": {
        "version": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map",
        "signature": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map"
      },
      "./index.ts": {
        "version": "-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1510
}

//// [/user/username/projects/sample1/tests/index.js]
"use strict";
exports.__esModule = true;
exports.m = void 0;
var c = require("../core/index");
var logic = require("../logic/index");
c.leftPad("", 10);
logic.getSecondsInDay();
var mod = require("../core/anotherModule");
exports.m = mod;


//// [/user/username/projects/sample1/tests/index.d.ts]
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map","-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map","-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",{"version":"12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n","signature":"2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"}],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"fileIdsList":[[3],[2,3,4]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[[4,1],[5,1]],"semanticDiagnosticsPerFile":[1,3,2,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../core/index.d.ts": {
        "version": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map",
        "signature": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map"
      },
      "../core/anothermodule.d.ts": {
        "version": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map",
        "signature": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map"
      },
      "../logic/index.d.ts": {
        "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      },
      "./index.ts": {
        "version": "12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
        "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1655
}


Change:: Make non dts change

Input::
//// [/user/username/projects/sample1/logic/index.ts]
import * as c from '../core/index';
export function getSecondsInDay() {
    return c.multiply(10, 15);
}
import * as mod from '../core/anotherModule';
export const m = mod;

function someFn() { }


Output::
>> Screen clear
[[90m12:01:34 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:35 AM[0m] Project 'sample1/logic/tsconfig.json' is out of date because output 'sample1/logic/tsconfig.tsbuildinfo' is older than input 'sample1/logic/index.ts'

[[90m12:01:36 AM[0m] Building project '/user/username/projects/sample1/logic/tsconfig.json'...

[[90m12:01:50 AM[0m] Project 'sample1/tests/tsconfig.json' is up to date with .d.ts files from its dependencies

[[90m12:01:51 AM[0m] Updating output timestamps of project '/user/username/projects/sample1/tests/tsconfig.json'...

[[90m12:01:53 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/sample1/logic/index.ts"]
Program options: {"composite":true,"declaration":true,"sourceMap":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/logic/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/logic/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/logic/index.ts (computed .d.ts)

PolledWatches::

FsWatches::
/user/username/projects/sample1/core/tsconfig.json:
  {}
/user/username/projects/sample1/core/anothermodule.ts:
  {}
/user/username/projects/sample1/core/index.ts:
  {}
/user/username/projects/sample1/logic/tsconfig.json:
  {}
/user/username/projects/sample1/logic/index.ts:
  {}
/user/username/projects/sample1/tests/tsconfig.json:
  {}
/user/username/projects/sample1/tests/index.ts:
  {}

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {}
/user/username/projects/sample1/logic:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/logic/index.js.map]
{"version":3,"file":"index.js","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":";;;AAAA,iCAAmC;AACnC,SAAgB,eAAe;IAC3B,OAAO,CAAC,CAAC,QAAQ,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AAC9B,CAAC;AAFD,0CAEC;AACD,2CAA6C;AAChC,QAAA,CAAC,GAAG,GAAG,CAAC;AAErB,SAAS,MAAM,KAAK,CAAC"}

//// [/user/username/projects/sample1/logic/index.js]
"use strict";
exports.__esModule = true;
exports.m = exports.getSecondsInDay = void 0;
var c = require("../core/index");
function getSecondsInDay() {
    return c.multiply(10, 15);
}
exports.getSecondsInDay = getSecondsInDay;
var mod = require("../core/anotherModule");
exports.m = mod;
function someFn() { }
//# sourceMappingURL=index.js.map

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map","-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map",{"version":"937092231-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n\nfunction someFn() { }","signature":"-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"}],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3],[3]],"referencedMap":[[4,1]],"exportedModulesMap":[[4,2]],"semanticDiagnosticsPerFile":[1,3,2,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/anothermodule.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../core/index.d.ts": {
        "version": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map",
        "signature": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map"
      },
      "../core/anothermodule.d.ts": {
        "version": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map",
        "signature": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map"
      },
      "./index.ts": {
        "version": "937092231-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n\nfunction someFn() { }",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1531
}

//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo] file changed its modified time

Change:: Make dts change

Input::
//// [/user/username/projects/sample1/logic/index.ts]
import * as c from '../core/index';
export function getSecondsInDay() {
    return c.multiply(10, 15);
}
import * as mod from '../core/anotherModule';
export const m = mod;

export function someFn() { }


Output::
>> Screen clear
[[90m12:01:57 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:58 AM[0m] Project 'sample1/logic/tsconfig.json' is out of date because output 'sample1/logic/tsconfig.tsbuildinfo' is older than input 'sample1/logic/index.ts'

[[90m12:01:59 AM[0m] Building project '/user/username/projects/sample1/logic/tsconfig.json'...

[[90m12:02:16 AM[0m] Project 'sample1/tests/tsconfig.json' is out of date because output 'sample1/tests/index.js' is older than input 'sample1/logic/tsconfig.json'

[[90m12:02:17 AM[0m] Building project '/user/username/projects/sample1/tests/tsconfig.json'...

[[90m12:02:28 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/sample1/logic/index.ts"]
Program options: {"composite":true,"declaration":true,"sourceMap":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/logic/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/logic/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/logic/index.ts (computed .d.ts)

Program root files: ["/user/username/projects/sample1/tests/index.ts"]
Program options: {"composite":true,"declaration":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/tests/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/sample1/logic/index.d.ts (used version)
/user/username/projects/sample1/tests/index.ts (computed .d.ts)

PolledWatches::

FsWatches::
/user/username/projects/sample1/core/tsconfig.json:
  {}
/user/username/projects/sample1/core/anothermodule.ts:
  {}
/user/username/projects/sample1/core/index.ts:
  {}
/user/username/projects/sample1/logic/tsconfig.json:
  {}
/user/username/projects/sample1/logic/index.ts:
  {}
/user/username/projects/sample1/tests/tsconfig.json:
  {}
/user/username/projects/sample1/tests/index.ts:
  {}

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {}
/user/username/projects/sample1/logic:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/logic/index.js.map]
{"version":3,"file":"index.js","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":";;;AAAA,iCAAmC;AACnC,SAAgB,eAAe;IAC3B,OAAO,CAAC,CAAC,QAAQ,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AAC9B,CAAC;AAFD,0CAEC;AACD,2CAA6C;AAChC,QAAA,CAAC,GAAG,GAAG,CAAC;AAErB,SAAgB,MAAM,KAAK,CAAC;AAA5B,wBAA4B"}

//// [/user/username/projects/sample1/logic/index.js]
"use strict";
exports.__esModule = true;
exports.someFn = exports.m = exports.getSecondsInDay = void 0;
var c = require("../core/index");
function getSecondsInDay() {
    return c.multiply(10, 15);
}
exports.getSecondsInDay = getSecondsInDay;
var mod = require("../core/anotherModule");
exports.m = mod;
function someFn() { }
exports.someFn = someFn;
//# sourceMappingURL=index.js.map

//// [/user/username/projects/sample1/logic/index.d.ts]
export declare function getSecondsInDay(): number;
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;
export declare function someFn(): void;


//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map","-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map",{"version":"-3093967383-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n\nexport function someFn() { }","signature":"-8742548750-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\nexport declare function someFn(): void;\n"}],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true,"sourceMap":true},"fileIdsList":[[2,3],[3]],"referencedMap":[[4,1]],"exportedModulesMap":[[4,2]],"semanticDiagnosticsPerFile":[1,3,2,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/anothermodule.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../core/index.d.ts": {
        "version": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map",
        "signature": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map"
      },
      "../core/anothermodule.d.ts": {
        "version": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map",
        "signature": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map"
      },
      "./index.ts": {
        "version": "-3093967383-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n\nexport function someFn() { }",
        "signature": "-8742548750-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\nexport declare function someFn(): void;\n"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1581
}

//// [/user/username/projects/sample1/tests/index.js] file written with same contents
//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/index.d.ts","../core/anothermodule.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map","-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map","-8742548750-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\nexport declare function someFn(): void;\n",{"version":"12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n","signature":"2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"}],"options":{"composite":true,"declaration":true,"skipDefaultLibCheck":true},"fileIdsList":[[3],[2,3,4]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[[4,1],[5,1]],"semanticDiagnosticsPerFile":[1,3,2,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/anothermodule.d.ts"
      ],
      [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../core/index.d.ts": {
        "version": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map",
        "signature": "-9047123202-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n//# sourceMappingURL=index.d.ts.map"
      },
      "../core/anothermodule.d.ts": {
        "version": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map",
        "signature": "-4454971016-export declare const World = \"hello\";\n//# sourceMappingURL=anotherModule.d.ts.map"
      },
      "../logic/index.d.ts": {
        "version": "-8742548750-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\nexport declare function someFn(): void;\n",
        "signature": "-8742548750-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\nexport declare function someFn(): void;\n"
      },
      "./index.ts": {
        "version": "12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
        "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/index.d.ts",
        "../core/anothermodule.d.ts",
        "../logic/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anothermodule.d.ts",
      "../core/index.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1696
}

