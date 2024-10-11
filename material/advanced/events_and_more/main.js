//eventlistener -> click, mouseover, mouseout
//.addEventListener(event, callback);

'use strict'

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");


myBox.addEventListener("click", (event) => {
                                    event.target.style.backgroundColor = "tomato";
                                    event.target.textContent = "omg";
                                });

myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "what?";
});     

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "aquamarine";
    event.target.textContent = "click me";
});           


myBtn.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myBtn.textContent = "hide";
    } else{
        myImg.style.visibility = "hidden";
        myBtn.textContent = "show";
    }
});

//ao inves de usar diplay === "none", que nao deixa um espaco reservado p imagem
//da p usar o visibility === "hidden", que deixa o espaço certo da img
//tb se usar "visible" ao invez de "block" 