let computerChoiceDisplay = document.getElementById("computerChoice");
let userChoiceDisplay = document.getElementById("playerChoice");
let resultDisplay = document.getElementById("result");
let scoreDisplay = document.getElementById("score");
let possibleChoices = document.querySelectorAll('div');
let userChoice; 
let computerChoice;
let result;
let score = 0; 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

/* Function generates random number 

math.floor rounds number to make it whole

if statements checks what the random number are and assigns them to a possible choice 
*/
function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 )

  if (randomNumber === 1) {
    computerChoice = "rock"
  }
  if (randomNumber === 2) {
    computerChoice = "paper"
  }
  if (randomNumber === 3) {
    computerChoice = "scissors"
  }
  if (randomNumber === 0) {
    computerChoice = "guard"
  }

  
  computerChoiceDisplay.innerHTML = computerChoice;

}

/* 
This function checks what the user and computer picked and depending on the instance
scores and text are displayed accordingly. 
*/

function getResult() {
  if (computerChoice === userChoice) {
    result = "draw"
    score += 0;

  }
  if (userChoice === "guard") {
    result = "guard you lose half a point"
    score -= .5;
  }
  if (computerChoice === "guard") {
    result = "computer guards you win half a point"
    score += .5;
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = "you win"
    score += 1;
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = "you lose"
    score -= 1;
  }
  
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = "you lose"
    score -= 1;
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = "you lose"
    score -= 1;
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = "you win"
    score += 1;
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = "you lose"
    score -= 1;
  }

  /* 
  Sends scores and results to the appropriate element
  */
  resultDisplay.innerHTML = result;
  scoreDisplay.innerHTML = score;

}










