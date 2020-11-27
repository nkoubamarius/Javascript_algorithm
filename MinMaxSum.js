const arr=[1, 2 ,3, 4 ,5]
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    arr=arr.sort();

    const arr_sum=[];
    let  max_sum=0;
    let min_sum=0;
    
    for(let i=0; i<arr.length; i++){
        arr_sum[i]=0;
        for (let j=0; j<arr.length; j++){
            if(j==i){
                continue
            }
            arr_sum[i]+=arr[j];
        }
    }
    
    max_sum=arr_sum[1];
    min_sum=arr_sum[1];
    
    for(let i=0; i<arr_sum.length; i++){
        
        if(arr_sum[i] > max_sum){
            max_sum = arr_sum[i];
        }else if(arr_sum[i]<max_sum){
            min_sum=arr_sum[i];
        }
    }
    
    console.log(min_sum, max_sum);
 
}

function miniMaxSumSecondMethod(arr) {

    arr=arr.sort();
    
    let min=0, max=0;
    arr.forEach((num, i) => {
        if(i==0) min+=num
        else if(i==arr.length-1) max+=num
        else{
            min+=num;
            max+=num;
        }
    });
    
    console.log(min, max);
 
}

miniMaxSumSecondMethod(arr);