//new Function syntax
"use strict"
let log = console.log;

var f = new Function('a', 'b', 'return a + b');
log(f(1, 2)); // 3

var f = new Function('a, b', 'return a + b');
log(f(1, 2)); // 3

var f = new Function('return 3');
log(f()); // 3

// new functions has global LE

var getFunc = function()
{
    let value = "London";
    return function() { log(value); };
}
getFunc()(); // London

var getFunc = function()
{
    let value = "London";
    return new Function("log(value);");
}
// getFunc()(); // Uncaught ReferenceError: value is not defined
// because of global LE
// this is explainable: such functions should not have access to local LE