//object keys, values, entries
"use strict"
let log = console.log;

log(new Map().keys()); // MapIterator
log(new Map().values()); // MapIterator
log(new Map().entries()); // MapIterator
log(new Set().keys()); // SetIterator
log(new Set().values()); // SetIterator
log(new Set().entries()); // SetIterator
log([].keys()); // ArrayIterator
log([].values()); // ArrayIterator
log([].entries()); // ArrayIterator

log("map entries");
var m = new Map([["GB", "London"], ["USA", "Washington"]]);
for(var entry of m.entries())
    log(entry); // (2) ['GB', 'London'] etc.
log("set entries");
var s = new Set(["London", "Washington"]);
for(var entry of s.entries())
    log(entry); // (2) ['London', 'London'] etc.
log("arr entries");
var arr = ["London", "Washington"];
for(var entry of arr.entries())
    log(entry); // (2) [0, 'London'] etc.

log("simple objects")
var o = {name: "Alice", age: 18};
log(Object.keys(o)); // (2) ['name', 'age']
log(Object.values(o)); // (2) ['Alice', 18]
log(Object.entries(o)); // (2) [Array(2), Array(2)]

// for getting symbol props
// Object.getOwnPropertySymbols
// for getting all props including symbol
// Reflect.ownKeys

// Example of object transformation
var prices = {"Apple": 10, "Banana": 15, "Strawberry": 30, };
var doublePrices = Object.fromEntries(Object.entries(prices).map(([key, value]) => [key, value * 2]));
log(doublePrices); // {Apple: 20, Banana: 30, Strawberry: 60}