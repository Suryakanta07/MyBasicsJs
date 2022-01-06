//Write a javascript program which prints the matrix of the following array??
const matrix = arrMat => {
    arrMat.forEach(arr => {
      console.log(arr);
    });
  };
  matrix([
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ]);