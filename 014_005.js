// bigint
"use strict"
let log = console.log;

var bnum1 = 100n;
var bnum2 = BigInt("100");
var bnum3 = BigInt(100);

var x = 5n / 2n
log(x); // 2n
log(typeof x); // bigint
log(2 == 2n); // true
log(2 === 2n); // false