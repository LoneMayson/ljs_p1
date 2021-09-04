"use strict"
let log = console.log;

// async returns pending promise from resolved promise from value

function onFulfilled(val)
{
    log("inside onFulfilled, val:", val);
}

async function func1()
{
    log("inside func1");
    var res = func2();
    log("res: ", res); // fulfilled
    return res;
}

async function func2()
{
    log("inside func2");
    return 2;
}

var promise = func1();
log(promise); //pending
promise.then(onFulfilled);
setTimeout(()=>log(promise), 1000); // fulfilled

log("end main");