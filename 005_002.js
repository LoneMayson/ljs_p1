//numbers
"use strict"
let log = console.log;

log(1.1e3); // 1100
log(1.1e-3); // 0.0011
log(0xa); // 10
log(0o12); // 10
log(0b1010); // 10
log(10..toString(16)); // a

log(Math.trunc(1.6)); // 1
log(Math.floor(1.6)); // 1
log(Math.ceil(1.4)); // 2
log(Math.round(1.6)); // 2
log(Math.round(1.4)); // 1

log(0.1 + 0.2); //surprise
log(0.1.toFixed(20)); //surprise

log((1.67).toFixed(1)); // 1.7
log(typeof((1.67).toFixed(1))); // string
log(typeof(+(1.67).toFixed(1))); // number

log(Infinity / Infinity); //NaN
log(Infinity/-1); // -Infinity
log(-1/Infinity); // -0

log(NaN === NaN); //false
log(Object.is(NaN, NaN)); //true
log(0 === -0); // true
log(Object.is(0, -0)); //false
log(isNaN(NaN)); //true
log(isNaN("str")); //true
log(Number()); //0
log(Number('')); //0
log(isFinite('')); //true
