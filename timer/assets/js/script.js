// console.log("hello world"); works
//minutes
let fiveMinutesBtn = document.getElementById("cinco");
let thirtyMinutesBtn = document.getElementById("treinta");
let fortyFiveMinutesBtn = document.getElementById("cuarenta-y-cinco");
let timeInterval;
//stop,start && cancel btn
let stopTimerBtn = document.getElementById("stop");
let startTimerBtn = document.getElementById("start");
let cancelTimerBtn = document.getElementById("cancel");
//time show
let showTimer = document.getElementById("showing-time");
let showMinutes = document.getElementById("minutes");
let showSeconds = document.getElementById("seconds");
//displays
let boxDisplay = document.querySelector(".box");
let headerDisplay = document.getElementById("header");
let userControlDisplay = document.querySelector("stop-start");



fiveMinutesBtn.addEventListener("click", function () {
    showTimer.style.display = "block"; //only timer will be displaying
    boxDisplay.style.display = "none"; //when clicked, it will not show
    headerDisplay.style.display = "none"; //will not show
    startTimerBtn.style.display = "none"; //will not show
})

thirtyMinutesBtn.addEventListener("click", function () {
    showTimer.style.display = "block"; //only timer will be displaying
    boxDisplay.style.display = "none"; //when clicked, it will not show
    headerDisplay.style.display = "none"; //will not show
    startTimerBtn.style.display = "none"; //will not show
})

fortyFiveMinutesBtn.addEventListener("click", function () {
    showTimer.style.display = "block"; //only timer will be displaying
    boxDisplay.style.display = "none"; //when clicked, it will not show
    headerDisplay.style.display = "none"; //will not show
    startTimerBtn.style.display = "none"; //will not show
})

function fiveCountdown() { //will be my five minute timer countdown
    let seconds = 1000; //jack421myhre
    let minutes = seconds * 60; //time is 5 minutes
    console.log(seconds);
    
    //minutes
    minutes = minutes - 1;
    
    timeInterval = setInterval(function () { //two arguments for setting interval
        showMinutes.innerHTML = minutes;

        if (minutes < -1) {
            clearInterval(timeInterval);
            showTimer.style.color = "#FF0000"
        }
        
    }, 300000);
    
    //seconds
    
    seconds -= 1;
    timeInterval = setInterval(function () {
        showSeconds.innerHTML = seconds;
        console.log(seconds);
        if (seconds < 0) {
            clearInterval(timeInterval)
            seconds = 59;
        }
    }, 1000);
}

function thirtyCountdown() { //will be my thirty minute timer countdown
    let timeLeft = 30;
}

function fortyFiveCountdown() { // will be my forty five minute timer countdown
    let timeLeft = 45; 
}


// fiveCountdown();