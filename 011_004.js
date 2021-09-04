//promise error handling
"use strict"
let log = console.log;

new Promise((resolve, reject) => 
    {
        throw new Error("Error in executor");
    }).catch(reason => log(reason)); // Error: Error in executor

new Promise((resolve, reject) => 
    {
        reject(new Error("Error in reject"));
    }).catch(reason => log(reason)); // Error: Error in reject

new Promise((resolve, reject) => 
    {
        resolve("ok");
    }).then((value) => { throw new Error("Error in then"); })
    .catch(reason => log(reason)); // Error: Error in then

new Promise((resolve, reject) => 
    {
        // setTimeout here is specially for order of ouput
        setTimeout(() => reject(new Error("Error in reject")));
    }).catch(reason => { log(reason); return "from catch"; }) // Error: Error in reject
    .then((value) => { log(value); }); // from catch

window.addEventListener('unhandledrejection', function(event) // doesnt work (?)
    {
        log("handler: ", event.promise);
        log("handler: ", event.reason);
    });

new Promise((resolve, reject) => 
    {
        // setTimeout here is specially for order of ouput
        setTimeout(() => reject("Error for Promise Rejection Event"));
        // doesnt work with Error!
        //setTimeout(() => reject(new Error("Error for Promise Rejection Event")));
        // doesnt work without 'then'! (tested with then and without then)
        // output
        // handler:  Promise {[[PromiseState]]: 'rejected', [[PromiseResult]]: 'Error for Promise Rejection Event'}
        // handler:  Error for Promise Rejection Event
        // Uncaught Error: Error for Promise Rejection Event
    }).then(value => log(value));

