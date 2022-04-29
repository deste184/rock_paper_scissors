const computerChoiceDisplay = document.createElement('h1');
const userChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game')
gameGrid.append(computerChoiceDisplay, userChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice

const handClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + randomChoice
}

for(let i = 0; i < choices.length; i++){
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handClick)
    gameGrid.appendChild(button)
}