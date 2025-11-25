const array1 = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
  return array
};

console.log(removeElement(array1, 1));