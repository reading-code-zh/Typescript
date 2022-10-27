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

//// [/src/first/first_PART1.ts]
enum TokenFlags {
    None = 0,
    /* @internal */
    PrecedingLineBreak = 1 << 0,
    /* @internal */
    PrecedingJSDocComment = 1 << 1,
    /* @internal */
    Unterminated = 1 << 2,
    /* @internal */
    ExtendedUnicodeEscape = 1 << 3,
    Scientific = 1 << 4,
    Octal = 1 << 5,
    HexSpecifier = 1 << 6,
    BinarySpecifier = 1 << 7,
    OctalSpecifier = 1 << 8,
    /* @internal */
    ContainsSeparator = 1 << 9,
    /* @internal */
    BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,
    /* @internal */
    NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator
}
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);


//// [/src/first/first_part2.ts]
console.log(f());


//// [/src/first/first_part3.ts]
function f() {
    return "JS does hoists";
}

//// [/src/first/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "outFile": "./bin/first-output.js",
    "skipDefaultLibCheck": true,
  },
  "files": [
    "first_PART1.ts",
    "first_part2.ts",
    "first_part3.ts"
  ],
  "references": [
  ]
}


//// [/src/second/second_part1.ts]
namespace N {
    // Comment text
}

namespace N {
    function f() {
        console.log('testing');
    }

    f();
}


//// [/src/second/second_part2.ts]
class C {
    doSomething() {
        console.log("something got done");
    }
}


//// [/src/second/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "outFile": "../2/second-output.js",
    "skipDefaultLibCheck": true
  },
  "references": [
  ]
}


//// [/src/third/third_part1.ts]
var c = new C();
c.doSomething();


//// [/src/third/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "stripInternal": true,
    "outFile": "./thirdjs/output/third-output.js",
    "skipDefaultLibCheck": true,
  },
  "files": [
    "third_part1.ts"
  ],
  "references": [
    { "path": "../first", "prepend": true },
    { "path": "../second", "prepend": true },
  ]
}




Output::
/lib/tsc --b /src/third --verbose
[[90m12:00:08 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:00:09 AM[0m] Project 'src/first/tsconfig.json' is out of date because output file 'src/first/bin/first-output.tsbuildinfo' does not exist

[[90m12:00:10 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:00:20 AM[0m] Project 'src/second/tsconfig.json' is out of date because output file 'src/2/second-output.tsbuildinfo' does not exist

[[90m12:00:21 AM[0m] Building project '/src/second/tsconfig.json'...

[[90m12:00:31 AM[0m] Project 'src/third/tsconfig.json' is out of date because output file 'src/third/thirdjs/output/third-output.tsbuildinfo' does not exist

[[90m12:00:32 AM[0m] Building project '/src/third/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/2/second-output.d.ts]
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}
//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.d.ts.map]
{"version":3,"file":"second-output.d.ts","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd"}

//// [/src/2/second-output.d.ts.map.baseline.txt]
===================================================================
JsFile: second-output.d.ts
mapUrl: second-output.d.ts.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 19) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 20) Source(1, 12) + SourceIndex(0)
4 >Emitted(1, 21) Source(1, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(2, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(3, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(3, 19) Source(5, 11) + SourceIndex(0)
3 >Emitted(3, 20) Source(5, 12) + SourceIndex(0)
4 >Emitted(3, 21) Source(5, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(4, 2) Source(11, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(5, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(5, 15) Source(1, 7) + SourceIndex(1)
3 >Emitted(5, 16) Source(1, 8) + SourceIndex(1)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(6, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(6, 16) Source(2, 16) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(7, 2) Source(5, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.js]
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.js.map]
{"version":3,"file":"second-output.js","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC"}

//// [/src/2/second-output.js.map.baseline.txt]
===================================================================
JsFile: second-output.js
mapUrl: second-output.js.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1 >
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1 >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 11) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 12) + SourceIndex(0)
4 >Emitted(1, 7) Source(11, 2) + SourceIndex(0)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(2, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(2, 12) Source(5, 11) + SourceIndex(0)
3 >Emitted(2, 13) Source(5, 12) + SourceIndex(0)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(3, 5) Source(6, 5) + SourceIndex(0)
2 >Emitted(3, 14) Source(6, 14) + SourceIndex(0)
3 >Emitted(3, 15) Source(6, 15) + SourceIndex(0)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(4, 9) Source(7, 9) + SourceIndex(0)
2 >Emitted(4, 16) Source(7, 16) + SourceIndex(0)
3 >Emitted(4, 17) Source(7, 17) + SourceIndex(0)
4 >Emitted(4, 20) Source(7, 20) + SourceIndex(0)
5 >Emitted(4, 21) Source(7, 21) + SourceIndex(0)
6 >Emitted(4, 30) Source(7, 30) + SourceIndex(0)
7 >Emitted(4, 31) Source(7, 31) + SourceIndex(0)
8 >Emitted(4, 32) Source(7, 32) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(5, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(5, 6) Source(8, 6) + SourceIndex(0)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(6, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(6, 6) Source(10, 6) + SourceIndex(0)
3 >Emitted(6, 8) Source(10, 8) + SourceIndex(0)
4 >Emitted(6, 9) Source(10, 9) + SourceIndex(0)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(7, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(7, 2) Source(11, 2) + SourceIndex(0)
3 >Emitted(7, 4) Source(5, 11) + SourceIndex(0)
4 >Emitted(7, 5) Source(5, 12) + SourceIndex(0)
5 >Emitted(7, 10) Source(5, 11) + SourceIndex(0)
6 >Emitted(7, 11) Source(5, 12) + SourceIndex(0)
7 >Emitted(7, 19) Source(11, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(8, 1) Source(1, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(9, 5) Source(1, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(10, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(10, 6) Source(5, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(11, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(11, 28) Source(2, 16) + SourceIndex(1)
3 >Emitted(11, 31) Source(2, 5) + SourceIndex(1)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(12, 9) Source(3, 9) + SourceIndex(1)
2 >Emitted(12, 16) Source(3, 16) + SourceIndex(1)
3 >Emitted(12, 17) Source(3, 17) + SourceIndex(1)
4 >Emitted(12, 20) Source(3, 20) + SourceIndex(1)
5 >Emitted(12, 21) Source(3, 21) + SourceIndex(1)
6 >Emitted(12, 41) Source(3, 41) + SourceIndex(1)
7 >Emitted(12, 42) Source(3, 42) + SourceIndex(1)
8 >Emitted(12, 43) Source(3, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(13, 5) Source(4, 5) + SourceIndex(1)
2 >Emitted(13, 6) Source(4, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(14, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(14, 13) Source(5, 2) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(15, 1) Source(5, 1) + SourceIndex(1)
2 >Emitted(15, 2) Source(5, 2) + SourceIndex(1)
3 >Emitted(15, 2) Source(1, 1) + SourceIndex(1)
4 >Emitted(15, 6) Source(5, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../second","sourceFiles":["../second/second_part1.ts","../second/second_part2.ts"],"js":{"sections":[{"pos":0,"end":285,"kind":"text"}],"mapHash":"9890117190-{\"version\":3,\"file\":\"second-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC\"}","hash":"-23059753096-var N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\n//# sourceMappingURL=second-output.js.map"},"dts":{"sections":[{"pos":0,"end":100,"kind":"text"}],"mapHash":"7640041563-{\"version\":3,\"file\":\"second-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd\"}","hash":"7752788385-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\n//# sourceMappingURL=second-output.d.ts.map"}},"program":{"fileNames":["../second/second_part1.ts","../second/second_part2.ts"],"fileInfos":["-21603042336-namespace N {\r\n    // Comment text\r\n}\r\n\r\nnamespace N {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n\r\n    f();\r\n}\r\n","9339262372-class C {\r\n    doSomething() {\r\n        console.log(\"something got done\");\r\n    }\r\n}\r\n"],"options":{"composite":true,"outFile":"./second-output.js"},"outSignature":"7003440774-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\n","latestChangedDtsFile":"./second-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/2/second-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/2/second-output.js
----------------------------------------------------------------------
text: (0-285)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

======================================================================
======================================================================
File:: /src/2/second-output.d.ts
----------------------------------------------------------------------
text: (0-100)
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}

======================================================================

//// [/src/2/second-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "../second",
    "sourceFiles": [
      "../second/second_part1.ts",
      "../second/second_part2.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 285,
          "kind": "text"
        }
      ],
      "hash": "-23059753096-var N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\n//# sourceMappingURL=second-output.js.map",
      "mapHash": "9890117190-{\"version\":3,\"file\":\"second-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 100,
          "kind": "text"
        }
      ],
      "hash": "7752788385-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\n//# sourceMappingURL=second-output.d.ts.map",
      "mapHash": "7640041563-{\"version\":3,\"file\":\"second-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd\"}"
    }
  },
  "program": {
    "fileNames": [
      "../second/second_part1.ts",
      "../second/second_part2.ts"
    ],
    "fileInfos": {
      "../second/second_part1.ts": "-21603042336-namespace N {\r\n    // Comment text\r\n}\r\n\r\nnamespace N {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n\r\n    f();\r\n}\r\n",
      "../second/second_part2.ts": "9339262372-class C {\r\n    doSomething() {\r\n        console.log(\"something got done\");\r\n    }\r\n}\r\n"
    },
    "options": {
      "composite": true,
      "outFile": "./second-output.js"
    },
    "outSignature": "7003440774-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\n",
    "latestChangedDtsFile": "./second-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2185
}

//// [/src/first/bin/first-output.d.ts]
declare enum TokenFlags {
    None = 0,
    PrecedingLineBreak = 1,
    PrecedingJSDocComment = 2,
    Unterminated = 4,
    ExtendedUnicodeEscape = 8,
    Scientific = 16,
    Octal = 32,
    HexSpecifier = 64,
    BinarySpecifier = 128,
    OctalSpecifier = 256,
    ContainsSeparator = 512,
    BinaryOrOctalSpecifier = 384,
    NumericLiteralFlags = 1008
}
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;
//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,aAAK,UAAU;IACX,IAAI,IAAI;IAER,kBAAkB,IAAS;IAE3B,qBAAqB,IAAS;IAE9B,YAAY,IAAS;IAErB,qBAAqB,IAAS;IAC9B,UAAU,KAAS;IACnB,KAAK,KAAS;IACd,YAAY,KAAS;IACrB,eAAe,MAAS;IACxB,cAAc,MAAS;IAEvB,iBAAiB,MAAS;IAE1B,sBAAsB,MAAmC;IAEzD,mBAAmB,OAAiF;CACvG;AACD,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AE9BD,iBAAS,CAAC,WAET"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>declare enum TokenFlags {
1 >
2 >^^^^^^^^^^^^^
3 >             ^^^^^^^^^^
1 >
2 >enum 
3 >             TokenFlags
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 14) Source(1, 6) + SourceIndex(0)
3 >Emitted(1, 24) Source(1, 16) + SourceIndex(0)
---
>>>    None = 0,
1 >^^^^
2 >    ^^^^
3 >        ^^^^
4 >            ^^^^^^^^^^^^^^^^->
1 > {
  >    
2 >    None
3 >         = 0
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 13) Source(2, 13) + SourceIndex(0)
---
>>>    PrecedingLineBreak = 1,
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^
3 >                      ^^^^
4 >                          ^^^^^->
1->,
  >    /* @internal */
  >    
2 >    PrecedingLineBreak
3 >                       = 1 << 0
1->Emitted(3, 5) Source(4, 5) + SourceIndex(0)
2 >Emitted(3, 23) Source(4, 23) + SourceIndex(0)
3 >Emitted(3, 27) Source(4, 32) + SourceIndex(0)
---
>>>    PrecedingJSDocComment = 2,
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^
3 >                         ^^^^
1->,
  >    /* @internal */
  >    
2 >    PrecedingJSDocComment
3 >                          = 1 << 1
1->Emitted(4, 5) Source(6, 5) + SourceIndex(0)
2 >Emitted(4, 26) Source(6, 26) + SourceIndex(0)
3 >Emitted(4, 30) Source(6, 35) + SourceIndex(0)
---
>>>    Unterminated = 4,
1 >^^^^
2 >    ^^^^^^^^^^^^
3 >                ^^^^
4 >                    ^^^^^^^^^^^->
1 >,
  >    /* @internal */
  >    
2 >    Unterminated
3 >                 = 1 << 2
1 >Emitted(5, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(5, 17) Source(8, 17) + SourceIndex(0)
3 >Emitted(5, 21) Source(8, 26) + SourceIndex(0)
---
>>>    ExtendedUnicodeEscape = 8,
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^
3 >                         ^^^^
1->,
  >    /* @internal */
  >    
2 >    ExtendedUnicodeEscape
3 >                          = 1 << 3
1->Emitted(6, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(6, 26) Source(10, 26) + SourceIndex(0)
3 >Emitted(6, 30) Source(10, 35) + SourceIndex(0)
---
>>>    Scientific = 16,
1 >^^^^
2 >    ^^^^^^^^^^
3 >              ^^^^^
1 >,
  >    
2 >    Scientific
3 >               = 1 << 4
1 >Emitted(7, 5) Source(11, 5) + SourceIndex(0)
2 >Emitted(7, 15) Source(11, 15) + SourceIndex(0)
3 >Emitted(7, 20) Source(11, 24) + SourceIndex(0)
---
>>>    Octal = 32,
1 >^^^^
2 >    ^^^^^
3 >         ^^^^^
4 >              ^^^^^^^^^->
1 >,
  >    
2 >    Octal
3 >          = 1 << 5
1 >Emitted(8, 5) Source(12, 5) + SourceIndex(0)
2 >Emitted(8, 10) Source(12, 10) + SourceIndex(0)
3 >Emitted(8, 15) Source(12, 19) + SourceIndex(0)
---
>>>    HexSpecifier = 64,
1->^^^^
2 >    ^^^^^^^^^^^^
3 >                ^^^^^
4 >                     ^^^^^^->
1->,
  >    
2 >    HexSpecifier
3 >                 = 1 << 6
1->Emitted(9, 5) Source(13, 5) + SourceIndex(0)
2 >Emitted(9, 17) Source(13, 17) + SourceIndex(0)
3 >Emitted(9, 22) Source(13, 26) + SourceIndex(0)
---
>>>    BinarySpecifier = 128,
1->^^^^
2 >    ^^^^^^^^^^^^^^^
3 >                   ^^^^^^
4 >                         ^->
1->,
  >    
2 >    BinarySpecifier
3 >                    = 1 << 7
1->Emitted(10, 5) Source(14, 5) + SourceIndex(0)
2 >Emitted(10, 20) Source(14, 20) + SourceIndex(0)
3 >Emitted(10, 26) Source(14, 29) + SourceIndex(0)
---
>>>    OctalSpecifier = 256,
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^^^^^^
4 >                        ^^^^^->
1->,
  >    
2 >    OctalSpecifier
3 >                   = 1 << 8
1->Emitted(11, 5) Source(15, 5) + SourceIndex(0)
2 >Emitted(11, 19) Source(15, 19) + SourceIndex(0)
3 >Emitted(11, 25) Source(15, 28) + SourceIndex(0)
---
>>>    ContainsSeparator = 512,
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^
3 >                     ^^^^^^
4 >                           ^^^^^^^->
1->,
  >    /* @internal */
  >    
2 >    ContainsSeparator
3 >                      = 1 << 9
1->Emitted(12, 5) Source(17, 5) + SourceIndex(0)
2 >Emitted(12, 22) Source(17, 22) + SourceIndex(0)
3 >Emitted(12, 28) Source(17, 31) + SourceIndex(0)
---
>>>    BinaryOrOctalSpecifier = 384,
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^^^^^^
1->,
  >    /* @internal */
  >    
2 >    BinaryOrOctalSpecifier
3 >                           = BinarySpecifier | OctalSpecifier
1->Emitted(13, 5) Source(19, 5) + SourceIndex(0)
2 >Emitted(13, 27) Source(19, 27) + SourceIndex(0)
3 >Emitted(13, 33) Source(19, 62) + SourceIndex(0)
---
>>>    NumericLiteralFlags = 1008
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^
3 >                       ^^^^^^^
1 >,
  >    /* @internal */
  >    
2 >    NumericLiteralFlags
3 >                        = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator
1 >Emitted(14, 5) Source(21, 5) + SourceIndex(0)
2 >Emitted(14, 24) Source(21, 24) + SourceIndex(0)
3 >Emitted(14, 31) Source(21, 105) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(15, 2) Source(22, 2) + SourceIndex(0)
---
>>>interface TheFirst {
1->
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1->
  >
2 >interface 
3 >          TheFirst
1->Emitted(16, 1) Source(23, 1) + SourceIndex(0)
2 >Emitted(16, 11) Source(23, 11) + SourceIndex(0)
3 >Emitted(16, 19) Source(23, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(17, 5) Source(24, 5) + SourceIndex(0)
2 >Emitted(17, 9) Source(24, 9) + SourceIndex(0)
3 >Emitted(17, 11) Source(24, 11) + SourceIndex(0)
4 >Emitted(17, 14) Source(24, 14) + SourceIndex(0)
5 >Emitted(17, 15) Source(24, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(18, 2) Source(25, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(19, 1) Source(27, 1) + SourceIndex(0)
2 >Emitted(19, 9) Source(27, 1) + SourceIndex(0)
3 >Emitted(19, 15) Source(27, 7) + SourceIndex(0)
4 >Emitted(19, 16) Source(27, 8) + SourceIndex(0)
5 >Emitted(19, 33) Source(27, 25) + SourceIndex(0)
6 >Emitted(19, 34) Source(27, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(20, 1) Source(29, 1) + SourceIndex(0)
2 >Emitted(20, 11) Source(29, 11) + SourceIndex(0)
3 >Emitted(20, 28) Source(29, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(21, 5) Source(30, 5) + SourceIndex(0)
2 >Emitted(21, 9) Source(30, 9) + SourceIndex(0)
3 >Emitted(21, 11) Source(30, 11) + SourceIndex(0)
4 >Emitted(21, 14) Source(30, 14) + SourceIndex(0)
5 >Emitted(21, 15) Source(30, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(22, 2) Source(31, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^->
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(23, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(23, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(23, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(23, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
var TokenFlags;
(function (TokenFlags) {
    TokenFlags[TokenFlags["None"] = 0] = "None";
    TokenFlags[TokenFlags["PrecedingLineBreak"] = 1] = "PrecedingLineBreak";
    TokenFlags[TokenFlags["PrecedingJSDocComment"] = 2] = "PrecedingJSDocComment";
    TokenFlags[TokenFlags["Unterminated"] = 4] = "Unterminated";
    TokenFlags[TokenFlags["ExtendedUnicodeEscape"] = 8] = "ExtendedUnicodeEscape";
    TokenFlags[TokenFlags["Scientific"] = 16] = "Scientific";
    TokenFlags[TokenFlags["Octal"] = 32] = "Octal";
    TokenFlags[TokenFlags["HexSpecifier"] = 64] = "HexSpecifier";
    TokenFlags[TokenFlags["BinarySpecifier"] = 128] = "BinarySpecifier";
    TokenFlags[TokenFlags["OctalSpecifier"] = 256] = "OctalSpecifier";
    TokenFlags[TokenFlags["ContainsSeparator"] = 512] = "ContainsSeparator";
    TokenFlags[TokenFlags["BinaryOrOctalSpecifier"] = 384] = "BinaryOrOctalSpecifier";
    TokenFlags[TokenFlags["NumericLiteralFlags"] = 1008] = "NumericLiteralFlags";
})(TokenFlags || (TokenFlags = {}));
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,IAAK,UAqBJ;AArBD,WAAK,UAAU;IACX,2CAAQ,CAAA;IAER,uEAA2B,CAAA;IAE3B,6EAA8B,CAAA;IAE9B,2DAAqB,CAAA;IAErB,6EAA8B,CAAA;IAC9B,wDAAmB,CAAA;IACnB,8CAAc,CAAA;IACd,4DAAqB,CAAA;IACrB,mEAAwB,CAAA;IACxB,iEAAuB,CAAA;IAEvB,uEAA0B,CAAA;IAE1B,iFAAyD,CAAA;IAEzD,4EAAoG,CAAA;AACxG,CAAC,EArBI,UAAU,KAAV,UAAU,QAqBd;AAKD,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AChCf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var TokenFlags;
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^^^^^^^^^->
1 >
2 >enum 
3 >    TokenFlags {
  >        None = 0,
  >        /* @internal */
  >        PrecedingLineBreak = 1 << 0,
  >        /* @internal */
  >        PrecedingJSDocComment = 1 << 1,
  >        /* @internal */
  >        Unterminated = 1 << 2,
  >        /* @internal */
  >        ExtendedUnicodeEscape = 1 << 3,
  >        Scientific = 1 << 4,
  >        Octal = 1 << 5,
  >        HexSpecifier = 1 << 6,
  >        BinarySpecifier = 1 << 7,
  >        OctalSpecifier = 1 << 8,
  >        /* @internal */
  >        ContainsSeparator = 1 << 9,
  >        /* @internal */
  >        BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,
  >        /* @internal */
  >        NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator
  >    }
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 6) + SourceIndex(0)
3 >Emitted(1, 15) Source(22, 2) + SourceIndex(0)
---
>>>(function (TokenFlags) {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >enum 
3 >           TokenFlags
1->Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 12) Source(1, 6) + SourceIndex(0)
3 >Emitted(2, 22) Source(1, 16) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["None"] = 0] = "None";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                               ^
4 >                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    None = 0
3 >                                               
1->Emitted(3, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(3, 48) Source(2, 13) + SourceIndex(0)
3 >Emitted(3, 49) Source(2, 13) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["PrecedingLineBreak"] = 1] = "PrecedingLineBreak";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                           ^
4 >                                                                            ^^^^^^^->
1->,
  >    /* @internal */
  >    
2 >    PrecedingLineBreak = 1 << 0
3 >                                                                           
1->Emitted(4, 5) Source(4, 5) + SourceIndex(0)
2 >Emitted(4, 76) Source(4, 32) + SourceIndex(0)
3 >Emitted(4, 77) Source(4, 32) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["PrecedingJSDocComment"] = 2] = "PrecedingJSDocComment";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                                 ^
1->,
  >    /* @internal */
  >    
2 >    PrecedingJSDocComment = 1 << 1
3 >                                                                                 
1->Emitted(5, 5) Source(6, 5) + SourceIndex(0)
2 >Emitted(5, 82) Source(6, 35) + SourceIndex(0)
3 >Emitted(5, 83) Source(6, 35) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["Unterminated"] = 4] = "Unterminated";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                               ^
4 >                                                                ^^^^^^^^^^^^^^^^^^^->
1 >,
  >    /* @internal */
  >    
2 >    Unterminated = 1 << 2
3 >                                                               
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 64) Source(8, 26) + SourceIndex(0)
3 >Emitted(6, 65) Source(8, 26) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["ExtendedUnicodeEscape"] = 8] = "ExtendedUnicodeEscape";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                                 ^
1->,
  >    /* @internal */
  >    
2 >    ExtendedUnicodeEscape = 1 << 3
3 >                                                                                 
1->Emitted(7, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(7, 82) Source(10, 35) + SourceIndex(0)
3 >Emitted(7, 83) Source(10, 35) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["Scientific"] = 16] = "Scientific";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                            ^
1 >,
  >    
2 >    Scientific = 1 << 4
3 >                                                            
1 >Emitted(8, 5) Source(11, 5) + SourceIndex(0)
2 >Emitted(8, 61) Source(11, 24) + SourceIndex(0)
3 >Emitted(8, 62) Source(11, 24) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["Octal"] = 32] = "Octal";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                  ^
4 >                                                   ^^^^^^^^^^^^^^^->
1 >,
  >    
2 >    Octal = 1 << 5
3 >                                                  
1 >Emitted(9, 5) Source(12, 5) + SourceIndex(0)
2 >Emitted(9, 51) Source(12, 19) + SourceIndex(0)
3 >Emitted(9, 52) Source(12, 19) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["HexSpecifier"] = 64] = "HexSpecifier";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                ^
4 >                                                                 ^^^^^^^^->
1->,
  >    
2 >    HexSpecifier = 1 << 6
3 >                                                                
1->Emitted(10, 5) Source(13, 5) + SourceIndex(0)
2 >Emitted(10, 65) Source(13, 26) + SourceIndex(0)
3 >Emitted(10, 66) Source(13, 26) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["BinarySpecifier"] = 128] = "BinarySpecifier";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                       ^
1->,
  >    
2 >    BinarySpecifier = 1 << 7
3 >                                                                       
1->Emitted(11, 5) Source(14, 5) + SourceIndex(0)
2 >Emitted(11, 72) Source(14, 29) + SourceIndex(0)
3 >Emitted(11, 73) Source(14, 29) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["OctalSpecifier"] = 256] = "OctalSpecifier";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                     ^
4 >                                                                      ^^^^^^^->
1 >,
  >    
2 >    OctalSpecifier = 1 << 8
3 >                                                                     
1 >Emitted(12, 5) Source(15, 5) + SourceIndex(0)
2 >Emitted(12, 70) Source(15, 28) + SourceIndex(0)
3 >Emitted(12, 71) Source(15, 28) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["ContainsSeparator"] = 512] = "ContainsSeparator";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                           ^
4 >                                                                            ^^^^^^^^^^^->
1->,
  >    /* @internal */
  >    
2 >    ContainsSeparator = 1 << 9
3 >                                                                           
1->Emitted(13, 5) Source(17, 5) + SourceIndex(0)
2 >Emitted(13, 76) Source(17, 31) + SourceIndex(0)
3 >Emitted(13, 77) Source(17, 31) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["BinaryOrOctalSpecifier"] = 384] = "BinaryOrOctalSpecifier";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                                     ^
1->,
  >    /* @internal */
  >    
2 >    BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier
3 >                                                                                     
1->Emitted(14, 5) Source(19, 5) + SourceIndex(0)
2 >Emitted(14, 86) Source(19, 62) + SourceIndex(0)
3 >Emitted(14, 87) Source(19, 62) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["NumericLiteralFlags"] = 1008] = "NumericLiteralFlags";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                                ^
1 >,
  >    /* @internal */
  >    
2 >    NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator
3 >                                                                                
1 >Emitted(15, 5) Source(21, 5) + SourceIndex(0)
2 >Emitted(15, 81) Source(21, 105) + SourceIndex(0)
3 >Emitted(15, 82) Source(21, 105) + SourceIndex(0)
---
>>>})(TokenFlags || (TokenFlags = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^
5 >             ^^^^^
6 >                  ^^^^^^^^^^
7 >                            ^^^^^^^^
1 >
  >
2 >}
3 > 
4 >   TokenFlags
5 >             
6 >                  TokenFlags
7 >                             {
  >                                None = 0,
  >                                /* @internal */
  >                                PrecedingLineBreak = 1 << 0,
  >                                /* @internal */
  >                                PrecedingJSDocComment = 1 << 1,
  >                                /* @internal */
  >                                Unterminated = 1 << 2,
  >                                /* @internal */
  >                                ExtendedUnicodeEscape = 1 << 3,
  >                                Scientific = 1 << 4,
  >                                Octal = 1 << 5,
  >                                HexSpecifier = 1 << 6,
  >                                BinarySpecifier = 1 << 7,
  >                                OctalSpecifier = 1 << 8,
  >                                /* @internal */
  >                                ContainsSeparator = 1 << 9,
  >                                /* @internal */
  >                                BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,
  >                                /* @internal */
  >                                NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator
  >                            }
1 >Emitted(16, 1) Source(22, 1) + SourceIndex(0)
2 >Emitted(16, 2) Source(22, 2) + SourceIndex(0)
3 >Emitted(16, 4) Source(1, 6) + SourceIndex(0)
4 >Emitted(16, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(16, 19) Source(1, 6) + SourceIndex(0)
6 >Emitted(16, 29) Source(1, 16) + SourceIndex(0)
7 >Emitted(16, 37) Source(22, 2) + SourceIndex(0)
---
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >
  >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(17, 1) Source(27, 1) + SourceIndex(0)
2 >Emitted(17, 5) Source(27, 7) + SourceIndex(0)
3 >Emitted(17, 6) Source(27, 8) + SourceIndex(0)
4 >Emitted(17, 9) Source(27, 11) + SourceIndex(0)
5 >Emitted(17, 23) Source(27, 25) + SourceIndex(0)
6 >Emitted(17, 24) Source(27, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(18, 1) Source(33, 1) + SourceIndex(0)
2 >Emitted(18, 8) Source(33, 8) + SourceIndex(0)
3 >Emitted(18, 9) Source(33, 9) + SourceIndex(0)
4 >Emitted(18, 12) Source(33, 12) + SourceIndex(0)
5 >Emitted(18, 13) Source(33, 13) + SourceIndex(0)
6 >Emitted(18, 14) Source(33, 14) + SourceIndex(0)
7 >Emitted(18, 15) Source(33, 15) + SourceIndex(0)
8 >Emitted(18, 16) Source(33, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(19, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(19, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(19, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(19, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(19, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(19, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(19, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(19, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(19, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(20, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(20, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(20, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(21, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(21, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(21, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(21, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(22, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(22, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":1131,"kind":"text"}],"mapHash":"-31206929079-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAK,UAqBJ;AArBD,WAAK,UAAU;IACX,2CAAQ,CAAA;IAER,uEAA2B,CAAA;IAE3B,6EAA8B,CAAA;IAE9B,2DAAqB,CAAA;IAErB,6EAA8B,CAAA;IAC9B,wDAAmB,CAAA;IACnB,8CAAc,CAAA;IACd,4DAAqB,CAAA;IACrB,mEAAwB,CAAA;IACxB,iEAAuB,CAAA;IAEvB,uEAA0B,CAAA;IAE1B,iFAAyD,CAAA;IAEzD,4EAAoG,CAAA;AACxG,CAAC,EArBI,UAAU,KAAV,UAAU,QAqBd;AAKD,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AChCf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}","hash":"12609243978-var TokenFlags;\r\n(function (TokenFlags) {\r\n    TokenFlags[TokenFlags[\"None\"] = 0] = \"None\";\r\n    TokenFlags[TokenFlags[\"PrecedingLineBreak\"] = 1] = \"PrecedingLineBreak\";\r\n    TokenFlags[TokenFlags[\"PrecedingJSDocComment\"] = 2] = \"PrecedingJSDocComment\";\r\n    TokenFlags[TokenFlags[\"Unterminated\"] = 4] = \"Unterminated\";\r\n    TokenFlags[TokenFlags[\"ExtendedUnicodeEscape\"] = 8] = \"ExtendedUnicodeEscape\";\r\n    TokenFlags[TokenFlags[\"Scientific\"] = 16] = \"Scientific\";\r\n    TokenFlags[TokenFlags[\"Octal\"] = 32] = \"Octal\";\r\n    TokenFlags[TokenFlags[\"HexSpecifier\"] = 64] = \"HexSpecifier\";\r\n    TokenFlags[TokenFlags[\"BinarySpecifier\"] = 128] = \"BinarySpecifier\";\r\n    TokenFlags[TokenFlags[\"OctalSpecifier\"] = 256] = \"OctalSpecifier\";\r\n    TokenFlags[TokenFlags[\"ContainsSeparator\"] = 512] = \"ContainsSeparator\";\r\n    TokenFlags[TokenFlags[\"BinaryOrOctalSpecifier\"] = 384] = \"BinaryOrOctalSpecifier\";\r\n    TokenFlags[TokenFlags[\"NumericLiteralFlags\"] = 1008] = \"NumericLiteralFlags\";\r\n})(TokenFlags || (TokenFlags = {}));\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\n//# sourceMappingURL=first-output.js.map"},"dts":{"sections":[{"pos":0,"end":42,"kind":"text"},{"pos":42,"end":156,"kind":"internal"},{"pos":158,"end":276,"kind":"text"},{"pos":276,"end":371,"kind":"internal"},{"pos":373,"end":533,"kind":"text"}],"mapHash":"12756767772-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,aAAK,UAAU;IACX,IAAI,IAAI;IAER,kBAAkB,IAAS;IAE3B,qBAAqB,IAAS;IAE9B,YAAY,IAAS;IAErB,qBAAqB,IAAS;IAC9B,UAAU,KAAS;IACnB,KAAK,KAAS;IACd,YAAY,KAAS;IACrB,eAAe,MAAS;IACxB,cAAc,MAAS;IAEvB,iBAAiB,MAAS;IAE1B,sBAAsB,MAAmC;IAEzD,mBAAmB,OAAiF;CACvG;AACD,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AE9BD,iBAAS,CAAC,WAET\"}","hash":"-5295570803-declare enum TokenFlags {\r\n    None = 0,\r\n    PrecedingLineBreak = 1,\r\n    PrecedingJSDocComment = 2,\r\n    Unterminated = 4,\r\n    ExtendedUnicodeEscape = 8,\r\n    Scientific = 16,\r\n    Octal = 32,\r\n    HexSpecifier = 64,\r\n    BinarySpecifier = 128,\r\n    OctalSpecifier = 256,\r\n    ContainsSeparator = 512,\r\n    BinaryOrOctalSpecifier = 384,\r\n    NumericLiteralFlags = 1008\r\n}\r\ninterface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n//# sourceMappingURL=first-output.d.ts.map"}},"program":{"fileNames":["../first_part1.ts","../first_part2.ts","../first_part3.ts"],"fileInfos":["-78369044808-enum TokenFlags {\n    None = 0,\n    /* @internal */\n    PrecedingLineBreak = 1 << 0,\n    /* @internal */\n    PrecedingJSDocComment = 1 << 1,\n    /* @internal */\n    Unterminated = 1 << 2,\n    /* @internal */\n    ExtendedUnicodeEscape = 1 << 3,\n    Scientific = 1 << 4,\n    Octal = 1 << 5,\n    HexSpecifier = 1 << 6,\n    BinarySpecifier = 1 << 7,\n    OctalSpecifier = 1 << 8,\n    /* @internal */\n    ContainsSeparator = 1 << 9,\n    /* @internal */\n    BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,\n    /* @internal */\n    NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator\n}\ninterface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\n","4973778178-console.log(f());\r\n","6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}"],"options":{"composite":true,"outFile":"./first-output.js"},"outSignature":"8051664902-declare enum TokenFlags {\r\n    None = 0,\r\n    PrecedingLineBreak = 1,\r\n    PrecedingJSDocComment = 2,\r\n    Unterminated = 4,\r\n    ExtendedUnicodeEscape = 8,\r\n    Scientific = 16,\r\n    Octal = 32,\r\n    HexSpecifier = 64,\r\n    BinarySpecifier = 128,\r\n    OctalSpecifier = 256,\r\n    ContainsSeparator = 512,\r\n    BinaryOrOctalSpecifier = 384,\r\n    NumericLiteralFlags = 1008\r\n}\r\ninterface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n","latestChangedDtsFile":"./first-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
text: (0-1131)
var TokenFlags;
(function (TokenFlags) {
    TokenFlags[TokenFlags["None"] = 0] = "None";
    TokenFlags[TokenFlags["PrecedingLineBreak"] = 1] = "PrecedingLineBreak";
    TokenFlags[TokenFlags["PrecedingJSDocComment"] = 2] = "PrecedingJSDocComment";
    TokenFlags[TokenFlags["Unterminated"] = 4] = "Unterminated";
    TokenFlags[TokenFlags["ExtendedUnicodeEscape"] = 8] = "ExtendedUnicodeEscape";
    TokenFlags[TokenFlags["Scientific"] = 16] = "Scientific";
    TokenFlags[TokenFlags["Octal"] = 32] = "Octal";
    TokenFlags[TokenFlags["HexSpecifier"] = 64] = "HexSpecifier";
    TokenFlags[TokenFlags["BinarySpecifier"] = 128] = "BinarySpecifier";
    TokenFlags[TokenFlags["OctalSpecifier"] = 256] = "OctalSpecifier";
    TokenFlags[TokenFlags["ContainsSeparator"] = 512] = "ContainsSeparator";
    TokenFlags[TokenFlags["BinaryOrOctalSpecifier"] = 384] = "BinaryOrOctalSpecifier";
    TokenFlags[TokenFlags["NumericLiteralFlags"] = 1008] = "NumericLiteralFlags";
})(TokenFlags || (TokenFlags = {}));
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-42)
declare enum TokenFlags {
    None = 0,

----------------------------------------------------------------------
internal: (42-156)
    PrecedingLineBreak = 1,
    PrecedingJSDocComment = 2,
    Unterminated = 4,
    ExtendedUnicodeEscape = 8,
----------------------------------------------------------------------
text: (158-276)
    Scientific = 16,
    Octal = 32,
    HexSpecifier = 64,
    BinarySpecifier = 128,
    OctalSpecifier = 256,

----------------------------------------------------------------------
internal: (276-371)
    ContainsSeparator = 512,
    BinaryOrOctalSpecifier = 384,
    NumericLiteralFlags = 1008
----------------------------------------------------------------------
text: (373-533)
}
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

======================================================================

//// [/src/first/bin/first-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 1131,
          "kind": "text"
        }
      ],
      "hash": "12609243978-var TokenFlags;\r\n(function (TokenFlags) {\r\n    TokenFlags[TokenFlags[\"None\"] = 0] = \"None\";\r\n    TokenFlags[TokenFlags[\"PrecedingLineBreak\"] = 1] = \"PrecedingLineBreak\";\r\n    TokenFlags[TokenFlags[\"PrecedingJSDocComment\"] = 2] = \"PrecedingJSDocComment\";\r\n    TokenFlags[TokenFlags[\"Unterminated\"] = 4] = \"Unterminated\";\r\n    TokenFlags[TokenFlags[\"ExtendedUnicodeEscape\"] = 8] = \"ExtendedUnicodeEscape\";\r\n    TokenFlags[TokenFlags[\"Scientific\"] = 16] = \"Scientific\";\r\n    TokenFlags[TokenFlags[\"Octal\"] = 32] = \"Octal\";\r\n    TokenFlags[TokenFlags[\"HexSpecifier\"] = 64] = \"HexSpecifier\";\r\n    TokenFlags[TokenFlags[\"BinarySpecifier\"] = 128] = \"BinarySpecifier\";\r\n    TokenFlags[TokenFlags[\"OctalSpecifier\"] = 256] = \"OctalSpecifier\";\r\n    TokenFlags[TokenFlags[\"ContainsSeparator\"] = 512] = \"ContainsSeparator\";\r\n    TokenFlags[TokenFlags[\"BinaryOrOctalSpecifier\"] = 384] = \"BinaryOrOctalSpecifier\";\r\n    TokenFlags[TokenFlags[\"NumericLiteralFlags\"] = 1008] = \"NumericLiteralFlags\";\r\n})(TokenFlags || (TokenFlags = {}));\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\n//# sourceMappingURL=first-output.js.map",
      "mapHash": "-31206929079-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAK,UAqBJ;AArBD,WAAK,UAAU;IACX,2CAAQ,CAAA;IAER,uEAA2B,CAAA;IAE3B,6EAA8B,CAAA;IAE9B,2DAAqB,CAAA;IAErB,6EAA8B,CAAA;IAC9B,wDAAmB,CAAA;IACnB,8CAAc,CAAA;IACd,4DAAqB,CAAA;IACrB,mEAAwB,CAAA;IACxB,iEAAuB,CAAA;IAEvB,uEAA0B,CAAA;IAE1B,iFAAyD,CAAA;IAEzD,4EAAoG,CAAA;AACxG,CAAC,EArBI,UAAU,KAAV,UAAU,QAqBd;AAKD,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AChCf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 42,
          "kind": "text"
        },
        {
          "pos": 42,
          "end": 156,
          "kind": "internal"
        },
        {
          "pos": 158,
          "end": 276,
          "kind": "text"
        },
        {
          "pos": 276,
          "end": 371,
          "kind": "internal"
        },
        {
          "pos": 373,
          "end": 533,
          "kind": "text"
        }
      ],
      "hash": "-5295570803-declare enum TokenFlags {\r\n    None = 0,\r\n    PrecedingLineBreak = 1,\r\n    PrecedingJSDocComment = 2,\r\n    Unterminated = 4,\r\n    ExtendedUnicodeEscape = 8,\r\n    Scientific = 16,\r\n    Octal = 32,\r\n    HexSpecifier = 64,\r\n    BinarySpecifier = 128,\r\n    OctalSpecifier = 256,\r\n    ContainsSeparator = 512,\r\n    BinaryOrOctalSpecifier = 384,\r\n    NumericLiteralFlags = 1008\r\n}\r\ninterface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n//# sourceMappingURL=first-output.d.ts.map",
      "mapHash": "12756767772-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,aAAK,UAAU;IACX,IAAI,IAAI;IAER,kBAAkB,IAAS;IAE3B,qBAAqB,IAAS;IAE9B,YAAY,IAAS;IAErB,qBAAqB,IAAS;IAC9B,UAAU,KAAS;IACnB,KAAK,KAAS;IACd,YAAY,KAAS;IACrB,eAAe,MAAS;IACxB,cAAc,MAAS;IAEvB,iBAAiB,MAAS;IAE1B,sBAAsB,MAAmC;IAEzD,mBAAmB,OAAiF;CACvG;AACD,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AE9BD,iBAAS,CAAC,WAET\"}"
    }
  },
  "program": {
    "fileNames": [
      "../first_part1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "fileInfos": {
      "../first_part1.ts": "-78369044808-enum TokenFlags {\n    None = 0,\n    /* @internal */\n    PrecedingLineBreak = 1 << 0,\n    /* @internal */\n    PrecedingJSDocComment = 1 << 1,\n    /* @internal */\n    Unterminated = 1 << 2,\n    /* @internal */\n    ExtendedUnicodeEscape = 1 << 3,\n    Scientific = 1 << 4,\n    Octal = 1 << 5,\n    HexSpecifier = 1 << 6,\n    BinarySpecifier = 1 << 7,\n    OctalSpecifier = 1 << 8,\n    /* @internal */\n    ContainsSeparator = 1 << 9,\n    /* @internal */\n    BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,\n    /* @internal */\n    NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator\n}\ninterface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\n",
      "../first_part2.ts": "4973778178-console.log(f());\r\n",
      "../first_part3.ts": "6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}"
    },
    "options": {
      "composite": true,
      "outFile": "./first-output.js"
    },
    "outSignature": "8051664902-declare enum TokenFlags {\r\n    None = 0,\r\n    PrecedingLineBreak = 1,\r\n    PrecedingJSDocComment = 2,\r\n    Unterminated = 4,\r\n    ExtendedUnicodeEscape = 8,\r\n    Scientific = 16,\r\n    Octal = 32,\r\n    HexSpecifier = 64,\r\n    BinarySpecifier = 128,\r\n    OctalSpecifier = 256,\r\n    ContainsSeparator = 512,\r\n    BinaryOrOctalSpecifier = 384,\r\n    NumericLiteralFlags = 1008\r\n}\r\ninterface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n",
    "latestChangedDtsFile": "./first-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 5351
}

//// [/src/third/thirdjs/output/third-output.d.ts]
declare enum TokenFlags {
    None = 0,
    Scientific = 16,
    Octal = 32,
    HexSpecifier = 64,
    BinarySpecifier = 128,
    OctalSpecifier = 256,
}
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}
declare var c: C;
//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.d.ts.map]
{"version":3,"file":"third-output.d.ts","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAAA,aAAK,UAAU;IACX,IAAI,IAAI;IASR,UAAU,KAAS;IACnB,KAAK,KAAS;IACd,YAAY,KAAS;IACrB,eAAe,MAAS;IACxB,cAAc,MAAS;CAO1B;AACD,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AC9BD,iBAAS,CAAC,WAET;ACFD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACJD,QAAA,IAAI,CAAC,GAAU,CAAC"}

//// [/src/third/thirdjs/output/third-output.d.ts.map.baseline.txt]
===================================================================
JsFile: third-output.d.ts
mapUrl: third-output.d.ts.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>declare enum TokenFlags {
1 >
2 >^^^^^^^^^^^^^
3 >             ^^^^^^^^^^
1 >
2 >enum 
3 >             TokenFlags
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 14) Source(1, 6) + SourceIndex(0)
3 >Emitted(1, 24) Source(1, 16) + SourceIndex(0)
---
>>>    None = 0,
1 >^^^^
2 >    ^^^^
3 >        ^^^^
4 >            ^^^^^^^^^->
1 > {
  >    
2 >    None
3 >         = 0
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 13) Source(2, 13) + SourceIndex(0)
---
>>>    Scientific = 16,
1->^^^^
2 >    ^^^^^^^^^^
3 >              ^^^^^
1->,
  >    /* @internal */
  >    PrecedingLineBreak = 1 << 0,
  >    /* @internal */
  >    PrecedingJSDocComment = 1 << 1,
  >    /* @internal */
  >    Unterminated = 1 << 2,
  >    /* @internal */
  >    ExtendedUnicodeEscape = 1 << 3,
  >    
2 >    Scientific
3 >               = 1 << 4
1->Emitted(3, 5) Source(11, 5) + SourceIndex(0)
2 >Emitted(3, 15) Source(11, 15) + SourceIndex(0)
3 >Emitted(3, 20) Source(11, 24) + SourceIndex(0)
---
>>>    Octal = 32,
1 >^^^^
2 >    ^^^^^
3 >         ^^^^^
4 >              ^^^^^^^^^->
1 >,
  >    
2 >    Octal
3 >          = 1 << 5
1 >Emitted(4, 5) Source(12, 5) + SourceIndex(0)
2 >Emitted(4, 10) Source(12, 10) + SourceIndex(0)
3 >Emitted(4, 15) Source(12, 19) + SourceIndex(0)
---
>>>    HexSpecifier = 64,
1->^^^^
2 >    ^^^^^^^^^^^^
3 >                ^^^^^
4 >                     ^^^^^^->
1->,
  >    
2 >    HexSpecifier
3 >                 = 1 << 6
1->Emitted(5, 5) Source(13, 5) + SourceIndex(0)
2 >Emitted(5, 17) Source(13, 17) + SourceIndex(0)
3 >Emitted(5, 22) Source(13, 26) + SourceIndex(0)
---
>>>    BinarySpecifier = 128,
1->^^^^
2 >    ^^^^^^^^^^^^^^^
3 >                   ^^^^^^
4 >                         ^->
1->,
  >    
2 >    BinarySpecifier
3 >                    = 1 << 7
1->Emitted(6, 5) Source(14, 5) + SourceIndex(0)
2 >Emitted(6, 20) Source(14, 20) + SourceIndex(0)
3 >Emitted(6, 26) Source(14, 29) + SourceIndex(0)
---
>>>    OctalSpecifier = 256,
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^^^^^^
1->,
  >    
2 >    OctalSpecifier
3 >                   = 1 << 8
1->Emitted(7, 5) Source(15, 5) + SourceIndex(0)
2 >Emitted(7, 19) Source(15, 19) + SourceIndex(0)
3 >Emitted(7, 25) Source(15, 28) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^->
1 >,
  >    /* @internal */
  >    ContainsSeparator = 1 << 9,
  >    /* @internal */
  >    BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,
  >    /* @internal */
  >    NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator
  >}
1 >Emitted(8, 2) Source(22, 2) + SourceIndex(0)
---
>>>interface TheFirst {
1->
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1->
  >
2 >interface 
3 >          TheFirst
1->Emitted(9, 1) Source(23, 1) + SourceIndex(0)
2 >Emitted(9, 11) Source(23, 11) + SourceIndex(0)
3 >Emitted(9, 19) Source(23, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(10, 5) Source(24, 5) + SourceIndex(0)
2 >Emitted(10, 9) Source(24, 9) + SourceIndex(0)
3 >Emitted(10, 11) Source(24, 11) + SourceIndex(0)
4 >Emitted(10, 14) Source(24, 14) + SourceIndex(0)
5 >Emitted(10, 15) Source(24, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(11, 2) Source(25, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(12, 1) Source(27, 1) + SourceIndex(0)
2 >Emitted(12, 9) Source(27, 1) + SourceIndex(0)
3 >Emitted(12, 15) Source(27, 7) + SourceIndex(0)
4 >Emitted(12, 16) Source(27, 8) + SourceIndex(0)
5 >Emitted(12, 33) Source(27, 25) + SourceIndex(0)
6 >Emitted(12, 34) Source(27, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(13, 1) Source(29, 1) + SourceIndex(0)
2 >Emitted(13, 11) Source(29, 11) + SourceIndex(0)
3 >Emitted(13, 28) Source(29, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(14, 5) Source(30, 5) + SourceIndex(0)
2 >Emitted(14, 9) Source(30, 9) + SourceIndex(0)
3 >Emitted(14, 11) Source(30, 11) + SourceIndex(0)
4 >Emitted(14, 14) Source(30, 14) + SourceIndex(0)
5 >Emitted(14, 15) Source(30, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(15, 2) Source(31, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(16, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(16, 18) Source(1, 10) + SourceIndex(1)
3 >Emitted(16, 19) Source(1, 11) + SourceIndex(1)
4 >Emitted(16, 30) Source(3, 2) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(17, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(17, 19) Source(1, 11) + SourceIndex(2)
3 >Emitted(17, 20) Source(1, 12) + SourceIndex(2)
4 >Emitted(17, 21) Source(1, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(18, 2) Source(3, 2) + SourceIndex(2)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(19, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(19, 19) Source(5, 11) + SourceIndex(2)
3 >Emitted(19, 20) Source(5, 12) + SourceIndex(2)
4 >Emitted(19, 21) Source(5, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(20, 2) Source(11, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(21, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(21, 15) Source(1, 7) + SourceIndex(3)
3 >Emitted(21, 16) Source(1, 8) + SourceIndex(3)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(22, 5) Source(2, 5) + SourceIndex(3)
2 >Emitted(22, 16) Source(2, 16) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(23, 2) Source(5, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>declare var c: C;
1->
2 >^^^^^^^^
3 >        ^^^^
4 >            ^
5 >             ^^^
6 >                ^
7 >                 ^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >
3 >        var 
4 >            c
5 >              = new C()
6 >                ;
1->Emitted(24, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(24, 9) Source(1, 1) + SourceIndex(4)
3 >Emitted(24, 13) Source(1, 5) + SourceIndex(4)
4 >Emitted(24, 14) Source(1, 6) + SourceIndex(4)
5 >Emitted(24, 17) Source(1, 16) + SourceIndex(4)
6 >Emitted(24, 18) Source(1, 17) + SourceIndex(4)
---
>>>//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.js]
var TokenFlags;
(function (TokenFlags) {
    TokenFlags[TokenFlags["None"] = 0] = "None";
    TokenFlags[TokenFlags["PrecedingLineBreak"] = 1] = "PrecedingLineBreak";
    TokenFlags[TokenFlags["PrecedingJSDocComment"] = 2] = "PrecedingJSDocComment";
    TokenFlags[TokenFlags["Unterminated"] = 4] = "Unterminated";
    TokenFlags[TokenFlags["ExtendedUnicodeEscape"] = 8] = "ExtendedUnicodeEscape";
    TokenFlags[TokenFlags["Scientific"] = 16] = "Scientific";
    TokenFlags[TokenFlags["Octal"] = 32] = "Octal";
    TokenFlags[TokenFlags["HexSpecifier"] = 64] = "HexSpecifier";
    TokenFlags[TokenFlags["BinarySpecifier"] = 128] = "BinarySpecifier";
    TokenFlags[TokenFlags["OctalSpecifier"] = 256] = "OctalSpecifier";
    TokenFlags[TokenFlags["ContainsSeparator"] = 512] = "ContainsSeparator";
    TokenFlags[TokenFlags["BinaryOrOctalSpecifier"] = 384] = "BinaryOrOctalSpecifier";
    TokenFlags[TokenFlags["NumericLiteralFlags"] = 1008] = "NumericLiteralFlags";
})(TokenFlags || (TokenFlags = {}));
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
var c = new C();
c.doSomething();
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAAA,IAAK,UAqBJ;AArBD,WAAK,UAAU;IACX,2CAAQ,CAAA;IAER,uEAA2B,CAAA;IAE3B,6EAA8B,CAAA;IAE9B,2DAAqB,CAAA;IAErB,6EAA8B,CAAA;IAC9B,wDAAmB,CAAA;IACnB,8CAAc,CAAA;IACd,4DAAqB,CAAA;IACrB,mEAAwB,CAAA;IACxB,iEAAuB,CAAA;IAEvB,uEAA0B,CAAA;IAE1B,iFAAyD,CAAA;IAEzD,4EAAoG,CAAA;AACxG,CAAC,EArBI,UAAU,KAAV,UAAU,QAqBd;AAKD,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AChCf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var TokenFlags;
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^^^^^^^^^->
1 >
2 >enum 
3 >    TokenFlags {
  >        None = 0,
  >        /* @internal */
  >        PrecedingLineBreak = 1 << 0,
  >        /* @internal */
  >        PrecedingJSDocComment = 1 << 1,
  >        /* @internal */
  >        Unterminated = 1 << 2,
  >        /* @internal */
  >        ExtendedUnicodeEscape = 1 << 3,
  >        Scientific = 1 << 4,
  >        Octal = 1 << 5,
  >        HexSpecifier = 1 << 6,
  >        BinarySpecifier = 1 << 7,
  >        OctalSpecifier = 1 << 8,
  >        /* @internal */
  >        ContainsSeparator = 1 << 9,
  >        /* @internal */
  >        BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,
  >        /* @internal */
  >        NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator
  >    }
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 6) + SourceIndex(0)
3 >Emitted(1, 15) Source(22, 2) + SourceIndex(0)
---
>>>(function (TokenFlags) {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^
4 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >enum 
3 >           TokenFlags
1->Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 12) Source(1, 6) + SourceIndex(0)
3 >Emitted(2, 22) Source(1, 16) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["None"] = 0] = "None";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                               ^
4 >                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    None = 0
3 >                                               
1->Emitted(3, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(3, 48) Source(2, 13) + SourceIndex(0)
3 >Emitted(3, 49) Source(2, 13) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["PrecedingLineBreak"] = 1] = "PrecedingLineBreak";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                           ^
4 >                                                                            ^^^^^^^->
1->,
  >    /* @internal */
  >    
2 >    PrecedingLineBreak = 1 << 0
3 >                                                                           
1->Emitted(4, 5) Source(4, 5) + SourceIndex(0)
2 >Emitted(4, 76) Source(4, 32) + SourceIndex(0)
3 >Emitted(4, 77) Source(4, 32) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["PrecedingJSDocComment"] = 2] = "PrecedingJSDocComment";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                                 ^
1->,
  >    /* @internal */
  >    
2 >    PrecedingJSDocComment = 1 << 1
3 >                                                                                 
1->Emitted(5, 5) Source(6, 5) + SourceIndex(0)
2 >Emitted(5, 82) Source(6, 35) + SourceIndex(0)
3 >Emitted(5, 83) Source(6, 35) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["Unterminated"] = 4] = "Unterminated";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                               ^
4 >                                                                ^^^^^^^^^^^^^^^^^^^->
1 >,
  >    /* @internal */
  >    
2 >    Unterminated = 1 << 2
3 >                                                               
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 64) Source(8, 26) + SourceIndex(0)
3 >Emitted(6, 65) Source(8, 26) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["ExtendedUnicodeEscape"] = 8] = "ExtendedUnicodeEscape";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                                 ^
1->,
  >    /* @internal */
  >    
2 >    ExtendedUnicodeEscape = 1 << 3
3 >                                                                                 
1->Emitted(7, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(7, 82) Source(10, 35) + SourceIndex(0)
3 >Emitted(7, 83) Source(10, 35) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["Scientific"] = 16] = "Scientific";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                            ^
1 >,
  >    
2 >    Scientific = 1 << 4
3 >                                                            
1 >Emitted(8, 5) Source(11, 5) + SourceIndex(0)
2 >Emitted(8, 61) Source(11, 24) + SourceIndex(0)
3 >Emitted(8, 62) Source(11, 24) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["Octal"] = 32] = "Octal";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                  ^
4 >                                                   ^^^^^^^^^^^^^^^->
1 >,
  >    
2 >    Octal = 1 << 5
3 >                                                  
1 >Emitted(9, 5) Source(12, 5) + SourceIndex(0)
2 >Emitted(9, 51) Source(12, 19) + SourceIndex(0)
3 >Emitted(9, 52) Source(12, 19) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["HexSpecifier"] = 64] = "HexSpecifier";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                ^
4 >                                                                 ^^^^^^^^->
1->,
  >    
2 >    HexSpecifier = 1 << 6
3 >                                                                
1->Emitted(10, 5) Source(13, 5) + SourceIndex(0)
2 >Emitted(10, 65) Source(13, 26) + SourceIndex(0)
3 >Emitted(10, 66) Source(13, 26) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["BinarySpecifier"] = 128] = "BinarySpecifier";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                       ^
1->,
  >    
2 >    BinarySpecifier = 1 << 7
3 >                                                                       
1->Emitted(11, 5) Source(14, 5) + SourceIndex(0)
2 >Emitted(11, 72) Source(14, 29) + SourceIndex(0)
3 >Emitted(11, 73) Source(14, 29) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["OctalSpecifier"] = 256] = "OctalSpecifier";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                     ^
4 >                                                                      ^^^^^^^->
1 >,
  >    
2 >    OctalSpecifier = 1 << 8
3 >                                                                     
1 >Emitted(12, 5) Source(15, 5) + SourceIndex(0)
2 >Emitted(12, 70) Source(15, 28) + SourceIndex(0)
3 >Emitted(12, 71) Source(15, 28) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["ContainsSeparator"] = 512] = "ContainsSeparator";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                           ^
4 >                                                                            ^^^^^^^^^^^->
1->,
  >    /* @internal */
  >    
2 >    ContainsSeparator = 1 << 9
3 >                                                                           
1->Emitted(13, 5) Source(17, 5) + SourceIndex(0)
2 >Emitted(13, 76) Source(17, 31) + SourceIndex(0)
3 >Emitted(13, 77) Source(17, 31) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["BinaryOrOctalSpecifier"] = 384] = "BinaryOrOctalSpecifier";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                                     ^
1->,
  >    /* @internal */
  >    
2 >    BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier
3 >                                                                                     
1->Emitted(14, 5) Source(19, 5) + SourceIndex(0)
2 >Emitted(14, 86) Source(19, 62) + SourceIndex(0)
3 >Emitted(14, 87) Source(19, 62) + SourceIndex(0)
---
>>>    TokenFlags[TokenFlags["NumericLiteralFlags"] = 1008] = "NumericLiteralFlags";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                                                ^
1 >,
  >    /* @internal */
  >    
2 >    NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator
3 >                                                                                
1 >Emitted(15, 5) Source(21, 5) + SourceIndex(0)
2 >Emitted(15, 81) Source(21, 105) + SourceIndex(0)
3 >Emitted(15, 82) Source(21, 105) + SourceIndex(0)
---
>>>})(TokenFlags || (TokenFlags = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^
5 >             ^^^^^
6 >                  ^^^^^^^^^^
7 >                            ^^^^^^^^
1 >
  >
2 >}
3 > 
4 >   TokenFlags
5 >             
6 >                  TokenFlags
7 >                             {
  >                                None = 0,
  >                                /* @internal */
  >                                PrecedingLineBreak = 1 << 0,
  >                                /* @internal */
  >                                PrecedingJSDocComment = 1 << 1,
  >                                /* @internal */
  >                                Unterminated = 1 << 2,
  >                                /* @internal */
  >                                ExtendedUnicodeEscape = 1 << 3,
  >                                Scientific = 1 << 4,
  >                                Octal = 1 << 5,
  >                                HexSpecifier = 1 << 6,
  >                                BinarySpecifier = 1 << 7,
  >                                OctalSpecifier = 1 << 8,
  >                                /* @internal */
  >                                ContainsSeparator = 1 << 9,
  >                                /* @internal */
  >                                BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,
  >                                /* @internal */
  >                                NumericLiteralFlags = Scientific | Octal | HexSpecifier | BinaryOrOctalSpecifier | ContainsSeparator
  >                            }
1 >Emitted(16, 1) Source(22, 1) + SourceIndex(0)
2 >Emitted(16, 2) Source(22, 2) + SourceIndex(0)
3 >Emitted(16, 4) Source(1, 6) + SourceIndex(0)
4 >Emitted(16, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(16, 19) Source(1, 6) + SourceIndex(0)
6 >Emitted(16, 29) Source(1, 16) + SourceIndex(0)
7 >Emitted(16, 37) Source(22, 2) + SourceIndex(0)
---
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >
  >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(17, 1) Source(27, 1) + SourceIndex(0)
2 >Emitted(17, 5) Source(27, 7) + SourceIndex(0)
3 >Emitted(17, 6) Source(27, 8) + SourceIndex(0)
4 >Emitted(17, 9) Source(27, 11) + SourceIndex(0)
5 >Emitted(17, 23) Source(27, 25) + SourceIndex(0)
6 >Emitted(17, 24) Source(27, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(18, 1) Source(33, 1) + SourceIndex(0)
2 >Emitted(18, 8) Source(33, 8) + SourceIndex(0)
3 >Emitted(18, 9) Source(33, 9) + SourceIndex(0)
4 >Emitted(18, 12) Source(33, 12) + SourceIndex(0)
5 >Emitted(18, 13) Source(33, 13) + SourceIndex(0)
6 >Emitted(18, 14) Source(33, 14) + SourceIndex(0)
7 >Emitted(18, 15) Source(33, 15) + SourceIndex(0)
8 >Emitted(18, 16) Source(33, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(19, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(19, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(19, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(19, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(19, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(19, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(19, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(19, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(19, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(20, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(20, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(20, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(21, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(21, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(21, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(21, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(22, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(22, 2) Source(3, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(23, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(23, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(23, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(23, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(24, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(24, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(24, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(25, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(25, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(25, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(26, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(26, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(26, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(26, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(26, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(26, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(26, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(26, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(27, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(27, 6) Source(8, 6) + SourceIndex(3)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(28, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(28, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(28, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(28, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(29, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(29, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(29, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(29, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(29, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(29, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(29, 19) Source(11, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(30, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(31, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(32, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(32, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(33, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(33, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(33, 31) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(34, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(34, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(34, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(34, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(34, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(34, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(34, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(34, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(35, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(35, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(36, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(36, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(37, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(37, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(37, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(37, 6) Source(5, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>var c = new C();
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1->
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1->Emitted(38, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(38, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(38, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(38, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(38, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(38, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(38, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(38, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(39, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(39, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(39, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(39, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(39, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(39, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../..","sourceFiles":["../../third_part1.ts"],"js":{"sections":[{"pos":0,"end":1131,"kind":"prepend","data":"../../../first/bin/first-output.js","texts":[{"pos":0,"end":1131,"kind":"text"}]},{"pos":1131,"end":1416,"kind":"prepend","data":"../../../2/second-output.js","texts":[{"pos":1131,"end":1416,"kind":"text"}]},{"pos":1416,"end":1452,"kind":"text"}],"mapHash":"82804019774-{\"version\":3,\"file\":\"third-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part2.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAK,UAqBJ;AArBD,WAAK,UAAU;IACX,2CAAQ,CAAA;IAER,uEAA2B,CAAA;IAE3B,6EAA8B,CAAA;IAE9B,2DAAqB,CAAA;IAErB,6EAA8B,CAAA;IAC9B,wDAAmB,CAAA;IACnB,8CAAc,CAAA;IACd,4DAAqB,CAAA;IACrB,mEAAwB,CAAA;IACxB,iEAAuB,CAAA;IAEvB,uEAA0B,CAAA;IAE1B,iFAAyD,CAAA;IAEzD,4EAAoG,CAAA;AACxG,CAAC,EArBI,UAAU,KAAV,UAAU,QAqBd;AAKD,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AChCf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC\"}","hash":"32101799743-var TokenFlags;\r\n(function (TokenFlags) {\r\n    TokenFlags[TokenFlags[\"None\"] = 0] = \"None\";\r\n    TokenFlags[TokenFlags[\"PrecedingLineBreak\"] = 1] = \"PrecedingLineBreak\";\r\n    TokenFlags[TokenFlags[\"PrecedingJSDocComment\"] = 2] = \"PrecedingJSDocComment\";\r\n    TokenFlags[TokenFlags[\"Unterminated\"] = 4] = \"Unterminated\";\r\n    TokenFlags[TokenFlags[\"ExtendedUnicodeEscape\"] = 8] = \"ExtendedUnicodeEscape\";\r\n    TokenFlags[TokenFlags[\"Scientific\"] = 16] = \"Scientific\";\r\n    TokenFlags[TokenFlags[\"Octal\"] = 32] = \"Octal\";\r\n    TokenFlags[TokenFlags[\"HexSpecifier\"] = 64] = \"HexSpecifier\";\r\n    TokenFlags[TokenFlags[\"BinarySpecifier\"] = 128] = \"BinarySpecifier\";\r\n    TokenFlags[TokenFlags[\"OctalSpecifier\"] = 256] = \"OctalSpecifier\";\r\n    TokenFlags[TokenFlags[\"ContainsSeparator\"] = 512] = \"ContainsSeparator\";\r\n    TokenFlags[TokenFlags[\"BinaryOrOctalSpecifier\"] = 384] = \"BinaryOrOctalSpecifier\";\r\n    TokenFlags[TokenFlags[\"NumericLiteralFlags\"] = 1008] = \"NumericLiteralFlags\";\r\n})(TokenFlags || (TokenFlags = {}));\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\nvar c = new C();\r\nc.doSomething();\r\n//# sourceMappingURL=third-output.js.map"},"dts":{"sections":[{"pos":0,"end":320,"kind":"prepend","data":"../../../first/bin/first-output.d.ts","texts":[{"pos":0,"end":320,"kind":"text"}]},{"pos":320,"end":420,"kind":"prepend","data":"../../../2/second-output.d.ts","texts":[{"pos":320,"end":420,"kind":"text"}]},{"pos":420,"end":439,"kind":"text"}],"mapHash":"22013376427-{\"version\":3,\"file\":\"third-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AAAA,aAAK,UAAU;IACX,IAAI,IAAI;IASR,UAAU,KAAS;IACnB,KAAK,KAAS;IACd,YAAY,KAAS;IACrB,eAAe,MAAS;IACxB,cAAc,MAAS;CAO1B;AACD,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AC9BD,iBAAS,CAAC,WAET;ACFD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACJD,QAAA,IAAI,CAAC,GAAU,CAAC\"}","hash":"-39106923765-declare enum TokenFlags {\r\n    None = 0,\r\n    Scientific = 16,\r\n    Octal = 32,\r\n    HexSpecifier = 64,\r\n    BinarySpecifier = 128,\r\n    OctalSpecifier = 256,\r\n}\r\ninterface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n//# sourceMappingURL=third-output.d.ts.map"}},"program":{"fileNames":["../../third_part1.ts"],"fileInfos":["10470273651-var c = new C();\r\nc.doSomething();\r\n"],"options":{"composite":true,"outFile":"./third-output.js"},"outSignature":"-41732646255-declare enum TokenFlags {\r\n    None = 0,\r\n    Scientific = 16,\r\n    Octal = 32,\r\n    HexSpecifier = 64,\r\n    BinarySpecifier = 128,\r\n    OctalSpecifier = 256,\r\n}\r\ninterface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n","latestChangedDtsFile":"./third-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prepend: (0-1131):: ../../../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (0-1131)
var TokenFlags;
(function (TokenFlags) {
    TokenFlags[TokenFlags["None"] = 0] = "None";
    TokenFlags[TokenFlags["PrecedingLineBreak"] = 1] = "PrecedingLineBreak";
    TokenFlags[TokenFlags["PrecedingJSDocComment"] = 2] = "PrecedingJSDocComment";
    TokenFlags[TokenFlags["Unterminated"] = 4] = "Unterminated";
    TokenFlags[TokenFlags["ExtendedUnicodeEscape"] = 8] = "ExtendedUnicodeEscape";
    TokenFlags[TokenFlags["Scientific"] = 16] = "Scientific";
    TokenFlags[TokenFlags["Octal"] = 32] = "Octal";
    TokenFlags[TokenFlags["HexSpecifier"] = 64] = "HexSpecifier";
    TokenFlags[TokenFlags["BinarySpecifier"] = 128] = "BinarySpecifier";
    TokenFlags[TokenFlags["OctalSpecifier"] = 256] = "OctalSpecifier";
    TokenFlags[TokenFlags["ContainsSeparator"] = 512] = "ContainsSeparator";
    TokenFlags[TokenFlags["BinaryOrOctalSpecifier"] = 384] = "BinaryOrOctalSpecifier";
    TokenFlags[TokenFlags["NumericLiteralFlags"] = 1008] = "NumericLiteralFlags";
})(TokenFlags || (TokenFlags = {}));
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
prepend: (1131-1416):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (1131-1416)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

----------------------------------------------------------------------
text: (1416-1452)
var c = new C();
c.doSomething();

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-320):: ../../../first/bin/first-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-320)
declare enum TokenFlags {
    None = 0,
    Scientific = 16,
    Octal = 32,
    HexSpecifier = 64,
    BinarySpecifier = 128,
    OctalSpecifier = 256,
}
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
prepend: (320-420):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (320-420)
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
text: (420-439)
declare var c: C;

======================================================================

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "../..",
    "sourceFiles": [
      "../../third_part1.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 1131,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.js",
          "texts": [
            {
              "pos": 0,
              "end": 1131,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 1131,
          "end": 1416,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 1131,
              "end": 1416,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 1416,
          "end": 1452,
          "kind": "text"
        }
      ],
      "hash": "32101799743-var TokenFlags;\r\n(function (TokenFlags) {\r\n    TokenFlags[TokenFlags[\"None\"] = 0] = \"None\";\r\n    TokenFlags[TokenFlags[\"PrecedingLineBreak\"] = 1] = \"PrecedingLineBreak\";\r\n    TokenFlags[TokenFlags[\"PrecedingJSDocComment\"] = 2] = \"PrecedingJSDocComment\";\r\n    TokenFlags[TokenFlags[\"Unterminated\"] = 4] = \"Unterminated\";\r\n    TokenFlags[TokenFlags[\"ExtendedUnicodeEscape\"] = 8] = \"ExtendedUnicodeEscape\";\r\n    TokenFlags[TokenFlags[\"Scientific\"] = 16] = \"Scientific\";\r\n    TokenFlags[TokenFlags[\"Octal\"] = 32] = \"Octal\";\r\n    TokenFlags[TokenFlags[\"HexSpecifier\"] = 64] = \"HexSpecifier\";\r\n    TokenFlags[TokenFlags[\"BinarySpecifier\"] = 128] = \"BinarySpecifier\";\r\n    TokenFlags[TokenFlags[\"OctalSpecifier\"] = 256] = \"OctalSpecifier\";\r\n    TokenFlags[TokenFlags[\"ContainsSeparator\"] = 512] = \"ContainsSeparator\";\r\n    TokenFlags[TokenFlags[\"BinaryOrOctalSpecifier\"] = 384] = \"BinaryOrOctalSpecifier\";\r\n    TokenFlags[TokenFlags[\"NumericLiteralFlags\"] = 1008] = \"NumericLiteralFlags\";\r\n})(TokenFlags || (TokenFlags = {}));\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\nvar c = new C();\r\nc.doSomething();\r\n//# sourceMappingURL=third-output.js.map",
      "mapHash": "82804019774-{\"version\":3,\"file\":\"third-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part2.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AAAA,IAAK,UAqBJ;AArBD,WAAK,UAAU;IACX,2CAAQ,CAAA;IAER,uEAA2B,CAAA;IAE3B,6EAA8B,CAAA;IAE9B,2DAAqB,CAAA;IAErB,6EAA8B,CAAA;IAC9B,wDAAmB,CAAA;IACnB,8CAAc,CAAA;IACd,4DAAqB,CAAA;IACrB,mEAAwB,CAAA;IACxB,iEAAuB,CAAA;IAEvB,uEAA0B,CAAA;IAE1B,iFAAyD,CAAA;IAEzD,4EAAoG,CAAA;AACxG,CAAC,EArBI,UAAU,KAAV,UAAU,QAqBd;AAKD,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AChCf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 320,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 320,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 320,
          "end": 420,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 320,
              "end": 420,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 420,
          "end": 439,
          "kind": "text"
        }
      ],
      "hash": "-39106923765-declare enum TokenFlags {\r\n    None = 0,\r\n    Scientific = 16,\r\n    Octal = 32,\r\n    HexSpecifier = 64,\r\n    BinarySpecifier = 128,\r\n    OctalSpecifier = 256,\r\n}\r\ninterface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n//# sourceMappingURL=third-output.d.ts.map",
      "mapHash": "22013376427-{\"version\":3,\"file\":\"third-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AAAA,aAAK,UAAU;IACX,IAAI,IAAI;IASR,UAAU,KAAS;IACnB,KAAK,KAAS;IACd,YAAY,KAAS;IACrB,eAAe,MAAS;IACxB,cAAc,MAAS;CAO1B;AACD,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AC9BD,iBAAS,CAAC,WAET;ACFD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACJD,QAAA,IAAI,CAAC,GAAU,CAAC\"}"
    }
  },
  "program": {
    "fileNames": [
      "../../third_part1.ts"
    ],
    "fileInfos": {
      "../../third_part1.ts": "10470273651-var c = new C();\r\nc.doSomething();\r\n"
    },
    "options": {
      "composite": true,
      "outFile": "./third-output.js"
    },
    "outSignature": "-41732646255-declare enum TokenFlags {\r\n    None = 0,\r\n    Scientific = 16,\r\n    Octal = 32,\r\n    HexSpecifier = 64,\r\n    BinarySpecifier = 128,\r\n    OctalSpecifier = 256,\r\n}\r\ninterface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n",
    "latestChangedDtsFile": "./third-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 5491
}

