const computerChoice = document.getElementById('computer');
const playerChoice = document.getElementById('player');
const resultText = document.getElementById('results');
const choiceBtns = document.querySelectorAll('.btn');


let player; //this is a storage space name for player, computer and result
let computer;
let result;

//An arrow expression used after the paramater
choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;//whatever btn is clicked, result will show
    computerTurn();
    playerChoice.textContent = player; //works!!
    computerChoice.textContent = computer; //works!
    gameResult();
}));

function computerTurn() {
    const randNumber = Math.floor(Math.random() * 3) + 1; //there are 3 choices

    switch (randNumber) {
        case 1:
            computer = 'Rock'
            break;
        case 2:
            computer = 'Paper'
            break;
        case 3:
            computer = 'Scissors'
            break;
        default:
            break;//good to have, ai: handle unexpected cases
    }
    // console.log(randNumber); btn in console shows random choices when clicked
}

function gameResult() {
    if (computer === player) {//info is SAVED IN COMPUTER && PLAYER && RESULT!!!!!1!!1
        result = 'Its a tie! 👔';
    }
    if (computer === 'Paper' && player === 'Rock') {
        result = "You Lose! 💔";
    }
    if (computer === 'Rock' && player === 'Paper') {
        result = "🎉You Win!🎉";
    }
    if (computer === 'Scissors' && player === 'Paper') {
        result = "You Lose! 💔";
    }
    if (computer === 'Paper' && player === 'Scissors') {
        result = "🎉You Win!🎉";
    }
    if (computer === 'Scissors' && player === 'Rock') {
        result = "🎉You Win!🎉";
    }
    if (computer === 'Rock' && player === 'Scissors') {
        result = "You Lose! 💔";
    }

    resultText.innerHTML = result;
    console.log(result);
}



