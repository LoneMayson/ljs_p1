"use strict"
let log = console.log;

// await on function runs synchronously

function onFulfilled(val)
{
    log("inside onFulfilled, val:", val);
}

function func2()
{
    log("inside func2");
    return 2;
}
    
async function func1()
{
    log("inside func1, before await");
    var res = await func2();
    log("inside func2, after await, res: ", res);
    return res;
}
var promise = func1();
log(promise); // pending
promise.then(onFulfilled);
setTimeout(()=>log(promise), 1000); // fulfilled

log("end main");