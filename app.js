const playerPointsSpan = document.querySelector('.player-points')
const compPointsSpan = document.querySelector('.computer-points')
const optionButtons = document.querySelectorAll('.options button')
const playerChoiceSpan = document.querySelector('.player-choice')
const compChoiceSpan = document.querySelector('.comp-choice')
const resultText = document.querySelector('.result-text')
const resetGameButton = document.querySelector('.reset-game')
const choicesSection = document.querySelector(".choices")


let playerPoints = 0;
let playerChoice = "";
let compPoints = 0;
let compChoice = "";

function setGame() {
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = 'Chose Rock Paper or Scissors';
    resetGameButton.classList.remove("active")
}

window.onload = setGame();

function playerSelect (event) {
    optionButtons.forEach((button) => button.classList.remove('active'))
    playerChoice = event.target.dataset.option;
    event.target.classList.add('active');
    resetGameButton.classList.add("active")
    compSelect()
}

const availableCompChoices = ["ROCK", "PAPER", "SCISSORS"];

function compSelect() {
    const randomIndex = Math.floor(Math.random() * availableCompChoices.length);
    compChoice = availableCompChoices[randomIndex]
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
        playerPoints++
        playerPointsSpan.innerHTML = playerPoints;
    } else if (playerChoice === compChoice) {
        winner = "Draw!";
    } else {
        winner = "You Lost!";
        compPoints++;
        compPointsSpan.innerHTML = compPoints;
    }
    choicesSection.classList.add("active");
    compChoiceSpan.innerHTML = compChoice;
    playerChoiceSpan.innerHTML = playerChoice;
    resultText.innerHTML = winner;
}

function resetGame () {
    choicesSection.classList.remove("active");
    optionButtons.forEach((button) => button.classList.remove("active"))
    playerPoints = 0;
    compPoints = 0;
    setGame();
}

optionButtons.forEach((button) =>
    button.addEventListener('click', playerSelect)

)

resetGameButton.addEventListener("click", resetGame);
