/// <reference path="fourslash.ts" />

////function foo() {
////    class Foo {
////        static { [|/*start*/return|]; }
////    }
////}

verify.goToDefinition("start", []);
