const init = function() {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(e) {
    //leaving as is, when user clicks cancel, will reset, but for more control, this code will be used.
    e.preventDefault();
    document.getElementById('form').reset();
}