//// [exportInterfaceClassAndValueWithDuplicatesInImportList.ts]
const foo = 1
class Foo {}
interface Foo {}

export {foo, Foo, Foo}


//// [exportInterfaceClassAndValueWithDuplicatesInImportList.js]
"use strict";
exports.__esModule = true;
exports.Foo = exports.foo = void 0;
var foo = 1;
exports.foo = foo;
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
exports.Foo = Foo;
