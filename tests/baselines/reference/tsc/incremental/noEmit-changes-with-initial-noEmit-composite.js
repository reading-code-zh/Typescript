Input::
//// [/lib/lib.d.ts]
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

//// [/src/project/src/class.ts]
export class classC {
    prop = 1;
}

//// [/src/project/src/directUse.ts]
import { indirectClass } from './indirectClass';
new indirectClass().classC.prop;

//// [/src/project/src/indirectClass.ts]
import { classC } from './class';
export class indirectClass {
    classC = new classC();
}

//// [/src/project/src/indirectUse.ts]
import { indirectClass } from './indirectClass';
new indirectClass().classC.prop;

//// [/src/project/src/noChangeFile.ts]
export function writeLog(s: string) {
}

//// [/src/project/src/noChangeFileWithEmitSpecificError.ts]
function someFunc(arguments: boolean, ...rest: any[]) {
}

//// [/src/project/tsconfig.json]
{"compilerOptions":{"composite":true}}



Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"545032748-export class classC {\n    prop = 1;\n}","6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","6714567633-export function writeLog(s: string) {\n}",{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","affectsGlobalScope":true}],"options":{"composite":true},"fileIdsList":[[3],[2]],"referencedMap":[[4,1],[3,2],[5,1]],"exportedModulesMap":[[4,1],[3,2],[5,1]],"semanticDiagnosticsPerFile":[1,2,4,3,5,6,[7,[{"file":"./src/nochangefilewithemitspecificerror.ts","start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"affectedFilesPendingEmit":[[2,1],[4,1],[3,1],[5,1],[6,1],[7,1]],"emitSignatures":[2,3,4,5,6,7]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      "./src/indirectclass.ts",
      "./src/directuse.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      "./src/nochangefilewithemitspecificerror.ts"
    ],
    "fileNamesList": [
      [
        "./src/indirectclass.ts"
      ],
      [
        "./src/class.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "signature": "545032748-export class classC {\n    prop = 1;\n}"
      },
      "./src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "signature": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}"
      },
      "./src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;"
      },
      "./src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;"
      },
      "./src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "signature": "6714567633-export function writeLog(s: string) {\n}"
      },
      "./src/nochangefilewithemitspecificerror.ts": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "signature": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./src/directuse.ts": [
        "./src/indirectclass.ts"
      ],
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ],
      "./src/indirectuse.ts": [
        "./src/indirectclass.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/directuse.ts": [
        "./src/indirectclass.ts"
      ],
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ],
      "./src/indirectuse.ts": [
        "./src/indirectclass.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      "./src/directuse.ts",
      "./src/indirectclass.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      [
        "./src/nochangefilewithemitspecificerror.ts",
        [
          {
            "file": "./src/nochangefilewithemitspecificerror.ts",
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/class.ts",
        "Full"
      ],
      [
        "./src/directuse.ts",
        "Full"
      ],
      [
        "./src/indirectclass.ts",
        "Full"
      ],
      [
        "./src/indirectuse.ts",
        "Full"
      ],
      [
        "./src/nochangefile.ts",
        "Full"
      ],
      [
        "./src/nochangefilewithemitspecificerror.ts",
        "Full"
      ]
    ],
    "emitSignatures": [
      "./src/class.ts",
      "./src/indirectclass.ts",
      "./src/directuse.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      "./src/nochangefilewithemitspecificerror.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1747
}



Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/project/src/class.d.ts]
export declare class classC {
    prop: number;
}


//// [/src/project/src/class.js]
"use strict";
exports.__esModule = true;
exports.classC = void 0;
var classC = /** @class */ (function () {
    function classC() {
        this.prop = 1;
    }
    return classC;
}());
exports.classC = classC;


//// [/src/project/src/directUse.d.ts]
export {};


//// [/src/project/src/directUse.js]
"use strict";
exports.__esModule = true;
var indirectClass_1 = require("./indirectClass");
new indirectClass_1.indirectClass().classC.prop;


//// [/src/project/src/indirectClass.d.ts]
import { classC } from './class';
export declare class indirectClass {
    classC: classC;
}


//// [/src/project/src/indirectClass.js]
"use strict";
exports.__esModule = true;
exports.indirectClass = void 0;
var class_1 = require("./class");
var indirectClass = /** @class */ (function () {
    function indirectClass() {
        this.classC = new class_1.classC();
    }
    return indirectClass;
}());
exports.indirectClass = indirectClass;


//// [/src/project/src/indirectUse.d.ts]
export {};


//// [/src/project/src/indirectUse.js]
"use strict";
exports.__esModule = true;
var indirectClass_1 = require("./indirectClass");
new indirectClass_1.indirectClass().classC.prop;


//// [/src/project/src/noChangeFile.d.ts]
export declare function writeLog(s: string): void;


//// [/src/project/src/noChangeFile.js]
"use strict";
exports.__esModule = true;
exports.writeLog = void 0;
function writeLog(s) {
}
exports.writeLog = writeLog;


//// [/src/project/src/noChangeFileWithEmitSpecificError.d.ts]
declare function someFunc(arguments: boolean, ...rest: any[]): void;


//// [/src/project/src/noChangeFileWithEmitSpecificError.js]
function someFunc(arguments) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
}


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"545032748-export class classC {\n    prop = 1;\n}","signature":"-6712382238-export declare class classC {\r\n    prop: number;\r\n}\r\n"},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","signature":"-9860349972-import { classC } from './class';\r\nexport declare class indirectClass {\r\n    classC: classC;\r\n}\r\n"},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","signature":"-4882119183-export {};\r\n"},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","signature":"-4882119183-export {};\r\n"},{"version":"6714567633-export function writeLog(s: string) {\n}","signature":"8117292349-export declare function writeLog(s: string): void;\r\n"},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","signature":"-4920141752-declare function someFunc(arguments: boolean, ...rest: any[]): void;\r\n","affectsGlobalScope":true}],"options":{"composite":true},"fileIdsList":[[3],[2]],"referencedMap":[[4,1],[3,2],[5,1]],"exportedModulesMap":[[3,2]],"semanticDiagnosticsPerFile":[1,2,4,3,5,6,[7,[{"file":"./src/nochangefilewithemitspecificerror.ts","start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"latestChangedDtsFile":"./src/noChangeFileWithEmitSpecificError.d.ts"},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      "./src/indirectclass.ts",
      "./src/directuse.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      "./src/nochangefilewithemitspecificerror.ts"
    ],
    "fileNamesList": [
      [
        "./src/indirectclass.ts"
      ],
      [
        "./src/class.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "signature": "-6712382238-export declare class classC {\r\n    prop: number;\r\n}\r\n"
      },
      "./src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "signature": "-9860349972-import { classC } from './class';\r\nexport declare class indirectClass {\r\n    classC: classC;\r\n}\r\n"
      },
      "./src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-4882119183-export {};\r\n"
      },
      "./src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-4882119183-export {};\r\n"
      },
      "./src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "signature": "8117292349-export declare function writeLog(s: string): void;\r\n"
      },
      "./src/nochangefilewithemitspecificerror.ts": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "signature": "-4920141752-declare function someFunc(arguments: boolean, ...rest: any[]): void;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./src/directuse.ts": [
        "./src/indirectclass.ts"
      ],
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ],
      "./src/indirectuse.ts": [
        "./src/indirectclass.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      "./src/directuse.ts",
      "./src/indirectclass.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      [
        "./src/nochangefilewithemitspecificerror.ts",
        [
          {
            "file": "./src/nochangefilewithemitspecificerror.ts",
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
    "latestChangedDtsFile": "./src/noChangeFileWithEmitSpecificError.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2248
}



Change:: Introduce error with emit
Input::
//// [/src/project/src/class.ts]
export class classC {
    prop1 = 1;
}



Output::
/lib/tsc --p src/project
[96msrc/project/src/directUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/indirectUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 3 errors in 3 files.

Errors  Files
     1  src/project/src/directUse.ts[90m:2[0m
     1  src/project/src/indirectUse.ts[90m:2[0m
     1  src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/project/src/class.d.ts]
export declare class classC {
    prop1: number;
}


//// [/src/project/src/class.js]
"use strict";
exports.__esModule = true;
exports.classC = void 0;
var classC = /** @class */ (function () {
    function classC() {
        this.prop1 = 1;
    }
    return classC;
}());
exports.classC = classC;


//// [/src/project/src/indirectClass.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"1786859709-export class classC {\n    prop1 = 1;\n}","signature":"-3790894605-export declare class classC {\r\n    prop1: number;\r\n}\r\n"},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","signature":"-9860349972-import { classC } from './class';\r\nexport declare class indirectClass {\r\n    classC: classC;\r\n}\r\n"},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","signature":"-4882119183-export {};\r\n"},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","signature":"-4882119183-export {};\r\n"},{"version":"6714567633-export function writeLog(s: string) {\n}","signature":"8117292349-export declare function writeLog(s: string): void;\r\n"},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","signature":"-4920141752-declare function someFunc(arguments: boolean, ...rest: any[]): void;\r\n","affectsGlobalScope":true}],"options":{"composite":true},"fileIdsList":[[3],[2]],"referencedMap":[[4,1],[3,2],[5,1]],"exportedModulesMap":[[3,2]],"semanticDiagnosticsPerFile":[1,2,[4,[{"file":"./src/directuse.ts","start":76,"length":4,"code":2551,"category":1,"messageText":"Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?","relatedInformation":[{"file":"./src/class.ts","start":26,"length":5,"messageText":"'prop1' is declared here.","category":3,"code":2728}]}]],3,[5,[{"file":"./src/indirectuse.ts","start":76,"length":4,"code":2551,"category":1,"messageText":"Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?","relatedInformation":[{"file":"./src/class.ts","start":26,"length":5,"messageText":"'prop1' is declared here.","category":3,"code":2728}]}]],6,[7,[{"file":"./src/nochangefilewithemitspecificerror.ts","start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"latestChangedDtsFile":"./src/class.d.ts"},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      "./src/indirectclass.ts",
      "./src/directuse.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      "./src/nochangefilewithemitspecificerror.ts"
    ],
    "fileNamesList": [
      [
        "./src/indirectclass.ts"
      ],
      [
        "./src/class.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/class.ts": {
        "version": "1786859709-export class classC {\n    prop1 = 1;\n}",
        "signature": "-3790894605-export declare class classC {\r\n    prop1: number;\r\n}\r\n"
      },
      "./src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "signature": "-9860349972-import { classC } from './class';\r\nexport declare class indirectClass {\r\n    classC: classC;\r\n}\r\n"
      },
      "./src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-4882119183-export {};\r\n"
      },
      "./src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-4882119183-export {};\r\n"
      },
      "./src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "signature": "8117292349-export declare function writeLog(s: string): void;\r\n"
      },
      "./src/nochangefilewithemitspecificerror.ts": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "signature": "-4920141752-declare function someFunc(arguments: boolean, ...rest: any[]): void;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./src/directuse.ts": [
        "./src/indirectclass.ts"
      ],
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ],
      "./src/indirectuse.ts": [
        "./src/indirectclass.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      [
        "./src/directuse.ts",
        [
          {
            "file": "./src/directuse.ts",
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      "./src/indirectclass.ts",
      [
        "./src/indirectuse.ts",
        [
          {
            "file": "./src/indirectuse.ts",
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      "./src/nochangefile.ts",
      [
        "./src/nochangefilewithemitspecificerror.ts",
        [
          {
            "file": "./src/nochangefilewithemitspecificerror.ts",
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
    "latestChangedDtsFile": "./src/class.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2837
}



Change:: Fix error and no emit
Input::
//// [/src/project/src/class.ts]
export class classC {
    prop = 1;
}



Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"545032748-export class classC {\n    prop = 1;\n}","signature":"-6712382238-export declare class classC {\r\n    prop: number;\r\n}\r\n"},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","signature":"-9860349972-import { classC } from './class';\r\nexport declare class indirectClass {\r\n    classC: classC;\r\n}\r\n"},"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",{"version":"6714567633-export function writeLog(s: string) {\n}","signature":"8117292349-export declare function writeLog(s: string): void;\r\n"},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","signature":"-4920141752-declare function someFunc(arguments: boolean, ...rest: any[]): void;\r\n","affectsGlobalScope":true}],"options":{"composite":true},"fileIdsList":[[3],[2]],"referencedMap":[[4,1],[3,2],[5,1]],"exportedModulesMap":[[4,1],[3,2],[5,1]],"semanticDiagnosticsPerFile":[1,2,4,3,5,6,[7,[{"file":"./src/nochangefilewithemitspecificerror.ts","start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"affectedFilesPendingEmit":[[2,1],[4,0],[3,1],[5,0]],"emitSignatures":[[2,"-3790894605-export declare class classC {\r\n    prop1: number;\r\n}\r\n"],[4,"-4882119183-export {};\r\n"],[5,"-4882119183-export {};\r\n"]],"latestChangedDtsFile":"./src/class.d.ts"},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      "./src/indirectclass.ts",
      "./src/directuse.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      "./src/nochangefilewithemitspecificerror.ts"
    ],
    "fileNamesList": [
      [
        "./src/indirectclass.ts"
      ],
      [
        "./src/class.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "signature": "-6712382238-export declare class classC {\r\n    prop: number;\r\n}\r\n"
      },
      "./src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "signature": "-9860349972-import { classC } from './class';\r\nexport declare class indirectClass {\r\n    classC: classC;\r\n}\r\n"
      },
      "./src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;"
      },
      "./src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;"
      },
      "./src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "signature": "8117292349-export declare function writeLog(s: string): void;\r\n"
      },
      "./src/nochangefilewithemitspecificerror.ts": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "signature": "-4920141752-declare function someFunc(arguments: boolean, ...rest: any[]): void;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./src/directuse.ts": [
        "./src/indirectclass.ts"
      ],
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ],
      "./src/indirectuse.ts": [
        "./src/indirectclass.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/directuse.ts": [
        "./src/indirectclass.ts"
      ],
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ],
      "./src/indirectuse.ts": [
        "./src/indirectclass.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      "./src/directuse.ts",
      "./src/indirectclass.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      [
        "./src/nochangefilewithemitspecificerror.ts",
        [
          {
            "file": "./src/nochangefilewithemitspecificerror.ts",
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
    "affectedFilesPendingEmit": [
      [
        "./src/class.ts",
        "Full"
      ],
      [
        "./src/directuse.ts",
        "DtsOnly"
      ],
      [
        "./src/indirectclass.ts",
        "Full"
      ],
      [
        "./src/indirectuse.ts",
        "DtsOnly"
      ]
    ],
    "emitSignatures": [
      [
        "./src/class.ts",
        "-3790894605-export declare class classC {\r\n    prop1: number;\r\n}\r\n"
      ],
      [
        "./src/directuse.ts",
        "-4882119183-export {};\r\n"
      ],
      [
        "./src/indirectuse.ts",
        "-4882119183-export {};\r\n"
      ]
    ],
    "latestChangedDtsFile": "./src/class.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2343
}



Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/project/src/class.d.ts]
export declare class classC {
    prop: number;
}


//// [/src/project/src/class.js]
"use strict";
exports.__esModule = true;
exports.classC = void 0;
var classC = /** @class */ (function () {
    function classC() {
        this.prop = 1;
    }
    return classC;
}());
exports.classC = classC;


//// [/src/project/src/indirectClass.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"545032748-export class classC {\n    prop = 1;\n}","signature":"-6712382238-export declare class classC {\r\n    prop: number;\r\n}\r\n"},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","signature":"-9860349972-import { classC } from './class';\r\nexport declare class indirectClass {\r\n    classC: classC;\r\n}\r\n"},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","signature":"-4882119183-export {};\r\n"},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","signature":"-4882119183-export {};\r\n"},{"version":"6714567633-export function writeLog(s: string) {\n}","signature":"8117292349-export declare function writeLog(s: string): void;\r\n"},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","signature":"-4920141752-declare function someFunc(arguments: boolean, ...rest: any[]): void;\r\n","affectsGlobalScope":true}],"options":{"composite":true},"fileIdsList":[[3],[2]],"referencedMap":[[4,1],[3,2],[5,1]],"exportedModulesMap":[[3,2]],"semanticDiagnosticsPerFile":[1,2,4,3,5,6,[7,[{"file":"./src/nochangefilewithemitspecificerror.ts","start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"latestChangedDtsFile":"./src/class.d.ts"},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      "./src/indirectclass.ts",
      "./src/directuse.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      "./src/nochangefilewithemitspecificerror.ts"
    ],
    "fileNamesList": [
      [
        "./src/indirectclass.ts"
      ],
      [
        "./src/class.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "signature": "-6712382238-export declare class classC {\r\n    prop: number;\r\n}\r\n"
      },
      "./src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "signature": "-9860349972-import { classC } from './class';\r\nexport declare class indirectClass {\r\n    classC: classC;\r\n}\r\n"
      },
      "./src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-4882119183-export {};\r\n"
      },
      "./src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-4882119183-export {};\r\n"
      },
      "./src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "signature": "8117292349-export declare function writeLog(s: string): void;\r\n"
      },
      "./src/nochangefilewithemitspecificerror.ts": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "signature": "-4920141752-declare function someFunc(arguments: boolean, ...rest: any[]): void;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./src/directuse.ts": [
        "./src/indirectclass.ts"
      ],
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ],
      "./src/indirectuse.ts": [
        "./src/indirectclass.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/indirectclass.ts": [
        "./src/class.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./src/class.ts",
      "./src/directuse.ts",
      "./src/indirectclass.ts",
      "./src/indirectuse.ts",
      "./src/nochangefile.ts",
      [
        "./src/nochangefilewithemitspecificerror.ts",
        [
          {
            "file": "./src/nochangefilewithemitspecificerror.ts",
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
    "latestChangedDtsFile": "./src/class.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2220
}

