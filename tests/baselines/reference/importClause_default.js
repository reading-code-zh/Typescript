//// [tests/cases/conformance/externalModules/typeOnly/importClause_default.ts] ////

//// [a.ts]
export default class A { a!: string }

//// [b.ts]
import type A from './a';
new A();
let a: A = { a: '' };
let b = { A };


//// [a.js]
"use strict";
exports.__esModule = true;
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports["default"] = A;
//// [b.js]
"use strict";
exports.__esModule = true;
new A();
var a = { a: '' };
var b = { A: A };
