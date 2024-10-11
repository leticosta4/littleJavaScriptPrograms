// SYNCHRONOUS
// line by line consecutively in a sequential manner
// code that waits for an opeation to complete


// ASYNCHRONOUS
// allows multiple operation to be performed concurrently without waiting
// doesnt block the execution flow
// like setTimeout

//this code below makes sure that task 1 will be executed before the 3 others 

function f1(callback){
    setTimeout(() => {console.log("task 1"); callback()}, 3000);
}

function f2(){
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
}

f1(f2); //passing f2 as a callback to f1


//ERROR OBJECT
//try - encloses code taht might potentially cause an error
//catch - catches and handles any thrown error
//finally - (optional) always executes, used mostry for clean up
try{
    console.log("hello");
    const positiveNum = Number(window.prompt("enter a positive number: "));

    if(positiveNum <= 0){ throw new Error("it has to be positive!")}
    if(isNaN(positiveNum)){ throw new Error("It has to be a numeric value!")};

} catch(error){
    console.log(error);
} finally{
    //closing files and connections and releasing resources
    console.log("heyy");
}
