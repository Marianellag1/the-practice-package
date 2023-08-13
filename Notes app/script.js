let form = document.getElementById("todo-form");
let textInput = document.getElementById("todo-text");
let toDoCount = document.getElementById("todo-count");
let toDoList = document.getElementById("todo-list");//bootcamp^
let todos = []; //empty array

let clock = document.getElementById("time");
let currentDate = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
document.getElementById('date').innerHTML = currentDate.toLocaleDateString('en-us', options);

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

function init() {
    let savedToDos = JSON.parse(localStorage.getItem("todos")); //one argument, makes items into obj.
    if (savedToDos !== null) { //if not null, saved todos in local storage
        todos = savedToDos;
    }

    renderToDos();
}

function renderToDos() {
    toDoList.innerHTML = ""; //will not allow duplicates of to dos
    toDoCount.textContent = todos.length;//will render all todos 

    for (let i = 0; i < todos.length; i++) { //allowing user to add more than one todo
       let todo = todos[i];

       let li = document.createElement("li");
       li.textContent = todo; //li will be created from user input
       li.setAttribute("data-index", i);//takes two argu. 

       let btn = document.createElement("button");
       btn.textContent = "complete";

       li.appendChild(btn);//show on page
       toDoList.appendChild(li);
    
    }
}

function savedToDos() {
    localStorage.setItem("todos", JSON.stringify(todos));//makes them into strings
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var textToDo = textInput.value.trim();//will take any space away
    if (textToDo === "") {
        return;
    }

    todos.push(textToDo);
    textInput.value = "";//when user submits, text will clear

    savedToDos();
    renderToDos();
})

toDoList.addEventListener("click", function(e) {
    let element = e.target; //The event. target property returns the HTML element that triggered an event
    if (element.matches("button") === true) {
        let index = element.parentElement.getAttribute("data-index");//from render todos
        todos.splice(index, 1); //get that element and splice it

        savedToDos();
        renderToDos();
    }
})

setInterval(displayClock, 1000);
displayClock();
init();


