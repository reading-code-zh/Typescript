//// [privateNameStaticMethodAssignment.ts]
class A3 {
    static #method() { };
    constructor(a: typeof A3, b: any) {
        A3.#method = () => {} // Error, not writable 
        a.#method = () => { }; // Error, not writable 
        b.#method =  () => { } //Error, not writable 
        ({ x: A3.#method } = { x: () => {}}); //Error, not writable 
        let x = A3.#method;
        b.#method++ //Error, not writable 
    }
}


//// [privateNameStaticMethodAssignment.js]
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _A3_method;
class A3 {
    ;
    constructor(a, b) {
        var _b, _c;
        __classPrivateFieldSet(A3, _a, () => { }, "m"); // Error, not writable 
        __classPrivateFieldSet(a, _a, () => { }, "m"); // Error, not writable 
        __classPrivateFieldSet(b, _a, () => { }, "m"); //Error, not writable 
        ({ x: ({ set value(_b) { __classPrivateFieldSet(A3, _a, _b, "m"); } }).value } = { x: () => { } }); //Error, not writable 
        let x = __classPrivateFieldGet(A3, _a, "m", _A3_method);
        __classPrivateFieldSet(_b = b, _a, (_c = __classPrivateFieldGet(_b, _a, "m", _A3_method), _c++, _c), "m"); //Error, not writable 
    }
}
_a = A3, _A3_method = function _A3_method() { };
