// console.log("hello world");// works
let clock = document.getElementById("display-clock");

const currentDate = new Date();
console.log(currentDate);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(options);
document.getElementById("today").innerHTML = currentDate.toLocaleDateString('en-us', options);
console.log(currentDate);


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

setInterval(displayClock, 1000);
displayClock();




