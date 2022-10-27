//// [uncalledFunctionChecksInConditional2.ts]
{
  const perf = window.performance

  // Simplified
  if (
    perf &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    perf.measure("");
    perf.clearMarks("")
    perf.clearMeasures("")
  }

  // With ||
  if (
    perf &&
    perf.mark &&
    perf.measure || !!true
  ) {
    perf.mark("");
  }
};

// Original #49192
declare let inBrowser: boolean;
{
  let mark;
  let measure;
  const perf = inBrowser && window.performance
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = (tag) => perf.mark(tag)
    measure = (name, startTag, endTag) => {
      perf.measure(name, startTag, endTag)
      perf.clearMarks(startTag)
      perf.clearMarks(endTag)
      // perf.clearMeasures(name)
    }
  }
};


//// [uncalledFunctionChecksInConditional2.js]
{
    var perf = window.performance;
    // Simplified
    if (perf &&
        perf.measure &&
        perf.clearMarks &&
        perf.clearMeasures) {
        perf.measure("");
        perf.clearMarks("");
        perf.clearMeasures("");
    }
    // With ||
    if (perf &&
        perf.mark &&
        perf.measure || !!true) {
        perf.mark("");
    }
}
;
{
    var mark = void 0;
    var measure = void 0;
    var perf_1 = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf_1 &&
        perf_1.mark &&
        perf_1.measure &&
        perf_1.clearMarks &&
        perf_1.clearMeasures) {
        mark = function (tag) { return perf_1.mark(tag); };
        measure = function (name, startTag, endTag) {
            perf_1.measure(name, startTag, endTag);
            perf_1.clearMarks(startTag);
            perf_1.clearMarks(endTag);
            // perf.clearMeasures(name)
        };
    }
}
;
