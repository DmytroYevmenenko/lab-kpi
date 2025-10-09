"use strict";

const incFunction = (obj) => {
    obj.a = obj.a + 1;
}

const num ={a: 1};
incFunction(num);
console.dir(num);
