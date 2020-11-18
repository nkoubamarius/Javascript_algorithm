
arr = [[11, 2, 4], [4, 5, 6],[10, 8, -12]];

function diagonalDifference(arr) {
    // Write your code here
    var dim=arr[0].length;
    
    var leftSum=0;
    var rightSum=0;
    
    for (let i=0, j=dim-1; i<dim, j>-1; i++, j-- ){
        leftSum += arr[i][i];
        rightSum += arr[i][j];
    }
    
    return Math.abs(leftSum-rightSum);

}

console.log(diagonalDifference(arr));