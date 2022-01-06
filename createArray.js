//Write a javascript function to create a specified a number of elements with pre-filled string value array??
const createArray = (length, item) => {
    const result = [];
    for (i = 0; i < length; i++) {
      result.push(item);
    }
    return result;
  };
  console.log(createArray(3, 'default value')); // ["default value", "default value", "default value"]
  console.log(createArray(4, 'password')); 