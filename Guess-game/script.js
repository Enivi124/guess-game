'use strict';

// DOM(DOCUMENT OBJECT MODEL) AND DOM MANIPULATION
// connection point between html document and js code

// Not a part of JS just a part of WEB API(Application Programming Interface) that can be accessed from js code

// WEB API's are basically libraries also written in js automatically available for use.

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc rounds up to a whole number
// Math.random gives a number between 0 and 1 (many decimal places)
// Math.random() * 20 gives a numbers between 0 and 20 (whole number)
// +1 makes it between 1 and 20 insteac of 0 and 20

// const message = document.querySelector('.message');
const gameScore = document.querySelector('.score');
const gamehighScore = document.querySelector('.highscore');
const number = document.querySelector('.number');
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // converts the string to a number 
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    // message.textContent = '⛔ No Number';
    displayMessage('⛔ No Number')
  }

  // Correct guess
  else if (guess === secretNumber) {
    // message.textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem'

    if (score > highscore) {
      highscore = score;
      gamehighScore.textContent = highscore;
    }
  }
  
  else if (guess !== secretNumber) {
    if (score > 1) {
      // message.textContent = guess > secretNumber ? '📈 Too high' : '📉 Too low';
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low')
      score--;
      gameScore.textContent = score;
    }
    else {
      // message.textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
      gameScore.textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  };
  
});

document.querySelector('.again').addEventListener('click', function () {
  // message.textContent = 'Start Guessing';

  number.textContent = '?';
  document.body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  score = 20;
  gameScore.textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

// REFACTORING MEANS RESTRUCTURING AND IMPROVING THE CODE WITHOUT CHANGING HOW IT WORKS TO ELIMINATE DUPLICATE CODE AND TO FOLLOW (DRY) PRINCIPLE.