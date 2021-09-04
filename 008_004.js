//prototype methods
"use strict"
let log = console.log;

function Person(name)
{
    this.name = name;
}

var person = new Person("Alice");

var newobj = Object.create(Object.getPrototypeOf(person));
log(newobj); // Person
var clone = Object.create(Object.getPrototypeOf(person), Object.getOwnPropertyDescriptors(person));
log(clone); // Person {name: 'Alice'}

var eo = Object.create(null);
//alert(eo); // Uncaught TypeError: Cannot convert object to primitive value
//because of abscence of toString method
log(eo.__proto__); //undefined
eo.__proto__ = "some value";
log(eo.__proto__); //some value

// __proto__ is an accessor, not simple property