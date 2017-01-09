!function(root) {
  var common = typeof module != 'undefined' && !!module.exports;
  var actual = common ? require('./') : root.actual;

  function ok(result, correct) {
    if (result !== correct) {
      throw new Error(result + ' should be ' + correct);
    }
  }

  ok(typeof actual('width'), 'number');
  ok(typeof actual.mq(''), 'boolean');
  ok(actual.actual, actual);
  ok(actual.as('px')('width'), actual('width', 'px'));

  console.log('All tests passed =)');
}(this);
