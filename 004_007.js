//symbol
"use strict"
let log = console.log;

var s = Symbol();
log(s); // Symbol()
//alert(s); // Uncaught TypeError: Cannot convert a Symbol value to a string

//symbols are always different
var s1 = Symbol("id");
var s2 = Symbol("id");
log(s1); // Symbol(id)
log(s2); // Symbol(id)
log(s1 === s2); // false

//global symbols
var gs1 = Symbol.for("id");
var gs2 = Symbol.for("id");
log(Symbol.keyFor(gs1)); // id
log(Symbol.keyFor(gs2)); // id
log(gs1 === gs2); // true

s = Symbol("s");
log(s); // Symbol(s)
log(s.description); // s

//hidden properties
var sp_city = Symbol("city");
var o = { name: "Alice", age: 30, [sp_city]: "London",};
//sp_city is hidden
for(let prop in o)
{
    log(prop + ": ", o[prop]);
}
// two different props with the same description
var s_id1 = Symbol('id');
var s_id2 = Symbol('id');
o[s_id1] = "id1";
o[s_id2] = "id2";

// Object.assign copies symbol properties!

//symbol props array
log(Object.getOwnPropertySymbols(o));
//all props array
log(Reflect.ownKeys(o));

//system symbols
log(Symbol.iterator);
log(Symbol.iterator.description);