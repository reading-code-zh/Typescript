/// <reference path="../fourslash.ts" />

// @Filename: /node_modules/a/dist/index.d.ts
////export declare class Foo {
////    bar: any;
////}
//////# sourceMappingURL=index.d.ts.map

// @Filename: /node_modules/a/dist/index.d.ts.map
////{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":"AAAA,qBAAa,GAAG;IACZ,GAAG,MAAC;CACP"}

// @Filename: /node_modules/a/src/index.ts
////export class /*2*/Foo {
////}
////

// @Filename: /node_modules/a/package.json
////{
////    "name": "a",
////    "version": "0.0.0",
////    "private": true,
////    "main": "dist",
////    "types": "dist"
////}

// @Filename: /index.ts
////import { Foo/*1*/ } from "a";

goTo.file("/index.ts");

goTo.marker("1");
verify.goToDefinitionIs("2"); // getDefinitionAndBoundSpan
