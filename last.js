//Write a javascript function to get the last element of an array.passing a parameter 'n' will return the last 'n' elements of the array??
const last = (arr, count = 1) => arr.slice(-count);
console.log(last([7, 9, 0, -2])); // [-2]
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]
console.log(last([7, 9, 0, -2], 6));