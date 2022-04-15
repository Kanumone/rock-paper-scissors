const gameItems = document.querySelectorAll(".gameItem");
const scoreTable = document.querySelector(".menu .score");
const roundTable = document.querySelector(".menu .round");
const result = document.querySelector(".round span");
const restartButtons = document.querySelectorAll("button");
const menuPlay = document.querySelector(".menu .play");
const menuFinish = document.querySelector(".menu .finish");
let totalScore = (computerScore = playerScore = 0);

function computerPlay() {
  items = ["rock", "paper", "scissors"];
  number = Math.round(Math.random() * 2);
  return items[number];
}

function playRound(playerSelection) {
  let winner;
  let computerSelection = computerPlay();
  let resultMessage;

  // Check round result
  if (playerSelection === computerSelection) {
    winner = "draw";
  } else if (playerSelection === "rock") {
    winner = computerSelection === "scissors" ? "player" : "computer";
  } else if (playerSelection === "scissors") {
    winner = computerSelection === "paper" ? "player" : "computer";
  } else if (playerSelection === "paper") {
    winner = computerSelection === "rock" ? "player" : "computer";
  }

  if (winner === "player") {
    playerScore++;
    totalScore++;
    resultMessage = `Player won! ${playerSelection} beats
    ${computerSelection}`;
  } else if (winner === "computer") {
    computerScore++;
    totalScore++;
    resultMessage = `Computer won! ${computerSelection} beats
    ${playerSelection}`;
  } else {
    resultMessage = `Draw! Let's play next round =>`;
  }
  result.textContent = resultMessage;

  return `Computer Score: ${computerScore} - Player Score: ${playerScore}`;
}

function finishGame(computerScore, playerScore) {
  let result = "";
  if (playerScore > computerScore) {
    result = `Player won with score ${playerScore} : ${computerScore}`;
  } else if (computerScore > playerScore) {
    result = `Computer won with score ${computerScore} : ${playerScore}`;
  }
  menuFinish.textContent = result;
  menuPlay.style.cssText = "display: none";
  menuFinish.style.cssText = "display: block;";
}

setInterval(() => {
  if (totalScore === 5) {
    finishGame(computerScore, playerScore);
  }
}, 1);

gameItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (totalScore < 5) {
      scoreTable.textContent = playRound(e.target.id);
    }
  });
});

restartButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    totalScore = computerScore = playerScore = 0;
    menuFinish.style.cssText = "display: none";
    menuPlay.style.cssText = "display: block";
    scoreTable.textContent = `Computer Score: ${computerScore} -
      Player Score: ${playerScore}`;
    result.textContent = "";
  });
});
