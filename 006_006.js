//function object, NFE
"use strict"
let log = console.log;

function f() {}
log(typeof f); // function
log(f); // ƒ f() {}
log(f.name); // f
log(typeof Object); // function
log(Object); // ƒ Object()
log(Object.name); // Object
log([function(){}][0]); // ƒ (){}
log([function f(){}][0].name); // f
log([function(param1, param2){}][0].length); // 2

// named function expression
let fe = function fn(who)
{
    if(who)
        log(who);
    else
        fn("Guest");
}
let fv = fe;
fe = null;
fv(); // Guest