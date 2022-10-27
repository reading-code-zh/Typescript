/// <reference path='fourslash.ts' />

////let a = { b: { c: 0 } };
////let x = a && a.b && /*a*//*b*/a.b.c;

// verify that the refactor is offered for empty spans in variable statements.
goTo.select("a", "b");
verify.not.refactorAvailableForTriggerReason("implicit", "Convert to optional chain expression");

edit.applyRefactor({
    refactorName: "Convert to optional chain expression",
    actionName: "Convert to optional chain expression",
    actionDescription: "Convert to optional chain expression",
    newContent:
`let a = { b: { c: 0 } };
let x = a?.b?.c;`,
    triggerReason: "invoked"
});