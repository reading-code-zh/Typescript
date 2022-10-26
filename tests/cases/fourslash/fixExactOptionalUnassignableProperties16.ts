/// <reference path='fourslash.ts'/>

// @strictNullChecks: true
// @exactOptionalPropertyTypes: true
//// interface Assignment {
////     a?: number
//// }
//// interface J {
////     a?: number | undefined
//// }
//// declare var j: J
//// var assignment/**/: Assignment = j
verify.codeFixAvailable([
    { description: ts.Diagnostics.Add_undefined_to_optional_property_type.message }
]);

verify.codeFix({
    description: ts.Diagnostics.Add_undefined_to_optional_property_type.message,
    index: 0,
    newFileContent:
`interface Assignment {
    a?: number | undefined
}
interface J {
    a?: number | undefined
}
declare var j: J
var assignment: Assignment = j`,
});

