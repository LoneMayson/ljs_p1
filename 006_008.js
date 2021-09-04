//settimeout, setinterval
"use strict"
let log = console.log;

function test(arg)
{
    let value = "London";
    function logvalue()
    {
        log(value);
    }
    setTimeout(() => log(value), 1000); // London // inner LE
    setTimeout(logvalue, 1000); // London // inner LE
    setTimeout(log, 1000, arg); // Washington // passing an argument
}
test("Washington"); 

// recursive timeout is sometimes better than interval cuz of managing delay
var counter = 0;
var delay   = 100;
var timer_id = setTimeout(
    function x() 
    {
        if (counter++==3)
        {
            clearTimeout(timer_id);
        }
        else
        {
            log(timer_id);
            timer_id = setTimeout(x, delay + 100);
        }
    }, delay);
