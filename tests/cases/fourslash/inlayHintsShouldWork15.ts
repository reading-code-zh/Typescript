/// <reference path="fourslash.ts" />

////class C {}
////namespace N { export class Foo {} }
////interface Foo {}

////const a = "a";
////const b = 1;
////const c = true;
////
////const d = {} as Foo;
////const e = <Foo>{};
////const f = {} as const;
////const g = (({} as const));
////
////const h = new C();
////const i = new N.C();
////const j = ((((new C()))));
////
////const k = { a: 1, b: 1 };
////const l = ((({ a: 1, b: 1 })));

verify.getInlayHints([], undefined, {
    includeInlayVariableTypeHints: true
});
