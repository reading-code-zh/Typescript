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
///<reference path="./tripleRef.d.ts"/>
const file4Const = new appfile4();
const myVar = 30;

//// [/src/app/tripleRef.d.ts]
declare class appfile4 { }

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
///<reference path="./tripleRef.d.ts"/>
const file0Const = new libfile0();
const myGlob = 20;

//// [/src/lib/file1.ts]
export const x = 10;

//// [/src/lib/file2.ts]
export const y = 20;

//// [/src/lib/global.ts]
const globalConst = 10;

//// [/src/lib/tripleRef.d.ts]
declare class libfile0 { }

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
[[90m12:00:10 AM[0m] Projects in this build: 
    * src/lib/tsconfig.json
    * src/app/tsconfig.json

[[90m12:00:11 AM[0m] Project 'src/lib/tsconfig.json' is out of date because output file 'src/lib/module.tsbuildinfo' does not exist

[[90m12:00:12 AM[0m] Building project '/src/lib/tsconfig.json'...

[[90m12:00:21 AM[0m] Project 'src/app/tsconfig.json' is out of date because output file 'src/app/module.tsbuildinfo' does not exist

[[90m12:00:22 AM[0m] Building project '/src/app/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/app/module.d.ts]
/// <reference path="tripleRef.d.ts" />
/// <reference path="../lib/tripleRef.d.ts" />
declare const file0Const: libfile0;
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
declare const file4Const: appfile4;
declare const myVar = 30;
//# sourceMappingURL=module.d.ts.map

//// [/src/app/module.d.ts.map]
{"version":3,"file":"module.d.ts","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":";;AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACCpB,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,KAAK,KAAK,CAAC"}

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
>>>/// <reference path="tripleRef.d.ts" />
>>>/// <reference path="../lib/tripleRef.d.ts" />
>>>declare const file0Const: libfile0;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^
5 >                        ^^^^^^^^^^
6 >                                  ^
1 >///<reference path="./tripleRef.d.ts"/>
  >
2 >
3 >        const 
4 >              file0Const
5 >                         = new libfile0()
6 >                                  ;
1 >Emitted(3, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(3, 9) Source(2, 1) + SourceIndex(0)
3 >Emitted(3, 15) Source(2, 7) + SourceIndex(0)
4 >Emitted(3, 25) Source(2, 17) + SourceIndex(0)
5 >Emitted(3, 35) Source(2, 34) + SourceIndex(0)
6 >Emitted(3, 36) Source(2, 35) + SourceIndex(0)
---
>>>declare const myGlob = 20;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^
5 >                    ^^^^^
6 >                         ^
1 >
  >
2 >
3 >        const 
4 >              myGlob
5 >                     = 20
6 >                         ;
1 >Emitted(4, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(3, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(3, 7) + SourceIndex(0)
4 >Emitted(4, 21) Source(3, 13) + SourceIndex(0)
5 >Emitted(4, 26) Source(3, 18) + SourceIndex(0)
6 >Emitted(4, 27) Source(3, 19) + SourceIndex(0)
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
1 >Emitted(6, 5) Source(1, 1) + SourceIndex(1)
2 >Emitted(6, 11) Source(1, 7) + SourceIndex(1)
3 >Emitted(6, 12) Source(1, 8) + SourceIndex(1)
4 >Emitted(6, 18) Source(1, 14) + SourceIndex(1)
5 >Emitted(6, 19) Source(1, 15) + SourceIndex(1)
6 >Emitted(6, 24) Source(1, 20) + SourceIndex(1)
7 >Emitted(6, 25) Source(1, 21) + SourceIndex(1)
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
1 >Emitted(9, 5) Source(1, 1) + SourceIndex(2)
2 >Emitted(9, 11) Source(1, 7) + SourceIndex(2)
3 >Emitted(9, 12) Source(1, 8) + SourceIndex(2)
4 >Emitted(9, 18) Source(1, 14) + SourceIndex(2)
5 >Emitted(9, 19) Source(1, 15) + SourceIndex(2)
6 >Emitted(9, 24) Source(1, 20) + SourceIndex(2)
7 >Emitted(9, 25) Source(1, 21) + SourceIndex(2)
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
1 >Emitted(11, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(11, 9) Source(1, 1) + SourceIndex(3)
3 >Emitted(11, 15) Source(1, 7) + SourceIndex(3)
4 >Emitted(11, 26) Source(1, 18) + SourceIndex(3)
5 >Emitted(11, 31) Source(1, 23) + SourceIndex(3)
6 >Emitted(11, 32) Source(1, 24) + SourceIndex(3)
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
1 >Emitted(13, 5) Source(1, 1) + SourceIndex(4)
2 >Emitted(13, 11) Source(1, 7) + SourceIndex(4)
3 >Emitted(13, 12) Source(1, 8) + SourceIndex(4)
4 >Emitted(13, 18) Source(1, 14) + SourceIndex(4)
5 >Emitted(13, 19) Source(1, 15) + SourceIndex(4)
6 >Emitted(13, 24) Source(1, 20) + SourceIndex(4)
7 >Emitted(13, 25) Source(1, 21) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.d.ts
sourceFile:file4.ts
-------------------------------------------------------------------
>>>}
>>>declare const file4Const: appfile4;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^
5 >                        ^^^^^^^^^^
6 >                                  ^
1 >///<reference path="./tripleRef.d.ts"/>
  >
2 >
3 >        const 
4 >              file4Const
5 >                         = new appfile4()
6 >                                  ;
1 >Emitted(15, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(15, 9) Source(2, 1) + SourceIndex(5)
3 >Emitted(15, 15) Source(2, 7) + SourceIndex(5)
4 >Emitted(15, 25) Source(2, 17) + SourceIndex(5)
5 >Emitted(15, 35) Source(2, 34) + SourceIndex(5)
6 >Emitted(15, 36) Source(2, 35) + SourceIndex(5)
---
>>>declare const myVar = 30;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^
5 >                   ^^^^^
6 >                        ^
7 >                         ^^^^^^^^^^->
1 >
  >
2 >
3 >        const 
4 >              myVar
5 >                    = 30
6 >                        ;
1 >Emitted(16, 1) Source(3, 1) + SourceIndex(5)
2 >Emitted(16, 9) Source(3, 1) + SourceIndex(5)
3 >Emitted(16, 15) Source(3, 7) + SourceIndex(5)
4 >Emitted(16, 20) Source(3, 12) + SourceIndex(5)
5 >Emitted(16, 25) Source(3, 17) + SourceIndex(5)
6 >Emitted(16, 26) Source(3, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.d.ts.map

//// [/src/app/module.js]
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
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
///<reference path="./tripleRef.d.ts"/>
var file4Const = new appfile4();
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,KAAK,GAAG,EAAE,CAAC"}

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
>>>///<reference path="./tripleRef.d.ts"/>
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >///<reference path="./tripleRef.d.ts"/>
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 40) Source(1, 40) + SourceIndex(0)
---
>>>var file0Const = new libfile0();
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^
5 >                 ^^^^
6 >                     ^^^^^^^^
7 >                             ^^
8 >                               ^
1 >
  >
2 >const 
3 >    file0Const
4 >               = 
5 >                 new 
6 >                     libfile0
7 >                             ()
8 >                               ;
1 >Emitted(2, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(2, 15) Source(2, 17) + SourceIndex(0)
4 >Emitted(2, 18) Source(2, 20) + SourceIndex(0)
5 >Emitted(2, 22) Source(2, 24) + SourceIndex(0)
6 >Emitted(2, 30) Source(2, 32) + SourceIndex(0)
7 >Emitted(2, 32) Source(2, 34) + SourceIndex(0)
8 >Emitted(2, 33) Source(2, 35) + SourceIndex(0)
---
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(3, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(3, 7) + SourceIndex(0)
3 >Emitted(3, 11) Source(3, 13) + SourceIndex(0)
4 >Emitted(3, 14) Source(3, 16) + SourceIndex(0)
5 >Emitted(3, 16) Source(3, 18) + SourceIndex(0)
6 >Emitted(3, 17) Source(3, 19) + SourceIndex(0)
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
1->Emitted(8, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(8, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(8, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(8, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(8, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(8, 20) Source(1, 21) + SourceIndex(1)
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
1 >Emitted(14, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(14, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(14, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(14, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(14, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(14, 20) Source(1, 21) + SourceIndex(2)
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
1 >Emitted(16, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(16, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(16, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(16, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(16, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(16, 22) Source(1, 24) + SourceIndex(3)
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
1->Emitted(21, 5) Source(1, 14) + SourceIndex(4)
2 >Emitted(21, 13) Source(1, 14) + SourceIndex(4)
3 >Emitted(21, 14) Source(1, 15) + SourceIndex(4)
4 >Emitted(21, 17) Source(1, 18) + SourceIndex(4)
5 >Emitted(21, 19) Source(1, 20) + SourceIndex(4)
6 >Emitted(21, 20) Source(1, 21) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>});
>>>///<reference path="./tripleRef.d.ts"/>
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >///<reference path="./tripleRef.d.ts"/>
1 >Emitted(23, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(23, 40) Source(1, 40) + SourceIndex(5)
---
>>>var file4Const = new appfile4();
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^
5 >                 ^^^^
6 >                     ^^^^^^^^
7 >                             ^^
8 >                               ^
1 >
  >
2 >const 
3 >    file4Const
4 >               = 
5 >                 new 
6 >                     appfile4
7 >                             ()
8 >                               ;
1 >Emitted(24, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(24, 5) Source(2, 7) + SourceIndex(5)
3 >Emitted(24, 15) Source(2, 17) + SourceIndex(5)
4 >Emitted(24, 18) Source(2, 20) + SourceIndex(5)
5 >Emitted(24, 22) Source(2, 24) + SourceIndex(5)
6 >Emitted(24, 30) Source(2, 32) + SourceIndex(5)
7 >Emitted(24, 32) Source(2, 34) + SourceIndex(5)
8 >Emitted(24, 33) Source(2, 35) + SourceIndex(5)
---
>>>var myVar = 30;
1 >
2 >^^^^
3 >    ^^^^^
4 >         ^^^
5 >            ^^
6 >              ^
7 >               ^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(25, 1) Source(3, 1) + SourceIndex(5)
2 >Emitted(25, 5) Source(3, 7) + SourceIndex(5)
3 >Emitted(25, 10) Source(3, 12) + SourceIndex(5)
4 >Emitted(25, 13) Source(3, 15) + SourceIndex(5)
5 >Emitted(25, 15) Source(3, 17) + SourceIndex(5)
6 >Emitted(25, 16) Source(3, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file3.ts","./file4.ts"],"js":{"sections":[{"pos":0,"end":534,"kind":"prepend","data":"../lib/module.js","texts":[{"pos":0,"end":534,"kind":"text"}]},{"pos":534,"end":835,"kind":"text"}],"mapHash":"-46462971872-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,KAAK,GAAG,EAAE,CAAC\"}","hash":"-27448163087-///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file0Const = new libfile0();\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\n///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file4Const = new appfile4();\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":39,"kind":"reference","data":"tripleRef.d.ts"},{"pos":41,"end":87,"kind":"reference","data":"../lib/tripleRef.d.ts"},{"pos":89,"end":297,"kind":"prepend","data":"../lib/module.d.ts","texts":[{"pos":89,"end":297,"kind":"text"}]},{"pos":297,"end":416,"kind":"text"}],"mapHash":"-41692709617-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\";;AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACCpB,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,KAAK,KAAK,CAAC\"}","hash":"-15518908315-/// <reference path=\"tripleRef.d.ts\" />\r\n/// <reference path=\"../lib/tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const file4Const: appfile4;\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file3.ts","./file4.ts","./tripleref.d.ts"],"fileInfos":["-2588783191-export const z = 30;\r\nimport { x } from \"file1\";","15433167512-///<reference path=\"./tripleRef.d.ts\"/>\nconst file4Const = new appfile4();\nconst myVar = 30;","-3347356200-declare class appfile4 { }"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"-8754271874-/// <reference path=\"tripleRef.d.ts\" />\r\n/// <reference path=\"../lib/tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const file4Const: appfile4;\r\ndeclare const myVar = 30;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prepend: (0-534):: ../lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (0-534)
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
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
text: (534-835)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
///<reference path="./tripleRef.d.ts"/>
var file4Const = new appfile4();
var myVar = 30;

======================================================================
======================================================================
File:: /src/app/module.d.ts
----------------------------------------------------------------------
reference: (0-39):: tripleRef.d.ts
/// <reference path="tripleRef.d.ts" />
----------------------------------------------------------------------
reference: (41-87):: ../lib/tripleRef.d.ts
/// <reference path="../lib/tripleRef.d.ts" />
----------------------------------------------------------------------
prepend: (89-297):: ../lib/module.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (89-297)
declare const file0Const: libfile0;
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

----------------------------------------------------------------------
text: (297-416)
declare module "file3" {
    export const z = 30;
}
declare const file4Const: appfile4;
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
          "end": 534,
          "kind": "prepend",
          "data": "../lib/module.js",
          "texts": [
            {
              "pos": 0,
              "end": 534,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 534,
          "end": 835,
          "kind": "text"
        }
      ],
      "hash": "-27448163087-///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file0Const = new libfile0();\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\n///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file4Const = new appfile4();\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "-46462971872-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,KAAK,GAAG,EAAE,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 39,
          "kind": "reference",
          "data": "tripleRef.d.ts"
        },
        {
          "pos": 41,
          "end": 87,
          "kind": "reference",
          "data": "../lib/tripleRef.d.ts"
        },
        {
          "pos": 89,
          "end": 297,
          "kind": "prepend",
          "data": "../lib/module.d.ts",
          "texts": [
            {
              "pos": 89,
              "end": 297,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 297,
          "end": 416,
          "kind": "text"
        }
      ],
      "hash": "-15518908315-/// <reference path=\"tripleRef.d.ts\" />\r\n/// <reference path=\"../lib/tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const file4Const: appfile4;\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map",
      "mapHash": "-41692709617-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\";;AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACCpB,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,KAAK,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file3.ts",
      "./file4.ts",
      "./tripleref.d.ts"
    ],
    "fileInfos": {
      "./file3.ts": "-2588783191-export const z = 30;\r\nimport { x } from \"file1\";",
      "./file4.ts": "15433167512-///<reference path=\"./tripleRef.d.ts\"/>\nconst file4Const = new appfile4();\nconst myVar = 30;",
      "./tripleref.d.ts": "-3347356200-declare class appfile4 { }"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "-8754271874-/// <reference path=\"tripleRef.d.ts\" />\r\n/// <reference path=\"../lib/tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const file4Const: appfile4;\r\ndeclare const myVar = 30;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 3998
}

//// [/src/lib/module.d.ts]
/// <reference path="tripleRef.d.ts" />
declare const file0Const: libfile0;
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
{"version":3,"file":"module.d.ts","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":";AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC"}

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
>>>/// <reference path="tripleRef.d.ts" />
>>>declare const file0Const: libfile0;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^
5 >                        ^^^^^^^^^^
6 >                                  ^
1 >///<reference path="./tripleRef.d.ts"/>
  >
2 >
3 >        const 
4 >              file0Const
5 >                         = new libfile0()
6 >                                  ;
1 >Emitted(2, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 1) + SourceIndex(0)
3 >Emitted(2, 15) Source(2, 7) + SourceIndex(0)
4 >Emitted(2, 25) Source(2, 17) + SourceIndex(0)
5 >Emitted(2, 35) Source(2, 34) + SourceIndex(0)
6 >Emitted(2, 36) Source(2, 35) + SourceIndex(0)
---
>>>declare const myGlob = 20;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^
5 >                    ^^^^^
6 >                         ^
1 >
  >
2 >
3 >        const 
4 >              myGlob
5 >                     = 20
6 >                         ;
1 >Emitted(3, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(3, 9) Source(3, 1) + SourceIndex(0)
3 >Emitted(3, 15) Source(3, 7) + SourceIndex(0)
4 >Emitted(3, 21) Source(3, 13) + SourceIndex(0)
5 >Emitted(3, 26) Source(3, 18) + SourceIndex(0)
6 >Emitted(3, 27) Source(3, 19) + SourceIndex(0)
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
1 >Emitted(5, 5) Source(1, 1) + SourceIndex(1)
2 >Emitted(5, 11) Source(1, 7) + SourceIndex(1)
3 >Emitted(5, 12) Source(1, 8) + SourceIndex(1)
4 >Emitted(5, 18) Source(1, 14) + SourceIndex(1)
5 >Emitted(5, 19) Source(1, 15) + SourceIndex(1)
6 >Emitted(5, 24) Source(1, 20) + SourceIndex(1)
7 >Emitted(5, 25) Source(1, 21) + SourceIndex(1)
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
1 >Emitted(8, 5) Source(1, 1) + SourceIndex(2)
2 >Emitted(8, 11) Source(1, 7) + SourceIndex(2)
3 >Emitted(8, 12) Source(1, 8) + SourceIndex(2)
4 >Emitted(8, 18) Source(1, 14) + SourceIndex(2)
5 >Emitted(8, 19) Source(1, 15) + SourceIndex(2)
6 >Emitted(8, 24) Source(1, 20) + SourceIndex(2)
7 >Emitted(8, 25) Source(1, 21) + SourceIndex(2)
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
1 >Emitted(10, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(10, 9) Source(1, 1) + SourceIndex(3)
3 >Emitted(10, 15) Source(1, 7) + SourceIndex(3)
4 >Emitted(10, 26) Source(1, 18) + SourceIndex(3)
5 >Emitted(10, 31) Source(1, 23) + SourceIndex(3)
6 >Emitted(10, 32) Source(1, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.d.ts.map

//// [/src/lib/module.js]
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
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
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

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
>>>///<reference path="./tripleRef.d.ts"/>
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >///<reference path="./tripleRef.d.ts"/>
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 40) Source(1, 40) + SourceIndex(0)
---
>>>var file0Const = new libfile0();
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^
5 >                 ^^^^
6 >                     ^^^^^^^^
7 >                             ^^
8 >                               ^
1 >
  >
2 >const 
3 >    file0Const
4 >               = 
5 >                 new 
6 >                     libfile0
7 >                             ()
8 >                               ;
1 >Emitted(2, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(2, 15) Source(2, 17) + SourceIndex(0)
4 >Emitted(2, 18) Source(2, 20) + SourceIndex(0)
5 >Emitted(2, 22) Source(2, 24) + SourceIndex(0)
6 >Emitted(2, 30) Source(2, 32) + SourceIndex(0)
7 >Emitted(2, 32) Source(2, 34) + SourceIndex(0)
8 >Emitted(2, 33) Source(2, 35) + SourceIndex(0)
---
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(3, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(3, 7) + SourceIndex(0)
3 >Emitted(3, 11) Source(3, 13) + SourceIndex(0)
4 >Emitted(3, 14) Source(3, 16) + SourceIndex(0)
5 >Emitted(3, 16) Source(3, 18) + SourceIndex(0)
6 >Emitted(3, 17) Source(3, 19) + SourceIndex(0)
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
1->Emitted(8, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(8, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(8, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(8, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(8, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(8, 20) Source(1, 21) + SourceIndex(1)
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
1 >Emitted(14, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(14, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(14, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(14, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(14, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(14, 20) Source(1, 21) + SourceIndex(2)
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
1 >Emitted(16, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(16, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(16, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(16, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(16, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(16, 22) Source(1, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"js":{"sections":[{"pos":0,"end":534,"kind":"text"}],"mapHash":"31519598606-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}","hash":"-20825957251-///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file0Const = new libfile0();\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":39,"kind":"reference","data":"tripleRef.d.ts"},{"pos":41,"end":249,"kind":"text"}],"mapHash":"9669155184-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\";AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}","hash":"31314402083-/// <reference path=\"tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file0.ts","./file1.ts","./file2.ts","./global.ts","./tripleref.d.ts"],"fileInfos":["11210734432-///<reference path=\"./tripleRef.d.ts\"/>\nconst file0Const = new libfile0();\nconst myGlob = 20;","-10726455937-export const x = 10;","-13729954175-export const y = 20;","1028229885-const globalConst = 10;","-2339691926-declare class libfile0 { }"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"31940992316-/// <reference path=\"tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
text: (0-534)
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
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
reference: (0-39):: tripleRef.d.ts
/// <reference path="tripleRef.d.ts" />
----------------------------------------------------------------------
text: (41-249)
declare const file0Const: libfile0;
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
          "end": 534,
          "kind": "text"
        }
      ],
      "hash": "-20825957251-///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file0Const = new libfile0();\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "31519598606-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;;;ICAP,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 39,
          "kind": "reference",
          "data": "tripleRef.d.ts"
        },
        {
          "pos": 41,
          "end": 249,
          "kind": "text"
        }
      ],
      "hash": "31314402083-/// <reference path=\"tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map",
      "mapHash": "9669155184-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\";AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file0.ts",
      "./file1.ts",
      "./file2.ts",
      "./global.ts",
      "./tripleref.d.ts"
    ],
    "fileInfos": {
      "./file0.ts": "11210734432-///<reference path=\"./tripleRef.d.ts\"/>\nconst file0Const = new libfile0();\nconst myGlob = 20;",
      "./file1.ts": "-10726455937-export const x = 10;",
      "./file2.ts": "-13729954175-export const y = 20;",
      "./global.ts": "1028229885-const globalConst = 10;",
      "./tripleref.d.ts": "-2339691926-declare class libfile0 { }"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "31940992316-/// <reference path=\"tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2773
}



Change:: incremental-declaration-doesnt-change
Input::
//// [/src/lib/file1.ts]
export const x = 10;console.log(x);



Output::
/lib/tsc --b /src/app --verbose
[[90m12:00:36 AM[0m] Projects in this build: 
    * src/lib/tsconfig.json
    * src/app/tsconfig.json

[[90m12:00:37 AM[0m] Project 'src/lib/tsconfig.json' is out of date because output 'src/lib/module.tsbuildinfo' is older than input 'src/lib/file1.ts'

[[90m12:00:38 AM[0m] Building project '/src/lib/tsconfig.json'...

[[90m12:00:46 AM[0m] Project 'src/app/tsconfig.json' is out of date because output of its dependency 'src/lib' has changed

[[90m12:00:47 AM[0m] Updating output of project '/src/app/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/app/module.js]
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
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
///<reference path="./tripleRef.d.ts"/>
var file4Const = new appfile4();
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,KAAK,GAAG,EAAE,CAAC"}

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
>>>///<reference path="./tripleRef.d.ts"/>
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >///<reference path="./tripleRef.d.ts"/>
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 40) Source(1, 40) + SourceIndex(0)
---
>>>var file0Const = new libfile0();
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^
5 >                 ^^^^
6 >                     ^^^^^^^^
7 >                             ^^
8 >                               ^
1 >
  >
2 >const 
3 >    file0Const
4 >               = 
5 >                 new 
6 >                     libfile0
7 >                             ()
8 >                               ;
1 >Emitted(2, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(2, 15) Source(2, 17) + SourceIndex(0)
4 >Emitted(2, 18) Source(2, 20) + SourceIndex(0)
5 >Emitted(2, 22) Source(2, 24) + SourceIndex(0)
6 >Emitted(2, 30) Source(2, 32) + SourceIndex(0)
7 >Emitted(2, 32) Source(2, 34) + SourceIndex(0)
8 >Emitted(2, 33) Source(2, 35) + SourceIndex(0)
---
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(3, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(3, 7) + SourceIndex(0)
3 >Emitted(3, 11) Source(3, 13) + SourceIndex(0)
4 >Emitted(3, 14) Source(3, 16) + SourceIndex(0)
5 >Emitted(3, 16) Source(3, 18) + SourceIndex(0)
6 >Emitted(3, 17) Source(3, 19) + SourceIndex(0)
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
1->Emitted(8, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(8, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(8, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(8, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(8, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(8, 20) Source(1, 21) + SourceIndex(1)
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
1->Emitted(9, 5) Source(1, 21) + SourceIndex(1)
2 >Emitted(9, 12) Source(1, 28) + SourceIndex(1)
3 >Emitted(9, 13) Source(1, 29) + SourceIndex(1)
4 >Emitted(9, 16) Source(1, 32) + SourceIndex(1)
5 >Emitted(9, 17) Source(1, 33) + SourceIndex(1)
6 >Emitted(9, 26) Source(1, 34) + SourceIndex(1)
7 >Emitted(9, 27) Source(1, 35) + SourceIndex(1)
8 >Emitted(9, 28) Source(1, 36) + SourceIndex(1)
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
1 >Emitted(15, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(15, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(15, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(15, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(15, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(15, 20) Source(1, 21) + SourceIndex(2)
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
1 >Emitted(17, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(17, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(17, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(17, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(17, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(17, 22) Source(1, 24) + SourceIndex(3)
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
1->Emitted(22, 5) Source(1, 14) + SourceIndex(4)
2 >Emitted(22, 13) Source(1, 14) + SourceIndex(4)
3 >Emitted(22, 14) Source(1, 15) + SourceIndex(4)
4 >Emitted(22, 17) Source(1, 18) + SourceIndex(4)
5 >Emitted(22, 19) Source(1, 20) + SourceIndex(4)
6 >Emitted(22, 20) Source(1, 21) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>});
>>>///<reference path="./tripleRef.d.ts"/>
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >///<reference path="./tripleRef.d.ts"/>
1 >Emitted(24, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(24, 40) Source(1, 40) + SourceIndex(5)
---
>>>var file4Const = new appfile4();
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^
5 >                 ^^^^
6 >                     ^^^^^^^^
7 >                             ^^
8 >                               ^
1 >
  >
2 >const 
3 >    file4Const
4 >               = 
5 >                 new 
6 >                     appfile4
7 >                             ()
8 >                               ;
1 >Emitted(25, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(25, 5) Source(2, 7) + SourceIndex(5)
3 >Emitted(25, 15) Source(2, 17) + SourceIndex(5)
4 >Emitted(25, 18) Source(2, 20) + SourceIndex(5)
5 >Emitted(25, 22) Source(2, 24) + SourceIndex(5)
6 >Emitted(25, 30) Source(2, 32) + SourceIndex(5)
7 >Emitted(25, 32) Source(2, 34) + SourceIndex(5)
8 >Emitted(25, 33) Source(2, 35) + SourceIndex(5)
---
>>>var myVar = 30;
1 >
2 >^^^^
3 >    ^^^^^
4 >         ^^^
5 >            ^^
6 >              ^
7 >               ^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(26, 1) Source(3, 1) + SourceIndex(5)
2 >Emitted(26, 5) Source(3, 7) + SourceIndex(5)
3 >Emitted(26, 10) Source(3, 12) + SourceIndex(5)
4 >Emitted(26, 13) Source(3, 15) + SourceIndex(5)
5 >Emitted(26, 15) Source(3, 17) + SourceIndex(5)
6 >Emitted(26, 16) Source(3, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file3.ts","./file4.ts"],"js":{"sections":[{"pos":0,"end":563,"kind":"prepend","data":"../lib/module.js","texts":[{"pos":0,"end":563,"kind":"text"}]},{"pos":563,"end":864,"kind":"text"}],"mapHash":"-8132351063-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,KAAK,GAAG,EAAE,CAAC\"}","hash":"-9056748078-///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file0Const = new libfile0();\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\n///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file4Const = new appfile4();\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":39,"kind":"reference","data":"tripleRef.d.ts"},{"pos":41,"end":87,"kind":"reference","data":"../lib/tripleRef.d.ts"},{"pos":89,"end":297,"kind":"prepend","data":"../lib/module.d.ts","texts":[{"pos":89,"end":297,"kind":"text"}]},{"pos":297,"end":416,"kind":"text"}],"mapHash":"-41692709617-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\";;AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACCpB,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,KAAK,KAAK,CAAC\"}","hash":"-15518908315-/// <reference path=\"tripleRef.d.ts\" />\r\n/// <reference path=\"../lib/tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const file4Const: appfile4;\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file3.ts","./file4.ts","./tripleref.d.ts"],"fileInfos":["-2588783191-export const z = 30;\r\nimport { x } from \"file1\";","15433167512-///<reference path=\"./tripleRef.d.ts\"/>\nconst file4Const = new appfile4();\nconst myVar = 30;","-3347356200-declare class appfile4 { }"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"-8754271874-/// <reference path=\"tripleRef.d.ts\" />\r\n/// <reference path=\"../lib/tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const file4Const: appfile4;\r\ndeclare const myVar = 30;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prepend: (0-563):: ../lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (0-563)
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
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
text: (563-864)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
///<reference path="./tripleRef.d.ts"/>
var file4Const = new appfile4();
var myVar = 30;

======================================================================
======================================================================
File:: /src/app/module.d.ts
----------------------------------------------------------------------
reference: (0-39):: tripleRef.d.ts
/// <reference path="tripleRef.d.ts" />
----------------------------------------------------------------------
reference: (41-87):: ../lib/tripleRef.d.ts
/// <reference path="../lib/tripleRef.d.ts" />
----------------------------------------------------------------------
prepend: (89-297):: ../lib/module.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (89-297)
declare const file0Const: libfile0;
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

----------------------------------------------------------------------
text: (297-416)
declare module "file3" {
    export const z = 30;
}
declare const file4Const: appfile4;
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
          "end": 563,
          "kind": "prepend",
          "data": "../lib/module.js",
          "texts": [
            {
              "pos": 0,
              "end": 563,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 563,
          "end": 864,
          "kind": "text"
        }
      ],
      "hash": "-9056748078-///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file0Const = new libfile0();\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\n///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file4Const = new appfile4();\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "-8132351063-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,KAAK,GAAG,EAAE,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 39,
          "kind": "reference",
          "data": "tripleRef.d.ts"
        },
        {
          "pos": 41,
          "end": 87,
          "kind": "reference",
          "data": "../lib/tripleRef.d.ts"
        },
        {
          "pos": 89,
          "end": 297,
          "kind": "prepend",
          "data": "../lib/module.d.ts",
          "texts": [
            {
              "pos": 89,
              "end": 297,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 297,
          "end": 416,
          "kind": "text"
        }
      ],
      "hash": "-15518908315-/// <reference path=\"tripleRef.d.ts\" />\r\n/// <reference path=\"../lib/tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const file4Const: appfile4;\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map",
      "mapHash": "-41692709617-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\";;AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACCpB,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,KAAK,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file3.ts",
      "./file4.ts",
      "./tripleref.d.ts"
    ],
    "fileInfos": {
      "./file3.ts": "-2588783191-export const z = 30;\r\nimport { x } from \"file1\";",
      "./file4.ts": "15433167512-///<reference path=\"./tripleRef.d.ts\"/>\nconst file4Const = new appfile4();\nconst myVar = 30;",
      "./tripleref.d.ts": "-3347356200-declare class appfile4 { }"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "-8754271874-/// <reference path=\"tripleRef.d.ts\" />\r\n/// <reference path=\"../lib/tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const file4Const: appfile4;\r\ndeclare const myVar = 30;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 4068
}

//// [/src/lib/module.d.ts.map] file written with same contents
//// [/src/lib/module.d.ts.map.baseline.txt] file written with same contents
//// [/src/lib/module.js]
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
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
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

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
>>>///<reference path="./tripleRef.d.ts"/>
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >///<reference path="./tripleRef.d.ts"/>
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 40) Source(1, 40) + SourceIndex(0)
---
>>>var file0Const = new libfile0();
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^
5 >                 ^^^^
6 >                     ^^^^^^^^
7 >                             ^^
8 >                               ^
1 >
  >
2 >const 
3 >    file0Const
4 >               = 
5 >                 new 
6 >                     libfile0
7 >                             ()
8 >                               ;
1 >Emitted(2, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(2, 15) Source(2, 17) + SourceIndex(0)
4 >Emitted(2, 18) Source(2, 20) + SourceIndex(0)
5 >Emitted(2, 22) Source(2, 24) + SourceIndex(0)
6 >Emitted(2, 30) Source(2, 32) + SourceIndex(0)
7 >Emitted(2, 32) Source(2, 34) + SourceIndex(0)
8 >Emitted(2, 33) Source(2, 35) + SourceIndex(0)
---
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(3, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(3, 7) + SourceIndex(0)
3 >Emitted(3, 11) Source(3, 13) + SourceIndex(0)
4 >Emitted(3, 14) Source(3, 16) + SourceIndex(0)
5 >Emitted(3, 16) Source(3, 18) + SourceIndex(0)
6 >Emitted(3, 17) Source(3, 19) + SourceIndex(0)
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
1->Emitted(8, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(8, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(8, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(8, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(8, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(8, 20) Source(1, 21) + SourceIndex(1)
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
1->Emitted(9, 5) Source(1, 21) + SourceIndex(1)
2 >Emitted(9, 12) Source(1, 28) + SourceIndex(1)
3 >Emitted(9, 13) Source(1, 29) + SourceIndex(1)
4 >Emitted(9, 16) Source(1, 32) + SourceIndex(1)
5 >Emitted(9, 17) Source(1, 33) + SourceIndex(1)
6 >Emitted(9, 26) Source(1, 34) + SourceIndex(1)
7 >Emitted(9, 27) Source(1, 35) + SourceIndex(1)
8 >Emitted(9, 28) Source(1, 36) + SourceIndex(1)
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
1 >Emitted(15, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(15, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(15, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(15, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(15, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(15, 20) Source(1, 21) + SourceIndex(2)
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
1 >Emitted(17, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(17, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(17, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(17, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(17, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(17, 22) Source(1, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"js":{"sections":[{"pos":0,"end":563,"kind":"text"}],"mapHash":"25718032631-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}","hash":"-4814475330-///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file0Const = new libfile0();\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":39,"kind":"reference","data":"tripleRef.d.ts"},{"pos":41,"end":249,"kind":"text"}],"mapHash":"9669155184-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\";AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}","hash":"31314402083-/// <reference path=\"tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file0.ts","./file1.ts","./file2.ts","./global.ts","./tripleref.d.ts"],"fileInfos":["11210734432-///<reference path=\"./tripleRef.d.ts\"/>\nconst file0Const = new libfile0();\nconst myGlob = 20;","-4405159098-export const x = 10;console.log(x);","-13729954175-export const y = 20;","1028229885-const globalConst = 10;","-2339691926-declare class libfile0 { }"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"31940992316-/// <reference path=\"tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
text: (0-563)
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
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
reference: (0-39):: tripleRef.d.ts
/// <reference path="tripleRef.d.ts" />
----------------------------------------------------------------------
text: (41-249)
declare const file0Const: libfile0;
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
          "end": 563,
          "kind": "text"
        }
      ],
      "hash": "-4814475330-///<reference path=\"./tripleRef.d.ts\"/>\r\nvar file0Const = new libfile0();\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "25718032631-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 39,
          "kind": "reference",
          "data": "tripleRef.d.ts"
        },
        {
          "pos": 41,
          "end": 249,
          "kind": "text"
        }
      ],
      "hash": "31314402083-/// <reference path=\"tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map",
      "mapHash": "9669155184-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\";AACA,QAAA,MAAM,UAAU,UAAiB,CAAC;AAClC,QAAA,MAAM,MAAM,KAAK,CAAC;;ICFlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file0.ts",
      "./file1.ts",
      "./file2.ts",
      "./global.ts",
      "./tripleref.d.ts"
    ],
    "fileInfos": {
      "./file0.ts": "11210734432-///<reference path=\"./tripleRef.d.ts\"/>\nconst file0Const = new libfile0();\nconst myGlob = 20;",
      "./file1.ts": "-4405159098-export const x = 10;console.log(x);",
      "./file2.ts": "-13729954175-export const y = 20;",
      "./global.ts": "1028229885-const globalConst = 10;",
      "./tripleref.d.ts": "-2339691926-declare class libfile0 { }"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "31940992316-/// <reference path=\"tripleRef.d.ts\" />\r\ndeclare const file0Const: libfile0;\r\ndeclare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2858
}

