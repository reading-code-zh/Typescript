//// [tests/cases/conformance/externalModules/typeOnly/exportDeclaration_value.ts] ////

//// [a.ts]
const A = {};
export type { A };
export const AA = {};

//// [b.ts]
export type { AA } from './a';


//// [a.js]
"use strict";
exports.__esModule = true;
exports.AA = void 0;
var A = {};
exports.AA = {};
//// [b.js]
"use strict";
exports.__esModule = true;
