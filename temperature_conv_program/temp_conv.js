'use strict'

function convert(){
    const tempInput = document.getElementById("textBox");
    const CtoFahrenheit = document.getElementById("CtoFahrenheit");
    const FtoCelsius = document.getElementById("FtoCelsius");
    const CtoKelvin = document.getElementById("CtoKelvin");
    const FtoKelvin = document.getElementById("FtoKelvin");
    const KtoFahrenheit = document.getElementById("KtoFahrenheit");
    const KtoCelsius = document.getElementById("KtoCelsius");
    const result = document.getElementById("result");

    var tempUnit, tempFinal, tempIni = parseFloat(tempInput.value);
    if(isNaN(tempIni) || (typeof tempFinal === undefined)){
        result.textContent = "Please enter a valid temperature value!";
        return;
    } else {
        if(CtoFahrenheit.checked){
            tempFinal = ((tempIni * 9)/5) + 32;
            tempUnit = "Fahrenheit";
        } else if(FtoCelsius.checked){
            tempFinal = ((tempIni - 32) * 5)/9;
            tempUnit = "Celsius";
        } else if(CtoKelvin.checked){
            tempFinal = tempIni + 273.15;
            tempUnit = "Kelvin";
        } else if(FtoKelvin.checked){
            tempFinal = (((tempIni - 32)*9)/5) + 273.15;
        } else if(KtoFahrenheit.checked){
            tempFinal = (((tempIni - 273.15)*9)/5) + 32;
            tempUnit = "Fahrenheit";
        } else if(KtoCelsius.checked){
            tempFinal = tempIni - 273.15;
            tempUnit = "Celsius";
        }
    }
    result.textContent = `It's ${tempFinal.toFixed(1)} degrees ${tempUnit}`
}