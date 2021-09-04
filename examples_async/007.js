"use strict"
let log = console.log;

// calling async function without annd with await

function onFulfilled(val)
{
    log("inside onFulfilled, val:", val);
}

async function getResolvedPromise()
{
    log("inside getResolvedPromise");
    return 2;
}
    
async function caller()
{
    log("inside caller, before getResolvedPromise");
    var res = getResolvedPromise();
    log("inside caller, after getResolvedPromise, res: ", res);
    log("inside caller, before await getResolvedPromise");
    var res = await getResolvedPromise();
    log("inside caller, after await getResolvedPromise, res: ", res);    
    return res;
}
var promise = caller();
log(promise); // pending
promise.then(onFulfilled);
setTimeout(()=>log(promise), 1000); // fulfilled

log("end main");