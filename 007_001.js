//property descriptors
"use strict"
let log = console.log;

var o =
{
    name: "Alice",
    sayhi(word) { log(word + ", I'm " + this.name); },
};
var descriptor = Object.getOwnPropertyDescriptor(o, "sayhi");
log(descriptor); // {value: ƒ, writable: true, enumerable: true, configurable: true}
Object.defineProperty(o, "age", {value: 30});
log(o.age); // 30