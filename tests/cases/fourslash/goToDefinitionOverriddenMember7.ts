/// <reference path="./fourslash.ts"/>

// @noImplicitOverride: true

////class Foo {
////    [|/*1*/override|] m() {}
////}

verify.goToDefinition("1", []);
