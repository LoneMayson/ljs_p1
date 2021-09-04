//json
"use strict"
let log = console.log;

var o =
{
    name: "Alice",
    age: 30,
    city: undefined,
    friend: {name: "Peter", age: 32, city: "London"},
    [Symbol("id")]: 100,
    greet()
    {
        log("Hi")
    }
};

// stringify

var str = JSON.stringify(o);
log (str); // {"name":"Alice","age":30,"friend":{"name":"Peter","age":32,"city":"London"}}

var str = JSON.stringify(o, ["name", "age", "friend"]);
log(str); // {"name":"Alice","age":30,"friend":{"name":"Peter","age":32}}

function replacer(key, value)
{
    return (key === "age") ? undefined : value;
}
var str = JSON.stringify(o, replacer);
log(str); // {"name":"Alice","friend":{"name":"Peter","city":"London"}}

// space parameter for formatting
//log(JSON.stringify(o, null, 4));

// using toJSON method
o.friend.toJSON = function()
{
    return `${this.name} ${this.age}`;
}
var str = JSON.stringify(o);
log(str); // {"name":"Alice","age":30,"friend":"Peter 32"}

// parsing from str to json

var str = '{"name": "Alice", "birthdate": "2000-08-01"}';
var o = JSON.parse(str);
log(o); // {name: 'Alice', birthdate: '2000-08-01'}

function reviver(key, value)
{
    if (key == "birthdate")
            return new Date(value);
    return value;
}
var o = JSON.parse(str, reviver);
log(o); // {name: 'Alice', birthdate: Tue Aug 01 2000 ..}