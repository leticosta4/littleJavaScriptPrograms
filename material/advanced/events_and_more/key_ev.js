//key events -> interactive web pages
                // events: keydown, keyup, keypress (not compatible for all browsers)
                // document.addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const  moveAmount = 100;
let x = 0, y = 0;


document.addEventListener("keydown", event => {
    myBox.textContent = ":o";
    myBox.style.backgroundColor = "tomato";

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }

});

document.addEventListener("keyup", event => {
    myBox.textContent = ":)";
    myBox.style.backgroundColor = "blueviolet";
});



