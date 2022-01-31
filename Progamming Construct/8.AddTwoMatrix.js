/*
Addition of two matrix
*/
function additionOfMatrix(matrix1, matrix2) {
  let row = matrix1.length;
  let col = matrix1[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix1[i][j] += matrix2[i][j];
    }
  }
  return matrix1;
}
