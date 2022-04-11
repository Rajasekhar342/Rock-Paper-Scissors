function computerPlay(){
const choose = ["rock", "paper","scissors"];

const random = Math.floor(Math.random() * choose.length);
console.log(choose[random]);
return (choose[random]);
}
let playerSelection = prompt("Enter rock,paper or scissors:");
playerSelection=playerSelection.toLowerCase();
const computerSelection = computerPlay();
console.log(computerSelection)
function playRound(playerSelection, computerSelection) {
  if (playerSelection===computerSelection){
    return "it's tie"
  }
  if ((computerSelection==="rock"&&playerSelection==="paper")
  ||(computerSelection==="paper"&&playerSelection==="scissors")
  ||(computerSelection==="scissors"&&playerSelection==="rock")){
    return "you won"

  }
  if ((playerSelection==="rock"&&computerSelection==="paper")
  ||(playerSelection==="paper"&&computerSelection==="scissors")
  ||(playerSelection==="scissors"&&computerSelection==="rock")){
    return "you lose"
  }  
}
console.log(playRound(playerSelection,computerSelection))

