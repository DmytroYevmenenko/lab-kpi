function array() {
    const items = [];
    function getItem(index) {
        return items[index];
    }
    
     getItem.push = function(value) {
        items.push(value);
    };
    
    getItem.pop = function() {
        return items.pop();
    };
    
    return getItem;
}


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());