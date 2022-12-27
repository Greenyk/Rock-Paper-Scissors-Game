const playerPointsSpan = document.querySelector('.player-points')
const compPointsSpan = document.querySelector('.computer-points')
const optionButtons = document.querySelectorAll('.options button')
const playerChoiceSpan = document.querySelector('.player-choice')
const compChoiceSpan = document.querySelector('.comp-choice')
const resultText = document.querySelector('.result-text')
const resetGameButton = document.querySelector('.reset-game')


let playerPoints = 0;
let playerChoice = "";
let compPoints = 0;
let compChoice = "";

function setGame() {
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = 'Chose Rock Paper or Scissors';
}

window.onload = setGame();

function playerSelect (event) {
    optionButtons.forEach((button) => button.classList.remove('active'))
    playerChoice = event.target.dataset.option;
    event.target.classList.add('active');
    console.log(playerChoice)
    compSelect()
}

const availableCompChoices = ["ROCK", "PAPER", "SCISSORS"];

function compSelect() {
    const randomIndex = Math.floor(Math.random() * availableCompChoices.length);
    compChoice = availableCompChoices[randomIndex]

    console.log(compChoice)
    checkResult()
}

function checkResult () {
    let winner = "";

    if (
        (playerChoice === "ROCK" && compChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && compChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && compChoice === "PAPER")
    ) {
        winner = "You won!";
    } else if (playerChoice === compChoice) {
        winner = "Draw!";
    } else {
        winner = "You Lost!";
    }

    console.log(winner)
}

optionButtons.forEach((button) =>
    button.addEventListener('click', playerSelect)

)
