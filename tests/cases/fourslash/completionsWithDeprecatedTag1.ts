/// <reference path="fourslash.ts" />
// @strict: true

// @filename: /foobar.ts
//// /** @deprecated */
//// export function foobar() {}

// @filename: /foo.ts
//// import { foobar/*4*/ } from "./foobar";
////
//// /** @deprecated */
//// interface Foo {
////     /** @deprecated */
////     bar(): void
////     /** @deprecated */
////     prop: number
//// }
//// declare const foo: Foo;
//// declare const foooo: Fo/*1*/;
//// foo.ba/*2*/;
//// foo.pro/*3*/;
////
//// fooba/*5*/;

verify.completions({
    marker: "1",
    includes: [
      { name: "Foo", kind: "interface", kindModifiers: "deprecated", sortText: completion.SortText.Deprecated(completion.SortText.LocationPriority) }
    ]
}, {
    marker: "2",
    includes: [
      { name: "bar", kind: "method", kindModifiers: "deprecated", sortText: completion.SortText.Deprecated(completion.SortText.LocationPriority) }
    ]
}, {
    marker: "3",
    includes: [
      { name: "prop", kind: "property", kindModifiers: "deprecated", sortText: completion.SortText.Deprecated(completion.SortText.LocationPriority) }
    ]
}, {
    marker: "4",
    includes: [
      { name: "foobar", kind: "function", kindModifiers: "export,deprecated", sortText: completion.SortText.Deprecated(completion.SortText.LocationPriority) }
    ]
}, {
    marker: "5",
    includes: [
      { name: "foobar", kind: "alias", kindModifiers: "export,deprecated", sortText: completion.SortText.Deprecated(completion.SortText.LocationPriority) }
    ]
});
