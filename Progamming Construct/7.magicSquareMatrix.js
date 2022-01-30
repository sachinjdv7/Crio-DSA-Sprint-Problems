/*
Given a matrix of dimensions n x n having elements 1 to n*n distinct elements, check whether the matrix is magic square or not.

Magic square is a square that has the same sum along all rows, columns and diagonals.
*/
function checkMagicSquare(n, matrix) {
  let temp = 0;
  let d1 = 0;

  //first dig

  let i = 0,
    j = 0;

  while (i < n && j < n) {
    d1 += matrix[i][i];
    i++;
    j++;
  }
  //console.log(d1)
  //second dig

  (i = 0), (j = n - 1);

  while (i < n && j >= 0) {
    temp += matrix[i][j];
    i++;
    j--;
  }
  if (temp !== d1) {
    return false;
  }

  // row
  for (let i = 0; i < n; i++) {
    temp = 0;
    for (let j = 0; j < n; j++) {
      temp += matrix[i][j];
    }
    if (temp !== d1) {
      return false;
    }
  }

  //cols
  for (let j = 0; j < n; j++) {
    temp = 0;
    for (let i = 0; i < n; i++) {
      temp += matrix[i][j];
    }
    if (temp !== d1) {
      return false;
    }
  }
  return true;
}
