"use strict"
let log = console.log;

// comparison of Promise.resolve(promise)
// and async function return promise

var p = new Promise((resolve, reject)=>{resolve(2)});

function basicReturn(promise)
{
    return Promise.resolve(promise);
}

async function asyncReturn(promise)
{
    return promise;
}

log(p === basicReturn(p)); // true
log(p === asyncReturn(p)); // false

log("end main");