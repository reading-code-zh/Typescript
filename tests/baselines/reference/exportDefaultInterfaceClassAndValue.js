//// [exportDefaultInterfaceClassAndValue.ts]
const foo = 1
export default foo
export default class Foo {}
export default interface Foo {}


//// [exportDefaultInterfaceClassAndValue.js]
"use strict";
exports.__esModule = true;
var foo = 1;
exports["default"] = foo;
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
exports["default"] = Foo;
