!function(root) {
  /**
   * @preserve npm.im/actual
   * @param {string} feature range feature name e.g. "width"
   * @param {string=} unit CSS unit for feature e.g. "em"
   * @param {number=} guess initial iteration
   * @param {number=} step size for iterations
   * @return {number} breakpoint or 0
   */
  function actual(feature, unit, guess, step) {
    var up, gte, lte, curr, mq = actual["mq"]
    unit = typeof unit == "string" ? unit : ""
    guess = 0 < guess ? unit ? +guess : guess>>0 : 1
    // Step starts positive. Minimize iterations, unless feat may be "integer" type.
    step = 0 < step ? +step : 0 > step ? -step : "px" == unit ? 256 : unit ? 32 : 1
    for (feature += ":", unit += ")", curr = guess; step && 0 <= curr; curr+=step) {
      lte = mq("(min-" + feature + curr + unit)
      gte = mq("(max-" + feature + curr + unit)
      // Found: Use the floored value if it makes an exact match. Else return as is.
      if (lte && gte) return mq("(" + feature + (curr>>0) + unit) ? curr>>0 : curr
      // 1st iteration: Save direction. Flip if down. Break if neither b/c unknown.
      if (null == up) step = (up = !gte) ? lte && step : -step
      // Later iterations: If skipped, reverse direction and raise precision.
      else if (gte ? up : !up) up = !up, step = -step/2
    }
    return 0
  }

  /**
   * @param {string} unit
   * @return {Function}
   */
  function as(unit) {
    return function(feature) {
      return actual(feature, unit)
    }
  }

  var media = "matchMedia"
  var win = typeof window != "undefined" && window
  actual["actual"] = actual
  actual["as"] = as
  actual["is"] = actual["mq"] = win[media] || win[media = "msMatchMedia"] ? function(q) {
    return !!win[media](q).matches
  } : function() {
    return false
  }

  typeof module != "undefined" && module.exports
    ? module.exports = actual
    : root["actual"] = actual
}(this)
