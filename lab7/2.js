const array1 = [1, 2, 3, 4, 5, 6, 7];

const removeElements = (array, ...items) => {
  for (const i of items) {
    const index = array.indexOf(i);
    if (index !== -1) array.splice(index, 1);
  }
};

console.log(removeElement(array1, 1, 2, 3));