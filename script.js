const computerChoiceDisplay = document.querySelector('#computer');
const userChoiceDisplay = document.querySelector('#user');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 1) {
        computerChoice = 'rock';
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if(computerChoice === 3) {
        computerChoice = 'papper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}



function playRound(playerSelection, computerSelection){
     computerSelection = computerPlay().toLowerCase();
     playerSelection = playerSelection.toLowerCase();

    if(playerSelection === 'paper'){
        if(computerSelection === 'paper'){
            console.log('Draw!');
        }
        if(computerSelection === 'Rock'){
            console.log('You win - paper beats rock!')
        } else if(computerSelection === 'Scissors'){
            console.log('You lose - scissors beats paper!');
        }
     } else if(playerSelection === 'Rock'){
         if(computerSelection === 'Paper'){
             console.log('You win - paper beats rock!');
         } else if(computerSelection === 'Scissors'){
             console.log('You lose - rock beats scissors!');
         }
     } else if(playerSelection === 'Scissors'){
         if(computerSelection === 'Rock'){
             console.log('You lose - rock beats scissors');
         } else if(computerSelection === 'Paper'){
             console.log('You win - scissors beats paper');
         }
     }
}

function game(playerScore, computerScore){

}