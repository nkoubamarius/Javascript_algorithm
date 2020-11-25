
arr = [[11, 2, 4], [4, 5, 6],[10, 8, -12]];

// First Method

function diagonalDifferenceFirstMethod(arr) {
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


//Second Method
function diagonalDifferenceSecondMethod(arr) {
    // Write your code here
    var dim=arr[0].length;
    
    var leftSum=0;
    var rightSum=0;

    //Find left Diagonal
    for (var i=0; i<dim; i++){
        leftSum+=arr[i][i]
    }

    var end =arr.length-1;
    //find right diagonal
    for(let i=0; i<dim; i++){
        rightSum+=arr[i][end-i]
    }

    return Math.abs(leftSum-rightSum);
}

console.log("First Method", diagonalDifferenceFirstMethod(arr));
console.log("Second Method", diagonalDifferenceSecondMethod(arr));