//constructors, 'new' statement
"use strict"
let log = console.log;

function User() {this.name="Alice"}
var u = new User();
u.age = 30;
log(u);

// anonymous constructor
var u = new function() {this.name="Peter"};
u.age = 18;
log(u);

// new.target
function Person()
{   
    log(new.target);
    log(this);
}
var p1 = Person(); // undefined, undefined
var p2 = new Person(); // f Person(), Person
log(p1); // undefined
log(p2); // Person