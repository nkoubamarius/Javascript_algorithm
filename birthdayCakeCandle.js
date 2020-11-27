const candles=[3, 2 ,1 ,3];

function birthdayCakeCandles(candles) {
    // Write your code here
    let number_occurence=0;
    let max=candles[1];
    
    for(let i=0; i<candles.length; i++){
        if(candles[i]>max){
            max=candles[i];
        }
    }
    
    for(let i=0; i<candles.length; i++){
        if(candles[i]==max){
            number_occurence++;
        }
    }
    return number_occurence;
}

console.log(birthdayCakeCandles(candles));
