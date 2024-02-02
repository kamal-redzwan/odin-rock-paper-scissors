function getPlayerChoice() {
  let playerSelection = prompt(
    'Choose either Rock, Paper, or Scissors'
  ).toLowerCase();

  // Check if the player's selection is valid
  if (
    playerSelection === 'rock' ||
    playerSelection === 'paper' ||
    playerSelection === 'scissors'
  ) {
    // Return the valid choice
    return playerSelection;
  } else {
    // Display an error message and ask the player to choose again
    console.log('Please choose either Rock, Paper, or Scissors');
    // Recursively call the function to get a valid choice
    return getPlayerChoice();
  }
}

function getComputerChoice() {
  // Array of valid choices for the computer
  let choices = ['rock', 'paper', 'scissors'];

  // Generate a random index to pick a choice from the array
  let randomChoiceIndex = Math.floor(Math.random() * 3);

  // Get the computer's selection based on the randomly chosen index
  let computerSelection = choices[randomChoiceIndex];

  // Return the computer's choice
  return computerSelection;
}

function checkWinner(playerSelection, computerSelection) {
  // Check for a tie
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return 'tie';
  } else if (
    // Check for player win conditions
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    console.log('You win!');
    return 'player';
  } else {
    // Player didn't win, so computer wins
    console.log('You lose..');
    return 'computer';
  }
}

function playRound() {
  // Get the player's and computer's choices
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  // Log the choices to the console
  console.log('Player selection:', playerSelection);
  console.log('Computer selection:', computerSelection);

  // Determine the winner of the round
  return checkWinner(playerSelection, computerSelection);
}

function game() {
  // Initialize scores for player and computer
  let playerScore = 0;
  let computerScore = 0;

  // Continue the game until one player reaches 5 wins
  while (playerScore < 5 && computerScore < 5) {
    // Play a round and get the result
    let result = playRound();

    // Update scores based on the result
    if (result === 'player') {
      playerScore++;
    } else if (result === 'computer') {
      computerScore++;
    }

    // Display current scores after each round
    console.log('Player Score:', playerScore);
    console.log('Computer Score:', computerScore);
  }

  // Declare the winner of the game based on the best of 5 wins
  if (playerScore === 5) {
    console.log('Congratulations! You win the game!');
  } else {
    console.log('Sorry, the computer wins the game.');
  }
}

// Start the game
game();
