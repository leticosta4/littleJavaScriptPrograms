'use strict'

const body = document.body;
const themeBtn = document.getElementById("themeBtn");

var randomNum, attempts, min, max;//, running = true;
const minNum = document.getElementById("minNum");
const maxNum = document.getElementById("maxNum");
const generateBtn = document.getElementById("generateBtn");
const numberStatus = document.getElementById("numberStatus");
const guessedNumber = document.getElementById("number");
const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");

generateBtn.onclick = function(){
    min = Number(minNum.value);
    max = Number(maxNum.value);

    if(min >= max || isNaN(min) || isNaN(max)){
        numberStatus.textContent = "Please enter valid numbers";
    } else {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numberStatus.textContent = "The random number was generated!";
        attempts = 3;
    }
};


guessBtn.onclick = function(){
    const userNum = Number(guessedNumber.value);

    if (attempts <= 0) {
        result.textContent = "No more attempts left!";
        return; 
    }

    if(isNaN(userNum)|| (userNum < min) || (userNum > max)){
        result.textContent = "Please enter a valid number";
    } else {
        if(userNum < randomNum){
            attempts -= 1;
            result.textContent = `TOO LOW! Try again!\nAttempts left: ${attempts}`;
        } else if(userNum > randomNum){
            attempts -= 1;
            result.textContent = `TOO HiGH! Try again!\nAttempts left: ${attempts}`;
        } else if (userNum === randomNum){ 
            result.textContent = "Conograts! You got it right!!";
            return;
        }
    }

    if (attempts === 0 && guessedNumber !== randomNum) {
        result.textContent = `Game over! The correct number was ${randomNum}.`;
        return;
    }
};

themeBtn.onclick = function(){
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
};
