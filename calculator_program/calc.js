'use strict'

const display = document.getElementById("display");
var justStarted = true;

if(justStarted){ 
    display.value = "CALCULATOR";
    setTimeout(() => display.value = "", 3000);
    justStarted = false;
}

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch (error){
        display.value = "error!";
    } 
}