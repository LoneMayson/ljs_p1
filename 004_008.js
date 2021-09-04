//object to primitive
"use strict"
let log = console.log;

// in logical contexts objects return true
if ({})
    log(true); // true
else
    log(false);
log(!{}); // false
log(!null); // true
log(!undefined); // true

var o = {name: "Alice", age: 18,};
o[Symbol.toPrimitive] = function(hint)
    {
        log(hint);
    }
var z = {name: "peter", age: 32,};
alert(o); // strig, undefined
alert(z); // [object Object]
log(""+o); // default, undefined
log(""+z); // [object Object]
log(+o); // number, NaN
log(+z); // NaN

// order of casting
// 1. [Symbol.toPrimitive]
// 2. if hint is string then toString and valueOf
// 3. if hint is number or default then valueOf and toString