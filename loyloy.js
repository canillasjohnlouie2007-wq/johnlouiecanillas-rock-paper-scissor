let userScore = 0;
let compScore = 0;

// Grab buttons and display elements
const buttons = {
  rock: document.getElementById('rock'),
  paper: document.getElementById('paper'),
  scissors: document.getElementById('scissors')
};

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

// Add click event listeners
for (let choice in buttons) {
  buttons[choice].addEventListener('click', () => play(choice));
}

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const compChoice = choices[Math.floor(Math.random() * 3)];
  let outcome = '';

  if (userChoice === compChoice) {
    outcome = "It's a tie!";
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    outcome = 'You win!';
    userScore++;
  } else {
    outcome = 'You lose!';
    compScore++;
  }

  resultDiv.innerHTML = `
    You chose: ${userChoice} <br>
    Computer chose: ${compChoice} <br>
    <strong>${outcome}</strong>
  `;

  scoreDiv.innerText = `You: ${userScore} | Computer: ${compScore}`;
}