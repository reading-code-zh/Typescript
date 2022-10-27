/// <reference path='fourslash.ts' />

//// function foo(a){}
//// /*z*/f/*y*/oo/*x*/(/*w*//*v*/(/*u*//*t*/a/*s*/, b) => /*r*/a/*q*/ + b)


goTo.select("z", "y");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to named function");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to anonymous function");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to arrow function");

goTo.select("x", "w");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to named function");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to anonymous function");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to arrow function");

goTo.select("v", "u");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to named function");
verify.refactorAvailable("Convert arrow function or function expression", "Convert to anonymous function");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to arrow function");

goTo.select("t", "s");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to named function");
verify.refactorAvailable("Convert arrow function or function expression", "Convert to anonymous function");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to arrow function");

goTo.select("r", "q");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to named function");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to anonymous function");
verify.not.refactorAvailable("Convert arrow function or function expression", "Convert to arrow function");
