"use strict";

const incFunction = (i) => {
    i++;
    return i;
}

const a = 1;
const b = incFunction(a);
console.dir({b});
