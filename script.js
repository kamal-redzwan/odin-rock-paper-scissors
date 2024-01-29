function getPlayerChoice() {
  let playerSelection = prompt(
    'Choose either Rock, Paper or Scissors'
  ).toLowerCase();

  if (
    playerSelection === 'rock' ||
    playerSelection === 'paper' ||
    playerSelection === 'scissors'
  ) {
    return playerSelection;
  } else {
    console.log('Please choose either Rock, Paper, or Scisscors');
    return getPlayerChoice();
  }
}

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * 3);

  let computerSelection = choices[randomChoice];
  return computerSelection;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    playRound();
    return;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    console.log('You win!');
    return;
  } else {
    console.log('You lose..');
    // playRound();
    return;
  }
}

function playRound() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  // let playerSelection = 'rock';
  // let computerSelection = 'rock';

  console.log('Player selection:', playerSelection);
  console.log('Computer selection:', computerSelection);

  checkWinner(playerSelection, computerSelection);
}

playRound();
