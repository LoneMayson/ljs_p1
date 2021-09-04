//object copy
"use strict"
let log = console.log;

var src     = { name: "Alice", params: { age: 30, }, }
var dest    = { name: "Johanna", } //name will be overwrited, params is the same object
Object.assign(dest, src);
src.params.age = 18; // also in dest
log(dest);