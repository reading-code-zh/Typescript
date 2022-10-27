/// <reference path='fourslash.ts'/>

// @strictNullChecks: true
////function foo(fn: () => boolean) {
////    1 && fn/**/ && console.log('test');
////}

verify.codeFixAvailable([
    { description: ts.Diagnostics.Add_missing_call_parentheses.message }
]);

verify.codeFix({
    description: ts.Diagnostics.Add_missing_call_parentheses.message,
    index: 0,
    newFileContent:
`function foo(fn: () => boolean) {
    1 && fn() && console.log('test');
}`,
});
