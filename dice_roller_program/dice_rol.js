'use strict'

function roll_dice(){
    const diceNum = document.getElementById("diceNum").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    var values = [], imgs = [];

    for(let i = 0; i < diceNum; i++){
        const value = Math.floor(Math.random() * 6) + 1; //random num between 0 and 6 rounded
        values.push(value);
        imgs.push(`<img src="dice_imgs/dice-${value}.png" alt="Dice ${value}">`);
    }
    console.log(values);
    diceResult.textContent = `dice(s): ${values.join(', ')}`;
    diceImages.innerHTML = imgs.join('');
}