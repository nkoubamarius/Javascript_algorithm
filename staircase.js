// Complete the staircase function below.
function staircase(n) {
    for (let i=1; i<=n; i++){
       let str='';
       for (let j=0; j<n; j++){
           if(j<n-i) str+=" "
           else str+="#"
       }
       console.log(str)
   }

}
staircase(6)