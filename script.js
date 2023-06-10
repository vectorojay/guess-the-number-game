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
    //grabs the value from the input field
    //not converting the guessedNumber to a number because we can't find the length of a number, which we need to do in the conditional in the try statement.
    const guessedNumber = document.getElementById('guess-number-input').value

    //try throws the error while the catch receives the error and displays the message of the error
    try {
        //checks if the input field is not empty, runs the code to update UI if the input field is not empty and throws an error if it is empty
        if (guessedNumber.length > 0) {
            //updates the UI and highscore when number is guessed correctly
            if(guessedNumber == randomNumber){
                body.classList.add('background-green')
                message.textContent = '🎉Correct Number!'
                number.textContent = randomNumber
                
                if(highScoreEL.textContent < scoreEL.textContent) {
                    highScoreEL.textContent = scoreEL.textContent
                }
            } 
        } else {
            throw new Error('Please enter a number')
        } 
    } catch (error) {
        message.textContent = error.message
    }
}

