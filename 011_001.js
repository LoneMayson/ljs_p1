//callbacks
"use strict"
let log = console.log;

function loadScript(src, callback)
{
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error("Error loading script"));
    document.head.append(script);
}

// error-first callback
function callback(err, res)
{
    log(err);
    log(res);
}

loadScript("./scripts/HelloWorld.js", callback);
// output
// Hello world
// null
// script