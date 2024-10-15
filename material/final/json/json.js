'use strict';

//stringfy => converts a JS Object into a JSON string
//parse => converts a JSON string into a JS Object 

const names = ["spongebob", "patrick", "sandy"];

const jsonString = JSON.stringify(names);
// console.log(names);
// console.log(jsonString);

const person = {
    "name": "spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["jellyfishing", "karate", "cooking"]
};

const jsonString2 = JSON.stringify(person);
// console.log(person);
// console.log(jsonString2);

const people = [{
    "name": "spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "patrick",
    "age": 35,
    "isEmployed": false
},
{
    "name": "sandy",
    "age": 27,
    "isEmployed": false
}];

const jsonString3 = JSON.stringify(people);
// console.log(people);
// console.log(jsonString3);

//VERSAO 2
const jsonNames = `["spongebob", "patrick", "sandy"]`;
const jsonPerson = `{"name": "spongebob", "age": 30, "isEmployed": true, "hobbies": ["jellyfishing", "karate", "cooking"]}`;
const jsonPeople = `[{"name": "spongebob", "age": 30, "isEmployed": true},
                 {"name": "patrick", "age": 35, "isEmployed": false},
                 {"name": "sandy", "age": 27, "isEmployed": false}]`;

// const parsedData = JSON.parse(jsonNames);
// const parsedData = JSON.parse(jsonPerson);
const parsedData = JSON.parse(jsonPeople);
// console.log(parsedData);


//FETCHING THE JSON FILE
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value/*name*/)))
    .catch(error => console.error(error));