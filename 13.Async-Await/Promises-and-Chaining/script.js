console.log("Promise Chain")

// create a promise

const promise = new Promise((resolve, reject) => {
    resolve("Resolving a fake promise")
});

// handle it using .then()

promise.then(function(value) {
    console.log(value);
});


const promise2 = new Promise((resolve, reject) => {
    reject(new Error("Resolving a fake promise"))
});

// handle it using .then()

promise.catch(function(error) {
    console.log(error);
});