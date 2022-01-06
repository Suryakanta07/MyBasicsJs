//Write a javascript to generate an array between two integers of 'n' step length??
const rangeBetween = (start, end, step) => {
    const result = [start];
    let last = result[result.length - 1];
    while (last < end) {
      const newItem = last + step;
      if (newItem <= end) {
        result.push(newItem);
        last = result[result.length - 1];
      } else {
        break;
      }
    }
    return result;
  };
  console.log(rangeBetween(4, 7, 1)); // [4, 5, 6, 7]
  console.log(rangeBetween(-4, 7, 2));