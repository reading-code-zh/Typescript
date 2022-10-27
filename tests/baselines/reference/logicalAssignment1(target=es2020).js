//// [logicalAssignment1.ts]
declare let a: string | undefined
declare let b: string | undefined
declare let c: string | undefined

declare let d: number | undefined
declare let e: number | undefined
declare let f: number | undefined

declare let g: 0 | 1 | 42
declare let h: 0 | 1 | 42
declare let i: 0 | 1 | 42


a &&= "foo"
b ||= "foo"
c ??= "foo"


d &&= 42
e ||= 42
f ??= 42

g &&= 42
h ||= 42
i ??= 42


//// [logicalAssignment1.js]
"use strict";
a && (a = "foo");
b || (b = "foo");
c ?? (c = "foo");
d && (d = 42);
e || (e = 42);
f ?? (f = 42);
g && (g = 42);
h || (h = 42);
i ?? (i = 42);
