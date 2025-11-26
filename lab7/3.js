const array1 = [1, 1, 2, 3, 4, 4, 5, 6, 7];

const unique = (array) => {
    const arrayf = [];
    for(i of array){
        if(!arrayf.includes(i)){
            arrayf.push(i);
        }        
    };
    return arrayf;
};

console.log(unique(array1));