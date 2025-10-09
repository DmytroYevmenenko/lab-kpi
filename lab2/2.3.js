'use strict'

const average = (a, b) => {
    return (a + b)/2;
}
console.log(average(1, 100));

const square = (x) => {
    return x * x; 
}
console.log(square(10));
const cube = (x) => {
    return x * x * x;
}
console.log(cube(10));

const calculate = () => {
    const arr = []
    for(let i = 0; i < 9; i++){
        const result = average(square(i), cube(i));
        arr.push(result);
    }
    return arr;
}
console.log(calculate());
