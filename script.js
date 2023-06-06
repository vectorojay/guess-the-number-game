"use strict";
let score = 20;
let highScore = 0;

//all variables and elements for the game
const btnPlayAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const scoreEL = document.querySelector(".score");
const highScoreEL = document.querySelector(".highscore");
const message = document.querySelector(".message");
const body =  document.querySelector(".body");
const number = document.querySelector(".number");

//Generating random number
const randomNumber = Math.floor(Math.random() * 100)+1;

//assigning random number to the hidden number element
number.value = randomNumber;

//assigning score to elements
scoreEL.textContent = score;
highScoreEL.textContent = highScore;

//adding eventlistener to the btnCheck that runs the onClick function when the btnCheck is clicked
btnCheck.addEventListener('click', onClick)

function onClick() {
    //grabs the value from the input field and converts it to a number
    const guessedNumber = document.getElementById('guess-number-input').valueAsNumber

    //updates the UI and highscore when number is guessed correctly
    if(guessedNumber === randomNumber){
        body.className += ' background-green'
        message.textContent = '🎉Correct Number!'
        number.textContent = randomNumber

        if(highScoreEL.textContent < scoreEL.textContent) {
            highScoreEL.textContent = scoreEL.textContent
        }
    }
}

