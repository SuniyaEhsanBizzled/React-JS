let callback = () => console.log("Regular timeout callback has run");

let urgentCallback = () => console.log("*** Oh noes! An urgent callback has run!");

console.log("Main program started");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
console.log("Main program exiting");

// Note that the output logged from the main program body appears first, followed by the output from the microtask, followed by the timeout's callback. That's because when the task that's handling the execution of the main program exits, the microtask queue gets processed before the task queue on which the timeout callback is located. 