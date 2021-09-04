"use strict"
let log = console.log;

// await Thenable gives Thenable.then like Promise executor

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
    var res = await new Thenable(2);
    log("inside caller, res: ", res);
    return res;
}
var promise = caller();
log(promise); // pending
promise.then(onFulfilled);
setTimeout(()=>log(promise), 1000); // fulfilled

log("end main");