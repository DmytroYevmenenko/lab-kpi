const sum = (...args) =>{
    const result = args.reduce((res, num) => res + num, 0)
    return result;
}

console.log(sum(2, 2, 2));