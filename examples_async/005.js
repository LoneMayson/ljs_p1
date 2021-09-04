"use strict"
let log = console.log;

// async returns pending promise after await
// then returns fulfilled promise
// the matter is that the async function is considered as a promise itself

function onFulfilled(val)
{
    log("inside onFulfilled, val:", val);
}

async function asyncfunc()
{
    log("inside async, begin await");
    var res = await 2;
    log("inside async, end await");
    log("inside async, res: ", res);
    return res;
}

var promise = asyncfunc();
log(promise); // pending
promise.then(onFulfilled);
setTimeout(()=>log(promise), 1000); // fulfilled

log("end main");