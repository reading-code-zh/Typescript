//// [exportObjectRest.ts]
export const { x, ...rest } = { x: 'x', y: 'y' };

//// [exportObjectRest.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rest = exports.x = void 0;
    exports.x = (_a = { x: 'x', y: 'y' }, _a).x, exports.rest = __rest(_a, ["x"]);
});
