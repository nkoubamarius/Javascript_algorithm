let arr=[-4 ,3, -9, 0, 4 ,1];
// Complete the plusMinus function below.
function plusMinus(arr) {
    let arrDim = arr.length;
    let counts =[0,0,0];
    
    for (var i of arr ){
        i>0? counts[0]++ : i<0? counts[1]++ : counts[2]++; 
    }
    
    for (let j=0; j<counts.length; j++ ){
        counts[j]=(counts[j]/arrDim).toFixed(6);
    }
    
    console.log(counts[0] + "\n" + counts[1] + "\n" + counts[2]);
}

console.log(plusMinus(arr));
