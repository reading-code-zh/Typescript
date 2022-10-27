/// <reference path="fourslash.ts" />

// Regression test for bug #41417

//// import {
////     Bar   
////     , Foo   
////   } from "foo"
//// 
//// console.log(Foo, Bar);

verify.organizeImports(
`import {
    Bar,
    Foo
} from "foo";

console.log(Foo, Bar);`); 