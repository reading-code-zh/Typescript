/// <reference path="fourslash.ts" />

// @module: esnext
// @allowJs: true
// @checkJs: true

// @Filename: /a.js
////function f() {}
////module.exports = f;
////module.exports = 42;

// @Filename: /b.js
////export const foo = 0;

// @Filename: /c.js
////foo

goTo.file("/c.js");
verify.importFixAtPosition([
`const { foo } = require("./b");

foo`]);
