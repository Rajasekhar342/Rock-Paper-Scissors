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
    if ((computerSelection==="rock"&&playerSelection==="paper")){
      return "you won, paper covers rock";
    }
    if ((computerSelection==="paper"&&playerSelection==="scissors")){
      return "you won,scissors cuts paper"
    }
    if((computerSelection==="scissors"&&playerSelection==="rock")){
      return "you won,rock breaks scissors"
    }

  }
  if ((playerSelection==="rock"&&computerSelection==="paper")
  ||(playerSelection==="paper"&&computerSelection==="scissors")
  ||(playerSelection==="scissors"&&computerSelection==="rock")){
    
      if ((playerSelection==="rock"&&computerSelection==="paper")){
        return "you lose, paper covers rock";
      }
      if ((playerSelection==="paper"&&computerSelection==="scissors")){
        return "you lose,scissors cuts paper"
      }
      if((playerSelection==="scissors"&&computerSelection==="rock")){
        return "you lose,rock breaks scissors"
      }

  }  
}
console.log(playRound(playerSelection,computerSelection))

