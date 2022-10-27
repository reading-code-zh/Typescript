/// <reference path="fourslash.ts" />
// @filename: /dir/a.ts
////declare const p: Promise<number>;
////await p;
////export {};
// @filename: /dir/tsconfig.json
////{
////    "compilerOptions": {
////        "target": "es2015"
////    }
////}


verify.codeFix({
    description: [ts.Diagnostics.Set_the_target_option_in_your_configuration_file_to_0.message, "es2017"],
    index: 1,
    newFileContent: {
      "/dir/tsconfig.json":
`{
    "compilerOptions": {
        "target": "es2017"
    }
}`
    }
});
