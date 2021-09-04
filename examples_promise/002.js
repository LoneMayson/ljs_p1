"use strict"
let log = console.log;

// simple delayed promise chain

function executor(resolve, reject)
{
    setTimeout(() => {
        log("inside executor");
        resolve(2);
    }, 1000);
}

function onFulfilled(val)
{
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                log("inside onFulfilled, val: ", val);
                resolve(val*2);
            }, 1000);
        }
    );
}
var promise = new Promise(executor).then(onFulfilled).then(onFulfilled);

log("end main");