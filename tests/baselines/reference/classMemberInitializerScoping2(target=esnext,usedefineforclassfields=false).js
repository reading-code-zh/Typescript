//// [classMemberInitializerScoping2.ts]
const x = 1
class C {
    p = x
    constructor(x: string) { }
}


//// [classMemberInitializerScoping2.js]
const x = 1;
class C {
    constructor(x) {
        this.p = x;
    }
}
