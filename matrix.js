const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const diagonalSum = (mtx) => {
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  mtx.forEach((item, index) => {
    firstDiagonal += item[index];
    secondDiagonal += item[item.length - index - 1];
  });

  return firstDiagonal - secondDiagonal
};

console.log(diagonalSum(matrix));
