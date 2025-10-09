'use strict'

const range = (start = 15, end = 30) => {
  const length = end - start;
  if (length < 0) return;
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
console.log(range(15, 30));


const rangeOdd = (start = 15, end = 30) => {
  const length = end - start;
  if (length < 0) return;
  const arr = [];
  for (let i = start; i <= end; i++) {
    if( i % 2 !== 0){
    arr.push(i);
    }
  }
  return arr;
};
console.log(rangeOdd(15, 30));
