const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  looses: 0,
  ties: 0,
};

function playGame(playerMove) {
  let result = "";
  const computerMove = pickComputerMove();

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Loose.";
    } else if (computerMove === "scissors") {
      result = "You Won.";
    }
  }

  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Won.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You Loose.";
    }
  }

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Loose.";
    } else if (computerMove === "paper") {
      result = "You Won.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }

  switch (result) {
    case "You Won.":
      score.wins++;
      break;
    case "You Loose.":
      score.looses++;
      break;
    case "Tie.":
      score.ties++;
      break;
  }

  updateScoreElement(playerMove, computerMove, result);
}

function updateScoreElement(playerMove, computerMove, result) {
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You pick ${playerMove}. Computer picked ${computerMove}`;
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.looses}, Ties: ${score.ties}
   `;
}

function pickComputerMove() {
  let randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber > 2 / 3) {
    computerMove = "scissors";
  }
  return computerMove;
}
