//// [tests/cases/compiler/moduleResolutionWithSuffixes_one_jsonModule.ts] ////

//// [index.ts]
import foo from "./foo.json";
console.log(foo.ios);
//// [foo.ios.json]
{
	"ios": "platform ios"
}
//// [foo.json]
{
	"base": "platform base"
}


//// [/bin/foo.ios.json]
{
    "ios": "platform ios"
}
//// [/bin/index.js]
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var foo_json_1 = __importDefault(require("./foo.json"));
console.log(foo_json_1["default"].ios);
