// Get all the DOM Elements we need
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerChoiceDisplay = document.querySelector('.player-choice');
const computerChoiceDisplay = document.querySelector('.computer-choice');
const winnerDisplay = document.querySelector('.winner');
const playerScoreDisplay = document.querySelector('.player-result');
const computerScoreDisplay = document.querySelector('.computer-result');
const choicesContainer = document.querySelector('.choices-wrapper');
const buttonsContainer = document.querySelector('.button-wrapper');

// Create a restart button and set it to be hidden initially
const restartButton = document.createElement('button');
restartButton.textContent = 'Restart Game';
restartButton.style.display = 'none';

// Initialize game scores
let playerScore = 0;
let computerScore = 0;

// Define how many points needed to win
const POINTS_TO_WIN = 5;

// Get a random choice for the computer
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Make the first letter uppercase for display
function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// Show the choices made by player and computer
function displayChoices(playerChoice, computerChoice) {
  playerChoiceDisplay.textContent = capitalizeFirstLetter(playerChoice);
  computerChoiceDisplay.textContent = capitalizeFirstLetter(computerChoice);
}

// Update the score display
function updateScoreDisplay() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Show who won the round and update scores
function handleRoundResult(playerChoice, computerChoice) {
  // Check for a tie first
  if (playerChoice === computerChoice) {
    winnerDisplay.textContent = "It's a tie!";
    return;
  }

  // Check all winning conditions for the player
  const playerWins =
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper');

  // Update score and display message based on who won
  if (playerWins) {
    playerScore++;
    winnerDisplay.textContent = 'Yay! You win this round! :D';
  } else {
    computerScore++;
    winnerDisplay.textContent = 'Sorry, you lose this round.. :(';
  }

  // Update the score display
  updateScoreDisplay();

  // Check if the game is over
  checkForGameOver();
}

// Check if someone has won the game
function checkForGameOver() {
  if (playerScore === POINTS_TO_WIN || computerScore === POINTS_TO_WIN) {
    endGame();
  }
}

// Handle what happens when the game ends
function endGame() {
  // Hide the game buttons
  rockButton.style.display = 'none';
  paperButton.style.display = 'none';
  scissorsButton.style.display = 'none';

  // Hide the choices display
  choicesContainer.style.display = 'none';

  // Show the restart button
  restartButton.style.display = 'inline';
  buttonsContainer.appendChild(restartButton);

  // Show final winner message
  if (playerScore === POINTS_TO_WIN) {
    winnerDisplay.textContent = 'Congratulations! You win the game!';
  } else {
    winnerDisplay.textContent = 'Sorry, the computer wins the game..';
  }
}

// Reset everything to play again
function resetGame() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;

  // Update score display
  updateScoreDisplay();

  // Show game buttons again
  rockButton.style.display = 'inline';
  paperButton.style.display = 'inline';
  scissorsButton.style.display = 'inline';

  // Show choices container
  choicesContainer.style.display = 'flex';

  // Hide restart button
  restartButton.style.display = 'none';

  // Clear all display messages
  winnerDisplay.textContent = '';
  playerChoiceDisplay.textContent = '';
  computerChoiceDisplay.textContent = '';
}

// Handle when player makes a choice
function handlePlayerChoice(playerChoice) {
  // Don't do anything if game is over
  if (playerScore === POINTS_TO_WIN || computerScore === POINTS_TO_WIN) {
    return;
  }

  // Get computer's choice
  const computerChoice = getComputerChoice();

  // Show both choices
  displayChoices(playerChoice, computerChoice);

  // Handle the round
  handleRoundResult(playerChoice, computerChoice);
}

// Add click handlers to all buttons
rockButton.addEventListener('click', function () {
  handlePlayerChoice('rock');
});

paperButton.addEventListener('click', function () {
  handlePlayerChoice('paper');
});

scissorsButton.addEventListener('click', function () {
  handlePlayerChoice('scissors');
});

restartButton.addEventListener('click', function () {
  resetGame();
});

// Initialize the score display
updateScoreDisplay();
