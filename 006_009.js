//decorators, call/apply
"use strict"
let log = console.log;

//decorator
function f(x) { log(x); }
function decorate(func)
{
    return function(x) { f(x) };
}
var decorated_f = decorate(f);
decorated_f("Hello"); // Hello

//call
function say_hi(phrase = "Hello")
{
    log(`${phrase}, ${this.name}.`);
}
say_hi.call({name:"Alice"}, "Hi"); // Hi, Alice

// caller has its 'this'
var o =
{
    name: "Alice",
    say_hi: say_hi,
}
o.say_hi(); // Hello, Alice // 'o' goes like 'this'

//apply
var arr = ["Congrats", "Cheers"];
say_hi.call(o, ...arr); // Congrats, Alice // spread syntax
say_hi.apply(o, arr); // Congrats, Alice // apply takes array or pseudoarray

// decorator with 'this
var o =
{
    name: "Alice",
    say_hi(phrase1, phrase2)
        {
            log(`${phrase1}, I,m ${this.name}. ${phrase2}.`);
        },
}
o.say_hi("Good afternoon", "Welcome"); // Good afternoon, I,m Alice. Welcome.

function decorate_this(func)
{
    return function()
    {
        //func(...arguments); // Uncaught TypeError: Cannot read property 'name' of undefined
        // because there is no caller on the left side
        func.call(this, ...arguments); // Sup, I,m Alice. Let's party.
        func.apply(this, arguments); // Sup, I,m Alice. Let's party.
        // caller has its 'this' which it pass to call/apply
        // and caller has no function 'func' so it pass to call/apply

        // call takes iterable
        // apply takes pseudoarray        
    }
}
o.say_hi = decorate_this(o.say_hi);
o.say_hi("Sup", "Let's party");

// decorate without 'this'
// just for understanding
var b = {name: "Peter", };
function methodWithThis()
{
    log(this.name);
}
function decorateWithoutThis(func)
{
    return function()
    {
        func();
    }
}
b.myMethodWithThis = methodWithThis;
b.myMethodWithThis(); // Peter
b.myMethodWithThisdecorateWithoutThis = decorateWithoutThis(methodWithThis);
//b.myMethodWithThisdecorateWithoutThis(); // Uncaught TypeError: Cannot read property 'name' of undefined

b.callMethodWithThis = function()
{
    methodWithThis();
}
//b.callMethodWithThis(); // // Uncaught TypeError: Cannot read property 'name' of undefined

b.callMethodWithThis = function()
{
    this.methodWithThis();
}
// b.callMethodWithThis(); // Uncaught TypeError: this.methodWithThis is not a function

// borrowing method
log([1,2,3].join("_")); // 1_2_3
var x = [].join.call([1,2,3], "_"); // 1_2_3
log(x);