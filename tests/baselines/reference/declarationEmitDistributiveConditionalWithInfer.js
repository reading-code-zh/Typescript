//// [declarationEmitDistributiveConditionalWithInfer.ts]
// This function's type is changed on declaration
export const fun = (
    subFun: <Collection, Field extends keyof Collection>()
        => FlatArray<Collection[Field], 0>[]) => { };


//// [declarationEmitDistributiveConditionalWithInfer.js]
"use strict";
exports.__esModule = true;
exports.fun = void 0;
// This function's type is changed on declaration
var fun = function (subFun) { };
exports.fun = fun;


//// [declarationEmitDistributiveConditionalWithInfer.d.ts]
export declare const fun: (subFun: <Collection, Field extends keyof Collection>() => (Collection[Field] extends infer T ? T extends Collection[Field] ? T extends readonly (infer InnerArr)[] ? InnerArr : T : never : never)[]) => void;
