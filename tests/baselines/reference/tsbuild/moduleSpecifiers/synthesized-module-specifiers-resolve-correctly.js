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
interface SymbolConstructor {
    readonly species: symbol;
    readonly toStringTag: symbol;
}
declare var Symbol: SymbolConstructor;
interface Symbol {
    readonly [Symbol.toStringTag]: string;
}


//// [/src/solution/common/nominal.ts]
export declare type Nominal<T, Name extends string> = T & {
    [Symbol.species]: Name;
};


//// [/src/solution/common/tsconfig.json]
{
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
        "composite": true
    },
    "include": ["nominal.ts"]
}

//// [/src/solution/sub-project/index.ts]
import { Nominal } from '../common/nominal';

export type MyNominal = Nominal<string, 'MyNominal'>;


//// [/src/solution/sub-project/tsconfig.json]
{
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
        "composite": true
    },
    "references": [
        { "path": "../common" }
    ],
    "include": ["./index.ts"]
}

//// [/src/solution/sub-project-2/index.ts]
import { MyNominal } from '../sub-project/index';

const variable = {
    key: 'value' as MyNominal,
};

export function getVar(): keyof typeof variable {
    return 'key';
}


//// [/src/solution/sub-project-2/tsconfig.json]
{
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
        "composite": true
    },
    "references": [
        { "path": "../sub-project" }
    ],
    "include": ["./index.ts"]
}

//// [/src/solution/tsconfig.json]
{
    "compilerOptions": {
        "composite": true
    },
    "references": [
        { "path": "./sub-project" },
        { "path": "./sub-project-2" }
    ],
    "include": []
}

//// [/src/tsconfig.base.json]
{
    "compilerOptions": {
        "skipLibCheck": true,
        "rootDir": "./",
        "outDir": "lib",
    }
}

//// [/src/tsconfig.json]
{
                    "compilerOptions": {
                        "composite": true
                    },
                    "references": [
                        { "path": "./solution" }
                    ],
                    "include": []
                }



Output::
/lib/tsc -b /src --verbose
[[90m12:00:19 AM[0m] Projects in this build: 
    * src/solution/common/tsconfig.json
    * src/solution/sub-project/tsconfig.json
    * src/solution/sub-project-2/tsconfig.json
    * src/solution/tsconfig.json
    * src/tsconfig.json

[[90m12:00:20 AM[0m] Project 'src/solution/common/tsconfig.json' is out of date because output file 'src/lib/solution/common/tsconfig.tsbuildinfo' does not exist

[[90m12:00:21 AM[0m] Building project '/src/solution/common/tsconfig.json'...

[[90m12:00:30 AM[0m] Project 'src/solution/sub-project/tsconfig.json' is out of date because output file 'src/lib/solution/sub-project/tsconfig.tsbuildinfo' does not exist

[[90m12:00:31 AM[0m] Building project '/src/solution/sub-project/tsconfig.json'...

[[90m12:00:38 AM[0m] Project 'src/solution/sub-project-2/tsconfig.json' is out of date because output file 'src/lib/solution/sub-project-2/tsconfig.tsbuildinfo' does not exist

[[90m12:00:39 AM[0m] Building project '/src/solution/sub-project-2/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/lib/solution/common/nominal.d.ts]
export declare type Nominal<T, Name extends string> = T & {
    [Symbol.species]: Name;
};


//// [/src/lib/solution/common/nominal.js]
"use strict";
exports.__esModule = true;


//// [/src/lib/solution/common/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.d.ts","../../../solution/common/nominal.ts"],"fileInfos":[{"version":"-32082413277-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n","affectsGlobalScope":true},{"version":"-24498031910-export declare type Nominal<T, Name extends string> = T & {\n    [Symbol.species]: Name;\n};\n","signature":"-9513375615-export declare type Nominal<T, Name extends string> = T & {\r\n    [Symbol.species]: Name;\r\n};\r\n"}],"options":{"composite":true,"outDir":"../..","rootDir":"../../..","skipLibCheck":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./nominal.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/solution/common/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.d.ts",
      "../../../solution/common/nominal.ts"
    ],
    "fileInfos": {
      "../../../../lib/lib.d.ts": {
        "version": "-32082413277-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n",
        "signature": "-32082413277-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n",
        "affectsGlobalScope": true
      },
      "../../../solution/common/nominal.ts": {
        "version": "-24498031910-export declare type Nominal<T, Name extends string> = T & {\n    [Symbol.species]: Name;\n};\n",
        "signature": "-9513375615-export declare type Nominal<T, Name extends string> = T & {\r\n    [Symbol.species]: Name;\r\n};\r\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "../..",
      "rootDir": "../../..",
      "skipLibCheck": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.d.ts",
      "../../../solution/common/nominal.ts"
    ],
    "latestChangedDtsFile": "./nominal.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1276
}

//// [/src/lib/solution/sub-project/index.d.ts]
import { Nominal } from '../common/nominal';
export type MyNominal = Nominal<string, 'MyNominal'>;


//// [/src/lib/solution/sub-project/index.js]
"use strict";
exports.__esModule = true;


//// [/src/lib/solution/sub-project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.d.ts","../common/nominal.d.ts","../../../solution/sub-project/index.ts"],"fileInfos":[{"version":"-32082413277-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n","affectsGlobalScope":true},"-9513375615-export declare type Nominal<T, Name extends string> = T & {\r\n    [Symbol.species]: Name;\r\n};\r\n",{"version":"-22894055505-import { Nominal } from '../common/nominal';\n\nexport type MyNominal = Nominal<string, 'MyNominal'>;\n","signature":"-27144836353-import { Nominal } from '../common/nominal';\r\nexport type MyNominal = Nominal<string, 'MyNominal'>;\r\n"}],"options":{"composite":true,"outDir":"../..","rootDir":"../../..","skipLibCheck":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/solution/sub-project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.d.ts",
      "../common/nominal.d.ts",
      "../../../solution/sub-project/index.ts"
    ],
    "fileNamesList": [
      [
        "../common/nominal.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../lib/lib.d.ts": {
        "version": "-32082413277-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n",
        "signature": "-32082413277-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n",
        "affectsGlobalScope": true
      },
      "../common/nominal.d.ts": {
        "version": "-9513375615-export declare type Nominal<T, Name extends string> = T & {\r\n    [Symbol.species]: Name;\r\n};\r\n",
        "signature": "-9513375615-export declare type Nominal<T, Name extends string> = T & {\r\n    [Symbol.species]: Name;\r\n};\r\n"
      },
      "../../../solution/sub-project/index.ts": {
        "version": "-22894055505-import { Nominal } from '../common/nominal';\n\nexport type MyNominal = Nominal<string, 'MyNominal'>;\n",
        "signature": "-27144836353-import { Nominal } from '../common/nominal';\r\nexport type MyNominal = Nominal<string, 'MyNominal'>;\r\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "../..",
      "rootDir": "../../..",
      "skipLibCheck": true
    },
    "referencedMap": {
      "../../../solution/sub-project/index.ts": [
        "../common/nominal.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../../../solution/sub-project/index.ts": [
        "../common/nominal.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.d.ts",
      "../common/nominal.d.ts",
      "../../../solution/sub-project/index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1464
}

//// [/src/lib/solution/sub-project-2/index.d.ts]
import { MyNominal } from '../sub-project/index';
declare const variable: {
    key: MyNominal;
};
export declare function getVar(): keyof typeof variable;
export {};


//// [/src/lib/solution/sub-project-2/index.js]
"use strict";
exports.__esModule = true;
exports.getVar = void 0;
var variable = {
    key: 'value'
};
function getVar() {
    return 'key';
}
exports.getVar = getVar;


//// [/src/lib/solution/sub-project-2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../lib/lib.d.ts","../common/nominal.d.ts","../sub-project/index.d.ts","../../../solution/sub-project-2/index.ts"],"fileInfos":[{"version":"-32082413277-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n","affectsGlobalScope":true},"-9513375615-export declare type Nominal<T, Name extends string> = T & {\r\n    [Symbol.species]: Name;\r\n};\r\n","-27144836353-import { Nominal } from '../common/nominal';\r\nexport type MyNominal = Nominal<string, 'MyNominal'>;\r\n",{"version":"-13939373533-import { MyNominal } from '../sub-project/index';\n\nconst variable = {\n    key: 'value' as MyNominal,\n};\n\nexport function getVar(): keyof typeof variable {\n    return 'key';\n}\n","signature":"881159974-import { MyNominal } from '../sub-project/index';\r\ndeclare const variable: {\r\n    key: MyNominal;\r\n};\r\nexport declare function getVar(): keyof typeof variable;\r\nexport {};\r\n"}],"options":{"composite":true,"outDir":"../..","rootDir":"../../..","skipLibCheck":true},"fileIdsList":[[2],[3]],"referencedMap":[[3,1],[4,2]],"exportedModulesMap":[[3,1],[4,2]],"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/solution/sub-project-2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../lib/lib.d.ts",
      "../common/nominal.d.ts",
      "../sub-project/index.d.ts",
      "../../../solution/sub-project-2/index.ts"
    ],
    "fileNamesList": [
      [
        "../common/nominal.d.ts"
      ],
      [
        "../sub-project/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../lib/lib.d.ts": {
        "version": "-32082413277-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n",
        "signature": "-32082413277-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n",
        "affectsGlobalScope": true
      },
      "../common/nominal.d.ts": {
        "version": "-9513375615-export declare type Nominal<T, Name extends string> = T & {\r\n    [Symbol.species]: Name;\r\n};\r\n",
        "signature": "-9513375615-export declare type Nominal<T, Name extends string> = T & {\r\n    [Symbol.species]: Name;\r\n};\r\n"
      },
      "../sub-project/index.d.ts": {
        "version": "-27144836353-import { Nominal } from '../common/nominal';\r\nexport type MyNominal = Nominal<string, 'MyNominal'>;\r\n",
        "signature": "-27144836353-import { Nominal } from '../common/nominal';\r\nexport type MyNominal = Nominal<string, 'MyNominal'>;\r\n"
      },
      "../../../solution/sub-project-2/index.ts": {
        "version": "-13939373533-import { MyNominal } from '../sub-project/index';\n\nconst variable = {\n    key: 'value' as MyNominal,\n};\n\nexport function getVar(): keyof typeof variable {\n    return 'key';\n}\n",
        "signature": "881159974-import { MyNominal } from '../sub-project/index';\r\ndeclare const variable: {\r\n    key: MyNominal;\r\n};\r\nexport declare function getVar(): keyof typeof variable;\r\nexport {};\r\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "../..",
      "rootDir": "../../..",
      "skipLibCheck": true
    },
    "referencedMap": {
      "../sub-project/index.d.ts": [
        "../common/nominal.d.ts"
      ],
      "../../../solution/sub-project-2/index.ts": [
        "../sub-project/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../sub-project/index.d.ts": [
        "../common/nominal.d.ts"
      ],
      "../../../solution/sub-project-2/index.ts": [
        "../sub-project/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../lib/lib.d.ts",
      "../common/nominal.d.ts",
      "../sub-project/index.d.ts",
      "../../../solution/sub-project-2/index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1791
}

