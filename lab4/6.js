const max = (matrix) =>{
    let result = 0;
    for(const row of matrix){
        for(const value of row){
            if(result<value){
                result = value
            }
        }
        
    }
    return result
}
const m = max([[1, 8, 2], [11, 5, 3], [7, 15, 23]]);
console.log(m);
