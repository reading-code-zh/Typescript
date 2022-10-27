//// [instanceofTypeAliasToGenericClass.ts]
declare class TableClass<S = any> {
    _field: S;
}

export type Table = TableClass;

function fn<T extends Table>(o: T) {
    return o instanceof TableClass;
}

function fn2<T extends TableClass>(o: T) {
    return o instanceof TableClass;
}

declare const o: Table;
o instanceof TableClass;


//// [instanceofTypeAliasToGenericClass.js]
"use strict";
exports.__esModule = true;
function fn(o) {
    return o instanceof TableClass;
}
function fn2(o) {
    return o instanceof TableClass;
}
o instanceof TableClass;
