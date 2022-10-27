//// [namedTupleMembersErrors.ts]
export type Segment1 = [length: number, number]; // partially named, disallowed
export type Segment2 = [number, size: number]; // partially named, disallowed

export type List = [item: any, ...any];  // partially named, disallowed
export type List2 = [any, ...remainder: any];  // partially named, disallowed

export type Pair = [item: any, any?];  // partially named, disallowed
export type Pair2 = [any, last?: any];  // partially named, disallowed

export type Opt = [element: string?]; // question mark on element disallowed

export type Trailing = [first: string, rest: ...string[]]; // dots on element disallowed

export type OptTrailing = [first: string, rest: ...string[]?]; // dots+question on element disallowed

export type OptRest = [first: string, ...rest?: string[]]; // rest+optional disallowed

export type NonArrayRest = [first: string, ...rest: number]; // non-arraylike rest, disallowed

export type RecusiveRestUnlabeled = [string, ...RecusiveRestUnlabeled];
export type RecusiveRest = [first: string, ...rest: RecusiveRest]; // marked as incorrect, same as above


//// [namedTupleMembersErrors.js]
"use strict";
exports.__esModule = true;


//// [namedTupleMembersErrors.d.ts]
export type Segment1 = [length: number, number];
export type Segment2 = [number, size: number];
export type List = [item: any, ...any];
export type List2 = [any, ...remainder: any];
export type Pair = [item: any, any?];
export type Pair2 = [any, last?: any];
export type Opt = [element: string?];
export type Trailing = [first: string, rest: ...string[]];
export type OptTrailing = [first: string, rest: ...?string[]];
export type OptRest = [first: string, ...rest?: string[]];
export type NonArrayRest = [first: string, ...rest: number];
export type RecusiveRestUnlabeled = [string, ...RecusiveRestUnlabeled];
export type RecusiveRest = [first: string, ...rest: RecusiveRest];
