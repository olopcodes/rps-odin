// global variables
let humanScore = 0;
let computerScore = 0;

// get computer pick
function getComputerChoice() {
  // use random number to get pick
  const randNumber = getRandomNumber(1, 3);

  if (randNumber === 1) {
    return "rock";
  } else if (randNumber === 2) {
    return "paper";
  } else if (randNumber === 3) {
    return "scissors";
  }
}

// getting user pick
function getHumanChoice() {
  return prompt("Enter your choice").toLowerCase();
}

function playRound(humanSelection, computerSelection) {
  // capitalizing first letter of a pick
  const capitalizedHumanSelection = capitalizeLetter(humanSelection);
  const capitalizedComputerSelection = capitalizeLetter(computerSelection);

  // stop the game from running if selection is empty
  if (!humanSelection) return;

  if (humanSelection === computerSelection) {
    return "Draw";
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    return `You win this round! ${capitalizedHumanSelection} beats ${capitalizedComputerSelection}`;
  } else if (
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock") ||
    (humanSelection === "rock" && computerSelection === "paper")
  ) {
    computerScore++;
    return `You lose this round! ${capitalizedComputerSelection} beats ${capitalizedHumanSelection}`;
  } else {
    return `${capitalizedHumanSelection} is not valid. Please choose rock, paper, or scissors`;
  }
}

function capitalizeLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

// game logic
function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  const result = playRound(humanSelection, computerSelection);
  // let the user know who won
  alert(result);
}

// run this after while loop is over
function gameOver() {
  if (humanScore > computerScore) {
    alert(`Congrats! You win the match! ${humanScore} to ${computerScore}.`);
  } else {
    alert(`You lose the match ${humanScore} to ${computerScore}.`);
  }
}

// this will run until it is false. Both have to be equal to be true
while (humanScore < 5 && computerScore < 5) {
  playGame();
}

// this will run after the while loop equal false
gameOver();
