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
"myPrologue"
export const z = 30;
import { x } from "file1";

//// [/src/app/file4.ts]
"myPrologue2";
const myVar = 30;

//// [/src/app/tsconfig.json]
{
    "compilerOptions": {
        "target": "es5",
        "module": "amd",
        "composite": true,
        "strict": true,
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
"myPrologue"
const myGlob = 20;

//// [/src/lib/file1.ts]
export const x = 10;

//// [/src/lib/file2.ts]
"myPrologueFile"
export const y = 20;

//// [/src/lib/global.ts]
"myPrologue3"
const globalConst = 10;

//// [/src/lib/tsconfig.json]
{
    "compilerOptions": {
        "target": "es5",
        "module": "amd",
        "composite": true,
        "sourceMap": true,
        "declarationMap": true,
        "strict": true,
        "outFile": "module.js"
    },
    "exclude": ["module.d.ts"]

}



Output::
/lib/tsc --b /src/app --verbose
[[90m12:00:13 AM[0m] Projects in this build: 
    * src/lib/tsconfig.json
    * src/app/tsconfig.json

[[90m12:00:14 AM[0m] Project 'src/lib/tsconfig.json' is out of date because output file 'src/lib/module.tsbuildinfo' does not exist

[[90m12:00:15 AM[0m] Building project '/src/lib/tsconfig.json'...

[[90m12:00:24 AM[0m] Project 'src/app/tsconfig.json' is out of date because output file 'src/app/module.tsbuildinfo' does not exist

[[90m12:00:25 AM[0m] Building project '/src/app/tsconfig.json'...

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
{"version":3,"file":"module.d.ts","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC"}

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
1 >"myPrologue"
  >
2 >
3 >        const 
4 >              myGlob
5 >                     = 20
6 >                         ;
1 >Emitted(1, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(1, 9) Source(2, 1) + SourceIndex(0)
3 >Emitted(1, 15) Source(2, 7) + SourceIndex(0)
4 >Emitted(1, 21) Source(2, 13) + SourceIndex(0)
5 >Emitted(1, 26) Source(2, 18) + SourceIndex(0)
6 >Emitted(1, 27) Source(2, 19) + SourceIndex(0)
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
1 >"myPrologueFile"
  >
2 >    export
3 >           
4 >           const 
5 >                 y
6 >                   = 20
7 >                       ;
1 >Emitted(6, 5) Source(2, 1) + SourceIndex(2)
2 >Emitted(6, 11) Source(2, 7) + SourceIndex(2)
3 >Emitted(6, 12) Source(2, 8) + SourceIndex(2)
4 >Emitted(6, 18) Source(2, 14) + SourceIndex(2)
5 >Emitted(6, 19) Source(2, 15) + SourceIndex(2)
6 >Emitted(6, 24) Source(2, 20) + SourceIndex(2)
7 >Emitted(6, 25) Source(2, 21) + SourceIndex(2)
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
1 >"myPrologue3"
  >
2 >
3 >        const 
4 >              globalConst
5 >                          = 10
6 >                              ;
1 >Emitted(8, 1) Source(2, 1) + SourceIndex(3)
2 >Emitted(8, 9) Source(2, 1) + SourceIndex(3)
3 >Emitted(8, 15) Source(2, 7) + SourceIndex(3)
4 >Emitted(8, 26) Source(2, 18) + SourceIndex(3)
5 >Emitted(8, 31) Source(2, 23) + SourceIndex(3)
6 >Emitted(8, 32) Source(2, 24) + SourceIndex(3)
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
1 >"myPrologue"
  >
2 >    export
3 >           
4 >           const 
5 >                 z
6 >                   = 30
7 >                       ;
1 >Emitted(10, 5) Source(2, 1) + SourceIndex(4)
2 >Emitted(10, 11) Source(2, 7) + SourceIndex(4)
3 >Emitted(10, 12) Source(2, 8) + SourceIndex(4)
4 >Emitted(10, 18) Source(2, 14) + SourceIndex(4)
5 >Emitted(10, 19) Source(2, 15) + SourceIndex(4)
6 >Emitted(10, 24) Source(2, 20) + SourceIndex(4)
7 >Emitted(10, 25) Source(2, 21) + SourceIndex(4)
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
1 >"myPrologue2";
  >
2 >
3 >        const 
4 >              myVar
5 >                    = 30
6 >                        ;
1 >Emitted(12, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(12, 9) Source(2, 1) + SourceIndex(5)
3 >Emitted(12, 15) Source(2, 7) + SourceIndex(5)
4 >Emitted(12, 20) Source(2, 12) + SourceIndex(5)
5 >Emitted(12, 25) Source(2, 17) + SourceIndex(5)
6 >Emitted(12, 26) Source(2, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.d.ts.map

//// [/src/app/module.js]
"use strict";
"myPrologue";
"myPrologue3";
"myPrologue2";
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologueFile";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/global.ts","file4.ts","../lib/file1.ts","../lib/file2.ts","file3.ts"],"names":[],"mappings":";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ACAb,aAAa,CAAC;AFCd,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IGDL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;ICApB,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;IIDvB,YAAY,CAAA;;;IACC,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,KAAK,GAAG,EAAE,CAAC"}

//// [/src/app/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: ../lib/file0.ts,../lib/global.ts,file4.ts,../lib/file1.ts,../lib/file2.ts,file3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
2 >"myPrologue"
3 >            
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 13) Source(1, 13) + SourceIndex(0)
3 >Emitted(2, 14) Source(1, 13) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/global.ts
-------------------------------------------------------------------
>>>"myPrologue3";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^->
1->
2 >"myPrologue3"
3 >             
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(3, 15) Source(1, 14) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>"myPrologue2";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^->
1->
2 >"myPrologue2"
3 >             ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(4, 14) Source(1, 14) + SourceIndex(2)
3 >Emitted(4, 15) Source(1, 15) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1->
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->"myPrologue"
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1->Emitted(5, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(5, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(5, 11) Source(2, 13) + SourceIndex(0)
4 >Emitted(5, 14) Source(2, 16) + SourceIndex(0)
5 >Emitted(5, 16) Source(2, 18) + SourceIndex(0)
6 >Emitted(5, 17) Source(2, 19) + SourceIndex(0)
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
1->Emitted(10, 5) Source(1, 14) + SourceIndex(3)
2 >Emitted(10, 13) Source(1, 14) + SourceIndex(3)
3 >Emitted(10, 14) Source(1, 15) + SourceIndex(3)
4 >Emitted(10, 17) Source(1, 18) + SourceIndex(3)
5 >Emitted(10, 19) Source(1, 20) + SourceIndex(3)
6 >Emitted(10, 20) Source(1, 21) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologueFile";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^
3 >                    ^
4 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    "myPrologueFile"
3 >                    
1 >Emitted(14, 5) Source(1, 1) + SourceIndex(4)
2 >Emitted(14, 21) Source(1, 17) + SourceIndex(4)
3 >Emitted(14, 22) Source(1, 17) + SourceIndex(4)
---
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->
  >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1->Emitted(17, 5) Source(2, 14) + SourceIndex(4)
2 >Emitted(17, 13) Source(2, 14) + SourceIndex(4)
3 >Emitted(17, 14) Source(2, 15) + SourceIndex(4)
4 >Emitted(17, 17) Source(2, 18) + SourceIndex(4)
5 >Emitted(17, 19) Source(2, 20) + SourceIndex(4)
6 >Emitted(17, 20) Source(2, 21) + SourceIndex(4)
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
1 >"myPrologue3"
  >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(19, 1) Source(2, 1) + SourceIndex(1)
2 >Emitted(19, 5) Source(2, 7) + SourceIndex(1)
3 >Emitted(19, 16) Source(2, 18) + SourceIndex(1)
4 >Emitted(19, 19) Source(2, 21) + SourceIndex(1)
5 >Emitted(19, 21) Source(2, 23) + SourceIndex(1)
6 >Emitted(19, 22) Source(2, 24) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file3.ts
-------------------------------------------------------------------
>>>define("file3", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologue";
1->^^^^
2 >    ^^^^^^^^^^^^
3 >                ^
4 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    "myPrologue"
3 >                
1->Emitted(22, 5) Source(1, 1) + SourceIndex(5)
2 >Emitted(22, 17) Source(1, 13) + SourceIndex(5)
3 >Emitted(22, 18) Source(1, 13) + SourceIndex(5)
---
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.z = void 0;
>>>    exports.z = 30;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->
  >export const 
2 >    
3 >            z
4 >              = 
5 >                30
6 >                  ;
1->Emitted(25, 5) Source(2, 14) + SourceIndex(5)
2 >Emitted(25, 13) Source(2, 14) + SourceIndex(5)
3 >Emitted(25, 14) Source(2, 15) + SourceIndex(5)
4 >Emitted(25, 17) Source(2, 18) + SourceIndex(5)
5 >Emitted(25, 19) Source(2, 20) + SourceIndex(5)
6 >Emitted(25, 20) Source(2, 21) + SourceIndex(5)
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
1 >"myPrologue2";
  >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(27, 1) Source(2, 1) + SourceIndex(2)
2 >Emitted(27, 5) Source(2, 7) + SourceIndex(2)
3 >Emitted(27, 10) Source(2, 12) + SourceIndex(2)
4 >Emitted(27, 13) Source(2, 15) + SourceIndex(2)
5 >Emitted(27, 15) Source(2, 17) + SourceIndex(2)
6 >Emitted(27, 16) Source(2, 18) + SourceIndex(2)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file3.ts","./file4.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":28,"kind":"prologue","data":"myPrologue"},{"pos":30,"end":44,"kind":"prologue","data":"myPrologue3"},{"pos":46,"end":60,"kind":"prologue","data":"myPrologue2"},{"pos":62,"end":544,"kind":"prepend","data":"../lib/module.js","texts":[{"pos":62,"end":544,"kind":"text"}]},{"pos":544,"end":789,"kind":"text"}],"sources":{"prologues":[{"file":1,"text":"\"myPrologue2\";","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}},{"pos":0,"end":14,"expression":{"pos":0,"end":13,"text":"myPrologue2"}}]}]},"mapHash":"43697297756-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/global.ts\",\"file4.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"file3.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ACAb,aAAa,CAAC;AFCd,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IGDL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;ICApB,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;IIDvB,YAAY,CAAA;;;IACC,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}","hash":"10364809621-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\n\"myPrologue2\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":171,"kind":"prepend","data":"../lib/module.d.ts","texts":[{"pos":0,"end":171,"kind":"text"}]},{"pos":171,"end":253,"kind":"text"}],"mapHash":"-26680300331-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}","hash":"-2339330908-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file3.ts","./file4.ts"],"fileInfos":["14566593738-\"myPrologue\"\nexport const z = 30;\r\nimport { x } from \"file1\";","8812798660-\"myPrologue2\";\nconst myVar = 30;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-28):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (30-44):: myPrologue3
"myPrologue3";
----------------------------------------------------------------------
prologue: (46-60):: myPrologue2
"myPrologue2";
----------------------------------------------------------------------
prepend: (62-544):: ../lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (62-544)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologueFile";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;

----------------------------------------------------------------------
text: (544-789)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue";
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 28,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 30,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue3"
        },
        {
          "pos": 46,
          "end": 60,
          "kind": "prologue",
          "data": "myPrologue2"
        },
        {
          "pos": 62,
          "end": 544,
          "kind": "prepend",
          "data": "../lib/module.js",
          "texts": [
            {
              "pos": 62,
              "end": 544,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 544,
          "end": 789,
          "kind": "text"
        }
      ],
      "hash": "10364809621-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\n\"myPrologue2\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "43697297756-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/global.ts\",\"file4.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"file3.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ACAb,aAAa,CAAC;AFCd,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IGDL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;ICApB,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;IIDvB,YAAY,CAAA;;;IACC,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 1,
            "text": "\"myPrologue2\";",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              },
              {
                "pos": 0,
                "end": 14,
                "expression": {
                  "pos": 0,
                  "end": 13,
                  "text": "myPrologue2"
                }
              }
            ]
          }
        ]
      }
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
      "mapHash": "-26680300331-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file3.ts",
      "./file4.ts"
    ],
    "fileInfos": {
      "./file3.ts": "14566593738-\"myPrologue\"\nexport const z = 30;\r\nimport { x } from \"file1\";",
      "./file4.ts": "8812798660-\"myPrologue2\";\nconst myVar = 30;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 3735
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
{"version":3,"file":"module.d.ts","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC"}

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
1 >"myPrologue"
  >
2 >
3 >        const 
4 >              myGlob
5 >                     = 20
6 >                         ;
1 >Emitted(1, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(1, 9) Source(2, 1) + SourceIndex(0)
3 >Emitted(1, 15) Source(2, 7) + SourceIndex(0)
4 >Emitted(1, 21) Source(2, 13) + SourceIndex(0)
5 >Emitted(1, 26) Source(2, 18) + SourceIndex(0)
6 >Emitted(1, 27) Source(2, 19) + SourceIndex(0)
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
1 >"myPrologueFile"
  >
2 >    export
3 >           
4 >           const 
5 >                 y
6 >                   = 20
7 >                       ;
1 >Emitted(6, 5) Source(2, 1) + SourceIndex(2)
2 >Emitted(6, 11) Source(2, 7) + SourceIndex(2)
3 >Emitted(6, 12) Source(2, 8) + SourceIndex(2)
4 >Emitted(6, 18) Source(2, 14) + SourceIndex(2)
5 >Emitted(6, 19) Source(2, 15) + SourceIndex(2)
6 >Emitted(6, 24) Source(2, 20) + SourceIndex(2)
7 >Emitted(6, 25) Source(2, 21) + SourceIndex(2)
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
1 >"myPrologue3"
  >
2 >
3 >        const 
4 >              globalConst
5 >                          = 10
6 >                              ;
1 >Emitted(8, 1) Source(2, 1) + SourceIndex(3)
2 >Emitted(8, 9) Source(2, 1) + SourceIndex(3)
3 >Emitted(8, 15) Source(2, 7) + SourceIndex(3)
4 >Emitted(8, 26) Source(2, 18) + SourceIndex(3)
5 >Emitted(8, 31) Source(2, 23) + SourceIndex(3)
6 >Emitted(8, 32) Source(2, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.d.ts.map

//// [/src/lib/module.js]
"use strict";
"myPrologue";
"myPrologue3";
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologueFile";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
//# sourceMappingURL=module.js.map

//// [/src/lib/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","global.ts","file1.ts","file2.ts"],"names":[],"mappings":";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ADCb,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IEDL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;ICApB,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AFApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

//// [/src/lib/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: file0.ts,global.ts,file1.ts,file2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
2 >"myPrologue"
3 >            
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 13) Source(1, 13) + SourceIndex(0)
3 >Emitted(2, 14) Source(1, 13) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:global.ts
-------------------------------------------------------------------
>>>"myPrologue3";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^->
1->
2 >"myPrologue3"
3 >             
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(3, 15) Source(1, 14) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1->
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->"myPrologue"
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1->Emitted(4, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(4, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(4, 11) Source(2, 13) + SourceIndex(0)
4 >Emitted(4, 14) Source(2, 16) + SourceIndex(0)
5 >Emitted(4, 16) Source(2, 18) + SourceIndex(0)
6 >Emitted(4, 17) Source(2, 19) + SourceIndex(0)
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
1->Emitted(9, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(9, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(9, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(9, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(9, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(9, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologueFile";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^
3 >                    ^
4 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    "myPrologueFile"
3 >                    
1 >Emitted(13, 5) Source(1, 1) + SourceIndex(3)
2 >Emitted(13, 21) Source(1, 17) + SourceIndex(3)
3 >Emitted(13, 22) Source(1, 17) + SourceIndex(3)
---
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->
  >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1->Emitted(16, 5) Source(2, 14) + SourceIndex(3)
2 >Emitted(16, 13) Source(2, 14) + SourceIndex(3)
3 >Emitted(16, 14) Source(2, 15) + SourceIndex(3)
4 >Emitted(16, 17) Source(2, 18) + SourceIndex(3)
5 >Emitted(16, 19) Source(2, 20) + SourceIndex(3)
6 >Emitted(16, 20) Source(2, 21) + SourceIndex(3)
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
1 >"myPrologue3"
  >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(18, 1) Source(2, 1) + SourceIndex(1)
2 >Emitted(18, 5) Source(2, 7) + SourceIndex(1)
3 >Emitted(18, 16) Source(2, 18) + SourceIndex(1)
4 >Emitted(18, 19) Source(2, 21) + SourceIndex(1)
5 >Emitted(18, 21) Source(2, 23) + SourceIndex(1)
6 >Emitted(18, 22) Source(2, 24) + SourceIndex(1)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":28,"kind":"prologue","data":"myPrologue"},{"pos":30,"end":44,"kind":"prologue","data":"myPrologue3"},{"pos":46,"end":528,"kind":"text"}],"sources":{"prologues":[{"file":0,"text":"\"myPrologue\"","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}},{"pos":0,"end":12,"expression":{"pos":0,"end":12,"text":"myPrologue"}}]},{"file":3,"text":"\"myPrologue3\"","directives":[{"pos":0,"end":13,"expression":{"pos":0,"end":13,"text":"myPrologue3"}}]}]},"mapHash":"10375222825-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"global.ts\",\"file1.ts\",\"file2.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ADCb,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IEDL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;ICApB,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AFApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}","hash":"574486843-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":171,"kind":"text"}],"mapHash":"-38214306044-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}","hash":"10884851940-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"fileInfos":["9536729713-\"myPrologue\"\nconst myGlob = 20;","-10726455937-export const x = 10;","16047001250-\"myPrologueFile\"\nexport const y = 20;","7757520337-\"myPrologue3\"\nconst globalConst = 10;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-28):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (30-44):: myPrologue3
"myPrologue3";
----------------------------------------------------------------------
text: (46-528)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologueFile";
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 28,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 30,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue3"
        },
        {
          "pos": 46,
          "end": 528,
          "kind": "text"
        }
      ],
      "hash": "574486843-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "10375222825-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"global.ts\",\"file1.ts\",\"file2.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ADCb,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IEDL,QAAA,CAAC,GAAG,EAAE,CAAC;;;;ICApB,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AFApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "\"myPrologue\"",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              },
              {
                "pos": 0,
                "end": 12,
                "expression": {
                  "pos": 0,
                  "end": 12,
                  "text": "myPrologue"
                }
              }
            ]
          },
          {
            "file": 3,
            "text": "\"myPrologue3\"",
            "directives": [
              {
                "pos": 0,
                "end": 13,
                "expression": {
                  "pos": 0,
                  "end": 13,
                  "text": "myPrologue3"
                }
              }
            ]
          }
        ]
      }
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
      "mapHash": "-38214306044-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}"
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
      "./file0.ts": "9536729713-\"myPrologue\"\nconst myGlob = 20;",
      "./file1.ts": "-10726455937-export const x = 10;",
      "./file2.ts": "16047001250-\"myPrologueFile\"\nexport const y = 20;",
      "./global.ts": "7757520337-\"myPrologue3\"\nconst globalConst = 10;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2937
}



Change:: incremental-declaration-doesnt-change
Input::
//// [/src/lib/file1.ts]
export const x = 10;console.log(x);



Output::
/lib/tsc --b /src/app --verbose
[[90m12:00:39 AM[0m] Projects in this build: 
    * src/lib/tsconfig.json
    * src/app/tsconfig.json

[[90m12:00:40 AM[0m] Project 'src/lib/tsconfig.json' is out of date because output 'src/lib/module.tsbuildinfo' is older than input 'src/lib/file1.ts'

[[90m12:00:41 AM[0m] Building project '/src/lib/tsconfig.json'...

[[90m12:00:49 AM[0m] Project 'src/app/tsconfig.json' is out of date because output of its dependency 'src/lib' has changed

[[90m12:00:50 AM[0m] Updating output of project '/src/app/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/app/module.js]
"use strict";
"myPrologue";
"myPrologue3";
"myPrologue2";
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
    "myPrologueFile";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/global.ts","file4.ts","../lib/file1.ts","../lib/file2.ts","file3.ts"],"names":[],"mappings":";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ACAb,aAAa,CAAC;AFCd,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IGDL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICAnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;IIDvB,YAAY,CAAA;;;IACC,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,KAAK,GAAG,EAAE,CAAC"}

//// [/src/app/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: ../lib/file0.ts,../lib/global.ts,file4.ts,../lib/file1.ts,../lib/file2.ts,file3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
2 >"myPrologue"
3 >            
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 13) Source(1, 13) + SourceIndex(0)
3 >Emitted(2, 14) Source(1, 13) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/global.ts
-------------------------------------------------------------------
>>>"myPrologue3";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^->
1->
2 >"myPrologue3"
3 >             
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(3, 15) Source(1, 14) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>"myPrologue2";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^->
1->
2 >"myPrologue2"
3 >             ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(4, 14) Source(1, 14) + SourceIndex(2)
3 >Emitted(4, 15) Source(1, 15) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1->
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->"myPrologue"
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1->Emitted(5, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(5, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(5, 11) Source(2, 13) + SourceIndex(0)
4 >Emitted(5, 14) Source(2, 16) + SourceIndex(0)
5 >Emitted(5, 16) Source(2, 18) + SourceIndex(0)
6 >Emitted(5, 17) Source(2, 19) + SourceIndex(0)
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
1->Emitted(10, 5) Source(1, 14) + SourceIndex(3)
2 >Emitted(10, 13) Source(1, 14) + SourceIndex(3)
3 >Emitted(10, 14) Source(1, 15) + SourceIndex(3)
4 >Emitted(10, 17) Source(1, 18) + SourceIndex(3)
5 >Emitted(10, 19) Source(1, 20) + SourceIndex(3)
6 >Emitted(10, 20) Source(1, 21) + SourceIndex(3)
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
1->Emitted(11, 5) Source(1, 21) + SourceIndex(3)
2 >Emitted(11, 12) Source(1, 28) + SourceIndex(3)
3 >Emitted(11, 13) Source(1, 29) + SourceIndex(3)
4 >Emitted(11, 16) Source(1, 32) + SourceIndex(3)
5 >Emitted(11, 17) Source(1, 33) + SourceIndex(3)
6 >Emitted(11, 26) Source(1, 34) + SourceIndex(3)
7 >Emitted(11, 27) Source(1, 35) + SourceIndex(3)
8 >Emitted(11, 28) Source(1, 36) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologueFile";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^
3 >                    ^
4 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    "myPrologueFile"
3 >                    
1 >Emitted(15, 5) Source(1, 1) + SourceIndex(4)
2 >Emitted(15, 21) Source(1, 17) + SourceIndex(4)
3 >Emitted(15, 22) Source(1, 17) + SourceIndex(4)
---
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->
  >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1->Emitted(18, 5) Source(2, 14) + SourceIndex(4)
2 >Emitted(18, 13) Source(2, 14) + SourceIndex(4)
3 >Emitted(18, 14) Source(2, 15) + SourceIndex(4)
4 >Emitted(18, 17) Source(2, 18) + SourceIndex(4)
5 >Emitted(18, 19) Source(2, 20) + SourceIndex(4)
6 >Emitted(18, 20) Source(2, 21) + SourceIndex(4)
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
1 >"myPrologue3"
  >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(20, 1) Source(2, 1) + SourceIndex(1)
2 >Emitted(20, 5) Source(2, 7) + SourceIndex(1)
3 >Emitted(20, 16) Source(2, 18) + SourceIndex(1)
4 >Emitted(20, 19) Source(2, 21) + SourceIndex(1)
5 >Emitted(20, 21) Source(2, 23) + SourceIndex(1)
6 >Emitted(20, 22) Source(2, 24) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file3.ts
-------------------------------------------------------------------
>>>define("file3", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologue";
1->^^^^
2 >    ^^^^^^^^^^^^
3 >                ^
4 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    "myPrologue"
3 >                
1->Emitted(23, 5) Source(1, 1) + SourceIndex(5)
2 >Emitted(23, 17) Source(1, 13) + SourceIndex(5)
3 >Emitted(23, 18) Source(1, 13) + SourceIndex(5)
---
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.z = void 0;
>>>    exports.z = 30;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->
  >export const 
2 >    
3 >            z
4 >              = 
5 >                30
6 >                  ;
1->Emitted(26, 5) Source(2, 14) + SourceIndex(5)
2 >Emitted(26, 13) Source(2, 14) + SourceIndex(5)
3 >Emitted(26, 14) Source(2, 15) + SourceIndex(5)
4 >Emitted(26, 17) Source(2, 18) + SourceIndex(5)
5 >Emitted(26, 19) Source(2, 20) + SourceIndex(5)
6 >Emitted(26, 20) Source(2, 21) + SourceIndex(5)
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
1 >"myPrologue2";
  >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(28, 1) Source(2, 1) + SourceIndex(2)
2 >Emitted(28, 5) Source(2, 7) + SourceIndex(2)
3 >Emitted(28, 10) Source(2, 12) + SourceIndex(2)
4 >Emitted(28, 13) Source(2, 15) + SourceIndex(2)
5 >Emitted(28, 15) Source(2, 17) + SourceIndex(2)
6 >Emitted(28, 16) Source(2, 18) + SourceIndex(2)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file3.ts","./file4.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":28,"kind":"prologue","data":"myPrologue"},{"pos":30,"end":44,"kind":"prologue","data":"myPrologue3"},{"pos":46,"end":60,"kind":"prologue","data":"myPrologue2"},{"pos":62,"end":573,"kind":"prepend","data":"../lib/module.js","texts":[{"pos":62,"end":573,"kind":"text"}]},{"pos":573,"end":818,"kind":"text"}],"mapHash":"3847555902-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/global.ts\",\"file4.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"file3.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ACAb,aAAa,CAAC;AFCd,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IGDL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICAnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;IIDvB,YAAY,CAAA;;;IACC,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}","hash":"-54929435562-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\n\"myPrologue2\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map","sources":{"prologues":[{"file":1,"text":"\"myPrologue2\";","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}},{"pos":0,"end":14,"expression":{"pos":0,"end":13,"text":"myPrologue2"}}]}]}},"dts":{"sections":[{"pos":0,"end":171,"kind":"prepend","data":"../lib/module.d.ts","texts":[{"pos":0,"end":171,"kind":"text"}]},{"pos":171,"end":253,"kind":"text"}],"mapHash":"-26680300331-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}","hash":"-2339330908-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file3.ts","./file4.ts"],"fileInfos":["14566593738-\"myPrologue\"\nexport const z = 30;\r\nimport { x } from \"file1\";","8812798660-\"myPrologue2\";\nconst myVar = 30;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-28):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (30-44):: myPrologue3
"myPrologue3";
----------------------------------------------------------------------
prologue: (46-60):: myPrologue2
"myPrologue2";
----------------------------------------------------------------------
prepend: (62-573):: ../lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (62-573)
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
    "myPrologueFile";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;

----------------------------------------------------------------------
text: (573-818)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue";
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 28,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 30,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue3"
        },
        {
          "pos": 46,
          "end": 60,
          "kind": "prologue",
          "data": "myPrologue2"
        },
        {
          "pos": 62,
          "end": 573,
          "kind": "prepend",
          "data": "../lib/module.js",
          "texts": [
            {
              "pos": 62,
              "end": 573,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 573,
          "end": 818,
          "kind": "text"
        }
      ],
      "hash": "-54929435562-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\n\"myPrologue2\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "3847555902-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/global.ts\",\"file4.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"file3.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ACAb,aAAa,CAAC;AFCd,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IGDL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICAnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;IIDvB,YAAY,CAAA;;;IACC,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 1,
            "text": "\"myPrologue2\";",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              },
              {
                "pos": 0,
                "end": 14,
                "expression": {
                  "pos": 0,
                  "end": 13,
                  "text": "myPrologue2"
                }
              }
            ]
          }
        ]
      }
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
      "mapHash": "-26680300331-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file3.ts",
      "./file4.ts"
    ],
    "fileInfos": {
      "./file3.ts": "14566593738-\"myPrologue\"\nexport const z = 30;\r\nimport { x } from \"file1\";",
      "./file4.ts": "8812798660-\"myPrologue2\";\nconst myVar = 30;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 3806
}

//// [/src/lib/module.d.ts.map] file written with same contents
//// [/src/lib/module.d.ts.map.baseline.txt] file written with same contents
//// [/src/lib/module.js]
"use strict";
"myPrologue";
"myPrologue3";
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
    "myPrologueFile";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
//# sourceMappingURL=module.js.map

//// [/src/lib/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","global.ts","file1.ts","file2.ts"],"names":[],"mappings":";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ADCb,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IEDL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICAnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AFApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

//// [/src/lib/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: file0.ts,global.ts,file1.ts,file2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
2 >"myPrologue"
3 >            
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 13) Source(1, 13) + SourceIndex(0)
3 >Emitted(2, 14) Source(1, 13) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:global.ts
-------------------------------------------------------------------
>>>"myPrologue3";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^->
1->
2 >"myPrologue3"
3 >             
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(3, 15) Source(1, 14) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1->
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->"myPrologue"
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1->Emitted(4, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(4, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(4, 11) Source(2, 13) + SourceIndex(0)
4 >Emitted(4, 14) Source(2, 16) + SourceIndex(0)
5 >Emitted(4, 16) Source(2, 18) + SourceIndex(0)
6 >Emitted(4, 17) Source(2, 19) + SourceIndex(0)
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
1->Emitted(9, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(9, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(9, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(9, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(9, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(9, 20) Source(1, 21) + SourceIndex(2)
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
1->Emitted(10, 5) Source(1, 21) + SourceIndex(2)
2 >Emitted(10, 12) Source(1, 28) + SourceIndex(2)
3 >Emitted(10, 13) Source(1, 29) + SourceIndex(2)
4 >Emitted(10, 16) Source(1, 32) + SourceIndex(2)
5 >Emitted(10, 17) Source(1, 33) + SourceIndex(2)
6 >Emitted(10, 26) Source(1, 34) + SourceIndex(2)
7 >Emitted(10, 27) Source(1, 35) + SourceIndex(2)
8 >Emitted(10, 28) Source(1, 36) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologueFile";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^
3 >                    ^
4 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    "myPrologueFile"
3 >                    
1 >Emitted(14, 5) Source(1, 1) + SourceIndex(3)
2 >Emitted(14, 21) Source(1, 17) + SourceIndex(3)
3 >Emitted(14, 22) Source(1, 17) + SourceIndex(3)
---
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->
  >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1->Emitted(17, 5) Source(2, 14) + SourceIndex(3)
2 >Emitted(17, 13) Source(2, 14) + SourceIndex(3)
3 >Emitted(17, 14) Source(2, 15) + SourceIndex(3)
4 >Emitted(17, 17) Source(2, 18) + SourceIndex(3)
5 >Emitted(17, 19) Source(2, 20) + SourceIndex(3)
6 >Emitted(17, 20) Source(2, 21) + SourceIndex(3)
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
1 >"myPrologue3"
  >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(19, 1) Source(2, 1) + SourceIndex(1)
2 >Emitted(19, 5) Source(2, 7) + SourceIndex(1)
3 >Emitted(19, 16) Source(2, 18) + SourceIndex(1)
4 >Emitted(19, 19) Source(2, 21) + SourceIndex(1)
5 >Emitted(19, 21) Source(2, 23) + SourceIndex(1)
6 >Emitted(19, 22) Source(2, 24) + SourceIndex(1)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":28,"kind":"prologue","data":"myPrologue"},{"pos":30,"end":44,"kind":"prologue","data":"myPrologue3"},{"pos":46,"end":557,"kind":"text"}],"sources":{"prologues":[{"file":0,"text":"\"myPrologue\"","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}},{"pos":0,"end":12,"expression":{"pos":0,"end":12,"text":"myPrologue"}}]},{"file":3,"text":"\"myPrologue3\"","directives":[{"pos":0,"end":13,"expression":{"pos":0,"end":13,"text":"myPrologue3"}}]}]},"mapHash":"-8068071797-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"global.ts\",\"file1.ts\",\"file2.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ADCb,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IEDL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICAnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AFApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}","hash":"6749123452-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":171,"kind":"text"}],"mapHash":"-38214306044-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}","hash":"10884851940-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"fileInfos":["9536729713-\"myPrologue\"\nconst myGlob = 20;","-4405159098-export const x = 10;console.log(x);","16047001250-\"myPrologueFile\"\nexport const y = 20;","7757520337-\"myPrologue3\"\nconst globalConst = 10;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-28):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (30-44):: myPrologue3
"myPrologue3";
----------------------------------------------------------------------
text: (46-557)
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
    "myPrologueFile";
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 28,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 30,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue3"
        },
        {
          "pos": 46,
          "end": 557,
          "kind": "text"
        }
      ],
      "hash": "6749123452-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "-8068071797-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"global.ts\",\"file1.ts\",\"file2.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ADCb,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;IEDL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICAnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AFApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "\"myPrologue\"",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              },
              {
                "pos": 0,
                "end": 12,
                "expression": {
                  "pos": 0,
                  "end": 12,
                  "text": "myPrologue"
                }
              }
            ]
          },
          {
            "file": 3,
            "text": "\"myPrologue3\"",
            "directives": [
              {
                "pos": 0,
                "end": 13,
                "expression": {
                  "pos": 0,
                  "end": 13,
                  "text": "myPrologue3"
                }
              }
            ]
          }
        ]
      }
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
      "mapHash": "-38214306044-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICDlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICCpB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}"
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
      "./file0.ts": "9536729713-\"myPrologue\"\nconst myGlob = 20;",
      "./file1.ts": "-4405159098-export const x = 10;console.log(x);",
      "./file2.ts": "16047001250-\"myPrologueFile\"\nexport const y = 20;",
      "./global.ts": "7757520337-\"myPrologue3\"\nconst globalConst = 10;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 3023
}



Change:: incremental-headers-change-without-dts-changes
Input::
//// [/src/lib/file1.ts]
"myPrologue5"
export const x = 10;console.log(x);



Output::
/lib/tsc --b /src/app --verbose
[[90m12:01:01 AM[0m] Projects in this build: 
    * src/lib/tsconfig.json
    * src/app/tsconfig.json

[[90m12:01:02 AM[0m] Project 'src/lib/tsconfig.json' is out of date because output 'src/lib/module.tsbuildinfo' is older than input 'src/lib/file1.ts'

[[90m12:01:03 AM[0m] Building project '/src/lib/tsconfig.json'...

[[90m12:01:11 AM[0m] Project 'src/app/tsconfig.json' is out of date because output of its dependency 'src/lib' has changed

[[90m12:01:12 AM[0m] Updating output of project '/src/app/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/app/module.d.ts.map]
{"version":3,"file":"module.d.ts","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC"}

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
1 >"myPrologue"
  >
2 >
3 >        const 
4 >              myGlob
5 >                     = 20
6 >                         ;
1 >Emitted(1, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(1, 9) Source(2, 1) + SourceIndex(0)
3 >Emitted(1, 15) Source(2, 7) + SourceIndex(0)
4 >Emitted(1, 21) Source(2, 13) + SourceIndex(0)
5 >Emitted(1, 26) Source(2, 18) + SourceIndex(0)
6 >Emitted(1, 27) Source(2, 19) + SourceIndex(0)
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
1 >"myPrologue5"
  >
2 >    export
3 >           
4 >           const 
5 >                 x
6 >                   = 10
7 >                       ;
1 >Emitted(3, 5) Source(2, 1) + SourceIndex(1)
2 >Emitted(3, 11) Source(2, 7) + SourceIndex(1)
3 >Emitted(3, 12) Source(2, 8) + SourceIndex(1)
4 >Emitted(3, 18) Source(2, 14) + SourceIndex(1)
5 >Emitted(3, 19) Source(2, 15) + SourceIndex(1)
6 >Emitted(3, 24) Source(2, 20) + SourceIndex(1)
7 >Emitted(3, 25) Source(2, 21) + SourceIndex(1)
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
1 >"myPrologueFile"
  >
2 >    export
3 >           
4 >           const 
5 >                 y
6 >                   = 20
7 >                       ;
1 >Emitted(6, 5) Source(2, 1) + SourceIndex(2)
2 >Emitted(6, 11) Source(2, 7) + SourceIndex(2)
3 >Emitted(6, 12) Source(2, 8) + SourceIndex(2)
4 >Emitted(6, 18) Source(2, 14) + SourceIndex(2)
5 >Emitted(6, 19) Source(2, 15) + SourceIndex(2)
6 >Emitted(6, 24) Source(2, 20) + SourceIndex(2)
7 >Emitted(6, 25) Source(2, 21) + SourceIndex(2)
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
1 >"myPrologue3"
  >
2 >
3 >        const 
4 >              globalConst
5 >                          = 10
6 >                              ;
1 >Emitted(8, 1) Source(2, 1) + SourceIndex(3)
2 >Emitted(8, 9) Source(2, 1) + SourceIndex(3)
3 >Emitted(8, 15) Source(2, 7) + SourceIndex(3)
4 >Emitted(8, 26) Source(2, 18) + SourceIndex(3)
5 >Emitted(8, 31) Source(2, 23) + SourceIndex(3)
6 >Emitted(8, 32) Source(2, 24) + SourceIndex(3)
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
1 >"myPrologue"
  >
2 >    export
3 >           
4 >           const 
5 >                 z
6 >                   = 30
7 >                       ;
1 >Emitted(10, 5) Source(2, 1) + SourceIndex(4)
2 >Emitted(10, 11) Source(2, 7) + SourceIndex(4)
3 >Emitted(10, 12) Source(2, 8) + SourceIndex(4)
4 >Emitted(10, 18) Source(2, 14) + SourceIndex(4)
5 >Emitted(10, 19) Source(2, 15) + SourceIndex(4)
6 >Emitted(10, 24) Source(2, 20) + SourceIndex(4)
7 >Emitted(10, 25) Source(2, 21) + SourceIndex(4)
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
1 >"myPrologue2";
  >
2 >
3 >        const 
4 >              myVar
5 >                    = 30
6 >                        ;
1 >Emitted(12, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(12, 9) Source(2, 1) + SourceIndex(5)
3 >Emitted(12, 15) Source(2, 7) + SourceIndex(5)
4 >Emitted(12, 20) Source(2, 12) + SourceIndex(5)
5 >Emitted(12, 25) Source(2, 17) + SourceIndex(5)
6 >Emitted(12, 26) Source(2, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.d.ts.map

//// [/src/app/module.js]
"use strict";
"myPrologue";
"myPrologue3";
"myPrologue2";
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue5";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologueFile";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/global.ts","file4.ts","../lib/file1.ts","../lib/file2.ts","file3.ts"],"names":[],"mappings":";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ACAb,aAAa,CAAC;AFCd,IAAM,MAAM,GAAG,EAAE,CAAC;;;IGDlB,aAAa,CAAA;;;IACA,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICDnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;IIDvB,YAAY,CAAA;;;IACC,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,KAAK,GAAG,EAAE,CAAC"}

//// [/src/app/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: ../lib/file0.ts,../lib/global.ts,file4.ts,../lib/file1.ts,../lib/file2.ts,file3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
2 >"myPrologue"
3 >            
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 13) Source(1, 13) + SourceIndex(0)
3 >Emitted(2, 14) Source(1, 13) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/global.ts
-------------------------------------------------------------------
>>>"myPrologue3";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^->
1->
2 >"myPrologue3"
3 >             
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(3, 15) Source(1, 14) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>"myPrologue2";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^->
1->
2 >"myPrologue2"
3 >             ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(4, 14) Source(1, 14) + SourceIndex(2)
3 >Emitted(4, 15) Source(1, 15) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1->
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->"myPrologue"
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1->Emitted(5, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(5, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(5, 11) Source(2, 13) + SourceIndex(0)
4 >Emitted(5, 14) Source(2, 16) + SourceIndex(0)
5 >Emitted(5, 16) Source(2, 18) + SourceIndex(0)
6 >Emitted(5, 17) Source(2, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologue5";
1->^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    "myPrologue5"
3 >                 
1->Emitted(8, 5) Source(1, 1) + SourceIndex(3)
2 >Emitted(8, 18) Source(1, 14) + SourceIndex(3)
3 >Emitted(8, 19) Source(1, 14) + SourceIndex(3)
---
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
1->
  >export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
1->Emitted(11, 5) Source(2, 14) + SourceIndex(3)
2 >Emitted(11, 13) Source(2, 14) + SourceIndex(3)
3 >Emitted(11, 14) Source(2, 15) + SourceIndex(3)
4 >Emitted(11, 17) Source(2, 18) + SourceIndex(3)
5 >Emitted(11, 19) Source(2, 20) + SourceIndex(3)
6 >Emitted(11, 20) Source(2, 21) + SourceIndex(3)
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
1->Emitted(12, 5) Source(2, 21) + SourceIndex(3)
2 >Emitted(12, 12) Source(2, 28) + SourceIndex(3)
3 >Emitted(12, 13) Source(2, 29) + SourceIndex(3)
4 >Emitted(12, 16) Source(2, 32) + SourceIndex(3)
5 >Emitted(12, 17) Source(2, 33) + SourceIndex(3)
6 >Emitted(12, 26) Source(2, 34) + SourceIndex(3)
7 >Emitted(12, 27) Source(2, 35) + SourceIndex(3)
8 >Emitted(12, 28) Source(2, 36) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologueFile";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^
3 >                    ^
4 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    "myPrologueFile"
3 >                    
1 >Emitted(16, 5) Source(1, 1) + SourceIndex(4)
2 >Emitted(16, 21) Source(1, 17) + SourceIndex(4)
3 >Emitted(16, 22) Source(1, 17) + SourceIndex(4)
---
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->
  >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1->Emitted(19, 5) Source(2, 14) + SourceIndex(4)
2 >Emitted(19, 13) Source(2, 14) + SourceIndex(4)
3 >Emitted(19, 14) Source(2, 15) + SourceIndex(4)
4 >Emitted(19, 17) Source(2, 18) + SourceIndex(4)
5 >Emitted(19, 19) Source(2, 20) + SourceIndex(4)
6 >Emitted(19, 20) Source(2, 21) + SourceIndex(4)
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
1 >"myPrologue3"
  >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(21, 1) Source(2, 1) + SourceIndex(1)
2 >Emitted(21, 5) Source(2, 7) + SourceIndex(1)
3 >Emitted(21, 16) Source(2, 18) + SourceIndex(1)
4 >Emitted(21, 19) Source(2, 21) + SourceIndex(1)
5 >Emitted(21, 21) Source(2, 23) + SourceIndex(1)
6 >Emitted(21, 22) Source(2, 24) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file3.ts
-------------------------------------------------------------------
>>>define("file3", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologue";
1->^^^^
2 >    ^^^^^^^^^^^^
3 >                ^
4 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    "myPrologue"
3 >                
1->Emitted(24, 5) Source(1, 1) + SourceIndex(5)
2 >Emitted(24, 17) Source(1, 13) + SourceIndex(5)
3 >Emitted(24, 18) Source(1, 13) + SourceIndex(5)
---
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.z = void 0;
>>>    exports.z = 30;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->
  >export const 
2 >    
3 >            z
4 >              = 
5 >                30
6 >                  ;
1->Emitted(27, 5) Source(2, 14) + SourceIndex(5)
2 >Emitted(27, 13) Source(2, 14) + SourceIndex(5)
3 >Emitted(27, 14) Source(2, 15) + SourceIndex(5)
4 >Emitted(27, 17) Source(2, 18) + SourceIndex(5)
5 >Emitted(27, 19) Source(2, 20) + SourceIndex(5)
6 >Emitted(27, 20) Source(2, 21) + SourceIndex(5)
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
1 >"myPrologue2";
  >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(29, 1) Source(2, 1) + SourceIndex(2)
2 >Emitted(29, 5) Source(2, 7) + SourceIndex(2)
3 >Emitted(29, 10) Source(2, 12) + SourceIndex(2)
4 >Emitted(29, 13) Source(2, 15) + SourceIndex(2)
5 >Emitted(29, 15) Source(2, 17) + SourceIndex(2)
6 >Emitted(29, 16) Source(2, 18) + SourceIndex(2)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file3.ts","./file4.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":28,"kind":"prologue","data":"myPrologue"},{"pos":30,"end":44,"kind":"prologue","data":"myPrologue3"},{"pos":46,"end":60,"kind":"prologue","data":"myPrologue2"},{"pos":62,"end":593,"kind":"prepend","data":"../lib/module.js","texts":[{"pos":62,"end":593,"kind":"text"}]},{"pos":593,"end":838,"kind":"text"}],"mapHash":"16708366-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/global.ts\",\"file4.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"file3.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ACAb,aAAa,CAAC;AFCd,IAAM,MAAM,GAAG,EAAE,CAAC;;;IGDlB,aAAa,CAAA;;;IACA,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICDnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;IIDvB,YAAY,CAAA;;;IACC,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}","hash":"1949994516-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\n\"myPrologue2\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue5\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map","sources":{"prologues":[{"file":1,"text":"\"myPrologue2\";","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}},{"pos":0,"end":14,"expression":{"pos":0,"end":13,"text":"myPrologue2"}}]}]}},"dts":{"sections":[{"pos":0,"end":171,"kind":"prepend","data":"../lib/module.d.ts","texts":[{"pos":0,"end":171,"kind":"text"}]},{"pos":171,"end":253,"kind":"text"}],"mapHash":"-19636782544-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}","hash":"-2339330908-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file3.ts","./file4.ts"],"fileInfos":["14566593738-\"myPrologue\"\nexport const z = 30;\r\nimport { x } from \"file1\";","8812798660-\"myPrologue2\";\nconst myVar = 30;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-28):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (30-44):: myPrologue3
"myPrologue3";
----------------------------------------------------------------------
prologue: (46-60):: myPrologue2
"myPrologue2";
----------------------------------------------------------------------
prepend: (62-593):: ../lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (62-593)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue5";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologueFile";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;

----------------------------------------------------------------------
text: (593-838)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue";
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 28,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 30,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue3"
        },
        {
          "pos": 46,
          "end": 60,
          "kind": "prologue",
          "data": "myPrologue2"
        },
        {
          "pos": 62,
          "end": 593,
          "kind": "prepend",
          "data": "../lib/module.js",
          "texts": [
            {
              "pos": 62,
              "end": 593,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 593,
          "end": 838,
          "kind": "text"
        }
      ],
      "hash": "1949994516-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\n\"myPrologue2\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue5\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\ndefine(\"file3\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.z = void 0;\r\n    exports.z = 30;\r\n});\r\nvar myVar = 30;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "16708366-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/global.ts\",\"file4.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"file3.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ACAb,aAAa,CAAC;AFCd,IAAM,MAAM,GAAG,EAAE,CAAC;;;IGDlB,aAAa,CAAA;;;IACA,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICDnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;IIDvB,YAAY,CAAA;;;IACC,QAAA,CAAC,GAAG,EAAE,CAAC;;AHApB,IAAM,KAAK,GAAG,EAAE,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 1,
            "text": "\"myPrologue2\";",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              },
              {
                "pos": 0,
                "end": 14,
                "expression": {
                  "pos": 0,
                  "end": 13,
                  "text": "myPrologue2"
                }
              }
            ]
          }
        ]
      }
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
      "mapHash": "-19636782544-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../lib/file0.ts\",\"../lib/file1.ts\",\"../lib/file2.ts\",\"../lib/global.ts\",\"file3.ts\",\"file4.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC;;ICAvB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,KAAK,KAAK,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "./file3.ts",
      "./file4.ts"
    ],
    "fileInfos": {
      "./file3.ts": "14566593738-\"myPrologue\"\nexport const z = 30;\r\nimport { x } from \"file1\";",
      "./file4.ts": "8812798660-\"myPrologue2\";\nconst myVar = 30;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "10242181693-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\ndeclare module \"file3\" {\r\n    export const z = 30;\r\n}\r\ndeclare const myVar = 30;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 3842
}

//// [/src/lib/module.d.ts.map]
{"version":3,"file":"module.d.ts","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC"}

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
1 >"myPrologue"
  >
2 >
3 >        const 
4 >              myGlob
5 >                     = 20
6 >                         ;
1 >Emitted(1, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(1, 9) Source(2, 1) + SourceIndex(0)
3 >Emitted(1, 15) Source(2, 7) + SourceIndex(0)
4 >Emitted(1, 21) Source(2, 13) + SourceIndex(0)
5 >Emitted(1, 26) Source(2, 18) + SourceIndex(0)
6 >Emitted(1, 27) Source(2, 19) + SourceIndex(0)
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
1 >"myPrologue5"
  >
2 >    export
3 >           
4 >           const 
5 >                 x
6 >                   = 10
7 >                       ;
1 >Emitted(3, 5) Source(2, 1) + SourceIndex(1)
2 >Emitted(3, 11) Source(2, 7) + SourceIndex(1)
3 >Emitted(3, 12) Source(2, 8) + SourceIndex(1)
4 >Emitted(3, 18) Source(2, 14) + SourceIndex(1)
5 >Emitted(3, 19) Source(2, 15) + SourceIndex(1)
6 >Emitted(3, 24) Source(2, 20) + SourceIndex(1)
7 >Emitted(3, 25) Source(2, 21) + SourceIndex(1)
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
1 >"myPrologueFile"
  >
2 >    export
3 >           
4 >           const 
5 >                 y
6 >                   = 20
7 >                       ;
1 >Emitted(6, 5) Source(2, 1) + SourceIndex(2)
2 >Emitted(6, 11) Source(2, 7) + SourceIndex(2)
3 >Emitted(6, 12) Source(2, 8) + SourceIndex(2)
4 >Emitted(6, 18) Source(2, 14) + SourceIndex(2)
5 >Emitted(6, 19) Source(2, 15) + SourceIndex(2)
6 >Emitted(6, 24) Source(2, 20) + SourceIndex(2)
7 >Emitted(6, 25) Source(2, 21) + SourceIndex(2)
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
1 >"myPrologue3"
  >
2 >
3 >        const 
4 >              globalConst
5 >                          = 10
6 >                              ;
1 >Emitted(8, 1) Source(2, 1) + SourceIndex(3)
2 >Emitted(8, 9) Source(2, 1) + SourceIndex(3)
3 >Emitted(8, 15) Source(2, 7) + SourceIndex(3)
4 >Emitted(8, 26) Source(2, 18) + SourceIndex(3)
5 >Emitted(8, 31) Source(2, 23) + SourceIndex(3)
6 >Emitted(8, 32) Source(2, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.d.ts.map

//// [/src/lib/module.js]
"use strict";
"myPrologue";
"myPrologue3";
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue5";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologueFile";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
//# sourceMappingURL=module.js.map

//// [/src/lib/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","global.ts","file1.ts","file2.ts"],"names":[],"mappings":";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ADCb,IAAM,MAAM,GAAG,EAAE,CAAC;;;IEDlB,aAAa,CAAA;;;IACA,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICDnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AFApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

//// [/src/lib/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: file0.ts,global.ts,file1.ts,file2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
2 >"myPrologue"
3 >            
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 13) Source(1, 13) + SourceIndex(0)
3 >Emitted(2, 14) Source(1, 13) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:global.ts
-------------------------------------------------------------------
>>>"myPrologue3";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^->
1->
2 >"myPrologue3"
3 >             
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(3, 15) Source(1, 14) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1->
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->"myPrologue"
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1->Emitted(4, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(4, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(4, 11) Source(2, 13) + SourceIndex(0)
4 >Emitted(4, 14) Source(2, 16) + SourceIndex(0)
5 >Emitted(4, 16) Source(2, 18) + SourceIndex(0)
6 >Emitted(4, 17) Source(2, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologue5";
1->^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    "myPrologue5"
3 >                 
1->Emitted(7, 5) Source(1, 1) + SourceIndex(2)
2 >Emitted(7, 18) Source(1, 14) + SourceIndex(2)
3 >Emitted(7, 19) Source(1, 14) + SourceIndex(2)
---
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
1->
  >export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
1->Emitted(10, 5) Source(2, 14) + SourceIndex(2)
2 >Emitted(10, 13) Source(2, 14) + SourceIndex(2)
3 >Emitted(10, 14) Source(2, 15) + SourceIndex(2)
4 >Emitted(10, 17) Source(2, 18) + SourceIndex(2)
5 >Emitted(10, 19) Source(2, 20) + SourceIndex(2)
6 >Emitted(10, 20) Source(2, 21) + SourceIndex(2)
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
1->Emitted(11, 5) Source(2, 21) + SourceIndex(2)
2 >Emitted(11, 12) Source(2, 28) + SourceIndex(2)
3 >Emitted(11, 13) Source(2, 29) + SourceIndex(2)
4 >Emitted(11, 16) Source(2, 32) + SourceIndex(2)
5 >Emitted(11, 17) Source(2, 33) + SourceIndex(2)
6 >Emitted(11, 26) Source(2, 34) + SourceIndex(2)
7 >Emitted(11, 27) Source(2, 35) + SourceIndex(2)
8 >Emitted(11, 28) Source(2, 36) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    "myPrologueFile";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^
3 >                    ^
4 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    "myPrologueFile"
3 >                    
1 >Emitted(15, 5) Source(1, 1) + SourceIndex(3)
2 >Emitted(15, 21) Source(1, 17) + SourceIndex(3)
3 >Emitted(15, 22) Source(1, 17) + SourceIndex(3)
---
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->
  >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1->Emitted(18, 5) Source(2, 14) + SourceIndex(3)
2 >Emitted(18, 13) Source(2, 14) + SourceIndex(3)
3 >Emitted(18, 14) Source(2, 15) + SourceIndex(3)
4 >Emitted(18, 17) Source(2, 18) + SourceIndex(3)
5 >Emitted(18, 19) Source(2, 20) + SourceIndex(3)
6 >Emitted(18, 20) Source(2, 21) + SourceIndex(3)
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
1 >"myPrologue3"
  >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(20, 1) Source(2, 1) + SourceIndex(1)
2 >Emitted(20, 5) Source(2, 7) + SourceIndex(1)
3 >Emitted(20, 16) Source(2, 18) + SourceIndex(1)
4 >Emitted(20, 19) Source(2, 21) + SourceIndex(1)
5 >Emitted(20, 21) Source(2, 23) + SourceIndex(1)
6 >Emitted(20, 22) Source(2, 24) + SourceIndex(1)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":28,"kind":"prologue","data":"myPrologue"},{"pos":30,"end":44,"kind":"prologue","data":"myPrologue3"},{"pos":46,"end":577,"kind":"text"}],"sources":{"prologues":[{"file":0,"text":"\"myPrologue\"","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}},{"pos":0,"end":12,"expression":{"pos":0,"end":12,"text":"myPrologue"}}]},{"file":3,"text":"\"myPrologue3\"","directives":[{"pos":0,"end":13,"expression":{"pos":0,"end":13,"text":"myPrologue3"}}]}]},"mapHash":"-19459258405-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"global.ts\",\"file1.ts\",\"file2.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ADCb,IAAM,MAAM,GAAG,EAAE,CAAC;;;IEDlB,aAAa,CAAA;;;IACA,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICDnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AFApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}","hash":"-11464610054-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue5\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map"},"dts":{"sections":[{"pos":0,"end":171,"kind":"text"}],"mapHash":"-36563998849-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}","hash":"10884851940-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n//# sourceMappingURL=module.d.ts.map"}},"program":{"fileNames":["./file0.ts","./file1.ts","./file2.ts","./global.ts"],"fileInfos":["9536729713-\"myPrologue\"\nconst myGlob = 20;","-4813675172-\"myPrologue5\"\nexport const x = 10;console.log(x);","16047001250-\"myPrologueFile\"\nexport const y = 20;","7757520337-\"myPrologue3\"\nconst globalConst = 10;"],"options":{"composite":true,"outFile":"./module.js"},"outSignature":"15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n","latestChangedDtsFile":"./module.d.ts"},"version":"FakeTSVersion"}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-28):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (30-44):: myPrologue3
"myPrologue3";
----------------------------------------------------------------------
text: (46-577)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologue5";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    "myPrologueFile";
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 28,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 30,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue3"
        },
        {
          "pos": 46,
          "end": 577,
          "kind": "text"
        }
      ],
      "hash": "-11464610054-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue3\";\r\nvar myGlob = 20;\r\ndefine(\"file1\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologue5\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.x = void 0;\r\n    exports.x = 10;\r\n    console.log(exports.x);\r\n});\r\ndefine(\"file2\", [\"require\", \"exports\"], function (require, exports) {\r\n    \"use strict\";\r\n    \"myPrologueFile\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.y = void 0;\r\n    exports.y = 20;\r\n});\r\nvar globalConst = 10;\r\n//# sourceMappingURL=module.js.map",
      "mapHash": "-19459258405-{\"version\":3,\"file\":\"module.js\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"global.ts\",\"file1.ts\",\"file2.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAA;ADCb,IAAM,MAAM,GAAG,EAAE,CAAC;;;IEDlB,aAAa,CAAA;;;IACA,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;ICDnC,gBAAgB,CAAA;;;IACH,QAAA,CAAC,GAAG,EAAE,CAAC;;AFApB,IAAM,WAAW,GAAG,EAAE,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "\"myPrologue\"",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              },
              {
                "pos": 0,
                "end": 12,
                "expression": {
                  "pos": 0,
                  "end": 12,
                  "text": "myPrologue"
                }
              }
            ]
          },
          {
            "file": 3,
            "text": "\"myPrologue3\"",
            "directives": [
              {
                "pos": 0,
                "end": 13,
                "expression": {
                  "pos": 0,
                  "end": 13,
                  "text": "myPrologue3"
                }
              }
            ]
          }
        ]
      }
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
      "mapHash": "-36563998849-{\"version\":3,\"file\":\"module.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"file0.ts\",\"file1.ts\",\"file2.ts\",\"global.ts\"],\"names\":[],\"mappings\":\"AACA,QAAA,MAAM,MAAM,KAAK,CAAC;;ICAlB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;;ICApB,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;;ACApB,QAAA,MAAM,WAAW,KAAK,CAAC\"}"
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
      "./file0.ts": "9536729713-\"myPrologue\"\nconst myGlob = 20;",
      "./file1.ts": "-4813675172-\"myPrologue5\"\nexport const x = 10;console.log(x);",
      "./file2.ts": "16047001250-\"myPrologueFile\"\nexport const y = 20;",
      "./global.ts": "7757520337-\"myPrologue3\"\nconst globalConst = 10;"
    },
    "options": {
      "composite": true,
      "outFile": "./module.js"
    },
    "outSignature": "15835278973-declare const myGlob = 20;\r\ndeclare module \"file1\" {\r\n    export const x = 10;\r\n}\r\ndeclare module \"file2\" {\r\n    export const y = 20;\r\n}\r\ndeclare const globalConst = 10;\r\n",
    "latestChangedDtsFile": "./module.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 3083
}

