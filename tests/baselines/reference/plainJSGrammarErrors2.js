//// [tests/cases/conformance/salsa/plainJSGrammarErrors2.ts] ////

//// [plainJSGrammarErrors2.js]

//// [a.js]
export default 1;

//// [b.js]
/**
 * @deprecated
 */
export { default as A } from "./a";


//// [plainJSGrammarErrors2.js]
//// [a.js]
export default 1;
//// [b.js]
/**
 * @deprecated
 */
export { default as A } from "./a";
