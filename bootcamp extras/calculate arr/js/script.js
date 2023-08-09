var calBtn = document.getElementById("cal");
var displayTotal = document.getElementById("display")

var arr = [3, 1, 5, 6];

calBtn.addEventListener("click", function() { //when btn is clicked, then total for both will show
    displayTotal.textContent = "total: " + sumOfArr(arr)
    // console.log("total", sumOfArr(arr));
    console.log("total", sumOfArr([3, 4, 5, 8]));
})

function sumOfArr(arr) {//equation for arr to be added 
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i]; // total+=arr[i]
    }
    return total;
}