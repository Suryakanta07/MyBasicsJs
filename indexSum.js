//There are two arrays with individual values,write a javascript program to compute the sum of each individual index value from the given arrays??\
const indexSum = (arr1, arr2) => {
    const result = [],
      [bigArr, smallArr] =
        arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];
    for (let i = 0; i < bigArr.length; i++) {
      result[i] = i < smallArr.length ? bigArr[i] + smallArr[i] : bigArr[i];
    }
    return result;
  };
  console.log(indexSum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13])); // [4, 5, 8, 10, 12, 13]
  console.log(indexSum([1, 2, 3, 4, 6, 1, 3], [1, 4, 7, 0]));