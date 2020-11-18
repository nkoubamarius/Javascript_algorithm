a = [1, 2, 3];
b = [3, 2, 1];
// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let aDim= a.length;
    let bDim= b.length;
    let i=0;
    let score=[0,0];
    
    if(aDim==bDim){
        while(i<aDim){
            a[i]>b[i] ? score[0]++ : a[i]<b[i]? score[1]++ : null;
            i++;
        }
    } 
    return score;
}

console.log(compareTriplets(a,b))