//// [tests/cases/conformance/externalModules/umd9.ts] ////

//// [foo.d.ts]
declare class Thing {
  foo(): number;
}
export = Thing;
export as namespace Foo;

//// [a.ts]
/// <reference path="foo.d.ts" />
export const x = Foo; // OK in value position because allowUmdGlobalAccess: true


//// [a.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
/// <reference path="foo.d.ts" />
exports.x = Foo; // OK in value position because allowUmdGlobalAccess: true
