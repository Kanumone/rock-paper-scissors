
function computerPlay() {
  items = ["rock", "paper", "scissors"];
  number = Math.round(Math.random() * 2);
  return items[number];
}

function playerPlay() {
  let playerSelection = prompt("What is your choice?");
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  const variants = [
    {
      message: `You won! ${playerSelection} beat ${computerSelection}`,
      winner: "player"
    },
    {
      message: `You lose! ${computerSelection} beat ${playerSelection}`,
      winner: "computer"
    },
    {
      message: "Draw! Let's play next round!",
      winner: "draw"
    }
  ]

  let result = {};
  
  if (playerSelection === computerSelection) {
    result =  variants[2];
  } else if (playerSelection === "rock") {
    result = computerSelection === "scissors" ? variants[0] : variants[1];
  } else if (playerSelection === "scissors") {
    result = computerSelection === "paper" ? variants[0] : variants[1];
  } else if (playerSelection === "paper") {
    result = computerSelection === "rock" ? variants[0] : variants[1];
  }
  return result;
}

function game() {
  let check = result = '', playerScore = computerScore = 0;
  let playerSelection = playerPlay();
  let computerSelection = computerPlay();
  

  for (let i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    check = playRound(playerSelection, computerSelection);
    console.log(check.winner);
    if (check.winner == 'player') {
      playerScore++;
    } else if (check.winner == 'computer') {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    result = `Player won with score ${playerScore} : ${computerScore}`
  } else if (computerScore > playerScore) {
    result = `Computer won with score ${computerScore} : ${playerScore}`
  } else {
    result = "Winner is undefine =)"
  }
  return result;
}

console.log(game());

