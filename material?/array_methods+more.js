// array functions  = a way to write function expressions good for simple
//                       functions that you use only once 
//                       (parameters) => some code

function hello(){ console.log("hello"); }
hello();

//turns into this:

const hello = function(){ console.log("hello"); }

//then into this:

const hello2 = (name) => console.log(`hello ${name}`);
hello2("let");

//example
setTimeout(hello, 3000); //after 3 secs use hello - using here the function hello as a callback

setTimeout(function(){ console.log("hello"); }, 3000);

setTimeout(() => console.log("hello"), 3000); //more concise way

//using .map() ; .filter() ; .reduce()
const nums = [1, 2, 3, 4, 5];
const squares = nums.map((element) => Math.pow(element, 2))
console.log(squares);

const evenNums = nums.filter((element) => element & 2 === 0);
console.log(evenNums);

const total = nums.reduce((accumulator, element) => accumulator + element);
console.log(total);

// com array de objetos
const fruits = [{name: "apple", color: "red", calories: 95}, {name: "banana", color: "yellow", calories: 65}, {name: "orange", color: "orange", calories: 45}];

fruits.forEach(fruit => console.log(fruit.color)); 

const fruitNames = fruits.map(fruits => fruit.name); 

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);

//sort() METHOD - lexicographic order, as STRINGS
// arrayName.sort()

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort(); //1, 10, 2, 3, 4, 5, 6, 7, 8, 9

numbers.sort((a, b) => a - b); //1, 2, 3, 4, 5, 6, 7, 8, 9  ; se fosse b - a seria em forma decrescente


//SHUFFLING AN ARRAY
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);
console.log(cards);
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]]; //DESTRUCTURING  
    }
}