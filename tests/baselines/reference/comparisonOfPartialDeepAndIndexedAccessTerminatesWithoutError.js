//// [comparisonOfPartialDeepAndIndexedAccessTerminatesWithoutError.ts]
type PartialDeep<T> = {[K in keyof T]?: PartialDeep<T[K]>};
type Many<T> = T | readonly T[];

interface Collection<T> {
    sortBy(...iteratees: Many<PartialDeep<T>>[]): Collection<T>;
}

const x: Collection<{x: number}> = (null as any as Collection<{x: number, y: number}>);

export {};


//// [comparisonOfPartialDeepAndIndexedAccessTerminatesWithoutError.js]
"use strict";
exports.__esModule = true;
var x = null;
