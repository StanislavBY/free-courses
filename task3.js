function getTime(){
    function getWords(n, word){
       var words={
        "h":[" час ", " часа ", " часов "],
        "m":[" минута ", " минуты ", " минут "],
        "s":[" секунда ", " секунды ", " секунд "]
        }
        if (n%10===1 && n%100!==111) return words[word][0];
        if((n%10===2 || n%10===3 || n%10===4) && !(n%100===12 ||n%100===13 ||n%100===14)) return words[word][1];
        return words[word][2];
        }

    var res="";
    var t1=+process.argv[2];
    var t2=+process.argv[3];
    var sum=t1+t2;
    if(sum>=3600){
        let hours=Math.floor(sum/3600);
        res+=hours + getWords(hours, "h");
        sum-=hours*3600;
    } 
    if(sum>=60){
        let minutes=Math.floor(sum/60);
        res+= minutes + getWords(minutes, "m");
        sum-=minutes*60;
    }
    if(sum>0){
        res+= sum + getWords(sum, "s");
    }
    return res;
}
process.stdout.write(getTime());
