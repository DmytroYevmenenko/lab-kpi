function contract(fn, ...types) {
    return function(...args) {
        for (let i = 0; i < args.length; i++) {
            const expectedType = types[i].name.toLowerCase();
            const actualType = typeof args[i];           
            if (actualType !== expectedType) {
                throw new TypeError(`Argument ${i} must be ${types[i].name}`);
            }
        }
        const result = fn(...args);
        const returnType = types[types.length - 1];
        const expectedReturnType = returnType.name.toLowerCase();
        const actualReturnType = typeof result;
        if (actualReturnType !== expectedReturnType) {
            throw new TypeError(`Return value must be ${returnType.name}`);
        }
        return result;
    };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings('Hello ', 'world!');
console.dir(res);