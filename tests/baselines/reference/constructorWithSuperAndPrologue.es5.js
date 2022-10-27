//// [constructorWithSuperAndPrologue.es5.ts]
// https://github.com/microsoft/TypeScript/issues/48761
"use strict";

class A {
    public constructor() {
        console.log("A")
    }
}

class B extends A  {
    constructor() {
        "ngInject";
        console.log("B")
        super();
    }
}


//// [constructorWithSuperAndPrologue.es5.js]
// https://github.com/microsoft/TypeScript/issues/48761
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
        console.log("A");
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        "ngInject";
        console.log("B");
        return _super.call(this) || this;
    }
    return B;
}(A));
