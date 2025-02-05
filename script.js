// [X] -  1. Remove the logic that plays exactly five rounds
// [X] - 2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
// [ ] - 3. Add a div for displaying results and change all of your console.logs into DOM methods.
// [ ] - 4. Display the running score, and announce a winner of the game once one player reaches 5 points.

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

const playerChoiceText = document.querySelector('.player-choice');
const computerChoiceText = document.querySelector('.computer-choice');

const winnerText = document.querySelector('.winner');

const resultText = document.querySelector('.result');
const playerResultText = document.querySelector('.player-result');
const computerResultText = document.querySelector('.computer-result');

let playerSelection;

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

rockBtn.addEventListener('click', function () {
  // console.log('rock button clicked');
  getPlayerChoice('rock');
  playRound();
});

paperBtn.addEventListener('click', function () {
  // console.log('paper button clicked');
  getPlayerChoice('paper');
  playRound();
});

scissorsBtn.addEventListener('click', function () {
  // console.log('scissors button clicked');
  getPlayerChoice('scissors');
  playRound();
});

function game() {
  let gameRounds = 1;
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < gameRounds && computerScore < gameRounds) {
    let result = playRound();

    if (result === 'player') {
      playerScore++;
      playerResultText.textContent = playerScore;
    } else if (result === 'computer') {
      computerScore++;
      computerResultText.textContent = computerScore;
    }

    console.log('Player Score:', playerScore);
    console.log('Computer Score:', computerScore);
  }

  if (playerScore === gameRounds) {
    console.log('Congratulations! You win the game!');
  } else {
    console.log('Sorry, the computer wins the game.');
  }
}

function getPlayerChoice(choice) {
  playerSelection = choice;

  if (
    playerSelection === 'rock' ||
    playerSelection === 'paper' ||
    playerSelection === 'scissors'
  ) {
    // console.log('Player selection:', playerSelection);
    return playerSelection;
  } else {
    console.log('Please choose either Rock, Paper, or Scissors');
    return getPlayerChoice();
  }
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
    return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    winnerText.textContent = 'Yay! You win this round! :D';
    return 'player';
  } else {
    winnerText.textContent = 'Sorry, you lose this round.. :(';
    return 'computer';
  }
}

function playRound() {
  let computerSelection = getComputerChoice();

  playerChoiceText.textContent = capitalizeFirstLetter(playerSelection);
  computerChoiceText.textContent = capitalizeFirstLetter(computerSelection);

  return checkWinner(playerSelection, computerSelection);
}

// game();
