const computerChoice = document.querySelector('#computer');
const userChoiceDisplay = document.querySelector('#user');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}));

let computerSelection;
let computerScore = 0;
let playerScore = 0;

const myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay(){
    return myArray[Math.floor(Math.random() * myArray.length)];
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