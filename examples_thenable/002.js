"use strict"
let log = console.log;

// async returns Thenable as Promise with Thenable.then as Promise executor

function onFulfilled(val)
{
    log("inside onFulfilled, val:", val);
}

class Thenable
{
    constructor(val)
    {
        log("inside Thenable.constructor");
        this.val = val;
    }
    then(resolve, reject)
    {
        log("inside Thenable.then");
        resolve(this.val*2);
    }
}
    
async function caller()
{    
    log("inside caller");
    return new Thenable(2);
}
var promise = caller();
log(promise); // pending
promise.then(onFulfilled);
setTimeout(()=>log(promise), 1000); // fulfilled

log("end main");