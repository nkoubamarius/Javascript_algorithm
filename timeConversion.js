const s="07:05:45PM";
function timeConversion(s) {
    /*
     * Write your code here.
     */
    
    let late=s.includes('PM');
    if(!late){
        s=s.split('AM');
        s=s[0].split(":");
        if(s[0]=="12") s[0]='00';
        return s.join(':');
    }else{
        s=s.split('PM');
        s=s[0].split(':');
        if(s[0]!="12") s[0]=(parseInt(s[0])+12).toString();
        return s.join(':');
    }
}

console.log(timeConversion(s));