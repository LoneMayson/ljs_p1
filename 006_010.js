//bind
"use strict"
let log = console.log;

var o =
{
    name: "Alice",
    age: 30,
    greet(phrase)
    {
        log(`${phrase}, i'm ${this.name}`);
    },
}
o.greet("Hi"); // Hi, i'm Alice
setTimeout(o.greet, 100, "Hi"); // Hi, i'm // 'this' here is windows! this.name = ''
setTimeout(function() { o.greet("Hi"); }, 100); // Hi, i'm Alice

// bind
var greetBinded = o.greet.bind(o);
setTimeout(greetBinded, 100, "Hi from greetBinded"); // Hi from greetBinded, i'm Alice

// bind with arguments
var greetBinded = o.greet.bind(o, "Hi from greetBinded");
setTimeout(greetBinded, 100); // Hi from greetBinded, i'm Alice
;

