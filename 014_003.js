// currying partials
"use strict"
let log = console.log;

var target = function(a, b) { return a + b; };
var curry = function(f)
{
    return function(a)
    {
        return function(b)
        {
            return f(a, b);
        }
    }
}
var carried = curry(target);
log(carried(1)(2)); // 3

var curryWithArrow = f => a => b => f(a, b);
var carried = curryWithArrow(target);
log(carried(1)(2)); // 3