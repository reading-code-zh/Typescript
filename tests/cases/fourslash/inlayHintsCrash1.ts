/// <reference path="fourslash.ts" />
// @allowJs: true
// @checkJs: true
// @Filename: foo.js
//// /**
////  * @param {function(string): boolean} f
////  */
//// function doThing(f) {
////     f(100)
//// }
verify.getInlayHints([], undefined, {
    includeInlayVariableTypeHints: true,
    includeInlayParameterNameHints: "all",
});
