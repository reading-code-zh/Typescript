/// <reference path='fourslash.ts' />

// @module: esnext
// @Filename: foo.ts
/////// <reference no-default-lib="true"/>
/////// <reference path='./bar.d.ts' />
////import.me/*reference*/ta;

//@Filename: bar.d.ts
////interface /*definition*/ImportMeta {
////}

verify.goToType("reference", "definition");
