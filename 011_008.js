//promisify
"use strict"
let log = console.log;

function onFulfilled(val)
{
    log("inside onFulfilled, val:", val);
}

async function returnValue()
{
    return "Value from async";
}
returnValue().then(onFulfilled); // inside onFulfilled, val: Value from async

async function returnPromise()
{
    return "Promise from async";
}
returnPromise().then(onFulfilled); // inside onFulfilled, val: Promise from async

async function awaitExample()
{
    let promise = new Promise((resolve, reject) => resolve(2));
    log(promise);
    log("before await");
    let res = await promise;
    log("after await");
    log(res);
    return res;
}

let promise = awaitExample();
log(promise);
promise.then(onFulfilled);
log("end main");

// output
// Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 2}
// before await
// Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined}
// end main
// ... <- from upper code
// after await
// 2
// inside onFulfilled, val: 2

// kt: try-catch
// kt: class async methods
// kt: anonimous async functions