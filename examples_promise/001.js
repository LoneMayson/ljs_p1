"use strict"
let log = console.log;

// executor is sync, onFulfilled is async

function executor(resolve, reject)
{
    log("inside executor");
    resolve(2);
}

function onFulfilled(val)
{
    log("inside onFulfilled, val: ", val);
}

var promise = new Promise(executor); // the handler is called synchronously
log(promise); // fulfilled
var promise = promise.then(onFulfilled); // the handler is called asynchronously (scheduled in the current thread loop)
log(promise); // pending
setTimeout(()=>log(promise)); // fulfilled

log("end main");