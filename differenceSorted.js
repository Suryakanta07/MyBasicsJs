//Write a javascript function to find the unique elements from two arrays??
const differenceSorted = (arr1, arr2) =>
  [...new Set([...arr1, ...arr2])].sort((num1, num2) => num1 - num2);
console.log(differenceSorted([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 10, 100]
console.log(differenceSorted([1, 2, 3, 4, 5], [6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]
console.log(differenceSorted([1, 2, 3], [100, 2, 1, 10])); 
