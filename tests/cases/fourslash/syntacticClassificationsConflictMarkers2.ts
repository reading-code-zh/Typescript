/// <reference path="fourslash.ts"/>

////<<<<<<< HEAD
////class C { }
////=======
////class D { }
////>>>>>>> Branch - a

const c = classification("original");
verify.syntacticClassificationsAre(
    c.comment("<<<<<<< HEAD"),
    c.keyword("class"), c.className("C"), c.punctuation("{"), c.punctuation("}"),
    c.comment("======="),
    c.keyword("class"), c.identifier("D"), c.punctuation("{"), c.punctuation("}"),
    c.comment(">>>>>>> Branch - a"));

const c2 = classification("2020");
verify.semanticClassificationsAre("2020",
    c2.semanticToken("class.declaration", "C"), 
);
