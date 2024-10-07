'use strict'

function generatePassword(len, incLowercase, incUppercas, incNums, incSymbs){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz", uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", numChars = "0123456789", symbolChars = "!@#$%&*_+-";

    let allowedChars = "", password = "";

    allowedChars += incLowercase ? lowercaseChars : "";
    allowedChars += incUppercas ? uppercaseChars : "";
    allowedChars += incNums ? numChars : "";
    allowedChars += incSymbs ? symbolChars : "";

    if(len <= 3){
        return "(the password lenght must be at least 4)";
    } 
    if(allowedChars.length === 0){
        return "(at least 1 set of characters needs to be selected)"
    }

    for(let i = 0; i < len; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLenght = 12, includeLowercase = true, includeUppercase = true, includeNumbers = true, includeSymbols = true;
const password = generatePassword(passwordLenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`generated password: ${password}`);