//closure
"use strict"
let log = console.log;

function make_counter()
{
    let count = 0;
    return function()
    {
        return count++;
    }
}
var counter = make_counter();
log(counter()); // 0
log(counter()); // 1
log(counter()); // 2

// lexical environments

// global
let param = "Washington";
log(param);
// code block
{
    let param = "Paris";
    log(param);
}
// IIFE: immediately-invoked function expressions
(function(){
    let param = "London";
    log(param);
})();
// other forms of IIFE:
// (function(){}())
// !function(){}()
// +function(){}()
// language constructions
do {let param = 0; log(param++)} while (param < 1);