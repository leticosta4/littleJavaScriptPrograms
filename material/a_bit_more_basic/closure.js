// closure = a function defined inside of another function
//           the inner function has access to the scope of the outer one

//           you can encapsulate variables and make them private
//           frameworks++


function outer(){
    let msg = "hello";

    function inner(){
        console.log(msg);
    }

    inner();
}

outer();

//
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`count increased to ${count}`);
    }

    function getCount(){ return count; }

    return {increment, getCount  };
}

const counter = createCounter();
counter.increment();

//if i try to do this:
console.log(counter.count); //it will show as undefined - cause it's hidden, it's private
//so i should use the getCount inner function:
console.log(counter.getCount());