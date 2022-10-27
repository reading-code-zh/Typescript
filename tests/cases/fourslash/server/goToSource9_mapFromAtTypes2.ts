/// <reference path="../fourslash.ts" />

// @moduleResolution: node

// @Filename: /node_modules/lodash/package.json
//// { "name": "lodash", "version": "4.17.15", "main": "./lodash.js" }

// @Filename: /node_modules/lodash/lodash.js
//// ;(function() {
////     /**
////      * Adds two numbers.
////      *
////      * @static
////      * @memberOf _
////      * @since 3.4.0
////      * @category Math
////      * @param {number} augend The first number in an addition.
////      * @param {number} addend The second number in an addition.
////      * @returns {number} Returns the total.
////      * @example
////      *
////      * _.add(6, 4);
////      * // => 10
////      */
////     var [|/*variable*/add|] = createMathOperation(function(augend, addend) {
////      return augend + addend;
////     }, 0);
////
////     function lodash(value) {}
////     lodash.[|/*property*/add|] = add;
////
////     /** Detect free variable `global` from Node.js. */
////     var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
////     /** Detect free variable `self`. */
////     var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
////     /** Used as a reference to the global object. */
////     var root = freeGlobal || freeSelf || Function('return this')();
////     /** Detect free variable `exports`. */
////     var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;////     
////     /** Detect free variable `module`. */
////     var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
////     if (freeModule) {
////       // Export for Node.js.
////       (freeModule.exports = _)._ = _;
////       // Export for CommonJS support.
////       freeExports._ = _;
////     }
////     else {
////       // Export to the global object.
////       root._ = _;
////     }
//// }.call(this));

// @Filename: /node_modules/@types/lodash/package.json
//// { "name": "@types/lodash", "version": "4.14.97", "types": "index.d.ts" }

// @Filename: /node_modules/@types/lodash/index.d.ts
//// /// <reference path="./common/math.d.ts" />
//// export = _;
//// export as namespace _;
//// declare const _: _.LoDashStatic;
//// declare namespace _ {
////     interface LoDashStatic {}
//// }

// @Filename: /node_modules/@types/lodash/common/math.d.ts
//// import _ = require("../index");
//// declare module "../index" {
////     interface LoDashStatic {
////         add(augend: number, addend: number): number;
////     }
//// }

// @Filename: /index.ts
//// import [|/*defaultImport*/_|], { [|/*unresolvableNamedImport*/foo|] } from [|/*moduleSpecifier*/'lodash'|];
//// _.[|/*propertyAccess*/add|]

verify.goToSourceDefinition("defaultImport", { file: "/node_modules/lodash/lodash.js", unverified: true });
verify.goToSourceDefinition("unresolvableNamedImport", { file: "/node_modules/lodash/lodash.js", unverified: true });
verify.goToSourceDefinition("moduleSpecifier", { file: "/node_modules/lodash/lodash.js", unverified: true });
verify.goToSourceDefinition("propertyAccess", [{ marker: "variable", unverified: true }, { marker: "property", unverified: true }])
