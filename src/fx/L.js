import _ from './_';

const L = {};

L.range = _.curry(function*(l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
});

L.map = _.curry(function*(f, iter) {
  iter = iter[Symbol.iterator]();
  for (const a of iter) {
    yield f(a);
  }
});

L.filter = _.curry(function*(f, iter) {
  iter = iter[Symbol.iterator]();
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

export default L;
