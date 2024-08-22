// Synchronous
// execution --- task are are performed one after the other
// blocking --- if task take time to complete it will block the execution until its done

console.log("Task 1")

function syncTask () {
    for (let i = 0; i < 3; i++) {
        console.log(`Task 2 - Step ${i + 1}`);
    }
}

syncTask();

console.log("Task 3")





// Asynchronous 
// execution --- task is initiated and the program moves on to the next task without waiting for the other tasks
// non-blocking --- allows the program to continue executing other task while waiting for async task to complete
// when the async finishes a callback, promise or async functions is used to handle the result

console.log("Task 1")

setTimeout(() => {
    console.log("Task 2 - Async");
}, 10000)

console.log("Task 3")


