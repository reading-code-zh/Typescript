/// <reference path="fourslash.ts" />

////let v = 100;
////let x = /absidey/ /**/

// Should not be blocked since there is a
// space separating us from the regex flags.

verify.completions({ marker: "", includes: "v" });
