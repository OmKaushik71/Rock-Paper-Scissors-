let playerSelection;
let computerSelection;
let playerScore = document.querySelector(".score #playerScore");
let computerScore = document.querySelector(".score #computerScore");
playerScore.innerText = 0;
computerScore.innerText = 0;

let rockButton = document.querySelector(".images#rock");
let paperButton = document.querySelector(".images#paper");
let scissorsButton = document.querySelector(".images#scissors");

let playerDisplay = document.querySelector(".player .image");
let computerDisplay = document.querySelector(".computer .image");

let text = document.querySelector(".text");

rockButton.addEventListener("click", (e) => {
  playerSelection = "rock";
  playerDisplay.innerHTML = ' <img src="./images/rock.png" alt="rock" />';
  game();
});
paperButton.addEventListener("click", (e) => {
  playerSelection = "paper";
  playerDisplay.innerHTML = ' <img src="./images/paper.png" alt="rock" />';
  game();
});
scissorsButton.addEventListener("click", (e) => {
  playerSelection = "scissors";
  playerDisplay.innerHTML = ' <img src="./images/scissors.png" alt="rock" />';
  game();
});

// function to play five rounds with computer.

function game() {
  computerSelection = computerPlay();
  computerDisplay.innerHTML = `<img src="./images/${computerSelection}.png" alt="${computerSelection}" />`;
  console.log(playerSelection);
  console.log(computerSelection);
  text.innerText = play(playerSelection, computerSelection);

  if (playerScore.innerText == "5") {
    text.innerText = "You won the series!🎉";
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    computerDisplay.innerHTML = " ";
    playerDisplay.innerHTML = " ";
    playerDisplay.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.5)";
    computerDisplay.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.5)";
  } else if (computerScore.innerText == "5") {
    playerDisplay.innerHTML = " ";
    playerDisplay.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.5)";
    computerDisplay.innerHTML = " ";
    computerDisplay.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.5)";

    text.innerText = "You lost the series.😔";
    playerScore.innerText = 0;
    computerScore.innerText = 0;
  }
}

// Function to compare player's selection with computer's selection

function play(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playerDisplay.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.5)";
    computerDisplay.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.5)";
    return `It's a draw`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore.innerText++;
    playerDisplay.style.boxShadow = "0 5px 10px rgba(250, 0, 0, 0.7)";
    computerDisplay.style.boxShadow = "0 5px 10px rgba(0, 128, 255, 0.7)";
    return `You lost! Paper beats Rock.`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore.innerText++;
    computerDisplay.style.boxShadow = "0 5px 10px rgba(250, 0, 0, 0.7)";
    playerDisplay.style.boxShadow = "0 5px 10px rgba(0, 128, 255, 0.7)";
    return `You won! Rock beats Scissors.`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore.innerText++;
    computerDisplay.style.boxShadow = "0 5px 10px rgba(250, 0, 0, 0.7)";
    playerDisplay.style.boxShadow = "0 5px 10px rgba(0, 128, 255, 0.7)";
    return `You won! Paper beats Rock.`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore.innerText++;
    playerDisplay.style.boxShadow = "0 5px 10px rgba(250, 0, 0, 0.7)";
    computerDisplay.style.boxShadow = "0 5px 10px rgba(0, 128, 255, 0.7)";
    return `You lost! Scissors beats Paper`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore.innerText++;
    playerDisplay.style.boxShadow = "0 5px 10px rgba(250, 0, 0, 0.7)";
    computerDisplay.style.boxShadow = "0 5px 10px rgba(0, 128, 255, 0.7)";
    return `You lost! Rock beats Scissors`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore.innerText++;
    computerDisplay.style.boxShadow = "0 5px 10px rgba(250, 0, 0, 0.7)";
    playerDisplay.style.boxShadow = "0 5px 10px rgba(0, 128, 255, 0.7)";
    return `You won! Scissors beats Paper`;
  } else {
    console.log("Error");
  }
}

// Function to randomly  generate 'Rock', 'Paper' or 'Scissors'.
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  if (randomNumber <= 33) {
    return "rock";
  } else if (randomNumber >= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}
