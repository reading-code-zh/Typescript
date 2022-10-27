//// [commentsOnJSXExpressionsArePreserved.tsx]
// file is intentionally not a module - this tests for a crash in the module/system transforms alongside the `react-jsx` and `react-jsxdev` outputs
namespace JSX {}
class Component {
    render() {
        return <div>
            {/* missing */}
            {null/* preserved */}
            {
                // ??? 1
            }
            { // ??? 2
            }
            {// ??? 3
            }
            {
                // ??? 4
            /* ??? 5 */}
        </div>;
    }
}

//// [commentsOnJSXExpressionsArePreserved.js]
"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.render = function () {
        return (0, jsx_runtime_1.jsx)("div", { children: null /* preserved */ });
    };
    return Component;
}());
