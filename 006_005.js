//global object
"use strict"
let log = console.log;

if(!window.Promise)
    log("your browser is old");
else
    log("Promise exists");

log(window === globalThis); // true