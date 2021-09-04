"use strict"
let log = console.log;

// async returns fulfilled promise from value

function onFulfilled(val)
{
    log("inside onFulfilled, val:", val);
}

async function asyncfunc()
{
    log("inside async");
    return 2;
}

var promise = asyncfunc();
log(promise); //fulfilled
promise.then(onFulfilled);

log("end main");