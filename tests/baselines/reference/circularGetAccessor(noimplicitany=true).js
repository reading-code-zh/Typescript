//// [circularGetAccessor.ts]
declare class C {
    get foo(): typeof this.foo;
}


//// [circularGetAccessor.js]
