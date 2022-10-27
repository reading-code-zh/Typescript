/// <reference path="fourslash.ts" />

// @Filename: foo.tsx
//// declare namespace JSX {
////     interface Element { }
////     interface IntrinsicElements {
////         foo: {
////             prop_a: boolean;
////             prop_b: string;
////             prop_c: any;
////             prop_d: { p1: string; }
////             prop_e: string | undefined;
////             prop_f: boolean | undefined | { p1: string; };
////             prop_g: { p1: string; } | undefined;
////             prop_h?: string;
////             prop_i?: boolean;
////             prop_j?: { p1: string; };
////         }
////     }
//// }
//// 
//// <foo [|prop_/**/|] />

verify.completions({
    marker: "",
    exact: [
        {
            name: "prop_a",
            insertText: "prop_a={$1}",
            isSnippet: true,
        },
        {
            name: "prop_b",
            insertText: "prop_b={$1}",
            isSnippet: true,
        },
        {
            name: "prop_c",
            insertText: "prop_c={$1}",
            isSnippet: true,
        },
        {
            name: "prop_d",
            insertText: "prop_d={$1}",
            isSnippet: true,
        },
        {
            name: "prop_e",
            insertText: "prop_e={$1}",
            isSnippet: true,
        },
        {
            name: "prop_f",
            insertText: "prop_f={$1}",
            isSnippet: true,
        },
        {
            name: "prop_g",
            insertText: "prop_g={$1}",
            isSnippet: true,
        },
        {
            name: "prop_h",
            insertText: "prop_h={$1}",
            isSnippet: true,
            sortText: completion.SortText.OptionalMember,
        },
        {
            name: "prop_i",
            insertText: "prop_i={$1}",
            isSnippet: true,
            sortText: completion.SortText.OptionalMember,
        },
        {
            name: "prop_j",
            insertText: "prop_j={$1}",
            isSnippet: true,
            sortText: completion.SortText.OptionalMember,
        }
    ],
    preferences: {
        jsxAttributeCompletionStyle: "braces",
        includeCompletionsWithSnippetText: true,
        includeCompletionsWithInsertText: true,
    }
});