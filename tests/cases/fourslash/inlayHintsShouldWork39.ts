/// <reference path="fourslash.ts" />

//// function foo (): number {
////     return 1
//// }

verify.getInlayHints([], undefined, {
    includeInlayFunctionLikeReturnTypeHints: true,
});
