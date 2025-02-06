// [X] -  1. Remove the logic that plays exactly five rounds
// [X] - 2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
// [X] - 3. Add a div for displaying results and change all of your console.logs into DOM methods.
// [X] - 4. Display the running score, and announce a winner of the game once one player reaches 5 points.

const btnWrapper = document.querySelector('.button-wrapper');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

const restartButton = document.createElement('button');
restartButton.textContent = 'Restart Game';

const choiceWrapper = document.querySelector('.choices-wrapper');
const playerChoiceText = document.querySelector('.player-choice');
const computerChoiceText = document.querySelector('.computer-choice');

const winnerText = document.querySelector('.winner');

const resultText = document.querySelector('.result');
const playerResultText = document.querySelector('.player-result');
const computerResultText = document.querySelector('.computer-result');

let gameRounds = 5;
let playerScore = 0;
let computerScore = 0;

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(playerSelection, computerSelection) {
  getPlayerChoice(playerSelection);
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
  playerChoiceText.textContent = capitalizeFirstLetter(playerSelection);
  computerChoiceText.textContent = capitalizeFirstLetter(computerSelection);

  if (isGameOver()) {
    return;
  }
  checkWinner(playerSelection, computerSelection);
  if (isGameOver()) {
    endGame();
  }
}

function isGameOver() {
  return playerScore === gameRounds || computerScore === gameRounds;
}

function updateScore() {
  playerResultText.textContent = playerScore;
  computerResultText.textContent = computerScore;
}

function endGame() {
  rockBtn.style.display = 'none';
  paperBtn.style.display = 'none';
  scissorsBtn.style.display = 'none';
  choiceWrapper.style.display = 'none';

  if (playerScore === gameRounds) {
    winnerText.textContent = 'Congratulations! You win the game!';
  } else if (computerScore === gameRounds) {
    winnerText.textContent = 'Sorry, the computer wins the game..';
  }
  createRestartButton();
}

function createRestartButton() {
  restartButton.style.display = 'inline';
  btnWrapper.appendChild(restartButton);
  restartButton.addEventListener('click', () => restartGame());
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  rockBtn.style.display = 'inline';
  paperBtn.style.display = 'inline';
  scissorsBtn.style.display = 'inline';
  restartButton.style.display = 'none';
  winnerText.textContent = '';
  choiceWrapper.style.display = 'flex';
  playerChoiceText.textContent = '';
  computerChoiceText.textContent = '';
  updateScore();
  // location.reload();
}

function getPlayerChoice(choice) {
  playerSelection = choice;
  return playerSelection;
}

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomChoiceIndex = Math.floor(Math.random() * 3);
  let computerSelection = choices[randomChoiceIndex];
  computerChoiceText.textContent = capitalizeFirstLetter(computerSelection);
  return computerSelection;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winnerText.textContent = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++;
    winnerText.textContent = 'Yay! You win this round! :D';
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore++;
    winnerText.textContent = 'Sorry, you lose this round.. :(';
  }
  updateScore();
}
