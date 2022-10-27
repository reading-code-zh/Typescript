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

//// [/src/app/file3.ts]
export const z = 30;
import { x } from "file1";

//// [/src/app/file4.ts]
const myVar = 30;

//// [/src/app/tsconfig.json]
{
    "compilerOptions": {
        "target": "es5",
        "module": "amd",
        "composite": true,
        "strict": false,
        "sourceMap": true,
        "declarationMap": true,
        "outFile": "module.js"
    },
    "exclude": ["module.d.ts"],
    "references": [
        { "path": "../lib", "prepend": true }
    ]
}

//// [/src/lib/file0.ts]
const myGlob = 20;

//// [/src/lib/file1.ts]
export const x = 10;

//// [/src/lib/file2.ts]
export const y = 20;

//// [/src/lib/global.ts]
const globalConst = 10;

//// [/src/lib/tsconfig.json]
{
    "compilerOptions": {
        "target": "es5",
        "module": "amd",
        "composite": true,
        "sourceMap": true,
        "declarationMap": true,
        "strict": false,
        "outFile": "module.js"
    },
    "exclude": ["module.d.ts"]

}



Output::
/lib/tsc --b /src/app --verbose
[[90m12:00:06 AM[0m] Projects in this build: 
    * src/lib/tsconfig.json
    * src/app/tsconfig.json

[[90m12:00:07 AM[0m] Project 'src/lib/tsconfig.json' is out of date because output file 'src/lib/module.tsbuildinfo' does not exist

[[90m12:00:08 AM[0m] Building project '/src/lib/tsconfig.json'...

[[90m12:00:17 AM[0m] Project 'src/app/tsconfig.json' is out of date because output file 'src/app/module.tsbuildinfo' does not exist

[[90m12:00:18 AM[0m] Building project '/src/app/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/app/module.d.ts]
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;
declare module "file3" {
    export const z = 30;
}
declare const myVar = 30;
//# sourceMappingURL=module.d.ts.map

//// [/src/app/module.d.ts.map]
{"version":3,"file":"module.d.ts","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC"}

//// [/src/app/module.d.ts.map.baseline.txt]
===================================================================
JsFile: module.d.ts
mapUrl: module.d.ts.map
sourceRoot: 
sources: ../lib/file0.ts,../lib/file1.ts,../lib/file2.ts,../lib/global.ts,file3.ts,file4.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/app/module.d.ts
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>declare const myGlob = 20;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^
5 >                    ^^^^^
6 >                         ^
1 >
2 >
3 >        const 
4 >              myGlob
5 >                     = 20
6 >                         ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 9) Source(1, 1) + SourceIndex(0)
3 >Emitted(1, 15) Source(1, 7) + SourceIndex(0)
4 >Emitted(1, 21) Source(1, 13) + SourceIndex(0)
5 >Emitted(1, 26) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 27) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.d.ts
sourceFile:../lib/file1.ts
-------------------------------------------------------------------
>>>declare module "file1" {
>>>    export const x = 10;
1 >^^^^
2 >    ^^^^^^
3 >          ^
4 >           ^^^^^^
5 >                 ^
6 >                  ^^^^^
7 >                       ^
1 >
2 >    export
3 >           
4 >           const 
5 >                 x
6 >                   = 10
7 >                       ;
1 >Emitted(3, 5) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 11) Source(1, 7) + SourceIndex(1)
3 >Emitted(3, 12) Source(1, 8) + SourceIndex(1)
4 >Emitted(3, 18) Source(1, 14) + SourceIndex(1)
5 >Emitted(3, 19) Source(1, 15) + SourceIndex(1)
6 >Emitted(3, 24) Source(1, 20) + SourceIndex(1)
7 >Emitted(3, 25) Source(1, 21) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.d.ts
sourceFile:../lib/file2.ts
-------------------------------------------------------------------
>>>}
>>>declare module "file2" {
>>>    export const y = 20;
1 >^^^^
2 >    ^^^^^^
3 >          ^
4 >           ^^^^^^
5 >                 ^
6 >                  ^^^^^
7 >                       ^
1 >
2 >    export
3 >           
4 >           const 
5 >                 y
6 >                   = 20
7 >                       ;
1 >Emitted(6, 5) Source(1, 1) + SourceIndex(2)
2 >Emitted(6, 11) Source(1, 7) + SourceIndex(2)
3 >Emitted(6, 12) Source(1, 8) + SourceIndex(2)
4 >Emitted(6, 18) Source(1, 14) + SourceIndex(2)
5 >Emitted(6, 19) Source(1, 15) + SourceIndex(2)
6 >Emitted(6, 24) Source(1, 20) + SourceIndex(2)
7 >Emitted(6, 25) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.d.ts
sourceFile:../lib/global.ts
-------------------------------------------------------------------
>>>}
>>>declare const globalConst = 10;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^
5 >                         ^^^^^
6 >                              ^
1 >
2 >
3 >        const 
4 >              globalConst
5 >                          = 10
6 >                              ;
1 >Emitted(8, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(8, 9) Source(1, 1) + SourceIndex(3)
3 >Emitted(8, 15) Source(1, 7) + SourceIndex(3)
4 >Emitted(8, 26) Source(1, 18) + SourceIndex(3)
5 >Emitted(8, 31) Source(1, 23) + SourceIndex(3)
6 >Emitted(8, 32) Source(1, 24) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.d.ts
sourceFile:file3.ts
-------------------------------------------------------------------
>>>declare module "file3" {
>>>    export const z = 30;
1 >^^^^
2 >    ^^^^^^
3 >          ^
4 >           ^^^^^^
5 >                 ^
6 >                  ^^^^^
7 >                       ^
1 >
2 >    export
3 >           
4 >           const 
5 >                 z
6 >                   = 30
7 >                       ;
1 >Emitted(10, 5) Source(1, 1) + SourceIndex(4)
2 >Emitted(10, 11) Source(1, 7) + SourceIndex(4)
3 >Emitted(10, 12) Source(1, 8) + SourceIndex(4)
4 >Emitted(10, 18) Source(1, 14) + SourceIndex(4)
5 >Emitted(10, 19) Source(1, 15) + SourceIndex(4)
6 >Emitted(10, 24) Source(1, 20) + SourceIndex(4)
7 >Emitted(10, 25) Source(1, 21) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.d.ts
sourceFile:file4.ts
-------------------------------------------------------------------
>>>}
>>>declare const myVar = 30;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^
5 >                   ^^^^^
6 >                        ^
7 >                         ^^^^^^^^^^->
1 >
2 >
3 >        const 
4 >              myVar
5 >                    = 30
6 >                        ;
1 >Emitted(12, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(12, 9) Source(1, 1) + SourceIndex(5)
3 >Emitted(12, 15) Source(1, 7) + SourceIndex(5)
4 >Emitted(12, 20) Source(1, 12) + SourceIndex(5)
5 >Emitted(12, 25) Source(1, 17) + SourceIndex(5)
6 >Emitted(12, 26) Source(1, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.d.ts.map

//// [/src/app/module.js]
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,KAAK,GAAG,EAAE,CAAC"}

//// [/src/app/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: ../lib/file0.ts,../lib/file1.ts,../lib/file2.ts,../lib/global.ts,file3.ts,file4.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 7) + SourceIndex(0)
3 >Emitted(1, 11) Source(1, 13) + SourceIndex(0)
4 >Emitted(1, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(1, 16) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 17) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = void 0;
>>>    exports.x = 10;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
1->Emitted(6, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(6, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(6, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(6, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(6, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(6, 20) Source(1, 21) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(12, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(12, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(12, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(12, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(12, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(12, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(14, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(14, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(14, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(14, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(14, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(14, 22) Source(1, 24) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file3.ts
-------------------------------------------------------------------
>>>define("file3", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.z = void 0;
>>>    exports.z = 30;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->export const 
2 >    
3 >            z
4 >              = 
5 >                30
6 >                  ;
1->Emitted(19, 5) Source(1, 14) + SourceIndex(4)
2 >Emitted(19, 13) Source(1, 14) + SourceIndex(4)
3 >Emitted(19, 14) Source(1, 15) + SourceIndex(4)
4 >Emitted(19, 17) Source(1, 18) + SourceIndex(4)
5 >Emitted(19, 19) Source(1, 20) + SourceIndex(4)
6 >Emitted(19, 20) Source(1, 21) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>});
>>>var myVar = 30;
1 >
2 >^^^^
3 >    ^^^^^
4 >         ^^^
5 >            ^^
6 >              ^
7 >               ^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(21, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(21, 5) Source(1, 7) + SourceIndex(5)
3 >Emitted(21, 10) Source(1, 12) + SourceIndex(5)
4 >Emitted(21, 13) Source(1, 15) + SourceIndex(5)
5 >Emitted(21, 15) Source(1, 17) + SourceIndex(5)
6 >Emitted(21, 16) Source(1, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file3.ts","./file4.ts"],"js":{"sections":[{"pos":0,"end":459,"kind":"prepend","data":"../lib/module.js","texts":[{"pos":0,"end":459,"kind":"text"}]},{"pos":459,"end":685,"kind":"text"}],"mapHash":"5108062215-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}","hash":"-13733503289-var myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":171,"kind":"prepend","data":"../lib/module.d.ts","texts":[{"pos":0,"end":171,"kind":"text"}]},{"pos":171,"end":253,"kind":"text"}],"mapHash":"-41254439122-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}","hash":"-2339330908-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file3.ts","./file4.ts"],"fileInfos":["-2588783191-export const z = 30;\r\nimport { x } from \"file1\";","1463681686-const myVar = 30;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prepend: (0-459):: ../lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (0-459)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;

----------------------------------------------------------------------
text: (459-685)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
var myVar = 30;

======================================================================
======================================================================
File:: /src/app/module.d.ts
----------------------------------------------------------------------
prepend: (0-171):: ../lib/module.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-171)
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

----------------------------------------------------------------------
text: (171-253)
declare module "file3" {
    export const z = 30;
}
declare const myVar = 30;

======================================================================

//// [/src/app/module.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file3.ts",
      "./file4.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 459,
          "kind": "prepend",
          "data": "../lib/module.js",
          "texts": [
            {
              "pos": 0,
              "end": 459,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 459,
          "end": 685,
          "kind": "text"
        }
      ],
      "hash": "-13733503289-var myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "5108062215-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 171,
          "kind": "prepend",
          "data": "../lib/module.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 171,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 171,
          "end": 253,
          "kind": "text"
        }
      ],
      "hash": "-2339330908-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map",
      "mapHash": "-41254439122-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file3.ts",
      "./file4.ts"
    ],
    "fileInfos": {
      "./file3.ts": "-2588783191-export const z = 30;\r\nimport { x } from \"file1\";",
      "./file4.ts": "1463681686-const myVar = 30;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 3035
}

//// [/src/lib/module.d.ts]
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;
//# sourceMappingURL=module.d.ts.map

//// [/src/lib/module.d.ts.map]
{"version":3,"file":"module.d.ts","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC"}

//// [/src/lib/module.d.ts.map.baseline.txt]
===================================================================
JsFile: module.d.ts
mapUrl: module.d.ts.map
sourceRoot: 
sources: file0.ts,file1.ts,file2.ts,global.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/lib/module.d.ts
sourceFile:file0.ts
-------------------------------------------------------------------
>>>declare const myGlob = 20;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^
5 >                    ^^^^^
6 >                         ^
1 >
2 >
3 >        const 
4 >              myGlob
5 >                     = 20
6 >                         ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 9) Source(1, 1) + SourceIndex(0)
3 >Emitted(1, 15) Source(1, 7) + SourceIndex(0)
4 >Emitted(1, 21) Source(1, 13) + SourceIndex(0)
5 >Emitted(1, 26) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 27) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.d.ts
sourceFile:file1.ts
-------------------------------------------------------------------
>>>declare module "file1" {
>>>    export const x = 10;
1 >^^^^
2 >    ^^^^^^
3 >          ^
4 >           ^^^^^^
5 >                 ^
6 >                  ^^^^^
7 >                       ^
1 >
2 >    export
3 >           
4 >           const 
5 >                 x
6 >                   = 10
7 >                       ;
1 >Emitted(3, 5) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 11) Source(1, 7) + SourceIndex(1)
3 >Emitted(3, 12) Source(1, 8) + SourceIndex(1)
4 >Emitted(3, 18) Source(1, 14) + SourceIndex(1)
5 >Emitted(3, 19) Source(1, 15) + SourceIndex(1)
6 >Emitted(3, 24) Source(1, 20) + SourceIndex(1)
7 >Emitted(3, 25) Source(1, 21) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.d.ts
sourceFile:file2.ts
-------------------------------------------------------------------
>>>}
>>>declare module "file2" {
>>>    export const y = 20;
1 >^^^^
2 >    ^^^^^^
3 >          ^
4 >           ^^^^^^
5 >                 ^
6 >                  ^^^^^
7 >                       ^
1 >
2 >    export
3 >           
4 >           const 
5 >                 y
6 >                   = 20
7 >                       ;
1 >Emitted(6, 5) Source(1, 1) + SourceIndex(2)
2 >Emitted(6, 11) Source(1, 7) + SourceIndex(2)
3 >Emitted(6, 12) Source(1, 8) + SourceIndex(2)
4 >Emitted(6, 18) Source(1, 14) + SourceIndex(2)
5 >Emitted(6, 19) Source(1, 15) + SourceIndex(2)
6 >Emitted(6, 24) Source(1, 20) + SourceIndex(2)
7 >Emitted(6, 25) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.d.ts
sourceFile:global.ts
-------------------------------------------------------------------
>>>}
>>>declare const globalConst = 10;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^
5 >                         ^^^^^
6 >                              ^
7 >                               ^^^^->
1 >
2 >
3 >        const 
4 >              globalConst
5 >                          = 10
6 >                              ;
1 >Emitted(8, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(8, 9) Source(1, 1) + SourceIndex(3)
3 >Emitted(8, 15) Source(1, 7) + SourceIndex(3)
4 >Emitted(8, 26) Source(1, 18) + SourceIndex(3)
5 >Emitted(8, 31) Source(1, 23) + SourceIndex(3)
6 >Emitted(8, 32) Source(1, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.d.ts.map

//// [/src/lib/module.js]
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
//# sourceMappingURL=module.js.map

//// [/src/lib/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

//// [/src/lib/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: file0.ts,file1.ts,file2.ts,global.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 7) + SourceIndex(0)
3 >Emitted(1, 11) Source(1, 13) + SourceIndex(0)
4 >Emitted(1, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(1, 16) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 17) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = void 0;
>>>    exports.x = 10;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
1->Emitted(6, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(6, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(6, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(6, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(6, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(6, 20) Source(1, 21) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(12, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(12, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(12, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(12, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(12, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(12, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(14, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(14, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(14, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(14, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(14, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(14, 22) Source(1, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"js":{"sections":[{"pos":0,"end":459,"kind":"text"}],"mapHash":"15919942799-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}","hash":"10339383505-var myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":171,"kind":"text"}],"mapHash":"-14214505027-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}","hash":"10884851940-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"fileInfos":["3587416848-const myGlob = 20;","-10726455937-export const x = 10;","-13729954175-export const y = 20;","1028229885-const globalConst = 10;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
text: (0-459)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;

======================================================================
======================================================================
File:: /src/lib/module.d.ts
----------------------------------------------------------------------
text: (0-171)
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

======================================================================

//// [/src/lib/module.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file0.ts",
      "./file1.ts",
      "./file2.ts",
      "./global.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 459,
          "kind": "text"
        }
      ],
      "hash": "10339383505-var myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "15919942799-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 171,
          "kind": "text"
        }
      ],
      "hash": "10884851940-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map",
      "mapHash": "-14214505027-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file0.ts",
      "./file1.ts",
      "./file2.ts",
      "./global.ts"
    ],
    "fileInfos": {
      "./file0.ts": "3587416848-const myGlob = 20;",
      "./file1.ts": "-10726455937-export const x = 10;",
      "./file2.ts": "-13729954175-export const y = 20;",
      "./global.ts": "1028229885-const globalConst = 10;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2235
}



Change:: incremental-declaration-doesnt-change
Input::
//// [/src/lib/file1.ts]
export const x = 10;console.log(x);



Output::
/lib/tsc --b /src/app --verbose
[[90m12:00:32 AM[0m] Projects in this build: 
    * src/lib/tsconfig.json
    * src/app/tsconfig.json

[[90m12:00:33 AM[0m] Project 'src/lib/tsconfig.json' is out of date because output 'src/lib/module.tsbuildinfo' is older than input 'src/lib/file1.ts'

[[90m12:00:34 AM[0m] Building project '/src/lib/tsconfig.json'...

[[90m12:00:42 AM[0m] Project 'src/app/tsconfig.json' is out of date because output of its dependency 'src/lib' has changed

[[90m12:00:43 AM[0m] Updating output of project '/src/app/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/app/module.js]
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,KAAK,GAAG,EAAE,CAAC"}

//// [/src/app/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: ../lib/file0.ts,../lib/file1.ts,../lib/file2.ts,../lib/global.ts,file3.ts,file4.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 7) + SourceIndex(0)
3 >Emitted(1, 11) Source(1, 13) + SourceIndex(0)
4 >Emitted(1, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(1, 16) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 17) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = void 0;
>>>    exports.x = 10;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
7 >                   ^^^^^^^^^->
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
1->Emitted(6, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(6, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(6, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(6, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(6, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(6, 20) Source(1, 21) + SourceIndex(1)
---
>>>    console.log(exports.x);
1->^^^^
2 >    ^^^^^^^
3 >           ^
4 >            ^^^
5 >               ^
6 >                ^^^^^^^^^
7 >                         ^
8 >                          ^
1->
2 >    console
3 >           .
4 >            log
5 >               (
6 >                x
7 >                         )
8 >                          ;
1->Emitted(7, 5) Source(1, 21) + SourceIndex(1)
2 >Emitted(7, 12) Source(1, 28) + SourceIndex(1)
3 >Emitted(7, 13) Source(1, 29) + SourceIndex(1)
4 >Emitted(7, 16) Source(1, 32) + SourceIndex(1)
5 >Emitted(7, 17) Source(1, 33) + SourceIndex(1)
6 >Emitted(7, 26) Source(1, 34) + SourceIndex(1)
7 >Emitted(7, 27) Source(1, 35) + SourceIndex(1)
8 >Emitted(7, 28) Source(1, 36) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(13, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(13, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(13, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(13, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(13, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(13, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(15, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(15, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(15, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(15, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(15, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(15, 22) Source(1, 24) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file3.ts
-------------------------------------------------------------------
>>>define("file3", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.z = void 0;
>>>    exports.z = 30;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->export const 
2 >    
3 >            z
4 >              = 
5 >                30
6 >                  ;
1->Emitted(20, 5) Source(1, 14) + SourceIndex(4)
2 >Emitted(20, 13) Source(1, 14) + SourceIndex(4)
3 >Emitted(20, 14) Source(1, 15) + SourceIndex(4)
4 >Emitted(20, 17) Source(1, 18) + SourceIndex(4)
5 >Emitted(20, 19) Source(1, 20) + SourceIndex(4)
6 >Emitted(20, 20) Source(1, 21) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>});
>>>var myVar = 30;
1 >
2 >^^^^
3 >    ^^^^^
4 >         ^^^
5 >            ^^
6 >              ^
7 >               ^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(22, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(22, 5) Source(1, 7) + SourceIndex(5)
3 >Emitted(22, 10) Source(1, 12) + SourceIndex(5)
4 >Emitted(22, 13) Source(1, 15) + SourceIndex(5)
5 >Emitted(22, 15) Source(1, 17) + SourceIndex(5)
6 >Emitted(22, 16) Source(1, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file3.ts","./file4.ts"],"js":{"sections":[{"pos":0,"end":488,"kind":"prepend","data":"../lib/module.js","texts":[{"pos":0,"end":488,"kind":"text"}]},{"pos":488,"end":714,"kind":"text"}],"mapHash":"-3706363920-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}","hash":"-22321753400-var myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":171,"kind":"prepend","data":"../lib/module.d.ts","texts":[{"pos":0,"end":171,"kind":"text"}]},{"pos":171,"end":253,"kind":"text"}],"mapHash":"-41254439122-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}","hash":"-2339330908-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file3.ts","./file4.ts"],"fileInfos":["-2588783191-export const z = 30;\r\nimport { x } from \"file1\";","1463681686-const myVar = 30;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prepend: (0-488):: ../lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (0-488)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;

----------------------------------------------------------------------
text: (488-714)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
var myVar = 30;

======================================================================
======================================================================
File:: /src/app/module.d.ts
----------------------------------------------------------------------
prepend: (0-171):: ../lib/module.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-171)
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

----------------------------------------------------------------------
text: (171-253)
declare module "file3" {
    export const z = 30;
}
declare const myVar = 30;

======================================================================

//// [/src/app/module.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file3.ts",
      "./file4.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 488,
          "kind": "prepend",
          "data": "../lib/module.js",
          "texts": [
            {
              "pos": 0,
              "end": 488,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 488,
          "end": 714,
          "kind": "text"
        }
      ],
      "hash": "-22321753400-var myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "-3706363920-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 171,
          "kind": "prepend",
          "data": "../lib/module.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 171,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 171,
          "end": 253,
          "kind": "text"
        }
      ],
      "hash": "-2339330908-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map",
      "mapHash": "-41254439122-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file3.ts",
      "./file4.ts"
    ],
    "fileInfos": {
      "./file3.ts": "-2588783191-export const z = 30;\r\nimport { x } from \"file1\";",
      "./file4.ts": "1463681686-const myVar = 30;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 3108
}

//// [/src/lib/module.d.ts.map] file written with same contents
//// [/src/lib/module.d.ts.map.baseline.txt] file written with same contents
//// [/src/lib/module.js]
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
//# sourceMappingURL=module.js.map

//// [/src/lib/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

//// [/src/lib/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: file0.ts,file1.ts,file2.ts,global.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 7) + SourceIndex(0)
3 >Emitted(1, 11) Source(1, 13) + SourceIndex(0)
4 >Emitted(1, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(1, 16) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 17) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = void 0;
>>>    exports.x = 10;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
7 >                   ^^^^^^^^^->
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
1->Emitted(6, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(6, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(6, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(6, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(6, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(6, 20) Source(1, 21) + SourceIndex(1)
---
>>>    console.log(exports.x);
1->^^^^
2 >    ^^^^^^^
3 >           ^
4 >            ^^^
5 >               ^
6 >                ^^^^^^^^^
7 >                         ^
8 >                          ^
1->
2 >    console
3 >           .
4 >            log
5 >               (
6 >                x
7 >                         )
8 >                          ;
1->Emitted(7, 5) Source(1, 21) + SourceIndex(1)
2 >Emitted(7, 12) Source(1, 28) + SourceIndex(1)
3 >Emitted(7, 13) Source(1, 29) + SourceIndex(1)
4 >Emitted(7, 16) Source(1, 32) + SourceIndex(1)
5 >Emitted(7, 17) Source(1, 33) + SourceIndex(1)
6 >Emitted(7, 26) Source(1, 34) + SourceIndex(1)
7 >Emitted(7, 27) Source(1, 35) + SourceIndex(1)
8 >Emitted(7, 28) Source(1, 36) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(13, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(13, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(13, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(13, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(13, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(13, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(15, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(15, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(15, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(15, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(15, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(15, 22) Source(1, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"js":{"sections":[{"pos":0,"end":488,"kind":"text"}],"mapHash":"32224580248-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}","hash":"-12742173550-var myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":171,"kind":"text"}],"mapHash":"-14214505027-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}","hash":"10884851940-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"fileInfos":["3587416848-const myGlob = 20;","-4405159098-export const x = 10;console.log(x);","-13729954175-export const y = 20;","1028229885-const globalConst = 10;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
text: (0-488)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;

======================================================================
======================================================================
File:: /src/lib/module.d.ts
----------------------------------------------------------------------
text: (0-171)
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

======================================================================

//// [/src/lib/module.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file0.ts",
      "./file1.ts",
      "./file2.ts",
      "./global.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 488,
          "kind": "text"
        }
      ],
      "hash": "-12742173550-var myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "32224580248-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 171,
          "kind": "text"
        }
      ],
      "hash": "10884851940-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map",
      "mapHash": "-14214505027-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file0.ts",
      "./file1.ts",
      "./file2.ts",
      "./global.ts"
    ],
    "fileInfos": {
      "./file0.ts": "3587416848-const myGlob = 20;",
      "./file1.ts": "-4405159098-export const x = 10;console.log(x);",
      "./file2.ts": "-13729954175-export const y = 20;",
      "./global.ts": "1028229885-const globalConst = 10;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2322
}

