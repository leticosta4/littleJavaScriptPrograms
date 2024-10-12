 //nodelist = static collection of html elements
            //   can be created by querySelectorAll()
            //   similar to an Array, but no built-in methods like map and filter
            //   wont update to automatically reflect changes


let buttons = document.querySelectorAll(".myBtn");

//add change html/css properties
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += " :)";
});

//click event listener
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

//mouseover + mouseout event listener
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "purple";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "green";
    });
});

//add an element - but this isnt automatically update into the nodelist
const newBtn = document.createElement("button");
newBtn.textContent = "button 5 :)";
newBtn.classList = "myBtn";
document.body.appendChild(newBtn);

//just now:
buttons = document.querySelectorAll(".myBtn"); //thats why its declared with let

//remove an element
buttons.addEventListener("click", event => {
    event.target.remove();
    // buttons = document.querySelectorAll(".myBtn");
});

//even removing the elements from the dom, they do continue on the nodelist
//to remove them manually add the code on line 47