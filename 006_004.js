//var let
"use strict"
let log = console.log;

// var has not code block lexical environment
// also if, while etc.
{
    let param1 = true;
    var param2 = true;
}
    
//log(param1); // param1 is not defined
log(param2); // true

// var hoisting

city = "London";
log(city); // London
var city = "Washingon";


