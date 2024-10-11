// callback = a function that is passed as an argument to another function.
//     - used to handle asynchronous operations: 
//         reading a file, network requesta, interacting with databases

//     - you only pass the name of the function as an argument

hello(goodbye); //ou passar a leave aq tb funcionaria

function hello(callback){
    console.log("hello");
    callback();
}

function leave(){
    console.log("leave");
}

function goodbye(){
    console.log("goodbye");
}

//.forEach() = to iterate over array elemnts and apply a certain function (callback) to each element
//array.forEach(callback);

const nums = [1, 2, 3, 4, 5, 6, 7];

nums.array.forEach(display);

//ou:
// nums.array.forEach(element => {
//     console.log(element);
// });

function display(element){ console.log(element); }

//.map() = same thing forEach() does, but here the method returns a new array

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

//.filter() = creates a new array by filtering out elements

const evenNums = nums.filter(isEven);
console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}

//.reduce() = reduces the elements of an array to a single value
//          it generates a accumulator basically

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element; //as if it was previous + next
}

//setTimeout(callback, delay);
//clearTimeout(timeoutId) => in cancels a timeout before it triggers

const timeoutId = setTimeout(() => window.alert("hello"), 3000);
clearTimeout(timeoutId);
