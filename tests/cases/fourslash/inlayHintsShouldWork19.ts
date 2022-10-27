/// <reference path="fourslash.ts" />

//// const a/*a*/ = () => 123;

const markers = test.markers();
verify.getInlayHints([
    {
        text: ': () => number',
        position: markers[0].position,
        kind: ts.InlayHintKind.Type,
        whitespaceBefore: true
    },
], undefined, {
    includeInlayVariableTypeHints: true
});
