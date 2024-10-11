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