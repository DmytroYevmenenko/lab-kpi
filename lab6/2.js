const compose = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new TypeError('All arguments must be functions');
  }

  const errorCallbacks = [];

  const composed = (x) => {
    let current = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        current = fns[i](current);
      } catch (err) {
        errorCallbacks.forEach(cb => cb(err));
        return undefined;
      }
    }
    return current;
  };

  composed.on = (event, callback) => {
    if (event === 'error' && typeof callback === 'function') {
      errorCallbacks.push(callback);
    }
    return composed;
  };

  composed.off = (event, callback) => {
    if (event === 'error') {
      const index = errorCallbacks.indexOf(callback);
      if (index !== -1) {
        errorCallbacks.splice(index, 1);
      }
    }
    return composed;
  };

  return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = compose(inc, twice, cube);
console.log(f1(5));

const f2 = compose(inc, inc);
console.log(f2(7));

try {
  const h = compose(inc, 7, cube);
} catch (error) {
  console.log(error.message);
}