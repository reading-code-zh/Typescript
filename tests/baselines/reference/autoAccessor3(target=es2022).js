//// [autoAccessor3.ts]
class C1 {
    accessor "w": any;
    accessor "x" = 1;
    static accessor "y": any;
    static accessor "z" = 2;
}


//// [autoAccessor3.js]
class C1 {
    #_a_accessor_storage;
    get "w"() { return this.#_a_accessor_storage; }
    set "w"(value) { this.#_a_accessor_storage = value; }
    #_b_accessor_storage = 1;
    get "x"() { return this.#_b_accessor_storage; }
    set "x"(value) { this.#_b_accessor_storage = value; }
    static #_c_accessor_storage;
    static get "y"() { return this.#_c_accessor_storage; }
    static set "y"(value) { this.#_c_accessor_storage = value; }
    static #_d_accessor_storage = 2;
    static get "z"() { return this.#_d_accessor_storage; }
    static set "z"(value) { this.#_d_accessor_storage = value; }
}
