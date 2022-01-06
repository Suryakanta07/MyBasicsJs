//Write a javascript program to remove duplicate items from an array (ignore case sensitivity)??
const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 4, 6, 1, 3])); // [1, 2, 3, 4, 6]
console.log(removeDuplicates([1, 4, 7, 0]));
