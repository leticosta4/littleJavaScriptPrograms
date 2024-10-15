//PROMISES + ASYNC/AWAT to avoid callback hell (nested callbacks to handle asynchronous functions)

//PROMISES -> an obj that manages async operations 
//pending -> resolved or rejected (promises to return a value)
//new Promise((resolve, reject) => {asynchronous code});

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;

            if(dogWalked){ resolve("you walk the dog"); }
            else{ reject("you DIDN'T walk the dog"); } //to handle possible errors

        }, 2500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you clean the kitch");
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you take out the trash");
        }, 500);    
    })
}

//to avoid callback hell to call all these ffunctions in order USE METHOD CHAINING
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("you fiinished all the tasks"));
//     });
// });

walkDog().then(value => {
    console.log(value);
    return cleanKitchen();
}).then(value => {
    console.log(value);
    return takeOutTrash();
}).then(value => {
    console.log(value);
    console.log("you fiinished all the chores");
}).catch(error => console.error()); //handling the rejected errors


//ASYNC E AWAIT
//ASYNC = makes a function return a promise - but doesn't have resolve or reject parameters
//AWAIT = makes an async function wait for a promise - everythong after it is placed in an event queue
//allows you to write async code in a sync way
//await depends on async

async function doChores() {
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("you fiinished all the chores2");
    } catch(error){ console.error(error); }
}
