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
    "strict": true,
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
"myPrologue"
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
"myPrologue2";
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
    "strict": true,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
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
[[90m12:00:10 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:00:11 AM[0m] Project 'src/first/tsconfig.json' is out of date because output file 'src/first/bin/first-output.tsbuildinfo' does not exist

[[90m12:00:12 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:00:22 AM[0m] Project 'src/second/tsconfig.json' is out of date because output file 'src/2/second-output.tsbuildinfo' does not exist

[[90m12:00:23 AM[0m] Building project '/src/second/tsconfig.json'...

[[90m12:00:33 AM[0m] Project 'src/third/tsconfig.json' is out of date because output file 'src/third/thirdjs/output/third-output.tsbuildinfo' does not exist

[[90m12:00:34 AM[0m] Building project '/src/third/tsconfig.json'...

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
{"version":3,"file":"second-output.d.ts","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AACA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd"}

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
1 >"myPrologue"
  >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(1, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(1, 19) Source(2, 11) + SourceIndex(0)
3 >Emitted(1, 20) Source(2, 12) + SourceIndex(0)
4 >Emitted(1, 21) Source(2, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(2, 2) Source(4, 2) + SourceIndex(0)
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
1->Emitted(3, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(3, 19) Source(6, 11) + SourceIndex(0)
3 >Emitted(3, 20) Source(6, 12) + SourceIndex(0)
4 >Emitted(3, 21) Source(6, 13) + SourceIndex(0)
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
1 >Emitted(4, 2) Source(12, 2) + SourceIndex(0)
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
1->"myPrologue2";
  >
2 >class 
3 >              C
1->Emitted(5, 1) Source(2, 1) + SourceIndex(1)
2 >Emitted(5, 15) Source(2, 7) + SourceIndex(1)
3 >Emitted(5, 16) Source(2, 8) + SourceIndex(1)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(6, 5) Source(3, 5) + SourceIndex(1)
2 >Emitted(6, 16) Source(3, 16) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(7, 2) Source(6, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.js]
"myPrologue";
"myPrologue2";
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
{"version":3,"file":"second-output.js","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ADKd,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC"}

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
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
2 >"myPrologue"
3 >            
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 13) Source(1, 13) + SourceIndex(0)
3 >Emitted(1, 14) Source(1, 13) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>"myPrologue2";
1->
2 >^^^^^^^^^^^^^
3 >             ^
1->
2 >"myPrologue2"
3 >             ;
1->Emitted(2, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(2, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(2, 15) Source(1, 15) + SourceIndex(1)
---
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
1 >"myPrologue"
  >namespace N {
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
1 >Emitted(3, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(6, 11) + SourceIndex(0)
3 >Emitted(3, 6) Source(6, 12) + SourceIndex(0)
4 >Emitted(3, 7) Source(12, 2) + SourceIndex(0)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(4, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(4, 12) Source(6, 11) + SourceIndex(0)
3 >Emitted(4, 13) Source(6, 12) + SourceIndex(0)
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
1->Emitted(5, 5) Source(7, 5) + SourceIndex(0)
2 >Emitted(5, 14) Source(7, 14) + SourceIndex(0)
3 >Emitted(5, 15) Source(7, 15) + SourceIndex(0)
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
1->Emitted(6, 9) Source(8, 9) + SourceIndex(0)
2 >Emitted(6, 16) Source(8, 16) + SourceIndex(0)
3 >Emitted(6, 17) Source(8, 17) + SourceIndex(0)
4 >Emitted(6, 20) Source(8, 20) + SourceIndex(0)
5 >Emitted(6, 21) Source(8, 21) + SourceIndex(0)
6 >Emitted(6, 30) Source(8, 30) + SourceIndex(0)
7 >Emitted(6, 31) Source(8, 31) + SourceIndex(0)
8 >Emitted(6, 32) Source(8, 32) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(7, 5) Source(9, 5) + SourceIndex(0)
2 >Emitted(7, 6) Source(9, 6) + SourceIndex(0)
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
1->Emitted(8, 5) Source(11, 5) + SourceIndex(0)
2 >Emitted(8, 6) Source(11, 6) + SourceIndex(0)
3 >Emitted(8, 8) Source(11, 8) + SourceIndex(0)
4 >Emitted(8, 9) Source(11, 9) + SourceIndex(0)
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
1->Emitted(9, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(9, 2) Source(12, 2) + SourceIndex(0)
3 >Emitted(9, 4) Source(6, 11) + SourceIndex(0)
4 >Emitted(9, 5) Source(6, 12) + SourceIndex(0)
5 >Emitted(9, 10) Source(6, 11) + SourceIndex(0)
6 >Emitted(9, 11) Source(6, 12) + SourceIndex(0)
7 >Emitted(9, 19) Source(12, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->"myPrologue2";
  >
1->Emitted(10, 1) Source(2, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(11, 5) Source(2, 1) + SourceIndex(1)
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
1->Emitted(12, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(12, 6) Source(6, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(13, 5) Source(3, 5) + SourceIndex(1)
2 >Emitted(13, 28) Source(3, 16) + SourceIndex(1)
3 >Emitted(13, 31) Source(3, 5) + SourceIndex(1)
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
1->Emitted(14, 9) Source(4, 9) + SourceIndex(1)
2 >Emitted(14, 16) Source(4, 16) + SourceIndex(1)
3 >Emitted(14, 17) Source(4, 17) + SourceIndex(1)
4 >Emitted(14, 20) Source(4, 20) + SourceIndex(1)
5 >Emitted(14, 21) Source(4, 21) + SourceIndex(1)
6 >Emitted(14, 41) Source(4, 41) + SourceIndex(1)
7 >Emitted(14, 42) Source(4, 42) + SourceIndex(1)
8 >Emitted(14, 43) Source(4, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(15, 5) Source(5, 5) + SourceIndex(1)
2 >Emitted(15, 6) Source(5, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(16, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(16, 13) Source(6, 2) + SourceIndex(1)
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
1 >Emitted(17, 1) Source(6, 1) + SourceIndex(1)
2 >Emitted(17, 2) Source(6, 2) + SourceIndex(1)
3 >Emitted(17, 2) Source(2, 1) + SourceIndex(1)
4 >Emitted(17, 6) Source(6, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../second","sourceFiles":["../second/second_part1.ts","../second/second_part2.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"myPrologue"},{"pos":15,"end":29,"kind":"prologue","data":"myPrologue2"},{"pos":31,"end":316,"kind":"text"}],"sources":{"prologues":[{"file":0,"text":"\"myPrologue\"","directives":[{"pos":0,"end":12,"expression":{"pos":0,"end":12,"text":"myPrologue"}}]},{"file":1,"text":"\"myPrologue2\";","directives":[{"pos":0,"end":14,"expression":{"pos":0,"end":13,"text":"myPrologue2"}}]}]},"mapHash":"12655227837-{\"version\":3,\"file\":\"second-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ADKd,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC\"}","hash":"-1429825924-\"myPrologue\";\r\n\"myPrologue2\";\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\n//# sourceMappingURL=second-output.js.map"},"dts":{"sections":[{"pos":0,"end":100,"kind":"text"}],"mapHash":"10908638301-{\"version\":3,\"file\":\"second-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AACA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd\"}","hash":"7752788385-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\n//# sourceMappingURL=second-output.d.ts.map"}},"program":{"fileNames":["../second/second_part1.ts","../second/second_part2.ts"],"fileInfos":["-5295626911-\"myPrologue\"\nnamespace N {\r\n    // Comment text\r\n}\r\n\r\nnamespace N {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n\r\n    f();\r\n}\r\n","18749993618-\"myPrologue2\";\nclass C {\r\n    doSomething() {\r\n        console.log(\"something got done\");\r\n    }\r\n}\r\n"],"options":{"composite":true,"outFile":"./second-output.js"},"outSignature":"7003440774-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\n","latestChangedDtsFile":"./second-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/2/second-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/2/second-output.js
----------------------------------------------------------------------
prologue: (0-13):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (15-29):: myPrologue2
"myPrologue2";
----------------------------------------------------------------------
text: (31-316)
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
          "end": 13,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 15,
          "end": 29,
          "kind": "prologue",
          "data": "myPrologue2"
        },
        {
          "pos": 31,
          "end": 316,
          "kind": "text"
        }
      ],
      "hash": "-1429825924-\"myPrologue\";\r\n\"myPrologue2\";\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\n//# sourceMappingURL=second-output.js.map",
      "mapHash": "12655227837-{\"version\":3,\"file\":\"second-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ADKd,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "\"myPrologue\"",
            "directives": [
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
            "file": 1,
            "text": "\"myPrologue2\";",
            "directives": [
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
          "end": 100,
          "kind": "text"
        }
      ],
      "hash": "7752788385-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\n//# sourceMappingURL=second-output.d.ts.map",
      "mapHash": "10908638301-{\"version\":3,\"file\":\"second-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AACA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd\"}"
    }
  },
  "program": {
    "fileNames": [
      "../second/second_part1.ts",
      "../second/second_part2.ts"
    ],
    "fileInfos": {
      "../second/second_part1.ts": "-5295626911-\"myPrologue\"\nnamespace N {\r\n    // Comment text\r\n}\r\n\r\nnamespace N {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n\r\n    f();\r\n}\r\n",
      "../second/second_part2.ts": "18749993618-\"myPrologue2\";\nclass C {\r\n    doSomething() {\r\n        console.log(\"something got done\");\r\n    }\r\n}\r\n"
    },
    "options": {
      "composite": true,
      "outFile": "./second-output.js"
    },
    "outSignature": "7003440774-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\n",
    "latestChangedDtsFile": "./second-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2677
}

//// [/src/first/bin/first-output.d.ts]
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
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET"}

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
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 19) + SourceIndex(0)
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
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
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
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
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
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
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
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
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
1->Emitted(8, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
"use strict";
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

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
>>>"use strict";
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(2, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(2, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(2, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(2, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(2, 24) Source(5, 26) + SourceIndex(0)
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
1 >Emitted(3, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(11, 16) + SourceIndex(0)
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
1->Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(4, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(4, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(4, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(4, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(4, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(4, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(4, 18) Source(1, 18) + SourceIndex(1)
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
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(2)
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
1->Emitted(6, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":125,"kind":"text"}],"sources":{"prologues":[{"file":0,"text":"","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}}]}]},"mapHash":"-18922522596-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\";AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}","hash":"20463836756-\"use strict\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\n//# sourceMappingURL=first-output.js.map"},"dts":{"sections":[{"pos":0,"end":157,"kind":"text"}],"mapHash":"28957120071-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}","hash":"-23350520794-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n//# sourceMappingURL=first-output.d.ts.map"}},"program":{"fileNames":["../first_part1.ts","../first_part2.ts","../first_part3.ts"],"fileInfos":["-17207381411-interface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\n","4973778178-console.log(f());\r\n","6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}"],"options":{"composite":true,"outFile":"./first-output.js"},"outSignature":"-16746818465-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n","latestChangedDtsFile":"./first-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
text: (15-125)
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
text: (0-157)
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 125,
          "kind": "text"
        }
      ],
      "hash": "20463836756-\"use strict\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\n//# sourceMappingURL=first-output.js.map",
      "mapHash": "-18922522596-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\";AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
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
          "end": 157,
          "kind": "text"
        }
      ],
      "hash": "-23350520794-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n//# sourceMappingURL=first-output.d.ts.map",
      "mapHash": "28957120071-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}"
    }
  },
  "program": {
    "fileNames": [
      "../first_part1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "fileInfos": {
      "../first_part1.ts": "-17207381411-interface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\n",
      "../first_part2.ts": "4973778178-console.log(f());\r\n",
      "../first_part3.ts": "6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}"
    },
    "options": {
      "composite": true,
      "outFile": "./first-output.js"
    },
    "outSignature": "-16746818465-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n",
    "latestChangedDtsFile": "./first-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2299
}

//// [/src/third/thirdjs/output/third-output.d.ts]
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
{"version":3,"file":"third-output.d.ts","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACRD,iBAAS,CAAC,WAET;ACDD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACLD,QAAA,IAAI,CAAC,GAAU,CAAC"}

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
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 19) + SourceIndex(0)
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
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
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
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
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
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
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
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
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
1->Emitted(8, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(1)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(1)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(1)
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
1 >"myPrologue"
  >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(9, 1) Source(2, 1) + SourceIndex(2)
2 >Emitted(9, 19) Source(2, 11) + SourceIndex(2)
3 >Emitted(9, 20) Source(2, 12) + SourceIndex(2)
4 >Emitted(9, 21) Source(2, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(10, 2) Source(4, 2) + SourceIndex(2)
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
1->Emitted(11, 1) Source(6, 1) + SourceIndex(2)
2 >Emitted(11, 19) Source(6, 11) + SourceIndex(2)
3 >Emitted(11, 20) Source(6, 12) + SourceIndex(2)
4 >Emitted(11, 21) Source(6, 13) + SourceIndex(2)
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
1 >Emitted(12, 2) Source(12, 2) + SourceIndex(2)
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
1->"myPrologue2";
  >
2 >class 
3 >              C
1->Emitted(13, 1) Source(2, 1) + SourceIndex(3)
2 >Emitted(13, 15) Source(2, 7) + SourceIndex(3)
3 >Emitted(13, 16) Source(2, 8) + SourceIndex(3)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(14, 5) Source(3, 5) + SourceIndex(3)
2 >Emitted(14, 16) Source(3, 16) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(15, 2) Source(6, 2) + SourceIndex(3)
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
1->Emitted(16, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(16, 9) Source(1, 1) + SourceIndex(4)
3 >Emitted(16, 13) Source(1, 5) + SourceIndex(4)
4 >Emitted(16, 14) Source(1, 6) + SourceIndex(4)
5 >Emitted(16, 17) Source(1, 16) + SourceIndex(4)
6 >Emitted(16, 18) Source(1, 17) + SourceIndex(4)
---
>>>//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.js]
"use strict";
"myPrologue";
"myPrologue2";
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
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../second/second_part1.ts","../../../second/second_part2.ts","../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../third_part1.ts"],"names":[],"mappings":";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ACId,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AJGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AILD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../second/second_part1.ts,../../../second/second_part2.ts,../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
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
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>"myPrologue2";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^->
1->
2 >"myPrologue2"
3 >             ;
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(3, 15) Source(1, 15) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1->interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(4, 5) Source(5, 7) + SourceIndex(2)
3 >Emitted(4, 6) Source(5, 8) + SourceIndex(2)
4 >Emitted(4, 9) Source(5, 11) + SourceIndex(2)
5 >Emitted(4, 23) Source(5, 25) + SourceIndex(2)
6 >Emitted(4, 24) Source(5, 26) + SourceIndex(2)
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
1 >Emitted(5, 1) Source(11, 1) + SourceIndex(2)
2 >Emitted(5, 8) Source(11, 8) + SourceIndex(2)
3 >Emitted(5, 9) Source(11, 9) + SourceIndex(2)
4 >Emitted(5, 12) Source(11, 12) + SourceIndex(2)
5 >Emitted(5, 13) Source(11, 13) + SourceIndex(2)
6 >Emitted(5, 14) Source(11, 14) + SourceIndex(2)
7 >Emitted(5, 15) Source(11, 15) + SourceIndex(2)
8 >Emitted(5, 16) Source(11, 16) + SourceIndex(2)
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
1->Emitted(6, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(6, 8) Source(1, 8) + SourceIndex(3)
3 >Emitted(6, 9) Source(1, 9) + SourceIndex(3)
4 >Emitted(6, 12) Source(1, 12) + SourceIndex(3)
5 >Emitted(6, 13) Source(1, 13) + SourceIndex(3)
6 >Emitted(6, 14) Source(1, 14) + SourceIndex(3)
7 >Emitted(6, 16) Source(1, 16) + SourceIndex(3)
8 >Emitted(6, 17) Source(1, 17) + SourceIndex(3)
9 >Emitted(6, 18) Source(1, 18) + SourceIndex(3)
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
1 >Emitted(7, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(7, 10) Source(1, 10) + SourceIndex(4)
3 >Emitted(7, 11) Source(1, 11) + SourceIndex(4)
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
1->Emitted(8, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(8, 12) Source(2, 12) + SourceIndex(4)
3 >Emitted(8, 28) Source(2, 28) + SourceIndex(4)
4 >Emitted(8, 29) Source(2, 29) + SourceIndex(4)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(9, 1) Source(3, 1) + SourceIndex(4)
2 >Emitted(9, 2) Source(3, 2) + SourceIndex(4)
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
1->"myPrologue"
  >namespace N {
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
1->Emitted(10, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(10, 5) Source(6, 11) + SourceIndex(0)
3 >Emitted(10, 6) Source(6, 12) + SourceIndex(0)
4 >Emitted(10, 7) Source(12, 2) + SourceIndex(0)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(11, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(11, 12) Source(6, 11) + SourceIndex(0)
3 >Emitted(11, 13) Source(6, 12) + SourceIndex(0)
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
1->Emitted(12, 5) Source(7, 5) + SourceIndex(0)
2 >Emitted(12, 14) Source(7, 14) + SourceIndex(0)
3 >Emitted(12, 15) Source(7, 15) + SourceIndex(0)
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
1->Emitted(13, 9) Source(8, 9) + SourceIndex(0)
2 >Emitted(13, 16) Source(8, 16) + SourceIndex(0)
3 >Emitted(13, 17) Source(8, 17) + SourceIndex(0)
4 >Emitted(13, 20) Source(8, 20) + SourceIndex(0)
5 >Emitted(13, 21) Source(8, 21) + SourceIndex(0)
6 >Emitted(13, 30) Source(8, 30) + SourceIndex(0)
7 >Emitted(13, 31) Source(8, 31) + SourceIndex(0)
8 >Emitted(13, 32) Source(8, 32) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(14, 5) Source(9, 5) + SourceIndex(0)
2 >Emitted(14, 6) Source(9, 6) + SourceIndex(0)
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
1->Emitted(15, 5) Source(11, 5) + SourceIndex(0)
2 >Emitted(15, 6) Source(11, 6) + SourceIndex(0)
3 >Emitted(15, 8) Source(11, 8) + SourceIndex(0)
4 >Emitted(15, 9) Source(11, 9) + SourceIndex(0)
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
1->Emitted(16, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(16, 2) Source(12, 2) + SourceIndex(0)
3 >Emitted(16, 4) Source(6, 11) + SourceIndex(0)
4 >Emitted(16, 5) Source(6, 12) + SourceIndex(0)
5 >Emitted(16, 10) Source(6, 11) + SourceIndex(0)
6 >Emitted(16, 11) Source(6, 12) + SourceIndex(0)
7 >Emitted(16, 19) Source(12, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->"myPrologue2";
  >
1->Emitted(17, 1) Source(2, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(18, 5) Source(2, 1) + SourceIndex(1)
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
1->Emitted(19, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(19, 6) Source(6, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(20, 5) Source(3, 5) + SourceIndex(1)
2 >Emitted(20, 28) Source(3, 16) + SourceIndex(1)
3 >Emitted(20, 31) Source(3, 5) + SourceIndex(1)
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
1->Emitted(21, 9) Source(4, 9) + SourceIndex(1)
2 >Emitted(21, 16) Source(4, 16) + SourceIndex(1)
3 >Emitted(21, 17) Source(4, 17) + SourceIndex(1)
4 >Emitted(21, 20) Source(4, 20) + SourceIndex(1)
5 >Emitted(21, 21) Source(4, 21) + SourceIndex(1)
6 >Emitted(21, 41) Source(4, 41) + SourceIndex(1)
7 >Emitted(21, 42) Source(4, 42) + SourceIndex(1)
8 >Emitted(21, 43) Source(4, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(22, 5) Source(5, 5) + SourceIndex(1)
2 >Emitted(22, 6) Source(5, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(23, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(23, 13) Source(6, 2) + SourceIndex(1)
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
1 >Emitted(24, 1) Source(6, 1) + SourceIndex(1)
2 >Emitted(24, 2) Source(6, 2) + SourceIndex(1)
3 >Emitted(24, 2) Source(2, 1) + SourceIndex(1)
4 >Emitted(24, 6) Source(6, 2) + SourceIndex(1)
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
1->Emitted(25, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(25, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(25, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(25, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(25, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(25, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(25, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(25, 17) Source(1, 17) + SourceIndex(5)
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
1->Emitted(26, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(26, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(26, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(26, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(26, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(26, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../..","sourceFiles":["../../third_part1.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":28,"kind":"prologue","data":"myPrologue"},{"pos":30,"end":44,"kind":"prologue","data":"myPrologue2"},{"pos":46,"end":156,"kind":"prepend","data":"../../../first/bin/first-output.js","texts":[{"pos":46,"end":156,"kind":"text"}]},{"pos":156,"end":441,"kind":"prepend","data":"../../../2/second-output.js","texts":[{"pos":156,"end":441,"kind":"text"}]},{"pos":441,"end":477,"kind":"text"}],"sources":{"prologues":[{"file":0,"text":"","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}}]}]},"mapHash":"40081010550-{\"version\":3,\"file\":\"third-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../../first/first_PART1.ts\",\"../../../first/first_part2.ts\",\"../../../first/first_part3.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ACId,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AJGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AILD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC\"}","hash":"-21898750067-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue2\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\nvar c = new C();\r\nc.doSomething();\r\n//# sourceMappingURL=third-output.js.map"},"dts":{"sections":[{"pos":0,"end":157,"kind":"prepend","data":"../../../first/bin/first-output.d.ts","texts":[{"pos":0,"end":157,"kind":"text"}]},{"pos":157,"end":257,"kind":"prepend","data":"../../../2/second-output.d.ts","texts":[{"pos":157,"end":257,"kind":"text"}]},{"pos":257,"end":276,"kind":"text"}],"mapHash":"89480535-{\"version\":3,\"file\":\"third-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACRD,iBAAS,CAAC,WAET;ACDD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACLD,QAAA,IAAI,CAAC,GAAU,CAAC\"}","hash":"-16365524283-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n//# sourceMappingURL=third-output.d.ts.map"}},"program":{"fileNames":["../../third_part1.ts"],"fileInfos":["10470273651-var c = new C();\r\nc.doSomething();\r\n"],"options":{"composite":true,"outFile":"./third-output.js"},"outSignature":"-6891480629-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n","latestChangedDtsFile":"./third-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-28):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (30-44):: myPrologue2
"myPrologue2";
----------------------------------------------------------------------
prepend: (46-156):: ../../../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (46-156)
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
prepend: (156-441):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (156-441)
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
text: (441-477)
var c = new C();
c.doSomething();

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-157):: ../../../first/bin/first-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-157)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
prepend: (157-257):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (157-257)
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
text: (257-276)
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
          "data": "myPrologue2"
        },
        {
          "pos": 46,
          "end": 156,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.js",
          "texts": [
            {
              "pos": 46,
              "end": 156,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 156,
          "end": 441,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 156,
              "end": 441,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 441,
          "end": 477,
          "kind": "text"
        }
      ],
      "hash": "-21898750067-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue2\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\nvar c = new C();\r\nc.doSomething();\r\n//# sourceMappingURL=third-output.js.map",
      "mapHash": "40081010550-{\"version\":3,\"file\":\"third-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../../first/first_PART1.ts\",\"../../../first/first_part2.ts\",\"../../../first/first_part3.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ACId,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AJGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AILD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
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
          "end": 157,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 157,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 157,
          "end": 257,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 157,
              "end": 257,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 257,
          "end": 276,
          "kind": "text"
        }
      ],
      "hash": "-16365524283-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n//# sourceMappingURL=third-output.d.ts.map",
      "mapHash": "89480535-{\"version\":3,\"file\":\"third-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACRD,iBAAS,CAAC,WAET;ACDD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACLD,QAAA,IAAI,CAAC,GAAU,CAAC\"}"
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
    "outSignature": "-6891480629-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n",
    "latestChangedDtsFile": "./third-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 4002
}



Change:: incremental-declaration-doesnt-change
Input::
//// [/src/first/first_PART1.ts]
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
console.log(s);



Output::
/lib/tsc --b /src/third --verbose
[[90m12:00:52 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:00:53 AM[0m] Project 'src/first/tsconfig.json' is out of date because output 'src/first/bin/first-output.tsbuildinfo' is older than input 'src/first/first_PART1.ts'

[[90m12:00:54 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:01:02 AM[0m] Project 'src/second/tsconfig.json' is up to date because newest input 'src/second/second_part2.ts' is older than output 'src/2/second-output.tsbuildinfo'

[[90m12:01:03 AM[0m] Project 'src/third/tsconfig.json' is out of date because output of its dependency 'src/first' has changed

[[90m12:01:04 AM[0m] Updating output of project '/src/third/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/first/bin/first-output.d.ts.map] file written with same contents
//// [/src/first/bin/first-output.d.ts.map.baseline.txt] file written with same contents
//// [/src/first/bin/first-output.js]
"use strict";
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

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
>>>"use strict";
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(2, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(2, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(2, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(2, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(2, 24) Source(5, 26) + SourceIndex(0)
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
9 >               ^->
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
1 >Emitted(3, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(4, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(4, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(4, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(4, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(4, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(4, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(4, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(4, 16) Source(12, 16) + SourceIndex(0)
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
1->Emitted(5, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(5, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(5, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(5, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(5, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(5, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(5, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(5, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(5, 18) Source(1, 18) + SourceIndex(1)
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
1 >Emitted(6, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(6, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(6, 11) Source(1, 11) + SourceIndex(2)
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
1->Emitted(7, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(7, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(7, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(7, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(8, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(8, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":142,"kind":"text"}],"sources":{"prologues":[{"file":0,"text":"","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}}]}]},"mapHash":"-4938209840-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\";AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}","hash":"12866242701-\"use strict\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\n//# sourceMappingURL=first-output.js.map"},"dts":{"sections":[{"pos":0,"end":157,"kind":"text"}],"mapHash":"28957120071-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}","hash":"-23350520794-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n//# sourceMappingURL=first-output.d.ts.map"}},"program":{"fileNames":["../first_part1.ts","../first_part2.ts","../first_part3.ts"],"fileInfos":["-16950965473-interface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\nconsole.log(s);","4973778178-console.log(f());\r\n","6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}"],"options":{"composite":true,"outFile":"./first-output.js"},"outSignature":"-16746818465-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n","latestChangedDtsFile":"./first-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
text: (15-142)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-157)
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 142,
          "kind": "text"
        }
      ],
      "hash": "12866242701-\"use strict\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\n//# sourceMappingURL=first-output.js.map",
      "mapHash": "-4938209840-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\";AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
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
          "end": 157,
          "kind": "text"
        }
      ],
      "hash": "-23350520794-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n//# sourceMappingURL=first-output.d.ts.map",
      "mapHash": "28957120071-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}"
    }
  },
  "program": {
    "fileNames": [
      "../first_part1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "fileInfos": {
      "../first_part1.ts": "-16950965473-interface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\nconsole.log(s);",
      "../first_part2.ts": "4973778178-console.log(f());\r\n",
      "../first_part3.ts": "6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}"
    },
    "options": {
      "composite": true,
      "outFile": "./first-output.js"
    },
    "outSignature": "-16746818465-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n",
    "latestChangedDtsFile": "./first-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2372
}

//// [/src/third/thirdjs/output/third-output.js]
"use strict";
"myPrologue";
"myPrologue2";
var s = "Hello, world";
console.log(s);
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
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../second/second_part1.ts","../../../second/second_part2.ts","../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../third_part1.ts"],"names":[],"mappings":";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ACId,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AJGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AILD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../second/second_part1.ts,../../../second/second_part2.ts,../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
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
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>"myPrologue2";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^->
1->
2 >"myPrologue2"
3 >             ;
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(3, 15) Source(1, 15) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1->interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(4, 5) Source(5, 7) + SourceIndex(2)
3 >Emitted(4, 6) Source(5, 8) + SourceIndex(2)
4 >Emitted(4, 9) Source(5, 11) + SourceIndex(2)
5 >Emitted(4, 23) Source(5, 25) + SourceIndex(2)
6 >Emitted(4, 24) Source(5, 26) + SourceIndex(2)
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
9 >               ^->
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
1 >Emitted(5, 1) Source(11, 1) + SourceIndex(2)
2 >Emitted(5, 8) Source(11, 8) + SourceIndex(2)
3 >Emitted(5, 9) Source(11, 9) + SourceIndex(2)
4 >Emitted(5, 12) Source(11, 12) + SourceIndex(2)
5 >Emitted(5, 13) Source(11, 13) + SourceIndex(2)
6 >Emitted(5, 14) Source(11, 14) + SourceIndex(2)
7 >Emitted(5, 15) Source(11, 15) + SourceIndex(2)
8 >Emitted(5, 16) Source(11, 16) + SourceIndex(2)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(6, 1) Source(12, 1) + SourceIndex(2)
2 >Emitted(6, 8) Source(12, 8) + SourceIndex(2)
3 >Emitted(6, 9) Source(12, 9) + SourceIndex(2)
4 >Emitted(6, 12) Source(12, 12) + SourceIndex(2)
5 >Emitted(6, 13) Source(12, 13) + SourceIndex(2)
6 >Emitted(6, 14) Source(12, 14) + SourceIndex(2)
7 >Emitted(6, 15) Source(12, 15) + SourceIndex(2)
8 >Emitted(6, 16) Source(12, 16) + SourceIndex(2)
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
1->Emitted(7, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(7, 8) Source(1, 8) + SourceIndex(3)
3 >Emitted(7, 9) Source(1, 9) + SourceIndex(3)
4 >Emitted(7, 12) Source(1, 12) + SourceIndex(3)
5 >Emitted(7, 13) Source(1, 13) + SourceIndex(3)
6 >Emitted(7, 14) Source(1, 14) + SourceIndex(3)
7 >Emitted(7, 16) Source(1, 16) + SourceIndex(3)
8 >Emitted(7, 17) Source(1, 17) + SourceIndex(3)
9 >Emitted(7, 18) Source(1, 18) + SourceIndex(3)
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
1 >Emitted(8, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(8, 10) Source(1, 10) + SourceIndex(4)
3 >Emitted(8, 11) Source(1, 11) + SourceIndex(4)
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
1->Emitted(9, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(9, 12) Source(2, 12) + SourceIndex(4)
3 >Emitted(9, 28) Source(2, 28) + SourceIndex(4)
4 >Emitted(9, 29) Source(2, 29) + SourceIndex(4)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(10, 1) Source(3, 1) + SourceIndex(4)
2 >Emitted(10, 2) Source(3, 2) + SourceIndex(4)
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
1->"myPrologue"
  >namespace N {
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
1->Emitted(11, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(11, 5) Source(6, 11) + SourceIndex(0)
3 >Emitted(11, 6) Source(6, 12) + SourceIndex(0)
4 >Emitted(11, 7) Source(12, 2) + SourceIndex(0)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(12, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(12, 12) Source(6, 11) + SourceIndex(0)
3 >Emitted(12, 13) Source(6, 12) + SourceIndex(0)
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
1->Emitted(13, 5) Source(7, 5) + SourceIndex(0)
2 >Emitted(13, 14) Source(7, 14) + SourceIndex(0)
3 >Emitted(13, 15) Source(7, 15) + SourceIndex(0)
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
1->Emitted(14, 9) Source(8, 9) + SourceIndex(0)
2 >Emitted(14, 16) Source(8, 16) + SourceIndex(0)
3 >Emitted(14, 17) Source(8, 17) + SourceIndex(0)
4 >Emitted(14, 20) Source(8, 20) + SourceIndex(0)
5 >Emitted(14, 21) Source(8, 21) + SourceIndex(0)
6 >Emitted(14, 30) Source(8, 30) + SourceIndex(0)
7 >Emitted(14, 31) Source(8, 31) + SourceIndex(0)
8 >Emitted(14, 32) Source(8, 32) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(15, 5) Source(9, 5) + SourceIndex(0)
2 >Emitted(15, 6) Source(9, 6) + SourceIndex(0)
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
1->Emitted(16, 5) Source(11, 5) + SourceIndex(0)
2 >Emitted(16, 6) Source(11, 6) + SourceIndex(0)
3 >Emitted(16, 8) Source(11, 8) + SourceIndex(0)
4 >Emitted(16, 9) Source(11, 9) + SourceIndex(0)
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
1->Emitted(17, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(17, 2) Source(12, 2) + SourceIndex(0)
3 >Emitted(17, 4) Source(6, 11) + SourceIndex(0)
4 >Emitted(17, 5) Source(6, 12) + SourceIndex(0)
5 >Emitted(17, 10) Source(6, 11) + SourceIndex(0)
6 >Emitted(17, 11) Source(6, 12) + SourceIndex(0)
7 >Emitted(17, 19) Source(12, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->"myPrologue2";
  >
1->Emitted(18, 1) Source(2, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(19, 5) Source(2, 1) + SourceIndex(1)
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
1->Emitted(20, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(20, 6) Source(6, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(21, 5) Source(3, 5) + SourceIndex(1)
2 >Emitted(21, 28) Source(3, 16) + SourceIndex(1)
3 >Emitted(21, 31) Source(3, 5) + SourceIndex(1)
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
1->Emitted(22, 9) Source(4, 9) + SourceIndex(1)
2 >Emitted(22, 16) Source(4, 16) + SourceIndex(1)
3 >Emitted(22, 17) Source(4, 17) + SourceIndex(1)
4 >Emitted(22, 20) Source(4, 20) + SourceIndex(1)
5 >Emitted(22, 21) Source(4, 21) + SourceIndex(1)
6 >Emitted(22, 41) Source(4, 41) + SourceIndex(1)
7 >Emitted(22, 42) Source(4, 42) + SourceIndex(1)
8 >Emitted(22, 43) Source(4, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(23, 5) Source(5, 5) + SourceIndex(1)
2 >Emitted(23, 6) Source(5, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(24, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(24, 13) Source(6, 2) + SourceIndex(1)
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
1 >Emitted(25, 1) Source(6, 1) + SourceIndex(1)
2 >Emitted(25, 2) Source(6, 2) + SourceIndex(1)
3 >Emitted(25, 2) Source(2, 1) + SourceIndex(1)
4 >Emitted(25, 6) Source(6, 2) + SourceIndex(1)
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
1->Emitted(26, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(26, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(26, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(26, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(26, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(26, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(26, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(26, 17) Source(1, 17) + SourceIndex(5)
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
1->Emitted(27, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(27, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(27, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(27, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(27, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(27, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../..","sourceFiles":["../../third_part1.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":28,"kind":"prologue","data":"myPrologue"},{"pos":30,"end":44,"kind":"prologue","data":"myPrologue2"},{"pos":46,"end":173,"kind":"prepend","data":"../../../first/bin/first-output.js","texts":[{"pos":46,"end":173,"kind":"text"}]},{"pos":173,"end":458,"kind":"prepend","data":"../../../2/second-output.js","texts":[{"pos":173,"end":458,"kind":"text"}]},{"pos":458,"end":494,"kind":"text"}],"mapHash":"-40026203606-{\"version\":3,\"file\":\"third-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../../first/first_PART1.ts\",\"../../../first/first_part2.ts\",\"../../../first/first_part3.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ACId,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AJGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AILD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC\"}","hash":"-19850184346-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue2\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\nvar c = new C();\r\nc.doSomething();\r\n//# sourceMappingURL=third-output.js.map","sources":{"prologues":[{"file":0,"text":"","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}}]}]}},"dts":{"sections":[{"pos":0,"end":157,"kind":"prepend","data":"../../../first/bin/first-output.d.ts","texts":[{"pos":0,"end":157,"kind":"text"}]},{"pos":157,"end":257,"kind":"prepend","data":"../../../2/second-output.d.ts","texts":[{"pos":157,"end":257,"kind":"text"}]},{"pos":257,"end":276,"kind":"text"}],"mapHash":"89480535-{\"version\":3,\"file\":\"third-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACRD,iBAAS,CAAC,WAET;ACDD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACLD,QAAA,IAAI,CAAC,GAAU,CAAC\"}","hash":"-16365524283-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n//# sourceMappingURL=third-output.d.ts.map"}},"program":{"fileNames":["../../third_part1.ts"],"fileInfos":["10470273651-var c = new C();\r\nc.doSomething();\r\n"],"options":{"composite":true,"outFile":"./third-output.js"},"outSignature":"-6891480629-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n","latestChangedDtsFile":"./third-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-28):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (30-44):: myPrologue2
"myPrologue2";
----------------------------------------------------------------------
prepend: (46-173):: ../../../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (46-173)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
prepend: (173-458):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (173-458)
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
text: (458-494)
var c = new C();
c.doSomething();

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-157):: ../../../first/bin/first-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-157)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
prepend: (157-257):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (157-257)
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
text: (257-276)
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
          "data": "myPrologue2"
        },
        {
          "pos": 46,
          "end": 173,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.js",
          "texts": [
            {
              "pos": 46,
              "end": 173,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 173,
          "end": 458,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 173,
              "end": 458,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 458,
          "end": 494,
          "kind": "text"
        }
      ],
      "hash": "-19850184346-\"use strict\";\r\n\"myPrologue\";\r\n\"myPrologue2\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\nvar c = new C();\r\nc.doSomething();\r\n//# sourceMappingURL=third-output.js.map",
      "mapHash": "-40026203606-{\"version\":3,\"file\":\"third-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../../first/first_PART1.ts\",\"../../../first/first_part2.ts\",\"../../../first/first_part3.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ACId,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AJGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AILD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
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
          "end": 157,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 157,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 157,
          "end": 257,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 157,
              "end": 257,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 257,
          "end": 276,
          "kind": "text"
        }
      ],
      "hash": "-16365524283-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n//# sourceMappingURL=third-output.d.ts.map",
      "mapHash": "89480535-{\"version\":3,\"file\":\"third-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACRD,iBAAS,CAAC,WAET;ACDD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACLD,QAAA,IAAI,CAAC,GAAU,CAAC\"}"
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
    "outSignature": "-6891480629-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n",
    "latestChangedDtsFile": "./third-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 4062
}



Change:: incremental-headers-change-without-dts-changes
Input::
//// [/src/first/first_PART1.ts]
"myPrologue5"
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
console.log(s);



Output::
/lib/tsc --b /src/third --verbose
[[90m12:01:15 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:01:16 AM[0m] Project 'src/first/tsconfig.json' is out of date because output 'src/first/bin/first-output.tsbuildinfo' is older than input 'src/first/first_PART1.ts'

[[90m12:01:17 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:01:25 AM[0m] Project 'src/second/tsconfig.json' is up to date because newest input 'src/second/second_part2.ts' is older than output 'src/2/second-output.tsbuildinfo'

[[90m12:01:26 AM[0m] Project 'src/third/tsconfig.json' is out of date because output of its dependency 'src/first' has changed

[[90m12:01:27 AM[0m] Updating output of project '/src/third/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AACA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AETD,iBAAS,CAAC,WAET"}

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
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >"myPrologue5"
  >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(2, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(2, 19) + SourceIndex(0)
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
1 >Emitted(2, 5) Source(3, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(3, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(3, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(3, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(3, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(4, 2) + SourceIndex(0)
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
1->Emitted(4, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(6, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(6, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(6, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(6, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(6, 26) + SourceIndex(0)
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
1 >Emitted(5, 1) Source(8, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(8, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(8, 28) + SourceIndex(0)
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
1 >Emitted(6, 5) Source(9, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(9, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(9, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(9, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(9, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(10, 2) + SourceIndex(0)
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
1->Emitted(8, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
"use strict";
"myPrologue5";
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";AAAA,aAAa,CAAA;AAKb,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACZf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

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
>>>"use strict";
>>>"myPrologue5";
1 >
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^->
1 >
2 >"myPrologue5"
3 >             
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 14) Source(1, 14) + SourceIndex(0)
3 >Emitted(2, 15) Source(1, 14) + SourceIndex(0)
---
>>>var s = "Hello, world";
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1->
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
1->Emitted(3, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(6, 7) + SourceIndex(0)
3 >Emitted(3, 6) Source(6, 8) + SourceIndex(0)
4 >Emitted(3, 9) Source(6, 11) + SourceIndex(0)
5 >Emitted(3, 23) Source(6, 25) + SourceIndex(0)
6 >Emitted(3, 24) Source(6, 26) + SourceIndex(0)
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
9 >               ^->
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
1 >Emitted(4, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(4, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(4, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(4, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(4, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(4, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(4, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(4, 16) Source(12, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(5, 1) Source(13, 1) + SourceIndex(0)
2 >Emitted(5, 8) Source(13, 8) + SourceIndex(0)
3 >Emitted(5, 9) Source(13, 9) + SourceIndex(0)
4 >Emitted(5, 12) Source(13, 12) + SourceIndex(0)
5 >Emitted(5, 13) Source(13, 13) + SourceIndex(0)
6 >Emitted(5, 14) Source(13, 14) + SourceIndex(0)
7 >Emitted(5, 15) Source(13, 15) + SourceIndex(0)
8 >Emitted(5, 16) Source(13, 16) + SourceIndex(0)
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
1->Emitted(6, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(6, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(6, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(6, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(6, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(6, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(6, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(6, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(6, 18) Source(1, 18) + SourceIndex(1)
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
1 >Emitted(7, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(7, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(7, 11) Source(1, 11) + SourceIndex(2)
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
1->Emitted(8, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(8, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(8, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(8, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(9, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(9, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":29,"kind":"prologue","data":"myPrologue5"},{"pos":31,"end":158,"kind":"text"}],"sources":{"prologues":[{"file":0,"text":"\"myPrologue5\"","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}},{"pos":0,"end":13,"expression":{"pos":0,"end":13,"text":"myPrologue5"}}]}]},"mapHash":"-25421726346-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\";AAAA,aAAa,CAAA;AAKb,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACZf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}","hash":"17340827019-\"use strict\";\r\n\"myPrologue5\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\n//# sourceMappingURL=first-output.js.map"},"dts":{"sections":[{"pos":0,"end":157,"kind":"text"}],"mapHash":"18068494155-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AACA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AETD,iBAAS,CAAC,WAET\"}","hash":"-23350520794-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n//# sourceMappingURL=first-output.d.ts.map"}},"program":{"fileNames":["../first_part1.ts","../first_part2.ts","../first_part3.ts"],"fileInfos":["-2496167435-\"myPrologue5\"\ninterface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\nconsole.log(s);","4973778178-console.log(f());\r\n","6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}"],"options":{"composite":true,"outFile":"./first-output.js"},"outSignature":"-16746818465-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n","latestChangedDtsFile":"./first-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-29):: myPrologue5
"myPrologue5";
----------------------------------------------------------------------
text: (31-158)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-157)
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 29,
          "kind": "prologue",
          "data": "myPrologue5"
        },
        {
          "pos": 31,
          "end": 158,
          "kind": "text"
        }
      ],
      "hash": "17340827019-\"use strict\";\r\n\"myPrologue5\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\n//# sourceMappingURL=first-output.js.map",
      "mapHash": "-25421726346-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\";AAAA,aAAa,CAAA;AAKb,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACZf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "\"myPrologue5\"",
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
                "end": 13,
                "expression": {
                  "pos": 0,
                  "end": 13,
                  "text": "myPrologue5"
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
          "end": 157,
          "kind": "text"
        }
      ],
      "hash": "-23350520794-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n//# sourceMappingURL=first-output.d.ts.map",
      "mapHash": "18068494155-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AACA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AETD,iBAAS,CAAC,WAET\"}"
    }
  },
  "program": {
    "fileNames": [
      "../first_part1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "fileInfos": {
      "../first_part1.ts": "-2496167435-\"myPrologue5\"\ninterface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\nconsole.log(s);",
      "../first_part2.ts": "4973778178-console.log(f());\r\n",
      "../first_part3.ts": "6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}"
    },
    "options": {
      "composite": true,
      "outFile": "./first-output.js"
    },
    "outSignature": "-16746818465-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\n",
    "latestChangedDtsFile": "./first-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2570
}

//// [/src/third/thirdjs/output/third-output.d.ts.map]
{"version":3,"file":"third-output.d.ts","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AACA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACTD,iBAAS,CAAC,WAET;ACDD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACLD,QAAA,IAAI,CAAC,GAAU,CAAC"}

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
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >"myPrologue5"
  >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(2, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(2, 19) + SourceIndex(0)
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
1 >Emitted(2, 5) Source(3, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(3, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(3, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(3, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(3, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(4, 2) + SourceIndex(0)
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
1->Emitted(4, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(6, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(6, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(6, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(6, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(6, 26) + SourceIndex(0)
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
1 >Emitted(5, 1) Source(8, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(8, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(8, 28) + SourceIndex(0)
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
1 >Emitted(6, 5) Source(9, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(9, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(9, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(9, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(9, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(10, 2) + SourceIndex(0)
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
1->Emitted(8, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(1)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(1)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(1)
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
1 >"myPrologue"
  >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(9, 1) Source(2, 1) + SourceIndex(2)
2 >Emitted(9, 19) Source(2, 11) + SourceIndex(2)
3 >Emitted(9, 20) Source(2, 12) + SourceIndex(2)
4 >Emitted(9, 21) Source(2, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(10, 2) Source(4, 2) + SourceIndex(2)
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
1->Emitted(11, 1) Source(6, 1) + SourceIndex(2)
2 >Emitted(11, 19) Source(6, 11) + SourceIndex(2)
3 >Emitted(11, 20) Source(6, 12) + SourceIndex(2)
4 >Emitted(11, 21) Source(6, 13) + SourceIndex(2)
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
1 >Emitted(12, 2) Source(12, 2) + SourceIndex(2)
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
1->"myPrologue2";
  >
2 >class 
3 >              C
1->Emitted(13, 1) Source(2, 1) + SourceIndex(3)
2 >Emitted(13, 15) Source(2, 7) + SourceIndex(3)
3 >Emitted(13, 16) Source(2, 8) + SourceIndex(3)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(14, 5) Source(3, 5) + SourceIndex(3)
2 >Emitted(14, 16) Source(3, 16) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(15, 2) Source(6, 2) + SourceIndex(3)
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
1->Emitted(16, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(16, 9) Source(1, 1) + SourceIndex(4)
3 >Emitted(16, 13) Source(1, 5) + SourceIndex(4)
4 >Emitted(16, 14) Source(1, 6) + SourceIndex(4)
5 >Emitted(16, 17) Source(1, 16) + SourceIndex(4)
6 >Emitted(16, 18) Source(1, 17) + SourceIndex(4)
---
>>>//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.js]
"use strict";
"myPrologue5";
"myPrologue";
"myPrologue2";
var s = "Hello, world";
console.log(s);
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
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../third_part1.ts"],"names":[],"mappings":";AAAA,aAAa,CAAA;ACAb,YAAY,CAAA;ACAZ,aAAa,CAAC;AFKd,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AGZf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AHGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AGLD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue5";
1 >
2 >^^^^^^^^^^^^^
3 >             ^
1 >
2 >"myPrologue5"
3 >             
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 14) Source(1, 14) + SourceIndex(0)
3 >Emitted(2, 15) Source(1, 14) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
2 >"myPrologue"
3 >            
1 >Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 13) Source(1, 13) + SourceIndex(1)
3 >Emitted(3, 14) Source(1, 13) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>"myPrologue2";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^->
1->
2 >"myPrologue2"
3 >             ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(4, 14) Source(1, 14) + SourceIndex(2)
3 >Emitted(4, 15) Source(1, 15) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1->"myPrologue5"
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
1->Emitted(5, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(5, 5) Source(6, 7) + SourceIndex(0)
3 >Emitted(5, 6) Source(6, 8) + SourceIndex(0)
4 >Emitted(5, 9) Source(6, 11) + SourceIndex(0)
5 >Emitted(5, 23) Source(6, 25) + SourceIndex(0)
6 >Emitted(5, 24) Source(6, 26) + SourceIndex(0)
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
9 >               ^->
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
1 >Emitted(6, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(6, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(6, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(6, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(6, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(6, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(6, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(6, 16) Source(12, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(7, 1) Source(13, 1) + SourceIndex(0)
2 >Emitted(7, 8) Source(13, 8) + SourceIndex(0)
3 >Emitted(7, 9) Source(13, 9) + SourceIndex(0)
4 >Emitted(7, 12) Source(13, 12) + SourceIndex(0)
5 >Emitted(7, 13) Source(13, 13) + SourceIndex(0)
6 >Emitted(7, 14) Source(13, 14) + SourceIndex(0)
7 >Emitted(7, 15) Source(13, 15) + SourceIndex(0)
8 >Emitted(7, 16) Source(13, 16) + SourceIndex(0)
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
1->Emitted(8, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(8, 8) Source(1, 8) + SourceIndex(3)
3 >Emitted(8, 9) Source(1, 9) + SourceIndex(3)
4 >Emitted(8, 12) Source(1, 12) + SourceIndex(3)
5 >Emitted(8, 13) Source(1, 13) + SourceIndex(3)
6 >Emitted(8, 14) Source(1, 14) + SourceIndex(3)
7 >Emitted(8, 16) Source(1, 16) + SourceIndex(3)
8 >Emitted(8, 17) Source(1, 17) + SourceIndex(3)
9 >Emitted(8, 18) Source(1, 18) + SourceIndex(3)
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
1 >Emitted(9, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(9, 10) Source(1, 10) + SourceIndex(4)
3 >Emitted(9, 11) Source(1, 11) + SourceIndex(4)
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
1->Emitted(10, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(10, 12) Source(2, 12) + SourceIndex(4)
3 >Emitted(10, 28) Source(2, 28) + SourceIndex(4)
4 >Emitted(10, 29) Source(2, 29) + SourceIndex(4)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(11, 1) Source(3, 1) + SourceIndex(4)
2 >Emitted(11, 2) Source(3, 2) + SourceIndex(4)
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
1->"myPrologue"
  >namespace N {
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
1->Emitted(12, 1) Source(6, 1) + SourceIndex(1)
2 >Emitted(12, 5) Source(6, 11) + SourceIndex(1)
3 >Emitted(12, 6) Source(6, 12) + SourceIndex(1)
4 >Emitted(12, 7) Source(12, 2) + SourceIndex(1)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(13, 1) Source(6, 1) + SourceIndex(1)
2 >Emitted(13, 12) Source(6, 11) + SourceIndex(1)
3 >Emitted(13, 13) Source(6, 12) + SourceIndex(1)
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
1->Emitted(14, 5) Source(7, 5) + SourceIndex(1)
2 >Emitted(14, 14) Source(7, 14) + SourceIndex(1)
3 >Emitted(14, 15) Source(7, 15) + SourceIndex(1)
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
1->Emitted(15, 9) Source(8, 9) + SourceIndex(1)
2 >Emitted(15, 16) Source(8, 16) + SourceIndex(1)
3 >Emitted(15, 17) Source(8, 17) + SourceIndex(1)
4 >Emitted(15, 20) Source(8, 20) + SourceIndex(1)
5 >Emitted(15, 21) Source(8, 21) + SourceIndex(1)
6 >Emitted(15, 30) Source(8, 30) + SourceIndex(1)
7 >Emitted(15, 31) Source(8, 31) + SourceIndex(1)
8 >Emitted(15, 32) Source(8, 32) + SourceIndex(1)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(16, 5) Source(9, 5) + SourceIndex(1)
2 >Emitted(16, 6) Source(9, 6) + SourceIndex(1)
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
1->Emitted(17, 5) Source(11, 5) + SourceIndex(1)
2 >Emitted(17, 6) Source(11, 6) + SourceIndex(1)
3 >Emitted(17, 8) Source(11, 8) + SourceIndex(1)
4 >Emitted(17, 9) Source(11, 9) + SourceIndex(1)
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
1->Emitted(18, 1) Source(12, 1) + SourceIndex(1)
2 >Emitted(18, 2) Source(12, 2) + SourceIndex(1)
3 >Emitted(18, 4) Source(6, 11) + SourceIndex(1)
4 >Emitted(18, 5) Source(6, 12) + SourceIndex(1)
5 >Emitted(18, 10) Source(6, 11) + SourceIndex(1)
6 >Emitted(18, 11) Source(6, 12) + SourceIndex(1)
7 >Emitted(18, 19) Source(12, 2) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->"myPrologue2";
  >
1->Emitted(19, 1) Source(2, 1) + SourceIndex(2)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(20, 5) Source(2, 1) + SourceIndex(2)
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
1->Emitted(21, 5) Source(6, 1) + SourceIndex(2)
2 >Emitted(21, 6) Source(6, 2) + SourceIndex(2)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(22, 5) Source(3, 5) + SourceIndex(2)
2 >Emitted(22, 28) Source(3, 16) + SourceIndex(2)
3 >Emitted(22, 31) Source(3, 5) + SourceIndex(2)
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
1->Emitted(23, 9) Source(4, 9) + SourceIndex(2)
2 >Emitted(23, 16) Source(4, 16) + SourceIndex(2)
3 >Emitted(23, 17) Source(4, 17) + SourceIndex(2)
4 >Emitted(23, 20) Source(4, 20) + SourceIndex(2)
5 >Emitted(23, 21) Source(4, 21) + SourceIndex(2)
6 >Emitted(23, 41) Source(4, 41) + SourceIndex(2)
7 >Emitted(23, 42) Source(4, 42) + SourceIndex(2)
8 >Emitted(23, 43) Source(4, 43) + SourceIndex(2)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(24, 5) Source(5, 5) + SourceIndex(2)
2 >Emitted(24, 6) Source(5, 6) + SourceIndex(2)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(25, 5) Source(6, 1) + SourceIndex(2)
2 >Emitted(25, 13) Source(6, 2) + SourceIndex(2)
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
1 >Emitted(26, 1) Source(6, 1) + SourceIndex(2)
2 >Emitted(26, 2) Source(6, 2) + SourceIndex(2)
3 >Emitted(26, 2) Source(2, 1) + SourceIndex(2)
4 >Emitted(26, 6) Source(6, 2) + SourceIndex(2)
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
1->Emitted(27, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(27, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(27, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(27, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(27, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(27, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(27, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(27, 17) Source(1, 17) + SourceIndex(5)
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
1->Emitted(28, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(28, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(28, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(28, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(28, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(28, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../..","sourceFiles":["../../third_part1.ts"],"js":{"sections":[{"pos":0,"end":13,"kind":"prologue","data":"use strict"},{"pos":15,"end":29,"kind":"prologue","data":"myPrologue5"},{"pos":31,"end":44,"kind":"prologue","data":"myPrologue"},{"pos":46,"end":60,"kind":"prologue","data":"myPrologue2"},{"pos":62,"end":189,"kind":"prepend","data":"../../../first/bin/first-output.js","texts":[{"pos":62,"end":189,"kind":"text"}]},{"pos":189,"end":474,"kind":"prepend","data":"../../../2/second-output.js","texts":[{"pos":189,"end":474,"kind":"text"}]},{"pos":474,"end":510,"kind":"text"}],"mapHash":"38125604309-{\"version\":3,\"file\":\"third-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../../first/first_part2.ts\",\"../../../first/first_part3.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\";AAAA,aAAa,CAAA;ACAb,YAAY,CAAA;ACAZ,aAAa,CAAC;AFKd,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AGZf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AHGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AGLD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC\"}","hash":"18901376612-\"use strict\";\r\n\"myPrologue5\";\r\n\"myPrologue\";\r\n\"myPrologue2\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\nvar c = new C();\r\nc.doSomething();\r\n//# sourceMappingURL=third-output.js.map","sources":{"prologues":[{"file":0,"text":"","directives":[{"pos":-1,"end":-1,"expression":{"pos":-1,"end":-1,"text":"use strict"}}]}]}},"dts":{"sections":[{"pos":0,"end":157,"kind":"prepend","data":"../../../first/bin/first-output.d.ts","texts":[{"pos":0,"end":157,"kind":"text"}]},{"pos":157,"end":257,"kind":"prepend","data":"../../../2/second-output.d.ts","texts":[{"pos":157,"end":257,"kind":"text"}]},{"pos":257,"end":276,"kind":"text"}],"mapHash":"30721496667-{\"version\":3,\"file\":\"third-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AACA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACTD,iBAAS,CAAC,WAET;ACDD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACLD,QAAA,IAAI,CAAC,GAAU,CAAC\"}","hash":"-16365524283-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n//# sourceMappingURL=third-output.d.ts.map"}},"program":{"fileNames":["../../third_part1.ts"],"fileInfos":["10470273651-var c = new C();\r\nc.doSomething();\r\n"],"options":{"composite":true,"outFile":"./third-output.js"},"outSignature":"-6891480629-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n","latestChangedDtsFile":"./third-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-29):: myPrologue5
"myPrologue5";
----------------------------------------------------------------------
prologue: (31-44):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (46-60):: myPrologue2
"myPrologue2";
----------------------------------------------------------------------
prepend: (62-189):: ../../../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (62-189)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
prepend: (189-474):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (189-474)
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
text: (474-510)
var c = new C();
c.doSomething();

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-157):: ../../../first/bin/first-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-157)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
prepend: (157-257):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (157-257)
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
text: (257-276)
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
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 29,
          "kind": "prologue",
          "data": "myPrologue5"
        },
        {
          "pos": 31,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 46,
          "end": 60,
          "kind": "prologue",
          "data": "myPrologue2"
        },
        {
          "pos": 62,
          "end": 189,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.js",
          "texts": [
            {
              "pos": 62,
              "end": 189,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 189,
          "end": 474,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 189,
              "end": 474,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 474,
          "end": 510,
          "kind": "text"
        }
      ],
      "hash": "18901376612-\"use strict\";\r\n\"myPrologue5\";\r\n\"myPrologue\";\r\n\"myPrologue2\";\r\nvar s = \"Hello, world\";\r\nconsole.log(s);\r\nconsole.log(s);\r\nconsole.log(f());\r\nfunction f() {\r\n    return \"JS does hoists\";\r\n}\r\nvar N;\r\n(function (N) {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n    f();\r\n})(N || (N = {}));\r\nvar C = (function () {\r\n    function C() {\r\n    }\r\n    C.prototype.doSomething = function () {\r\n        console.log(\"something got done\");\r\n    };\r\n    return C;\r\n}());\r\nvar c = new C();\r\nc.doSomething();\r\n//# sourceMappingURL=third-output.js.map",
      "mapHash": "38125604309-{\"version\":3,\"file\":\"third-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../../first/first_part2.ts\",\"../../../first/first_part3.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\";AAAA,aAAa,CAAA;ACAb,YAAY,CAAA;ACAZ,aAAa,CAAC;AFKd,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AGZf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;AHGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;AGLD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC\"}",
      "sources": {
        "prologues": [
          {
            "file": 0,
            "text": "",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
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
          "end": 157,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 157,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 157,
          "end": 257,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 157,
              "end": 257,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 257,
          "end": 276,
          "kind": "text"
        }
      ],
      "hash": "-16365524283-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n//# sourceMappingURL=third-output.d.ts.map",
      "mapHash": "30721496667-{\"version\":3,\"file\":\"third-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../../../first/first_PART1.ts\",\"../../../first/first_part3.ts\",\"../../../second/second_part1.ts\",\"../../../second/second_part2.ts\",\"../../third_part1.ts\"],\"names\":[],\"mappings\":\"AACA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACTD,iBAAS,CAAC,WAET;ACDD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd;ACLD,QAAA,IAAI,CAAC,GAAU,CAAC\"}"
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
    "outSignature": "-6891480629-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\ndeclare function f(): string;\r\ndeclare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\ndeclare class C {\r\n    doSomething(): void;\r\n}\r\ndeclare var c: C;\r\n",
    "latestChangedDtsFile": "./third-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 4157
}

