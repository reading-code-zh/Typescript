/// <reference path="fourslash.ts" />

// @newline: LF
// @Filename: a.ts
////interface IFoo {
////    bar(x: number): void;
////}
////
////const obj: IFoo = {
////    /*a*/
////}
////type Foo = {
////    bar(x: number): void;
////    foo: (x: string) => string;
////}
////
////const f: Foo = {
////    /*b*/
////}
////
////interface Overload {
////    buzz(a: number): number;
////    buzz(a: string): string;
////}
////const o: Overload = {
////    /*c*/
////}
////interface Prop {
////    "space bar"(): string;
////}
////const p: Prop = {
////    /*d*/
////}

verify.completions({
    marker: "a",
    preferences: {
        includeCompletionsWithInsertText: true,
        includeCompletionsWithSnippetText: false,
        includeCompletionsWithObjectLiteralMethodSnippets: true,
        useLabelDetailsInCompletionEntries: true,
    },
    includes: [
        {
            name: "bar",
            sortText: completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "bar"),
            insertText: undefined,
        },
        {
            name: "bar",
            sortText: completion.SortText.SortBelow(
                completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "bar")),
            source: completion.CompletionSource.ObjectLiteralMethodSnippet,
            insertText: "bar(x) {\n},",
            labelDetails: {
                detail: "(x)",
            },
        },
    ],
});
verify.completions({
    marker: "b",
    preferences: {
        includeCompletionsWithInsertText: true,
        includeCompletionsWithSnippetText: false,
        includeCompletionsWithObjectLiteralMethodSnippets: true,
        useLabelDetailsInCompletionEntries: true,
    },
    includes: [
        {
            name: "bar",
            sortText: completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "bar"),
            insertText: undefined,
        },
        {
            name: "bar",
            sortText: completion.SortText.SortBelow(
                completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "bar")),
            source: completion.CompletionSource.ObjectLiteralMethodSnippet,
            insertText: "bar(x) {\n},",
            labelDetails: {
                detail: "(x)",
            },
        },
        {
            name: "foo",
            sortText: completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "foo"),
            insertText: undefined,
        },
        {
            name: "foo",
            sortText: completion.SortText.SortBelow(
                completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "foo")),
            source: completion.CompletionSource.ObjectLiteralMethodSnippet,
            insertText: "foo(x) {\n},",
            labelDetails: {
                detail: "(x)",
            },
        },
    ],
});
verify.completions({
    marker: "c",
    preferences: {
        includeCompletionsWithInsertText: true,
        includeCompletionsWithSnippetText: false,
        includeCompletionsWithObjectLiteralMethodSnippets: true,
    },
    exact: [
        {
            name: "buzz",
            sortText: completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "buzz"),
            // no declaration insert text, because this property has overloads
            insertText: undefined,
        },
    ],
});
verify.completions({
    marker: "d",
    preferences: {
        includeCompletionsWithInsertText: true,
        includeCompletionsWithSnippetText: false,
        includeCompletionsWithObjectLiteralMethodSnippets: true,
        useLabelDetailsInCompletionEntries: true,
    },
    includes: [
        {
            name: "\"space bar\"",
            sortText: completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "\"space bar\""),
            insertText: undefined,
        },
        {
            name: "\"space bar\"",
            sortText: completion.SortText.SortBelow(
                completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "\"space bar\"")),
            source: completion.CompletionSource.ObjectLiteralMethodSnippet,
            insertText: "\"space bar\"() {\n},",
            labelDetails: {
                detail: "()",
            },
        },
    ],
});
verify.completions({
    marker: "a",
    preferences: {
        includeCompletionsWithInsertText: true,
        includeCompletionsWithSnippetText: true,
        includeCompletionsWithObjectLiteralMethodSnippets: true,
        useLabelDetailsInCompletionEntries: true,
    },
    includes: [
        {
            name: "bar",
            sortText: completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "bar"),
            insertText: undefined,
        },
        {
            name: "bar",
            sortText: completion.SortText.SortBelow(
                completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "bar")),
            source: completion.CompletionSource.ObjectLiteralMethodSnippet,
            isSnippet: true,
            insertText: "bar(x) {\n    $0\n},",
            labelDetails: {
                detail: "(x)",
            },
        },
    ],
});
verify.completions({
    marker: "a",
    preferences: {
        includeCompletionsWithInsertText: true,
        includeCompletionsWithSnippetText: true,
        includeCompletionsWithObjectLiteralMethodSnippets: true,
        useLabelDetailsInCompletionEntries: false,
    },
    includes: [
        {
            name: "bar",
            sortText: completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "bar"),
            insertText: undefined,
        },
        {
            name: "bar(x)",
            sortText: completion.SortText.SortBelow(
                completion.SortText.ObjectLiteralProperty(completion.SortText.LocationPriority, "bar")),
            source: completion.CompletionSource.ObjectLiteralMethodSnippet,
            isSnippet: true,
            insertText: "bar(x) {\n    $0\n},",
        },
    ],
});
