const sum = (...args) =>{
    let result = 0;
    for(const i of args){
        result = result + i;
    }
    return result;
}

console.log(sum(2, 2, 2));