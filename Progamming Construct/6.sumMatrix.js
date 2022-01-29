/*
Given a matrix of dimensions n x n, find the sum of elements along the principal diagonal of the matrix.

Principal diagonal is the diagonal that starts at top left(0,0),(1,1) and goes to the bottom right (n-1,n-1).

*/
function diagonalSum(n, matrix) {
    let sum = 0;
    for(let row=0; row<matrix.length; row++){
        for(let col=0; col<matrix[0].length; col++)
        if(row == col){
            sum += matrix[row][col] 
        }
    }
    return sum;
}
