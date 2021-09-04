//class
"use strict"
let log = console.log;

class Person
{
    // it is a property
    name; // undefined
    age = 18;
    constructor()
    {
        log("Person created");
        this.city = "London"; // this is a property also
    }
    get birthday() { return this._birthday; }
    set birthday(value) { this._birthday = value; } // _birthday is a property also, it may be created
    // when first set
    greet(word)
    {
        log(word + ", I'm " + this.name); // 'this' is necessary
    }
    // computed property
    ['computed method'](word) { log(word + " computed"); }
    ['computed field'];
}
var p = new Person(); // Person created
log(p); // Person {name: undefined, age: 18, computed field: undefined, city: 'London'}
p.name = "Alice";
p.greet("Hi"); // Hi, I'm Alice
log(typeof p); // object
log(typeof Person); // function
log(Person); //class Person
log(Person.prototype); // {constructor: ƒ, birthday: <accessor>, greet: ƒ, computed method: ƒ}

// class expression + named function expression (may be omitted of course)
var User = class InnerName
{
    name = "Peter"
    greet()
    {
        log(`Hi, I'm ${this.name}`); // Hi, I'm Peter
        log(InnerName); // class InnerName
    }
}
new User().greet();