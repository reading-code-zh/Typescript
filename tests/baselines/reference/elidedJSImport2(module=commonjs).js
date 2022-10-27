//// [tests/cases/compiler/elidedJSImport2.ts] ////

//// [index.js]
import { Foo } from "./other.js";
import * as other from "./other.js";
import defaultFoo from "./other.js";

const x = new Foo();
const y = other.Foo();
const z = new defaultFoo();

//// [other.d.ts]
export interface Foo {
    bar: number;
}

export default interface Bar {
    foo: number;
}

//// [other.js]
export class Foo {
    bar = 2.4;
}

export default class Bar {
    foo = 1.2;
}


//// [index.js]
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var other_js_1 = require("./other.js");
var other = __importStar(require("./other.js"));
var other_js_2 = __importDefault(require("./other.js"));
var x = new other_js_1.Foo();
var y = other.Foo();
var z = new other_js_2["default"]();
//// [other.js]
"use strict";
exports.__esModule = true;
exports.Foo = void 0;
var Foo = /** @class */ (function () {
    function Foo() {
        this.bar = 2.4;
    }
    return Foo;
}());
exports.Foo = Foo;
var Bar = /** @class */ (function () {
    function Bar() {
        this.foo = 1.2;
    }
    return Bar;
}());
exports["default"] = Bar;
