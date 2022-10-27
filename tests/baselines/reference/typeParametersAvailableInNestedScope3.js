//// [typeParametersAvailableInNestedScope3.ts]
function foo<T>(v: T) {
    function a<T>(a: T) { return a; }
    function b(): T { return v; }

    function c<T>(v: T) {
        function a<T>(a: T) { return a; }
        function b(): T { return v; }
        return { a, b };
    }

    return { a, b, c };
}


//// [typeParametersAvailableInNestedScope3.js]
function foo(v) {
    function a(a) { return a; }
    function b() { return v; }
    function c(v) {
        function a(a) { return a; }
        function b() { return v; }
        return { a: a, b: b };
    }
    return { a: a, b: b, c: c };
}


//// [typeParametersAvailableInNestedScope3.d.ts]
declare function foo<T>(v: T): {
    a: <T_1>(a: T_1) => T_1;
    b: () => T;
    c: <T_2>(v: T_2) => {
        a: <T_3>(a: T_3) => T_3;
        b: () => T_2;
    };
};
