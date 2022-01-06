//Write a javascript function to remove null,0,","",false,undefined and NaN values from an array??
const removeValues = arr => arr.filter(item => item);
console.log(removeValues([NaN, 0, 15, false, -22, '', undefined, 47, null]));