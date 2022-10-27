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

//// [/src/src/a.ts]
import { B } from "./b";

export interface A {
  b: B;
}


//// [/src/src/b.ts]
import { C } from "./c";

export interface B {
  b: C;
}


//// [/src/src/c.ts]
import { A } from "./a";

export interface C {
  a: A;
}


//// [/src/src/index.ts]
export { A } from "./a";
export { B } from "./b";
export { C } from "./c";


//// [/src/tsconfig.json]
{
  "compilerOptions": {
    "incremental": true,                   /* Enable incremental compilation */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "declaration": true,                   /* Generates corresponding '.d.ts' file. */
                    /* Generates a sourcemap for each corresponding '.d.ts' file. */
    "sourceMap": true,                     /* Generates corresponding '.map' file. */
    "outDir": "./lib",                        /* Redirect output structure to the directory. */
    "composite": true,                     /* Enable project compilation */
    "strict": true,                           /* Enable all strict type-checking options. */

    "esModuleInterop": true,                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    
    "alwaysStrict": true,
    "rootDir": "src",
    "emitDeclarationOnly": true
  } 
}




Output::
/lib/tsc --b /src --verbose
[[90m12:00:07 AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90m12:00:08 AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/tsconfig.tsbuildinfo' does not exist

[[90m12:00:09 AM[0m] Building project '/src/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/lib/a.d.ts]
import { B } from "./b";
export interface A {
    b: B;
}


//// [/src/lib/b.d.ts]
import { C } from "./c";
export interface B {
    b: C;
}


//// [/src/lib/c.d.ts]
import { A } from "./a";
export interface C {
    a: A;
}


//// [/src/lib/index.d.ts]
export { A } from "./a";
export { B } from "./b";
export { C } from "./c";


//// [/src/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./src/c.ts","./src/b.ts","./src/a.ts","./src/index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"429593025-import { A } from \"./a\";\n\nexport interface C {\n  a: A;\n}\n","signature":"-2697851509-import { A } from \"./a\";\r\nexport interface C {\r\n    a: A;\r\n}\r\n"},{"version":"-2273488249-import { C } from \"./c\";\n\nexport interface B {\n  b: C;\n}\n","signature":"20298635505-import { C } from \"./c\";\r\nexport interface B {\r\n    b: C;\r\n}\r\n"},{"version":"-15463561693-import { B } from \"./b\";\n\nexport interface A {\n  b: B;\n}\n","signature":"-4206296467-import { B } from \"./b\";\r\nexport interface A {\r\n    b: B;\r\n}\r\n"},{"version":"1286756397-export { A } from \"./a\";\nexport { B } from \"./b\";\nexport { C } from \"./c\";\n","signature":"-6009477228-export { A } from \"./a\";\r\nexport { B } from \"./b\";\r\nexport { C } from \"./c\";\r\n"}],"options":{"alwaysStrict":true,"composite":true,"declaration":true,"emitDeclarationOnly":true,"esModuleInterop":true,"module":1,"outDir":"./lib","rootDir":"./src","sourceMap":true,"strict":true,"target":1},"fileIdsList":[[3],[2],[4],[2,3,4]],"referencedMap":[[4,1],[3,2],[2,3],[5,4]],"exportedModulesMap":[[4,1],[3,2],[2,3],[5,4]],"semanticDiagnosticsPerFile":[1,4,3,2,5],"latestChangedDtsFile":"./lib/index.d.ts"},"version":"FakeTSVersion"}

//// [/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./src/c.ts",
      "./src/b.ts",
      "./src/a.ts",
      "./src/index.ts"
    ],
    "fileNamesList": [
      [
        "./src/b.ts"
      ],
      [
        "./src/c.ts"
      ],
      [
        "./src/a.ts"
      ],
      [
        "./src/c.ts",
        "./src/b.ts",
        "./src/a.ts"
      ]
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/c.ts": {
        "version": "429593025-import { A } from \"./a\";\n\nexport interface C {\n  a: A;\n}\n",
        "signature": "-2697851509-import { A } from \"./a\";\r\nexport interface C {\r\n    a: A;\r\n}\r\n"
      },
      "./src/b.ts": {
        "version": "-2273488249-import { C } from \"./c\";\n\nexport interface B {\n  b: C;\n}\n",
        "signature": "20298635505-import { C } from \"./c\";\r\nexport interface B {\r\n    b: C;\r\n}\r\n"
      },
      "./src/a.ts": {
        "version": "-15463561693-import { B } from \"./b\";\n\nexport interface A {\n  b: B;\n}\n",
        "signature": "-4206296467-import { B } from \"./b\";\r\nexport interface A {\r\n    b: B;\r\n}\r\n"
      },
      "./src/index.ts": {
        "version": "1286756397-export { A } from \"./a\";\nexport { B } from \"./b\";\nexport { C } from \"./c\";\n",
        "signature": "-6009477228-export { A } from \"./a\";\r\nexport { B } from \"./b\";\r\nexport { C } from \"./c\";\r\n"
      }
    },
    "options": {
      "alwaysStrict": true,
      "composite": true,
      "declaration": true,
      "emitDeclarationOnly": true,
      "esModuleInterop": true,
      "module": 1,
      "outDir": "./lib",
      "rootDir": "./src",
      "sourceMap": true,
      "strict": true,
      "target": 1
    },
    "referencedMap": {
      "./src/a.ts": [
        "./src/b.ts"
      ],
      "./src/b.ts": [
        "./src/c.ts"
      ],
      "./src/c.ts": [
        "./src/a.ts"
      ],
      "./src/index.ts": [
        "./src/c.ts",
        "./src/b.ts",
        "./src/a.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/a.ts": [
        "./src/b.ts"
      ],
      "./src/b.ts": [
        "./src/c.ts"
      ],
      "./src/c.ts": [
        "./src/a.ts"
      ],
      "./src/index.ts": [
        "./src/c.ts",
        "./src/b.ts",
        "./src/a.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./src/a.ts",
      "./src/b.ts",
      "./src/c.ts",
      "./src/index.ts"
    ],
    "latestChangedDtsFile": "./lib/index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1830
}



Change:: incremental-declaration-changes
Input::
//// [/src/src/a.ts]
import { B } from "./b";

export interface A {
  b: B; foo: any;
}




Output::
/lib/tsc --b /src --verbose
[[90m12:00:19 AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90m12:00:20 AM[0m] Project 'src/tsconfig.json' is out of date because output 'src/tsconfig.tsbuildinfo' is older than input 'src/src/a.ts'

[[90m12:00:21 AM[0m] Building project '/src/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/lib/a.d.ts]
import { B } from "./b";
export interface A {
    b: B;
    foo: any;
}


//// [/src/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./src/c.ts","./src/b.ts","./src/a.ts","./src/index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"429593025-import { A } from \"./a\";\n\nexport interface C {\n  a: A;\n}\n","signature":"-2697851509-import { A } from \"./a\";\r\nexport interface C {\r\n    a: A;\r\n}\r\n"},{"version":"-2273488249-import { C } from \"./c\";\n\nexport interface B {\n  b: C;\n}\n","signature":"20298635505-import { C } from \"./c\";\r\nexport interface B {\r\n    b: C;\r\n}\r\n"},{"version":"-14761736732-import { B } from \"./b\";\n\nexport interface A {\n  b: B; foo: any;\n}\n","signature":"-7639584379-import { B } from \"./b\";\r\nexport interface A {\r\n    b: B;\r\n    foo: any;\r\n}\r\n"},{"version":"1286756397-export { A } from \"./a\";\nexport { B } from \"./b\";\nexport { C } from \"./c\";\n","signature":"-6009477228-export { A } from \"./a\";\r\nexport { B } from \"./b\";\r\nexport { C } from \"./c\";\r\n"}],"options":{"alwaysStrict":true,"composite":true,"declaration":true,"emitDeclarationOnly":true,"esModuleInterop":true,"module":1,"outDir":"./lib","rootDir":"./src","sourceMap":true,"strict":true,"target":1},"fileIdsList":[[3],[2],[4],[2,3,4]],"referencedMap":[[4,1],[3,2],[2,3],[5,4]],"exportedModulesMap":[[4,1],[3,2],[2,3],[5,4]],"semanticDiagnosticsPerFile":[1,4,3,2,5],"latestChangedDtsFile":"./lib/a.d.ts"},"version":"FakeTSVersion"}

//// [/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./src/c.ts",
      "./src/b.ts",
      "./src/a.ts",
      "./src/index.ts"
    ],
    "fileNamesList": [
      [
        "./src/b.ts"
      ],
      [
        "./src/c.ts"
      ],
      [
        "./src/a.ts"
      ],
      [
        "./src/c.ts",
        "./src/b.ts",
        "./src/a.ts"
      ]
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/c.ts": {
        "version": "429593025-import { A } from \"./a\";\n\nexport interface C {\n  a: A;\n}\n",
        "signature": "-2697851509-import { A } from \"./a\";\r\nexport interface C {\r\n    a: A;\r\n}\r\n"
      },
      "./src/b.ts": {
        "version": "-2273488249-import { C } from \"./c\";\n\nexport interface B {\n  b: C;\n}\n",
        "signature": "20298635505-import { C } from \"./c\";\r\nexport interface B {\r\n    b: C;\r\n}\r\n"
      },
      "./src/a.ts": {
        "version": "-14761736732-import { B } from \"./b\";\n\nexport interface A {\n  b: B; foo: any;\n}\n",
        "signature": "-7639584379-import { B } from \"./b\";\r\nexport interface A {\r\n    b: B;\r\n    foo: any;\r\n}\r\n"
      },
      "./src/index.ts": {
        "version": "1286756397-export { A } from \"./a\";\nexport { B } from \"./b\";\nexport { C } from \"./c\";\n",
        "signature": "-6009477228-export { A } from \"./a\";\r\nexport { B } from \"./b\";\r\nexport { C } from \"./c\";\r\n"
      }
    },
    "options": {
      "alwaysStrict": true,
      "composite": true,
      "declaration": true,
      "emitDeclarationOnly": true,
      "esModuleInterop": true,
      "module": 1,
      "outDir": "./lib",
      "rootDir": "./src",
      "sourceMap": true,
      "strict": true,
      "target": 1
    },
    "referencedMap": {
      "./src/a.ts": [
        "./src/b.ts"
      ],
      "./src/b.ts": [
        "./src/c.ts"
      ],
      "./src/c.ts": [
        "./src/a.ts"
      ],
      "./src/index.ts": [
        "./src/c.ts",
        "./src/b.ts",
        "./src/a.ts"
      ]
    },
    "exportedModulesMap": {
      "./src/a.ts": [
        "./src/b.ts"
      ],
      "./src/b.ts": [
        "./src/c.ts"
      ],
      "./src/c.ts": [
        "./src/a.ts"
      ],
      "./src/index.ts": [
        "./src/c.ts",
        "./src/b.ts",
        "./src/a.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./src/a.ts",
      "./src/b.ts",
      "./src/c.ts",
      "./src/index.ts"
    ],
    "latestChangedDtsFile": "./lib/a.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1853
}

