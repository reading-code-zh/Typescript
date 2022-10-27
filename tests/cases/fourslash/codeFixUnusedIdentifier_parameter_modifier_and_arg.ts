/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
// @noUnusedParameters: true

////export class Example {
////    constructor(private readonly arg: any) {
////    }
////}

verify.codeFix({
    description: "Remove unused declaration for: 'arg'",
    newFileContent:
`export class Example {
    constructor() {
    }
}`,
});
