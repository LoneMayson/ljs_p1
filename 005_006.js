//iterable
"use strict"
let log = console.log;

// iterable object is that which could be iterated through for..of cicle

function Range(from, till)
{
    this.from = from;
    this.till = till;
    this.current = from;
}
Range.prototype.next = function()
{
    if (this.current < this.till)
        return {done: false, value: this.current++};
    else
        return {done: true};
}
Range.prototype[Symbol.iterator] = function()
{
    return this;
}

for(var item of new Range(1, 5))
    log(item); // 1, 2, 3, 4

// pseudoarray
var arrayLike = {0: "London", 1: "Paris", name: "Alice", length: 2,};
log(arrayLike[1]); // Paris
log(arrayLike["1"]); // Paris
log(arrayLike[2]); // undefined
log(Array.from(arrayLike)); // (2) ['London', 'Paris']

// iterables
var arrayIterator = Array(3).keys();
log(arrayIterator); // Array Iterator
var arr = Array.from(arrayIterator);
log(arr); // (3) [0, 1, 2]
arr=Array.from(Array(3), (value, key) => key + 1);
log(arr); // (3) [1, 2, 3]

log(Array.from(new Range(0, 5))); // (3) [0, 1, 2, 3, 4]