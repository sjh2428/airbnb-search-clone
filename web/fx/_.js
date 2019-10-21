const _ = {};

_.curry = f => (a, ...as) => (as.length ? f(a, ...as) : (...as) => f(a, ...as));

_.map = _.curry((f, iter) => {
  const res = [];
  for (const a of iter) res.push(f(a));
  return res;
});

_.filter = _.curry((f, iter) => {
  const res = [];
  for (const a of iter) if (f(a)) res.push(a);
  return res;
});

_.reduce = _.curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

_.take = _.curry((l, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length === l) return res;
  }
  return res;
});

_.go = (...fs) => _.reduce((acc, f) => f(acc), fs);
_.pipe = (f, ...fs) => (...as) => _.go(f(...as), fs);

export default _;
