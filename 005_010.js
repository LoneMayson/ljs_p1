//destructuring assignment
"use strict"
let log = console.log;

// to vars
var [one, , three, ...others] = [0, 1, 2, 3, 4, 5];
log(one, three, others); // 0 2 (3) [3, 4, 5]

var [one, two, three = "default"] = [0];
log(one, two, three); // 0 undefined default

var [one, two, three] = "abc";
log(one, two, three); // a b c

var [one, two, three] = new Set([1, 2, 3]);
log(one, two, three); // 1 2 3

// to object properties
var o = {};
[o.name, o.age] = ["Alice", 30];

// from entries
for(let [key, value] of Object.entries(o))
{
    log(key, value);
}

// from objects
var options = {title: "Hello World", width: 300, height: 100, };
// another order dont matter
var {width, height, title} = options;
log(title, width, height); // Hello World 300 100
// dont work if another names
var {one, two, three} = options;
log(one, two, three); // undefined undefined undefined
// aliases
title = "new value";
var {title: aliasTitle = "defaultTitle", width, height} = options;
log(title, aliasTitle, width, height); // new value Hello World 300 100

// rest values gather in object
var {title, ...rest} = options;
log(title, rest); // Hello World {width: 300, height: 100}

// brackets if no var/let statement for existing variables
({title, width, height} = {title: "New Title", width: 50, height: 30, });
log(title, width, height); // New Title 50 30

//inner objects
var car =
{
    name:
    {
        brand: "Ford",
        model: "Explorer",
    },
    color: "blue",
    options: ["radio", "gps", ],
    stations: ["Washington", "Boston", ],
    type: "gas",
}
var {name: {brand, }, options: [FirstOpt], stations} = car;
log(brand, FirstOpt, stations); // Ford radio (2) ['Washington', 'Boston']

// function parameters
// note that if theres wrapped object it should be in default object value: size
function test({title = "DefaultTitle", size: {width = 100, height = 50}, color = "yellow"} = {size: {}})
{
    log(title, width, height, color);
}
test(); // DefaultTitle 100 50 yellow
test({title: "NewTitle", size: {width: 10, height: 5}, color: "green"}); // NewTitle 10 5 green