// Function to randomly  console.log( 'Rock', 'Paper' or 'Scissors'.
function computerPlay(){
    let randomNumber = Math.floor((Math.random() * 100) + 1);
if(randomNumber <= 33){
  return "rock";
}
else if(randomNumber >= 66){
  return "paper";
}
else{
  return "scissors";
}
}

let playerscore = 0 , computerscore = 0;

// Function to compare player's selection with computer's selection

function play(playerSelection, computerSelection){


if(playerSelection === computerSelection){
  return `It's a draw`;
}

else if(playerSelection === "rock" && computerSelection === "paper"){
    computerscore++;
    return `You lost! Paper beats Rock.`;
}
else if(playerSelection === "rock" && computerSelection === "scissors"){
    playerscore++;
    return `You won! Rock beats Scissors.`;
}

else if(playerSelection === "paper" && computerSelection === "rock"){
    playerscore++;
    return `You won! Paper beats Rock.`;
}
else if(playerSelection === "paper" && computerSelection === "scissors"){
    computerscore++;
    return `You lost! Scissors beats Paper`;
}

else if(playerSelection === "scissors" && computerSelection === "rock"){
    computerscore++;
    return `You lost! Rock beats Scissors`;
}
else if(playerSelection === "scissors" && computerSelection === "paper"){
    playerscore++;
  return `You won! Scissors beats Paper`;
}
else{
    console.log("Error");
}

}

// Function to play five rounds with computer.
function game(){
   
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors","");
        let computerSelection = computerPlay();
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        console.log(playerSelection);
        console.log(computerSelection);

       alert(play(playerSelection,computerSelection));
    
    }
    
    if(playerscore === computerscore){
        alert(`Your score = ${playerscore}  Computer Score = ${computerscore}\nIt's a draw!`);
    }
    else if(playerscore > computerscore){
        alert(`Your score = ${playerscore}  Computer Score = ${computerscore}\n You won!`);
    }
    else{
        alert(`Your score = ${playerscore}  Computer Score = ${computerscore}\nYou lost!`);
    }
    
}
game();