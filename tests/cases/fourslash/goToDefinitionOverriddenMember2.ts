/// <reference path="./fourslash.ts"/>

// @noImplicitOverride: true

////class Foo {
////	/*2*/m() {}
////}
////
////class Bar extends Foo {
////	[|/*1*/override|] m() {}
////}

verify.goToDefinition("1", "2");
