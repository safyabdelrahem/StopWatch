var [seconds ,minites,hours]=[0,0,0];
var displayTime=document.getElementById("displayTime");
var timer=null;


function stopWatch (){
    seconds++;
    if(seconds==60){
        seconds=0;
        minites++;
        if (minites==60){
            minites=0;
            hours++;
            if(hours==60)
            hours=0;
        } 
    }
   var h=hours<10?"0"+hours:hours;
   var m=minites<10?"0"+minites:minites;
   var s=seconds<10?"0"+seconds:seconds;




    displayTime .innerHTML = h +":"+m+":"+s;
}
function watchStart (){
    if (timer!==null){
        clearInterval(timer);
    }
 timer=   setInterval(stopWatch,1000)
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
     [seconds ,minites,hours]=[0,0,0];
     displayTime.innerHTML="00:00:00";
}







