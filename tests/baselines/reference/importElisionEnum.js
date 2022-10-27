//// [tests/cases/compiler/importElisionEnum.ts] ////

//// [enum.ts]
export enum MyEnum {
  a = 0,
  b,
  c,
  d
}

//// [index.ts]
import { MyEnum as MyEnumFromModule } from "./enum";

enum MyEnum {
  a = MyEnumFromModule.a
}

//// [enum.js]
"use strict";
exports.__esModule = true;
exports.MyEnum = void 0;
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["a"] = 0] = "a";
    MyEnum[MyEnum["b"] = 1] = "b";
    MyEnum[MyEnum["c"] = 2] = "c";
    MyEnum[MyEnum["d"] = 3] = "d";
})(MyEnum = exports.MyEnum || (exports.MyEnum = {}));
//// [index.js]
"use strict";
exports.__esModule = true;
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["a"] = 0] = "a";
})(MyEnum || (MyEnum = {}));
