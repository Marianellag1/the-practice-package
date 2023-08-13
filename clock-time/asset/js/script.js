// console.log("hello world");// works
let clock = document.getElementById("display-clock");
//from bootcamp
let textArea = document.querySelector("#textarea");
let submitEl = document.querySelector("#submit");
let submissionResponseEl = document.querySelector("#response");
let clearBtn = document.querySelector("#clear");
let optionsForm = document.querySelector("#optionsform");
let backBtn = document.getElementById("backbtn");

let show = localStorage.getItem("show");
submissionResponseEl.textContent = show;
// let typefaceEl = document.querySelector("#typeface");
// let element = h1El;
// let typeface;

//clock
//current date
const currentDate = new Date();
// console.log(currentDate);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(options);
document.getElementById("today").innerHTML = currentDate.toLocaleDateString('en-us', options);
// console.log(currentDate);

function displayClock() {
    const today = new Date(); //date has everything ie month, day, etc.
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    // console.log(clock);

    //setting the AM and PM condition
    let meridiem = 'AM';
    if (hours >= 12) {
        meridiem = 'PM';
    }

    if (hours > 12) {
        hours = hours - 12; //12 is sub. from hour since its 12hr time
    }

    //if any are less than 10, add 0 infront of number
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${meridiem}`
}

function showNotes(e) {
    // console.log(e);
    // e.preventDefault();
    let response = textArea.value;//capture the value of user input
    console.log(response);
    submissionResponseEl.textContent = response; //display the value
}

//clear all in textarea
clearBtn.addEventListener("click", function(e) {
    e.preventDefault(); //prevent from reloading or anything weird happening.
    textArea.value = '';
})

setInterval(displayClock, 1000);
displayClock();

submitEl.addEventListener("click", function() {
    optionsForm.style.display = "none"; //no show
    textArea.style.display = "none";
    clearBtn.style.display = "none";
    submitEl.style.display = "none";
    submissionResponseEl.textContent = show;
    localStorage.setItem("show", show);
    showNotes();

    // console.log(showNotes);
});

// backBtn.addEventListener("click", function() {
//     optionsForm.style.display = "block"; //show
//     textArea.style.display = "block";
//     clearBtn.style.display = "block";
//     submitEl.style.display = "block";
//     backBtn.style.display = "none";
// })



//change event
// typefaceEl.addEventListener("change", function (e) {
//     e.preventDefault();
//     typeface = typefaceEl.value; //capture value = options
//     document.querySelector('.note').style.fontFamily = typeface; //makes notes change font, but not actual textarea
// })


//maybe no on this one
// textArea.addEventListener("keydown", function(e) { //when key is pressed
//     let key = e.key.toLowerCase();
//     let alphabetNumChar = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

// })



