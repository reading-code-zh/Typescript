//// [assigningFunctionToTupleIssuesError.ts]
declare let a: () => void;
let b: [string] = a;

//// [assigningFunctionToTupleIssuesError.js]
var b = a;
