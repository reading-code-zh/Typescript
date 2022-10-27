/// <reference path='fourslash.ts' />

// @allowJs: true
// @checkJs: true
// @noEmit: true
// @noImplicitAny: true
// @Filename: important.js

////[|var x;|]
////function f() {
////    x++;
////}

verify.rangeAfterCodeFix("/**\n * @type {number}\n*/\nvar x;", /*includeWhiteSpace*/ undefined, /*errorCode*/ undefined, 0);
