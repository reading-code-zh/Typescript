/// <reference path='fourslash.ts' />

////let a = {
////    b: () => {
////        return {
////            c: () => {
////                return { d: 0 };
////            }
////        };
////    }
////}
/////*a*/a && a.b() && a.b.c;/*b*/

goTo.select("a", "b");
verify.not.refactorAvailable("Convert to optional chain expression");
