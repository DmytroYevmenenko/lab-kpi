const array1 = [1, 2, 3, 4, 5, 6, 7, 10, 15];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const difference = (a, b) => {
    const arrayf = [];
    for(let i of b) if(!a.includes(i)) arrayf.push(i);
    for(let i of a) if(!b.includes(i)) arrayf.push(i);
    return arrayf;
};

console.log(difference(array1, array2));