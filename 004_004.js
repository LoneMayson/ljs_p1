//object methods and 'this'
"use strict"
let log = console.log;

// in js 'this' is not fixed
function greet()
{
    console.log("Hi, my name is", this.name);
}
var o = {name: "Alice", greet: greet,}
o.greet();
var f = o.greet;
//f(); // strict: Uncaught TypeError: Cannot read property 'name' of undefined

// arrow functions have no own this

// two ways of defining method properties
var o = {
    name: "Alice",
    hello: function() {
        log(this.name);
    },
    greet() {
        log(this.name);
    },
}
o.hello();
o.greet();