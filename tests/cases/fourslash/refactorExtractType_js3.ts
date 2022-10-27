/// <reference path='fourslash.ts' />

// @allowJs: true
// @Filename: a.js
//// /** @type { /*a*/string | number/*b*/ } */
//// var x;

goTo.file('a.js')
goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Extract type",
    actionName: "Extract to typedef",
    actionDescription: "Extract to typedef",
    newContent: `/**
 * @typedef {string | number} /*RENAME*/NewType
 */

/** @type { NewType } */
var x;`,
});
