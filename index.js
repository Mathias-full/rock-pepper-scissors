let humanScore = 0;
let computerScore = 0;
let result;

function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice;

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "pepper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// function getHumanChoice() {
//   let humanChoice = prompt("enter your move", "");
//   if (humanChoice === "") {
//     console.log("please enter your move");
//   } else {
//     return humanChoice;
//   }
// }

function playRound(computerMove, humanMove) {
  computerMove = computerMove.toLowerCase();
  humanMove =
    humanMove != undefined || humanMove != null
      ? humanMove.toLowerCase()
      : "none";
  console.log(humanMove);

  if (humanMove == "rock" || humanMove == "pepper" || humanMove == "scissors") {
    if (humanMove === computerMove) {
      resultDiv.textContent = 
        `you move ${humanMove} and computer move ${computerMove}: it's Tie`,
      ;
      humanScore += 1;
      computerScore += 1;
    } else if (computerMove === "rock") {
      if (humanMove === "pepper") {
        resultDiv.textContent = 
          `you move ${humanMove} and computer move ${computerMove}: you win`,
        ;
        humanScore += 1;
      } else {
        resultDiv.textContent = 
          `you move ${humanMove} and computer move ${computerMove}: you loose`,
        ;
        computerScore += 1;
      }
    } else if (computerMove === "pepper") {
      if (humanMove === "rock") {
        resultDiv.textContent = 
          `you move ${humanMove} and computer move ${computerMove}: You Loose`,
        ;
        computerScore += 1;
      } else {
        resultDiv.textContent = 
          `you move ${humanMove} and computer move ${computerMove}: You Win`,
        ;
        humanScore += 1;
      }
    } else if (computerMove === "scissors") {
      if (humanMove === "rock") {
        resultDiv.textContent = 
          `you move ${humanMove} and computer move ${computerMove}: You Win`,
        ;
        humanScore += 1;
      } else {
        resultDiv.textContent =
          `you move ${humanMove} and computer move ${computerMove}: You Loose`,
        ;
        computerScore += 1;
      }
    }
  } else {
    console.log("Please enter the correct move");
  }
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     if (humanSelection === "") {
//       return;
//     } else {
//       const computerSelection = getComputerChoice();
//       playRound(computerSelection, humanSelection);

//       console.log(`You: ${humanScore}, Computer: ${computerScore}`);
//     }
//   }
//   if (humanScore === 0) {
//     console.log("you didn't played");
//   } else if (humanScore > computerScore) {
//     console.log("You Won");
//   } else if (humanScore < computerScore) {
//     console.log("You Lost");
//   } else {
//     console.log("It's a Tie");
//   }
// }

// playGame();

const section = document.querySelector('.section');
const rockButton = document.createElement('button');
const pepperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

rockButton.id = 'rock';
pepperButton.id = "pepper";
scissorsButton.id = "scissors";

rockButton.textContent = 'Rock';
pepperButton.textContent = 'Pepper';
scissorsButton.textContent = 'Scissors';

rockButton.addEventListener('click', event => {
  const target = event.target;

  playRound(getComputerChoice(),target.id);
})

pepperButton.addEventListener('click', event => {
  const target = event.target;

  playRound(getComputerChoice(),target.id);
})

scissorsButton.addEventListener('click', event => playRound(getComputerChoice(),event.target.id));

section.appendChild(rockButton);
section.appendChild(pepperButton);
section.appendChild(scissorsButton);

// Result div

const resultDiv = document.createElement('div');

section.appendChild(resultDiv);
