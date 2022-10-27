/// <reference path="fourslash.ts" />

///////<reference path="./Bar.ts" />

////[|function [|{| "contextRangeIndex": 0 |}Bar|]() {
////    // This is a reference to Bar in a comment.
////    "this is a reference to [|Bar|] in a string"
////}|]

const [rDef, ...ranges] = test.ranges();
verify.renameLocations(ranges[0], { findInStrings: true, ranges })
