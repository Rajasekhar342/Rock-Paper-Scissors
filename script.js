function computerPlay(){
const choose = ["rock", "paper","scissors"];

const random = Math.floor(Math.random() * choose.length);;
return (choose[random]);
}
let playerScore=0;
let computerScore=0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection===computerSelection){
    return "it's tie"
  }
  if ((computerSelection==="rock"&&playerSelection==="paper")
  ||(computerSelection==="paper"&&playerSelection==="scissors")
  ||(computerSelection==="scissors"&&playerSelection==="rock")){
    if ((computerSelection==="rock"&&playerSelection==="paper")){
      return "you win, paper covers rock";
    }
    if ((computerSelection==="paper"&&playerSelection==="scissors")){
      return "you win,scissors cuts paper"
    }
    if((computerSelection==="scissors"&&playerSelection==="rock")){
      return "you win,rock breaks scissors"
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
function game(){
  for (let i=0;i<5;i++){ 
    let playerSelection = prompt("Enter rock,paper or scissors:");
    playerSelection=playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    console.log(computerSelection);
    let roundResult = playRound(playerSelection,computerSelection);
    console.log(roundResult);
    if (roundResult.search('you win') > -1) {
      playerScore++;
    } else if (roundResult.search('you lose') > -1) {
      computerScore++;
    }
  }
    if (playerScore >computerScore) {
      return 'Game Over. You Win!';
    } else if (playerScore<computerScore) {
      return 'Game Over. You Lose!';
    } else{
      return "Game Over. It's draw";
      
    }
  }

console.log(game())
