const sum = (...args) =>{
    let result = 0;
    let i =0
    do{
        result = result + args[i];
        i++
    }
    while(i<args.length)
    return result;
}

console.log(sum(2, 2, 2));