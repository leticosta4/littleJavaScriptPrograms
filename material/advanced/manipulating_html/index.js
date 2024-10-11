'use strict'

//1. create an element
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h2");

//2. add attributes/properties
newH1.textContent = "hello world";
newH2.textContent = "AAAAAAAAAA";
newH1.id = "myH1";
newH1.style.color = "blue";
newH1.style.textAlign = "center";

//3.append element to dom

//when you append an element like that to a parent it becomes the last child
//document.body.append(newH1); 
//first child would be like that
//document.body.prepend(newH2); 

document.getElementById("box1").append(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH2, box2);

//4.remove html element

//here you have to reference the direct parent 
document.body.removeChild(newH2);
