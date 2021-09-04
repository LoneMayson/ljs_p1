//map'n'set
"use strict"
let log = console.log;

// Map methods: set, get, has, delete, clear
// Map fields: size

var m = new Map();
m.set("GB", "London");
m.set("Russia", "Moscow");
m.set("USA", "Washington");

for(let entry of m) // or m.entries()
    log(entry); // (2) ['GB', 'London'] etc.

// Map keys could be of any type
var m = new Map();
m.set(1, "London");
var o = { name: "Alice", };
m.set(o, "Moscow");
m.set(NaN, "NaN");
for(let entry of m)
    log(entry); // (2) [1, 'London'] etc.

// Map could be iterated by keys(), values() and entries()
// when for..of used entries() may be omitted
// also Map has forEach

m.forEach((value, key, map) => log(`key: ${key}, value: ${value}`));

// Map through array of "pairs"
var arr = [["name", "Alice"], ["age", 18]];
log(new Map(arr)); // Map(2) {name => Alice, age => 18}

// Map through object entries (it is array of pairs indeed)
var o = {name: "Peter", age: 32};
var e = Object.entries(o);
log(e); // (2) [Array(2), Array(2)]
log(new Map(e)); // Map(2) {name => Peter, age => 32}

// So Map could be created from entries of another Map
var m = new Map();
m.set("GB", "London");
m.set("Russia", "Moscow");
// or m.entries()
log(new Map(m)); // Map(2) {GB => London, Russia => Moscow}

// Object from Map
//or m.entries()
var o = Object.fromEntries(m);
log(o); // {GB: 'London', Russia: 'Moscow'}

// Set methods: add, has, delete, clear
// Set fields: size

// set has the same iteration as map: for..of, forEach

var s = new Set(["London", "Moscow", "Moscow", "New-York"]);
// callbackFn signature is the same as for map cuz of compatibility!
// here value = index
s.forEach((value, index, array) => log(value)); // London, Moscow, New-York