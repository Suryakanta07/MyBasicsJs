//Write a javascript program which accept a number as input and insert dashes(-) between each two even numbers??
const insert = num => {
  let result = num[0];
  for (let i = 1; i < num.length; i++) {
    result += `${
      result[result.length - 1] % 2 === 0 && num[i] % 2 === 0 ? '-' : ''
    }${num[i]}`;
  }
  return result;
};
console.log(insert('025468')); // "0-254-6-8."
console.log(insert('357')); // "357"
console.log(insert('12345'));