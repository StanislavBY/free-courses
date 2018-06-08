var worlds={
    "h":[" час ", " часа ", " часов "],
    "m":[" минута ", " минуты ", " минут "],
    "s":[" секунда ", " секунды ", " секунд "]
 }
function getTime(){
    var res="";
    var t1=+process.argv[2];
    var t2=+process.argv[3];
    var timeSum=t1+t2;
    if(timeSum>=3600){
        let hours=Math.floor(timeSum/3600);
        res+=hours + GetWorlds(hours, worlds["h"]);
        timeSum-=hours*3600;
    } 
    if(timeSum>=60){
        let minutes=Math.floor(timeSum/60);
        res+= minutes + GetWorlds(minutes, worlds["m"]);
        timeSum-=minutes*60;
    }
    if(timeSum>0){
        res+= timeSum + GetWorlds(timeSum, worlds["s"]);
    }
    return res;
}

 function GetWorlds(number, wordsArray){
    var  cases = [2, 0, 1, 1, 1, 2];  
    return wordsArray[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];  
}
process.stdout.write(getTime().trim());
