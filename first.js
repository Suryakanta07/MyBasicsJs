//Write a javascript function to get the first 'n' elements of an array.passing a parameter 'n' will return the first 'n' elements of the array?? 
const first = (arr, n = 1) => {
    if (n === 1) {
      return arr[0];
    } else if (n < 1) {
      return [];
    } else {
      return arr.slice(0, n);
    }
  };
  console.log(first([7, 9, 0, -2])); // 7
  console.log(first([], 3)); // []
  console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]
  console.log(first([7, 9, 0, -2], 6)); // [7, 9, 0, -2]
  console.log(first([7, 9, 0, -2], -3));