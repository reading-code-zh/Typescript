/// <reference path="fourslash.ts" />

// @module: esnext
// @filename: /a.ts
////declare function foo(): any
////declare function bar(): any;
////export { foo };

// @filename: /b.ts
////import { bar } from "./a";

goTo.file("/b.ts");
verify.codeFix({
    description: [ts.Diagnostics.Export_0_from_module_1.message, "bar", "./a"],
    index: 0,
    newFileContent: {
        "/a.ts":
`declare function foo(): any
declare function bar(): any;
export { foo, bar };`,
    }
});
