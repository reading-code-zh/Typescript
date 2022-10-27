//// [test.tsx]
declare const React: any;

export function T1(a: any) {
    return <div className={"T1"} { ...a }>T1</div>;
}

export function T2(a: any, b: any) {
    return <div className={"T2"} { ...a } { ...b }>T2</div>;
}

export function T3(a: any, b: any) {
    return <div { ...a } className={"T3"} { ...b }>T3</div>;
}

export function T4(a: any, b: any) {
    return <div className={"T4"} { ...{ ...a, ...b } }>T4</div>;
}

export function T5(a: any, b: any, c: any, d: any) {
    return <div className={"T5"} { ...{ ...a, ...b, ...{ c, d } } }>T5</div>;
}

export function T6(a: any, b: any, c: any, d: any) {
    return <div className={"T6"} { ...{ ...a, ...b, ...{ ...c, ...d } } }>T6</div>;
}


//// [test.js]
export function T1(a) {
    return React.createElement("div", Object.assign({ className: "T1" }, a), "T1");
}
export function T2(a, b) {
    return React.createElement("div", Object.assign({ className: "T2" }, a, b), "T2");
}
export function T3(a, b) {
    return React.createElement("div", Object.assign({}, a, { className: "T3" }, b), "T3");
}
export function T4(a, b) {
    return React.createElement("div", Object.assign({ className: "T4" }, Object.assign(Object.assign({}, a), b)), "T4");
}
export function T5(a, b, c, d) {
    return React.createElement("div", Object.assign({ className: "T5" }, Object.assign(Object.assign(Object.assign({}, a), b), { c, d })), "T5");
}
export function T6(a, b, c, d) {
    return React.createElement("div", Object.assign({ className: "T6" }, Object.assign(Object.assign(Object.assign({}, a), b), Object.assign(Object.assign({}, c), d))), "T6");
}
