function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    let result = playRound();

    if (result === 'player') {
      playerScore++;
    } else if (result === 'computer') {
      computerScore++;
    }

    console.log('Player Score:', playerScore);
    console.log('Computer Score:', computerScore);
  }

  if (playerScore === 5) {
    console.log('Congratulations! You win the game!');
  } else {
    console.log('Sorry, the computer wins the game.');
  }
}

function getPlayerChoice() {
  let playerSelection = prompt(
    'Choose either Rock, Paper, or Scissors'
  ).toLowerCase();

  if (
    playerSelection === 'rock' ||
    playerSelection === 'paper' ||
    playerSelection === 'scissors'
  ) {
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
  return computerSelection;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    console.log('You win!');
    return 'player';
  } else {
    console.log('You lose..');
    return 'computer';
  }
}

function playRound() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  console.log('Player selection:', playerSelection);
  console.log('Computer selection:', computerSelection);

  return checkWinner(playerSelection, computerSelection);
}

game();
