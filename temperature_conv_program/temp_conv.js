'use strict'

function convert(){
    const tempInput = document.getElementById("textBox");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCelsius");
    const result = document.getElementById("result");

    var tempUnit, tempFinal, tempIni = parseFloat(tempInput.value);
    if(isNaN(tempIni) || (typeof tempFinal === undefined)){
        result.textContent = "Please enter a valid temperature value!";
        return;
    } else {
        if(toFahrenheit.checked){
            tempFinal = ((tempIni * 9)/5) + 32;
            tempUnit = "Fahrenheit";
        } else if(toCelsius.checked){
            tempFinal = ((tempIni - 32) * 5)/9;
            tempUnit = "Celsius";
        }
    }
    result.textContent = `It's ${tempFinal.toFixed(2)} degrees ${tempUnit}`
}