function computerPlay(){
const choose = ["rock", "paper","scissors"];

const random = Math.floor(Math.random() * choose.length);
console.log(choose[random]);
return (choose[random]);
}
const playerSelection = prompt("enter rock,paper or scissors:");
playerSelection.toLowerCase();
const computerSelection = computerPlay();
console.log(computerSelection)
function playRound(playerSelection, computerSelection) {
  
}


