//promise basics
"use strict"
let log = console.log;

function loadScript_old(src, callback)
{
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error("Error loading script"));
    document.head.append(script);
}

function loadScript(src)
{
    return new Promise((resolve, reject) =>
        {
            let script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error("Error loading script"));
            document.head.append(script);
        })
}

function callback(res)
{
    log(res);
}

let promise = loadScript("./scripts/HelloWorld.js").then(callback);

// output
// Hello world
// script