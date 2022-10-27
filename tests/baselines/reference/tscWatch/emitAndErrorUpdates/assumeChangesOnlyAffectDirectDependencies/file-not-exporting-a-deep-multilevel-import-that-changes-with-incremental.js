Input::
//// [/user/username/projects/myproject/a.ts]
export interface Point {
    name: string;
    c: Coords;
}
export interface Coords {
    x2: number;
    y: number;
}

//// [/user/username/projects/myproject/b.ts]
import { Point } from "./a";
export interface PointWrapper extends Point {
}

//// [/user/username/projects/myproject/c.ts]
import { PointWrapper } from "./b";
export function getPoint(): PointWrapper {
    return {
        name: "test",
        c: {
            x: 1,
            y: 2
        }
    }
};

//// [/user/username/projects/myproject/d.ts]
import { getPoint } from "./c";
getPoint().c.x;

//// [/user/username/projects/myproject/e.ts]
import "./d";

//// [/user/username/projects/myproject/tsconfig.json]
{}

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


/a/lib/tsc.js --w --assumeChangesOnlyAffectDirectDependencies --incremental
Output::
>> Screen clear
[[90m12:00:29 AM[0m] Starting compilation in watch mode...

[96mc.ts[0m:[93m6[0m:[93m13[0m - [91merror[0m[90m TS2322: [0mType '{ x: number; y: number; }' is not assignable to type 'Coords'.
  Object literal may only specify known properties, and 'x' does not exist in type 'Coords'.

[7m6[0m             x: 1,
[7m [0m [91m            ~~~~[0m

  [96ma.ts[0m:[93m3[0m:[93m5[0m
    [7m3[0m     c: Coords;
    [7m [0m [96m    ~[0m
    The expected type comes from property 'c' which is declared here on type 'PointWrapper'

[96md.ts[0m:[93m2[0m:[93m14[0m - [91merror[0m[90m TS2339: [0mProperty 'x' does not exist on type 'Coords'.

[7m2[0m getPoint().c.x;
[7m [0m [91m             ~[0m

[[90m12:00:42 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts","/user/username/projects/myproject/d.ts","/user/username/projects/myproject/e.ts"]
Program options: {"watch":true,"assumeChangesOnlyAffectDirectDependencies":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)
/user/username/projects/myproject/b.ts (used version)
/user/username/projects/myproject/c.ts (used version)
/user/username/projects/myproject/d.ts (used version)
/user/username/projects/myproject/e.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}
/user/username/projects/myproject/c.ts:
  {}
/user/username/projects/myproject/d.ts:
  {}
/user/username/projects/myproject/e.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/myproject/b.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/myproject/c.js]
"use strict";
exports.__esModule = true;
exports.getPoint = void 0;
function getPoint() {
    return {
        name: "test",
        c: {
            x: 1,
            y: 2
        }
    };
}
exports.getPoint = getPoint;
;


//// [/user/username/projects/myproject/d.js]
"use strict";
exports.__esModule = true;
var c_1 = require("./c");
(0, c_1.getPoint)().c.x;


//// [/user/username/projects/myproject/e.js]
"use strict";
exports.__esModule = true;
require("./d");


//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts","./e.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"9889814467-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x2: number;\n    y: number;\n}","-8029610078-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}","-37232372138-import { PointWrapper } from \"./b\";\nexport function getPoint(): PointWrapper {\n    return {\n        name: \"test\",\n        c: {\n            x: 1,\n            y: 2\n        }\n    }\n};","-17875457076-import { getPoint } from \"./c\";\ngetPoint().c.x;","-5185546240-import \"./d\";"],"options":{"assumeChangesOnlyAffectDirectDependencies":true},"fileIdsList":[[2],[3],[4],[5]],"referencedMap":[[3,1],[4,2],[5,3],[6,4]],"exportedModulesMap":[[3,1],[4,2],[5,3],[6,4]],"semanticDiagnosticsPerFile":[1,2,3,[4,[{"file":"./c.ts","start":139,"length":4,"code":2322,"category":1,"messageText":{"messageText":"Type '{ x: number; y: number; }' is not assignable to type 'Coords'.","category":1,"code":2322,"next":[{"messageText":"Object literal may only specify known properties, and 'x' does not exist in type 'Coords'.","category":1,"code":2353}]},"relatedInformation":[{"file":"./a.ts","start":47,"length":1,"messageText":"The expected type comes from property 'c' which is declared here on type 'PointWrapper'","category":3,"code":6500}]}]],[5,[{"file":"./d.ts","start":45,"length":1,"code":2339,"category":1,"messageText":"Property 'x' does not exist on type 'Coords'."}]],6]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts",
      "./e.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ],
      [
        "./c.ts"
      ],
      [
        "./d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "9889814467-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x2: number;\n    y: number;\n}",
        "signature": "9889814467-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x2: number;\n    y: number;\n}"
      },
      "./b.ts": {
        "version": "-8029610078-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}",
        "signature": "-8029610078-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}"
      },
      "./c.ts": {
        "version": "-37232372138-import { PointWrapper } from \"./b\";\nexport function getPoint(): PointWrapper {\n    return {\n        name: \"test\",\n        c: {\n            x: 1,\n            y: 2\n        }\n    }\n};",
        "signature": "-37232372138-import { PointWrapper } from \"./b\";\nexport function getPoint(): PointWrapper {\n    return {\n        name: \"test\",\n        c: {\n            x: 1,\n            y: 2\n        }\n    }\n};"
      },
      "./d.ts": {
        "version": "-17875457076-import { getPoint } from \"./c\";\ngetPoint().c.x;",
        "signature": "-17875457076-import { getPoint } from \"./c\";\ngetPoint().c.x;"
      },
      "./e.ts": {
        "version": "-5185546240-import \"./d\";",
        "signature": "-5185546240-import \"./d\";"
      }
    },
    "options": {
      "assumeChangesOnlyAffectDirectDependencies": true
    },
    "referencedMap": {
      "./b.ts": [
        "./a.ts"
      ],
      "./c.ts": [
        "./b.ts"
      ],
      "./d.ts": [
        "./c.ts"
      ],
      "./e.ts": [
        "./d.ts"
      ]
    },
    "exportedModulesMap": {
      "./b.ts": [
        "./a.ts"
      ],
      "./c.ts": [
        "./b.ts"
      ],
      "./d.ts": [
        "./c.ts"
      ],
      "./e.ts": [
        "./d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      [
        "./c.ts",
        [
          {
            "file": "./c.ts",
            "start": 139,
            "length": 4,
            "code": 2322,
            "category": 1,
            "messageText": {
              "messageText": "Type '{ x: number; y: number; }' is not assignable to type 'Coords'.",
              "category": 1,
              "code": 2322,
              "next": [
                {
                  "messageText": "Object literal may only specify known properties, and 'x' does not exist in type 'Coords'.",
                  "category": 1,
                  "code": 2353
                }
              ]
            },
            "relatedInformation": [
              {
                "file": "./a.ts",
                "start": 47,
                "length": 1,
                "messageText": "The expected type comes from property 'c' which is declared here on type 'PointWrapper'",
                "category": 3,
                "code": 6500
              }
            ]
          }
        ]
      ],
      [
        "./d.ts",
        [
          {
            "file": "./d.ts",
            "start": 45,
            "length": 1,
            "code": 2339,
            "category": 1,
            "messageText": "Property 'x' does not exist on type 'Coords'."
          }
        ]
      ],
      "./e.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1966
}


Change:: Rename property x2 to x of interface Coords to initialize signatures

Input::
//// [/user/username/projects/myproject/a.ts]
export interface Point {
    name: string;
    c: Coords;
}
export interface Coords {
    x: number;
    y: number;
}


Output::
>> Screen clear
[[90m12:00:48 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:07 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts","/user/username/projects/myproject/d.ts","/user/username/projects/myproject/e.ts"]
Program options: {"watch":true,"assumeChangesOnlyAffectDirectDependencies":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)
/user/username/projects/myproject/b.ts (computed .d.ts)
/user/username/projects/myproject/c.ts (computed .d.ts)
/user/username/projects/myproject/d.ts (computed .d.ts)
/user/username/projects/myproject/e.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}
/user/username/projects/myproject/c.ts:
  {}
/user/username/projects/myproject/d.ts:
  {}
/user/username/projects/myproject/e.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
//// [/user/username/projects/myproject/b.js] file written with same contents
//// [/user/username/projects/myproject/c.js] file written with same contents
//// [/user/username/projects/myproject/d.js] file written with same contents
//// [/user/username/projects/myproject/e.js] file written with same contents
//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts","./e.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"2103509937-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x: number;\n    y: number;\n}","signature":"696351195-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x: number;\n    y: number;\n}\n"},{"version":"-8029610078-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}","signature":"-7279094804-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}\n"},{"version":"-37232372138-import { PointWrapper } from \"./b\";\nexport function getPoint(): PointWrapper {\n    return {\n        name: \"test\",\n        c: {\n            x: 1,\n            y: 2\n        }\n    }\n};","signature":"-3387333988-import { PointWrapper } from \"./b\";\nexport declare function getPoint(): PointWrapper;\n"},{"version":"-17875457076-import { getPoint } from \"./c\";\ngetPoint().c.x;","signature":"-3531856636-export {};\n"},{"version":"-5185546240-import \"./d\";","signature":"-3619301366-import \"./d\";\n"}],"options":{"assumeChangesOnlyAffectDirectDependencies":true},"fileIdsList":[[2],[3],[4],[5]],"referencedMap":[[3,1],[4,2],[5,3],[6,4]],"exportedModulesMap":[[3,1],[4,2],[6,4]],"semanticDiagnosticsPerFile":[1,2,3,4,5,6]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts",
      "./e.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ],
      [
        "./c.ts"
      ],
      [
        "./d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "2103509937-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x: number;\n    y: number;\n}",
        "signature": "696351195-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x: number;\n    y: number;\n}\n"
      },
      "./b.ts": {
        "version": "-8029610078-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}",
        "signature": "-7279094804-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}\n"
      },
      "./c.ts": {
        "version": "-37232372138-import { PointWrapper } from \"./b\";\nexport function getPoint(): PointWrapper {\n    return {\n        name: \"test\",\n        c: {\n            x: 1,\n            y: 2\n        }\n    }\n};",
        "signature": "-3387333988-import { PointWrapper } from \"./b\";\nexport declare function getPoint(): PointWrapper;\n"
      },
      "./d.ts": {
        "version": "-17875457076-import { getPoint } from \"./c\";\ngetPoint().c.x;",
        "signature": "-3531856636-export {};\n"
      },
      "./e.ts": {
        "version": "-5185546240-import \"./d\";",
        "signature": "-3619301366-import \"./d\";\n"
      }
    },
    "options": {
      "assumeChangesOnlyAffectDirectDependencies": true
    },
    "referencedMap": {
      "./b.ts": [
        "./a.ts"
      ],
      "./c.ts": [
        "./b.ts"
      ],
      "./d.ts": [
        "./c.ts"
      ],
      "./e.ts": [
        "./d.ts"
      ]
    },
    "exportedModulesMap": {
      "./b.ts": [
        "./a.ts"
      ],
      "./c.ts": [
        "./b.ts"
      ],
      "./e.ts": [
        "./d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts",
      "./e.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1817
}


Change:: Rename property x to x2 of interface Coords to revert back to original text

Input::
//// [/user/username/projects/myproject/a.ts]
export interface Point {
    name: string;
    c: Coords;
}
export interface Coords {
    x2: number;
    y: number;
}


Output::
>> Screen clear
[[90m12:01:14 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:24 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts","/user/username/projects/myproject/d.ts","/user/username/projects/myproject/e.ts"]
Program options: {"watch":true,"assumeChangesOnlyAffectDirectDependencies":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)
/user/username/projects/myproject/b.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}
/user/username/projects/myproject/c.ts:
  {}
/user/username/projects/myproject/d.ts:
  {}
/user/username/projects/myproject/e.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
//// [/user/username/projects/myproject/b.js] file written with same contents
//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts","./e.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"9889814467-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x2: number;\n    y: number;\n}","signature":"8536297517-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x2: number;\n    y: number;\n}\n"},{"version":"-8029610078-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}","signature":"-7279094804-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}\n"},{"version":"-37232372138-import { PointWrapper } from \"./b\";\nexport function getPoint(): PointWrapper {\n    return {\n        name: \"test\",\n        c: {\n            x: 1,\n            y: 2\n        }\n    }\n};","signature":"-3387333988-import { PointWrapper } from \"./b\";\nexport declare function getPoint(): PointWrapper;\n"},{"version":"-17875457076-import { getPoint } from \"./c\";\ngetPoint().c.x;","signature":"-3531856636-export {};\n"},{"version":"-5185546240-import \"./d\";","signature":"-3619301366-import \"./d\";\n"}],"options":{"assumeChangesOnlyAffectDirectDependencies":true},"fileIdsList":[[2],[3],[4],[5]],"referencedMap":[[3,1],[4,2],[5,3],[6,4]],"exportedModulesMap":[[3,1],[4,2],[6,4]],"semanticDiagnosticsPerFile":[1,2,3,4,5,6]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts",
      "./e.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ],
      [
        "./c.ts"
      ],
      [
        "./d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "9889814467-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x2: number;\n    y: number;\n}",
        "signature": "8536297517-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x2: number;\n    y: number;\n}\n"
      },
      "./b.ts": {
        "version": "-8029610078-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}",
        "signature": "-7279094804-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}\n"
      },
      "./c.ts": {
        "version": "-37232372138-import { PointWrapper } from \"./b\";\nexport function getPoint(): PointWrapper {\n    return {\n        name: \"test\",\n        c: {\n            x: 1,\n            y: 2\n        }\n    }\n};",
        "signature": "-3387333988-import { PointWrapper } from \"./b\";\nexport declare function getPoint(): PointWrapper;\n"
      },
      "./d.ts": {
        "version": "-17875457076-import { getPoint } from \"./c\";\ngetPoint().c.x;",
        "signature": "-3531856636-export {};\n"
      },
      "./e.ts": {
        "version": "-5185546240-import \"./d\";",
        "signature": "-3619301366-import \"./d\";\n"
      }
    },
    "options": {
      "assumeChangesOnlyAffectDirectDependencies": true
    },
    "referencedMap": {
      "./b.ts": [
        "./a.ts"
      ],
      "./c.ts": [
        "./b.ts"
      ],
      "./d.ts": [
        "./c.ts"
      ],
      "./e.ts": [
        "./d.ts"
      ]
    },
    "exportedModulesMap": {
      "./b.ts": [
        "./a.ts"
      ],
      "./c.ts": [
        "./b.ts"
      ],
      "./e.ts": [
        "./d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts",
      "./e.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1820
}


Change:: Rename property x2 to x of interface Coords

Input::
//// [/user/username/projects/myproject/a.ts]
export interface Point {
    name: string;
    c: Coords;
}
export interface Coords {
    x: number;
    y: number;
}


Output::
>> Screen clear
[[90m12:01:31 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:41 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts","/user/username/projects/myproject/d.ts","/user/username/projects/myproject/e.ts"]
Program options: {"watch":true,"assumeChangesOnlyAffectDirectDependencies":true,"incremental":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/d.ts
/user/username/projects/myproject/e.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/a.ts
/user/username/projects/myproject/b.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/a.ts (computed .d.ts)
/user/username/projects/myproject/b.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/a.ts:
  {}
/user/username/projects/myproject/b.ts:
  {}
/user/username/projects/myproject/c.ts:
  {}
/user/username/projects/myproject/d.ts:
  {}
/user/username/projects/myproject/e.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js] file written with same contents
//// [/user/username/projects/myproject/b.js] file written with same contents
//// [/user/username/projects/myproject/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts","./e.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"2103509937-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x: number;\n    y: number;\n}","signature":"696351195-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x: number;\n    y: number;\n}\n"},{"version":"-8029610078-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}","signature":"-7279094804-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}\n"},{"version":"-37232372138-import { PointWrapper } from \"./b\";\nexport function getPoint(): PointWrapper {\n    return {\n        name: \"test\",\n        c: {\n            x: 1,\n            y: 2\n        }\n    }\n};","signature":"-3387333988-import { PointWrapper } from \"./b\";\nexport declare function getPoint(): PointWrapper;\n"},{"version":"-17875457076-import { getPoint } from \"./c\";\ngetPoint().c.x;","signature":"-3531856636-export {};\n"},{"version":"-5185546240-import \"./d\";","signature":"-3619301366-import \"./d\";\n"}],"options":{"assumeChangesOnlyAffectDirectDependencies":true},"fileIdsList":[[2],[3],[4],[5]],"referencedMap":[[3,1],[4,2],[5,3],[6,4]],"exportedModulesMap":[[3,1],[4,2],[6,4]],"semanticDiagnosticsPerFile":[1,2,3,4,5,6]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts",
      "./e.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ],
      [
        "./c.ts"
      ],
      [
        "./d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "2103509937-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x: number;\n    y: number;\n}",
        "signature": "696351195-export interface Point {\n    name: string;\n    c: Coords;\n}\nexport interface Coords {\n    x: number;\n    y: number;\n}\n"
      },
      "./b.ts": {
        "version": "-8029610078-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}",
        "signature": "-7279094804-import { Point } from \"./a\";\nexport interface PointWrapper extends Point {\n}\n"
      },
      "./c.ts": {
        "version": "-37232372138-import { PointWrapper } from \"./b\";\nexport function getPoint(): PointWrapper {\n    return {\n        name: \"test\",\n        c: {\n            x: 1,\n            y: 2\n        }\n    }\n};",
        "signature": "-3387333988-import { PointWrapper } from \"./b\";\nexport declare function getPoint(): PointWrapper;\n"
      },
      "./d.ts": {
        "version": "-17875457076-import { getPoint } from \"./c\";\ngetPoint().c.x;",
        "signature": "-3531856636-export {};\n"
      },
      "./e.ts": {
        "version": "-5185546240-import \"./d\";",
        "signature": "-3619301366-import \"./d\";\n"
      }
    },
    "options": {
      "assumeChangesOnlyAffectDirectDependencies": true
    },
    "referencedMap": {
      "./b.ts": [
        "./a.ts"
      ],
      "./c.ts": [
        "./b.ts"
      ],
      "./d.ts": [
        "./c.ts"
      ],
      "./e.ts": [
        "./d.ts"
      ]
    },
    "exportedModulesMap": {
      "./b.ts": [
        "./a.ts"
      ],
      "./c.ts": [
        "./b.ts"
      ],
      "./e.ts": [
        "./d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts",
      "./e.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1817
}

