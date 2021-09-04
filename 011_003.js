//promise chaining
"use strict"
let log = console.log;

function executor(resolve, reject)
{
    resolve("result1");
}

var promise = new Promise(executor).then(
    (v)=>{ log("then1", v); return "result2"; }).then(
    (v)=>{ log("then2", v); return "result3"; }).then(
    (v)=>{ log("then3", v); return new Promise((resolve, reject) => resolve("result4")); }).then(
    (v)=>{ log("then4", v); });

// output
// then1 result1
// then2 result2
// then3 result3
// then4 result4