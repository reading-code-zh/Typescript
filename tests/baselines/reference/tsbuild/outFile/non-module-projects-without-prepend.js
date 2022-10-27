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
    "composite": true, "module": "none",
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    
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
    "composite": true, "module": "none",
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    
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
    "composite": true, "module": "none",
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    
    "skipDefaultLibCheck": true,
  },
  "files": [
    "third_part1.ts"
  ],
  "references": [
    { "path": "../first" },
    { "path": "../second" },
  ]
}




Output::
/lib/tsc --b /src/third --verbose
[[90m12:00:14 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:00:15 AM[0m] Project 'src/first/tsconfig.json' is out of date because output file 'src/first/tsconfig.tsbuildinfo' does not exist

[[90m12:00:16 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:00:32 AM[0m] Project 'src/second/tsconfig.json' is out of date because output file 'src/second/tsconfig.tsbuildinfo' does not exist

[[90m12:00:33 AM[0m] Building project '/src/second/tsconfig.json'...

[[90m12:00:45 AM[0m] Project 'src/third/tsconfig.json' is out of date because output file 'src/third/tsconfig.tsbuildinfo' does not exist

[[90m12:00:46 AM[0m] Building project '/src/third/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/first/first_PART1.d.ts]
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
//# sourceMappingURL=first_PART1.d.ts.map

//// [/src/first/first_PART1.d.ts.map]
{"version":3,"file":"first_PART1.d.ts","sourceRoot":"","sources":["first_PART1.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb"}

//// [/src/first/first_PART1.js]
var s = "Hello, world";
console.log(s);
//# sourceMappingURL=first_PART1.js.map

//// [/src/first/first_PART1.js.map]
{"version":3,"file":"first_PART1.js","sourceRoot":"","sources":["first_PART1.ts"],"names":[],"mappings":"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC"}

//// [/src/first/first_part2.d.ts]
//# sourceMappingURL=first_part2.d.ts.map

//// [/src/first/first_part2.d.ts.map]
{"version":3,"file":"first_part2.d.ts","sourceRoot":"","sources":["first_part2.ts"],"names":[],"mappings":""}

//// [/src/first/first_part2.js]
console.log(f());
//# sourceMappingURL=first_part2.js.map

//// [/src/first/first_part2.js.map]
{"version":3,"file":"first_part2.js","sourceRoot":"","sources":["first_part2.ts"],"names":[],"mappings":"AAAA,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC"}

//// [/src/first/first_part3.d.ts]
declare function f(): string;
//# sourceMappingURL=first_part3.d.ts.map

//// [/src/first/first_part3.d.ts.map]
{"version":3,"file":"first_part3.d.ts","sourceRoot":"","sources":["first_part3.ts"],"names":[],"mappings":"AAAA,iBAAS,CAAC,WAET"}

//// [/src/first/first_part3.js]
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first_part3.js.map

//// [/src/first/first_part3.js.map]
{"version":3,"file":"first_part3.js","sourceRoot":"","sources":["first_part3.ts"],"names":[],"mappings":"AAAA,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./first_part1.ts","./first_part2.ts","./first_part3.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-17207381411-interface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\n","signature":"-12382020913-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n","affectsGlobalScope":true},{"version":"4973778178-console.log(f());\r\n","signature":"5381-","affectsGlobalScope":true},{"version":"6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}","signature":"-5732730923-declare function f(): string;\r\n","affectsGlobalScope":true}],"options":{"composite":true,"declarationMap":true,"module":0,"removeComments":true,"skipDefaultLibCheck":true,"sourceMap":true,"strict":false,"target":1},"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./first_part3.d.ts"},"version":"FakeTSVersion"}

//// [/src/first/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./first_part1.ts",
      "./first_part2.ts",
      "./first_part3.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./first_part1.ts": {
        "version": "-17207381411-interface TheFirst {\r\n    none: any;\r\n}\r\n\r\nconst s = \"Hello, world\";\r\n\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n\r\nconsole.log(s);\r\n",
        "signature": "-12382020913-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n",
        "affectsGlobalScope": true
      },
      "./first_part2.ts": {
        "version": "4973778178-console.log(f());\r\n",
        "signature": "5381-",
        "affectsGlobalScope": true
      },
      "./first_part3.ts": {
        "version": "6202806249-function f() {\r\n    return \"JS does hoists\";\r\n}",
        "signature": "-5732730923-declare function f(): string;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declarationMap": true,
      "module": 0,
      "removeComments": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true,
      "strict": false,
      "target": 1
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./first_part1.ts",
      "./first_part2.ts",
      "./first_part3.ts"
    ],
    "latestChangedDtsFile": "./first_part3.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1508
}

//// [/src/second/second_part1.d.ts]
declare namespace N {
}
declare namespace N {
}
//# sourceMappingURL=second_part1.d.ts.map

//// [/src/second/second_part1.d.ts.map]
{"version":3,"file":"second_part1.d.ts","sourceRoot":"","sources":["second_part1.ts"],"names":[],"mappings":"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX"}

//// [/src/second/second_part1.js]
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
//# sourceMappingURL=second_part1.js.map

//// [/src/second/second_part1.js.map]
{"version":3,"file":"second_part1.js","sourceRoot":"","sources":["second_part1.ts"],"names":[],"mappings":"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV"}

//// [/src/second/second_part2.d.ts]
declare class C {
    doSomething(): void;
}
//# sourceMappingURL=second_part2.d.ts.map

//// [/src/second/second_part2.d.ts.map]
{"version":3,"file":"second_part2.d.ts","sourceRoot":"","sources":["second_part2.ts"],"names":[],"mappings":"AAAA,cAAM,CAAC;IACH,WAAW;CAGd"}

//// [/src/second/second_part2.js]
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second_part2.js.map

//// [/src/second/second_part2.js.map]
{"version":3,"file":"second_part2.js","sourceRoot":"","sources":["second_part2.ts"],"names":[],"mappings":"AAAA;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC"}

//// [/src/second/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./second_part1.ts","./second_part2.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-21603042336-namespace N {\r\n    // Comment text\r\n}\r\n\r\nnamespace N {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n\r\n    f();\r\n}\r\n","signature":"-4200194009-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\n","affectsGlobalScope":true},{"version":"9339262372-class C {\r\n    doSomething() {\r\n        console.log(\"something got done\");\r\n    }\r\n}\r\n","signature":"1950347108-declare class C {\r\n    doSomething(): void;\r\n}\r\n","affectsGlobalScope":true}],"options":{"composite":true,"declaration":true,"declarationMap":true,"module":0,"removeComments":true,"skipDefaultLibCheck":true,"sourceMap":true,"strict":false,"target":1},"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./second_part2.d.ts"},"version":"FakeTSVersion"}

//// [/src/second/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./second_part1.ts",
      "./second_part2.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./second_part1.ts": {
        "version": "-21603042336-namespace N {\r\n    // Comment text\r\n}\r\n\r\nnamespace N {\r\n    function f() {\r\n        console.log('testing');\r\n    }\r\n\r\n    f();\r\n}\r\n",
        "signature": "-4200194009-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\n",
        "affectsGlobalScope": true
      },
      "./second_part2.ts": {
        "version": "9339262372-class C {\r\n    doSomething() {\r\n        console.log(\"something got done\");\r\n    }\r\n}\r\n",
        "signature": "1950347108-declare class C {\r\n    doSomething(): void;\r\n}\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "module": 0,
      "removeComments": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true,
      "strict": false,
      "target": 1
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./second_part1.ts",
      "./second_part2.ts"
    ],
    "latestChangedDtsFile": "./second_part2.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1386
}

//// [/src/third/third_part1.d.ts]
declare var c: C;
//# sourceMappingURL=third_part1.d.ts.map

//// [/src/third/third_part1.d.ts.map]
{"version":3,"file":"third_part1.d.ts","sourceRoot":"","sources":["third_part1.ts"],"names":[],"mappings":"AAAA,QAAA,IAAI,CAAC,GAAU,CAAC"}

//// [/src/third/third_part1.js]
var c = new C();
c.doSomething();
//# sourceMappingURL=third_part1.js.map

//// [/src/third/third_part1.js.map]
{"version":3,"file":"third_part1.js","sourceRoot":"","sources":["third_part1.ts"],"names":[],"mappings":"AAAA,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../first/first_part1.d.ts","../first/first_part2.d.ts","../first/first_part3.d.ts","../second/second_part1.d.ts","../second/second_part2.d.ts","./third_part1.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-17939996161-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n//# sourceMappingURL=first_PART1.d.ts.map","affectsGlobalScope":true},"-2054710634-//# sourceMappingURL=first_part2.d.ts.map",{"version":"-4577888121-declare function f(): string;\r\n//# sourceMappingURL=first_part3.d.ts.map","affectsGlobalScope":true},{"version":"-3134340341-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\n//# sourceMappingURL=second_part1.d.ts.map","affectsGlobalScope":true},{"version":"6579734441-declare class C {\r\n    doSomething(): void;\r\n}\r\n//# sourceMappingURL=second_part2.d.ts.map","affectsGlobalScope":true},{"version":"10470273651-var c = new C();\r\nc.doSomething();\r\n","signature":"2394638288-declare var c: C;\r\n","affectsGlobalScope":true}],"options":{"composite":true,"declaration":true,"declarationMap":true,"module":0,"removeComments":true,"skipDefaultLibCheck":true,"sourceMap":true,"strict":false,"target":1},"semanticDiagnosticsPerFile":[1,2,3,4,5,6,7],"latestChangedDtsFile":"./third_part1.d.ts"},"version":"FakeTSVersion"}

//// [/src/third/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../first/first_part1.d.ts",
      "../first/first_part2.d.ts",
      "../first/first_part3.d.ts",
      "../second/second_part1.d.ts",
      "../second/second_part2.d.ts",
      "./third_part1.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../first/first_part1.d.ts": {
        "version": "-17939996161-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n//# sourceMappingURL=first_PART1.d.ts.map",
        "signature": "-17939996161-interface TheFirst {\r\n    none: any;\r\n}\r\ndeclare const s = \"Hello, world\";\r\ninterface NoJsForHereEither {\r\n    none: any;\r\n}\r\n//# sourceMappingURL=first_PART1.d.ts.map",
        "affectsGlobalScope": true
      },
      "../first/first_part2.d.ts": {
        "version": "-2054710634-//# sourceMappingURL=first_part2.d.ts.map",
        "signature": "-2054710634-//# sourceMappingURL=first_part2.d.ts.map"
      },
      "../first/first_part3.d.ts": {
        "version": "-4577888121-declare function f(): string;\r\n//# sourceMappingURL=first_part3.d.ts.map",
        "signature": "-4577888121-declare function f(): string;\r\n//# sourceMappingURL=first_part3.d.ts.map",
        "affectsGlobalScope": true
      },
      "../second/second_part1.d.ts": {
        "version": "-3134340341-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\n//# sourceMappingURL=second_part1.d.ts.map",
        "signature": "-3134340341-declare namespace N {\r\n}\r\ndeclare namespace N {\r\n}\r\n//# sourceMappingURL=second_part1.d.ts.map",
        "affectsGlobalScope": true
      },
      "../second/second_part2.d.ts": {
        "version": "6579734441-declare class C {\r\n    doSomething(): void;\r\n}\r\n//# sourceMappingURL=second_part2.d.ts.map",
        "signature": "6579734441-declare class C {\r\n    doSomething(): void;\r\n}\r\n//# sourceMappingURL=second_part2.d.ts.map",
        "affectsGlobalScope": true
      },
      "./third_part1.ts": {
        "version": "10470273651-var c = new C();\r\nc.doSomething();\r\n",
        "signature": "2394638288-declare var c: C;\r\n",
        "affectsGlobalScope": true
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "module": 0,
      "removeComments": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true,
      "strict": false,
      "target": 1
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../first/first_part1.d.ts",
      "../first/first_part2.d.ts",
      "../first/first_part3.d.ts",
      "../second/second_part1.d.ts",
      "../second/second_part2.d.ts",
      "./third_part1.ts"
    ],
    "latestChangedDtsFile": "./third_part1.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1855
}

