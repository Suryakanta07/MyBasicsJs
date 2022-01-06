//Write a javascript function to clone an array??
const arrayClone =(array1)=>array1.slice(0);
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));