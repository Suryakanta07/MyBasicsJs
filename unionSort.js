//Write a javascript program to compute the union of two arrays??
const unionSort = (arr1, arr2) =>
  [...new Set([...arr1, ...arr2])].sort((num1, num2) => num1 - num2);
console.log(unionSort([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 13]
console.log(unionSort([1, 2, 3, 4, 6, 1, 3], [1, 4, 7, 0])); // [0, 1, 2, 3, 4, 6, 7]
console.log(unionSort([1, 2, 3], [100, 2, 1, 10]));