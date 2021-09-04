//prototype inheritance
"use strict"
let log = console.log;

var person =
{
    name: "Alice",
    last_name: "Woods",
    age: 30,
    get fullname() {return this.name+this.last_name},
    set fullname(value) {[this.name, this.last_name] = value.split(" ")},
};
var user=
{
    __proto__: person,
    password: "pwd",
};
log(user); // {password: 'pwd'}
log(user.name); // Alice
log(Object.keys(user)); // (1) ['password']
log("user prop iteration+")
for(let prop in user)
    log(prop); //user, then person properties
log("user props iteration-");
user.age = 18;
log(user.age); // 18
log(user.__proto__.age); // 30
user.fullname = "Peter Green" // setter, not property, 'this' is user
log(user.name); // Peter
log(user.__proto__.name); // Alice
log(Object.getOwnPropertyNames(user)); // (4) ['password', 'age', 'name', 'last_name']
log(user.hasOwnProperty("fullname")); // false

// resume:
// 'in' iteration shows all enumerable props: own and __proto__
// Object.keys shows own keys
