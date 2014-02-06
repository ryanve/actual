(function(root) {
  var common = typeof module != 'undefined' && !!module.exports;
  var aok = common ? require('../node_modules/aok') : root.aok;
  var actual = common ? require('../src') : root.actual;
  aok({ id:'actual', test:typeof actual('width') == 'number' });
  aok({ id:'actual.mq', test:typeof actual.mq('') == 'boolean' });
  aok({ id:'actual.actual', test:actual.actual === actual });
  aok({ id:'actual.feature', test:actual.feature('width')('px') === actual('width', 'px') });
  aok({ id:'actual.as', test:actual.as('px')('width') === actual('width', 'px') });
}(this));