// ==ORIGINAL==

function decorator() {
    return (target: any, key: any, descriptor: PropertyDescriptor) => descriptor;
}
class Foo {
    @decorator()
    public /*[#|*/method/*|]*/() {
        return fetch('a').then(x => x);
    }
}

// ==ASYNC FUNCTION::Convert to async function==

function decorator() {
    return (target: any, key: any, descriptor: PropertyDescriptor) => descriptor;
}
class Foo {
    @decorator()
    public async method() {
        const x = await fetch('a');
        return x;
    }
}
