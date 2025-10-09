"use strict";

const thArray = [11, "Red", true, 242, false, "White", false, -11313, "Black", 113, 1, -435 ,53];

const  fnArray = (arr) => {
    const counter = {};
    for (const val of arr){
        const type = typeof val;
        counter[type] = (counter[type] || 0) + 1;
    }
    return counter
}
const resoult = fnArray(thArray);
console.dir(resoult);
