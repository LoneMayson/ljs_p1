// try catch
"use strict"
let log = console.log;

try
{
    lalala;
}
catch(err) // err is optional: catch { ... }
{
    log(err.name); // ReferenceError
    log(err.message); // lalala is not defined
    log(err.stack); // ReferenceError: lalala is not defined
                            // at file:///E:/dev/ljs/010_001.js:7:5

}

try { throw new Error("Oops!"); }
catch(err) 
{
    log(err.name); // Error
    log(err.message); // Oops!
}

// exception rethrowing
var doSomething= function()
{
    try { lalala; }
    catch(err)
    {
        if (err.name = "ReferenceError")
            throw err;
    }
}
try { doSomething(); }
catch(err)
{
    log(err.name); // ReferenceError
}

// finally is executed even before return
var doSomething = function(param)
{
    try
    {
        if (param === 0)
            throw new Error("param is 0");
        else
            return 1;
    }
    catch(err)
    {
        return 0;
    }
    finally { log("finally"); }
}
log(doSomething(0));    // finally
                        // 0
log(doSomething(1));    // finally
                        // 1

// finally works even without catch
try 
{ 
    //lalala;
}
finally {log("finally works");}
// output:
// finally works
// Uncaught ReferenceError: lalala is not defined

// windows.onerror
// in Node.js it is process.on("uncaughtException")

window.onerror = function(message, url, line, col, error)
{
    log(message); // Script error
    log(url); //
    log(line); // 0
    log(col); // 0
    log(error); // null
}

nosuchfunc();
// Uncaught ReferenceError: nosuchfunc is not defined