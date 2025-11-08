const sum = (...args) =>{
    let result = 0;
    let i =0
    while(i<args.length){
        result = result + args[i];
        i++
    }
    return result;
}

console.log(sum(2, 2, 2));