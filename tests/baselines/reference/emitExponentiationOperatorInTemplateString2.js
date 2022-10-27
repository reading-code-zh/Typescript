//// [emitExponentiationOperatorInTemplateString2.ts]
var t1 = 10;
var t2 = 10;
var s;

// With templateHead
`hello ${t1 ** t2}`;
`hello ${t1 ** t2 ** t1}`;
`hello ${t1 + t2 ** t1}`;
`hello ${t1 ** t2 + t1}`;
`hello ${t1 + t2 ** t2 + t1 }`;
`hello ${typeof (t1 ** t2 ** t1) }`;
`hello ${1 + typeof (t1 ** t2 ** t1) }`;

`hello ${t1 ** t2}${t1 ** t2}`;
`hello ${t1 ** t2 ** t1}${t1 ** t2 ** t1}`;
`hello ${t1 + t2 ** t1}${t1 + t2 ** t1}`;
`hello ${t1 ** t2 + t1}${t1 ** t2 + t1}`;
`hello ${t1 + t2 ** t2 + t1}${t1 + t2 ** t2 + t1}`;
`hello ${typeof (t1 ** t2 ** t1) }${typeof (t1 ** t2 ** t1) }`;

`hello ${t1 ** t2} hello world ${t1 ** t2}`;
`hello ${t1 ** t2 ** t1} hello world ${t1 ** t2 ** t1}`;
`hello ${t1 + t2 ** t1} hello world ${t1 + t2 ** t1}`;
`hello ${t1 ** t2 + t1} hello world ${t1 ** t2 + t1}`;
`hello ${t1 + t2 ** t2 + t1} hello world ${t1 + t2 ** t2 + t1}`;
`hello ${typeof (t1 ** t2 ** t1) } hello world ${typeof (t1 ** t2 ** t1) }`;

//// [emitExponentiationOperatorInTemplateString2.js]
var t1 = 10;
var t2 = 10;
var s;
// With templateHead
"hello ".concat(Math.pow(t1, t2));
"hello ".concat(Math.pow(t1, Math.pow(t2, t1)));
"hello ".concat(t1 + Math.pow(t2, t1));
"hello ".concat(Math.pow(t1, t2) + t1);
"hello ".concat(t1 + Math.pow(t2, t2) + t1);
"hello ".concat(typeof (Math.pow(t1, Math.pow(t2, t1))));
"hello ".concat(1 + typeof (Math.pow(t1, Math.pow(t2, t1))));
"hello ".concat(Math.pow(t1, t2)).concat(Math.pow(t1, t2));
"hello ".concat(Math.pow(t1, Math.pow(t2, t1))).concat(Math.pow(t1, Math.pow(t2, t1)));
"hello ".concat(t1 + Math.pow(t2, t1)).concat(t1 + Math.pow(t2, t1));
"hello ".concat(Math.pow(t1, t2) + t1).concat(Math.pow(t1, t2) + t1);
"hello ".concat(t1 + Math.pow(t2, t2) + t1).concat(t1 + Math.pow(t2, t2) + t1);
"hello ".concat(typeof (Math.pow(t1, Math.pow(t2, t1)))).concat(typeof (Math.pow(t1, Math.pow(t2, t1))));
"hello ".concat(Math.pow(t1, t2), " hello world ").concat(Math.pow(t1, t2));
"hello ".concat(Math.pow(t1, Math.pow(t2, t1)), " hello world ").concat(Math.pow(t1, Math.pow(t2, t1)));
"hello ".concat(t1 + Math.pow(t2, t1), " hello world ").concat(t1 + Math.pow(t2, t1));
"hello ".concat(Math.pow(t1, t2) + t1, " hello world ").concat(Math.pow(t1, t2) + t1);
"hello ".concat(t1 + Math.pow(t2, t2) + t1, " hello world ").concat(t1 + Math.pow(t2, t2) + t1);
"hello ".concat(typeof (Math.pow(t1, Math.pow(t2, t1))), " hello world ").concat(typeof (Math.pow(t1, Math.pow(t2, t1))));
