﻿/// <reference path="fourslash.ts" />

////function foo(x: string, y: number, z: boolean) {
////    function bar(a: number, b: string = /*1*/, c: typeof x = "hello") {
////
////    }
////}

verify.completions({
    marker: "1",
    // Note: `b = b` or `b = c` would be a compile error
    includes: ["foo", "x", "y", "z", "bar", "a", "b", "c"],
});
