function seq(firstFn) {
    const functions = [firstFn];
    
    function chain(nextFn) {
        if (typeof nextFn === 'function') {
            functions.unshift(nextFn);
            return chain;
        } else {
            return functions.reduce((acc, fn) => fn(acc), nextFn);
        }
    }
    
    return chain;
}

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));


