// instanceof
"use strict"
let log = console.log;

class Person
{
    static [Symbol.hasInstance](obj) { return obj.hasOwnProperty("name"); }
}

var o = { name: "Alice", };
log(o instanceof Person); // true

var arr = new Array(1, 2, 3);
log(arr); // (3) [1, 2, 3]
log(typeof arr); // object
log(Array.prototype.toString.call(arr)); // 1,2,3
log(Object.prototype.toString.call(arr)); // [object Array]

log(o); // {name: 'Alice'}
log(Object.prototype.toString.call(o)); // [object Object]
o[Symbol.toStringTag] = "Person";
log(Object.prototype.toString.call(o)); // [object Person]

// resume
// typeof returns string with js type
// instanceof returns boolean
// toString returns string with extra info