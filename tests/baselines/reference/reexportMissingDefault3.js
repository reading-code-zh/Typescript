//// [tests/cases/compiler/reexportMissingDefault3.ts] ////

//// [b.ts]
export const b = null;

//// [a.ts]
export { b } from "./b";
export { default as a } from "./b";

//// [b.js]
"use strict";
exports.__esModule = true;
exports.b = void 0;
exports.b = null;
//// [a.js]
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
exports.__esModule = true;
exports.a = exports.b = void 0;
var b_1 = require("./b");
__createBinding(exports, b_1, "b");
var b_2 = require("./b");
__createBinding(exports, b_2, "default", "a");
