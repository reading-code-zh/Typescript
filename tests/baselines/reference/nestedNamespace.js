//// [tests/cases/conformance/externalModules/typeOnly/nestedNamespace.ts] ////

//// [a.ts]
export namespace types {
  export class A {}
}

//// [b.ts]
import type * as a from './a';
interface B extends a.types.A {}


//// [a.js]
"use strict";
exports.__esModule = true;
exports.types = void 0;
var types;
(function (types) {
    var A = /** @class */ (function () {
        function A() {
        }
        return A;
    }());
    types.A = A;
})(types = exports.types || (exports.types = {}));
//// [b.js]
"use strict";
exports.__esModule = true;
