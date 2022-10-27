/// <reference path="../fourslash.ts"/>

// @allowNonTsExtensions: true
// @Filename: jsdocCompletion_typedef.js

//// /**
////  * @typedef {string | number} T.NumberLike
////  * @typedef {{age: number}} T.People
////  * @typedef {string | number} T.O.Q.NumberLike
////  * @type {T.NumberLike}
////  */
//// var x; x./*1*/;
//// /** @type {T.O.Q.NumberLike} */
//// var x1; x1./*2*/;
//// /** @type {T.People} */
//// var x1; x1./*3*/;

verify.completions(
    { marker: ["1", "3"], includes: ["charAt", "toExponential"] },
    { marker: "2", includes: { name: "age", sortText: completion.SortText.JavascriptIdentifiers } },
);
