//// [superCallFromClassThatHasNoBaseTypeButWithSameSymbolInterface.ts]
interface Foo extends Array<number> {}

class Foo {
    constructor() {
        super(); // error
    }
}


//// [superCallFromClassThatHasNoBaseTypeButWithSameSymbolInterface.js]
var Foo = /** @class */ (function () {
    function Foo() {
        return _super.call(this) || this;
    }
    return Foo;
}());
