/// <reference path='fourslash.ts' />

// @target: esnext
// @module: esnext

// @filename: main.ts
////import("./other.json", {/*0*/});
////import("./other.json", { asse/*1*/});

// @filename: other.json
////{}

verify.baselineCompletions();
