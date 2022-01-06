//Write a javascript program to compute the product of an array of integers??
const product = arr => arr.reduce((product, num) => num * product);
console.log(product([1, 2, 3, 4])); // 24
console.log(product([1, 4, 7, 0]));
