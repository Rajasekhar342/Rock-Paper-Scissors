
const computerChoiceDisplay=document.getElementById("computer-choice")
const playerChoiceDisplay=document.getElementById("player-choice")
const resultDisplay=document.getElementById("result")
const possibleChoices=document.querySelectorAll("button")
let playerSelection;
let computerSelection;

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click', (e) => {
   playerSelection = e.target.id;
   playerChoiceDisplay.innerText=playerSelection;
   generateComputerChoice();
   playRound();
   game();
   winner();
}))

function generateComputerChoice(){
  const choose=["rock","paper","scissors"];
  const randomNumber = Math.floor(Math.random()*choose.length);
  computerSelection=choose[randomNumber];
  computerChoiceDisplay.innerText=computerSelection;
}

function playRound() {
  if (playerSelection===computerSelection){
    result= "it's tie"
  }
  if ((computerSelection==="rock"&&playerSelection==="paper")
  ||(computerSelection==="paper"&&playerSelection==="scissors")
  ||(computerSelection==="scissors"&&playerSelection==="rock")){
    if ((computerSelection==="rock"&&playerSelection==="paper")){
      result= "you win, paper covers rock";
    }
    if ((computerSelection==="paper"&&playerSelection==="scissors")){
      result="you win,scissors cuts paper"
    }
    if((computerSelection==="scissors"&&playerSelection==="rock")){
      result= "you win,rock breaks scissors"
    }

  }
  if ((playerSelection==="rock"&&computerSelection==="paper")
  ||(playerSelection==="paper"&&computerSelection==="scissors")
  ||(playerSelection==="scissors"&&computerSelection==="rock")){
    
      if ((playerSelection==="rock"&&computerSelection==="paper")){
        result= "you lose, paper covers rock";
      }
      if ((playerSelection==="paper"&&computerSelection==="scissors")){
        result="you lose,scissors cuts paper"
      }
      if((playerSelection==="scissors"&&computerSelection==="rock")){
        result="you lose,rock breaks scissors"
      }
  } 
  resultDisplay.innerText= result;
  return result
}

const computerScoreDisplay=document.getElementById("computer-score")
const playerScoreDisplay=document.getElementById("player-score")
const gameResultDisplay=document.getElementById("game-result")


let playerScore=0;
let computerScore=0;
function game(){
  
  let roundResult = playRound();
  if (roundResult.search('you win,') > -1) {
    playerScore++;
    
  } else if (roundResult.search('you lose,') > -1) {
    computerScore++;
    
  }
  playerScoreDisplay.innerText=playerScore;
  computerScoreDisplay.innerText=computerScore;
}
function winner(){
  if (playerScore >= 5 && computerScore < 5) {
    output = 'Game Over. You Win!';
  } else if (playerScore < 5 && computerScore >= 5) {
    output = 'Game Over. You Lose!';
  }
 gameResultDisplay.innerText=output;
}


