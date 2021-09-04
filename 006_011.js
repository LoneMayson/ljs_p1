//reviewing arrow functions
"use strict"
let log = console.log;

var o =
{
    name: "Alice",
    age: 30,
    greet()
    {
        log(this); //o
        function f1() { log(this); }
        f1(); //undefined
        f1.call(this); //o
        var f2 = () => { log(this); };
        f2(); //o
    },
    f3: () => { log(this); }, //window
};
o.greet();
o.f3();

//resume: function has 'this' if called through dot '.'
// arrow function takes 'this' from outer context
// arrow functions have no its own 'arguments' also

var obj=
{
    name: "Alice",
    sayhi(word) {log(word+", I'm "+this.name);},
}