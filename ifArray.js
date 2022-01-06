//Write a javascript function to check whether an input is an array or not??
const ifArray = input => Array.isArray(input)
console.log (ifArray('w3resources'));
console.log(ifArray([1,2,4,0]));