/// <reference path='fourslash.ts' />

////interface I {
////    [|[|{| "contextRangeIndex": 0 |}property1|]: number;|]
////    property2: string;
////}
////var elems: I[], p1: number, [|[|{| "contextRangeIndex": 2 |}property1|]: number|];
////[|[{ [|{| "contextRangeIndex": 4 |}property1|]: p1 }] = elems;|]
////[|[{ [|{| "contextRangeIndex": 6 |}property1|] }] = elems;|]

const ranges = test.ranges();
const [r0Def, r0, r1Def, r1, r2Def, r2, r3Def, r3] = ranges;
verify.renameLocations([r0, r2], [r0, r2, { range: r3, suffixText: ": property1" }]);
verify.renameLocations([r1, r3], [r1, { range: r3, prefixText: "property1: " }]);

