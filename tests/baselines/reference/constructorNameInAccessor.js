//// [constructorNameInAccessor.ts]
class C1 {
    get constructor() { return }
    set constructor(value) {}
}


//// [constructorNameInAccessor.js]
class C1 {
    get constructor() { return; }
    set constructor(value) { }
}
