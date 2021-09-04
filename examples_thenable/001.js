"use strict"
let log = console.log;

// simple thenable in promise chain

function executor(resolve, reject)
{
  log("inside executor");
  resolve(2);
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
        log("inside Thenable.then, resolving");
        resolve(this.val*2);
    }
}
  
function onFulfilledPromise(val)
{
    log("inside onFulfilledPromise, val: ", val);
    return new Promise(
      (resolve, reject) => {
          log("inside inner executor");
          resolve(val*2);
      }
    )
}

function onFulfilledThenable(val)
{
    log("inside onFulfilledThenable, val: ", val);
    return new Thenable(val);
}

function onFulfilledVal(val)
{
    log("inside onFulfilledVal, val: ", val);
    return val*2;
}

var promise = new Promise(executor).then(onFulfilledPromise).then(onFulfilledThenable).then(onFulfilledVal);

log("end main");