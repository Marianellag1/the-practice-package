// console.log("hello world"); //works

let task = document.getElementById("task-name");
let when = document.getElementById("when");
let comment = document.getElementById("msg");
let saveBtn = document.getElementById("save");
let savedTask = document.getElementById("saved-task");

//save last task
function saveLastTask() {
    let toDoTask = {
        task: task.value,
        when: when.value,
        comment: comment.value.trim()
    };

    //set local storage and convert obj. to string tasking two argu. key name and value
    localStorage.setItem("toDoTask", JSON.stringify(toDoTask));
}

//show last task
function renderLastTask() {
    //JSON.parse converts txt to obj
    let lastTask = JSON.parse(localStorage.getItem("toDoTask")); //takes one arg.
    //checking if data is returned, else exit out of function
    if (lastTask) {
        document.getElementById("saved-task").innerHTML = lastTask.task;
        document.getElementById("saved-time").innerHTML = lastTask.when;
        document.getElementById("saved-comment").innerHTML = lastTask.comment;
    } 
}

saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastTask(); //save task 
    renderLastTask();//show task saved on second box
});

function init() { //when page is loaded
    renderLastTask();
}

init();