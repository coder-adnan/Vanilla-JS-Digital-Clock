let second = 0;
let minute = 0;
let hour = 0;
let outputSeconds = document.querySelector(".seconds");
let outputMinutes = document.querySelector(".minutes");
let outputHour = document.querySelector(".hour");
setInterval(() => {
    second++;
    if(second<=60){
    outputSeconds.innerHTML = ":"+second;
    }
    if(second===60){
        minute++;
    outputMinutes.innerHTML = ":"+minute;
    second = 0;
    }
    if(minute===60){
        hour++;
    outputHour.innerHTML = hour;
    second=0;
    minute=0;
    }
}, 1000);