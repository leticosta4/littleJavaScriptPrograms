'use strict'

function generatePassword(){
    const passwordLenght = document.getElementById("passwordLen").value;
    const lcBox = document.getElementById("lowercaseChars");
    const ucBox = document.getElementById("uppercaseChars");
    const numBox = document.getElementById("numsChars");
    const symbBox = document.getElementById("symbolsChars");
    const generatedPassword = document.getElementById("generatedPassword");


    var includeLowercase, includeUppercase, includeNumbers, includeSymbols;
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz", uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", numChars = "0123456789", symbolChars = "!@#$%&*_+-";
    let allowedChars = "", password = "";

    includeLowercase = lcBox.checked ? true : false;
    includeUppercase = ucBox.checked ? true : false;
    includeNumbers = numBox.checked ? true : false;
    includeSymbols = symbBox.checked ? true : false;

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLenght <= 3){
        return "(the password lenght must be at least 4)";
    } 
    if(allowedChars.length === 0){
        return "(at least 1 set of characters needs to be selected)"
    }

    for(let i = 0; i < passwordLenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    generatedPassword.textContent = `${password}`;
}