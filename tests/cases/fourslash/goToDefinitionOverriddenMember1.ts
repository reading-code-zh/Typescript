/// <reference path="./fourslash.ts"/>

// @noImplicitOverride: true

////class Foo {
////	/*2*/p = '';
////}
////class Bar extends Foo {
////	[|/*1*/override|] p = '';
////}

verify.goToDefinition("1", "2");
