//Write a javascript program to find the most frequent item of an array??
const frequent = arr => {
        const obj = {};
        arr.forEach(num => {
          obj[num] = num in obj ? ++obj[num] : 1;
        });
        let maxCount = 0,
          result;
        for (let key in obj) {
          if (obj[key] > maxCount) {
            maxCount = obj[key];
            result = [key, maxCount];
          }
        }
        return `${result[0]} ( ${result[1]} times )`;
      };
      console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); // a ( 5 times )
      console.log(frequent([1, 2, 3, 4, 5])); // 1 ( 1 time )
      console.log(frequent([5, 2, 3, 1, 2, 4, 1]));