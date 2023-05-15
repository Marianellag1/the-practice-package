let currentDate = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
document.getElementById('date').innerHTML = currentDate.toLocaleDateString('en-us', options);

// const addNote = document.getElementById('add');
// const deleteAllNotes = document.getElementById('delete-all'); 

// https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-22/