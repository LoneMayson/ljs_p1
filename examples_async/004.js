"use strict"
let log = console.log;

// async returns pending promise from resolved promise from Promise.resolve

function onFulfilled(val)
{
    log("inside onFulfilled, val:", val);
}

async function asyncfunc()
{
    log("inside async");
    var res = Promise.resolve(2);
    log("res: ", res); // fulfilled
    return res;
}

var promise = asyncfunc();
log(promise); //pending
promise.then(onFulfilled);
setTimeout(()=>log(promise), 1000); // fulfilled

log("end main");