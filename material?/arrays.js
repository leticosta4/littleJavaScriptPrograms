//spread operator = ... 
//it allows an iterable to be expanded into separate elements

let nums = [1, 2, 3, 4, 5];

let maximum = Math.max(...nums); //unpacking the elements
let minimum = Max.min(...nums);
console.log(maximum);

let username = "let almeida";
let letters = [...username].join(".");   
console.log(letters);

let veggies = ["carrot", "celery", "potatoes"];
let fruits = ["apple", "orange", "banana"];

let foods = [...veggies, ...fruits, "egg", "milk"];
console.log(food);


//rest parameters = (...rest)
//allows a function to work with a variable number of arguments by bunding them into an array

function print(...vogais){
    console.log(vogais);
}

const v1 = "a", v2 = "e", v3 = "i", v4 = "o", v5 = "u";
print(v1, v2);
print(v1, v2, v3, v4, v5);