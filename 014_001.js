// proxy reflect
"use strict"
let log = console.log;

var target = {name: "Alice", age: 18};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.city = "London";
log(proxy.name); // Alice
log(target.city); // London

//////////////////////////////////////////////
// return default and check type

var trap_get = function(target, prop)
{
    if (prop in target)
        return target[prop];
    else
        return 0;
}
var trap_set = function(target, prop, val)
{
    if (typeof val === "number")
    {
        target[prop] = val;
        return true;
    }
    else
        return false;
}

var target = [4, 5, 6];

var handler = { get: trap_get, set: trap_set, };

var proxy = new Proxy(target, handler);
log(target[10]); // undefined
log(proxy[10]); // 0
// indexes like props in array:
log(2 in target); // true
log(4 in target); // false
proxy[0] = 4;
//proxy[0] = "value"; // Uncaught TypeError: 'set' on proxy: trap returned falsish for property '0'

//////////////////////////////////////////////
// protecting properties with "_"
var target = {name: "Alice", age: 18, _pass: 12345};

var trap_get = function(target, prop)
{
    if (prop.startsWith("_"))
        throw new Error("Access denied");
    else
        return target[prop];
}

var trap_ownKeys = function(target)
{
    var res = Object.keys(target).filter(key => !key.startsWith("_"));
    res.push("additional"); // this won't appear
    return res;
}

var handler = { get: trap_get, ownKeys: trap_ownKeys, };

var proxy = new Proxy(target, handler);

// log(proxy._pass); // Uncaught Error: Access denied
log(Object.keys(proxy)); // (2) ['name', 'age']

//////////////////////////////////////////////
// how to return unexisting prop

var trap_getOwnPropertyDescriptor = function(target, prop)
{
    var desc = Object.getOwnPropertyDescriptor(target, prop);
    if (!desc)
        desc = {enumerable: true, configurable: true, };
    return desc;
}

var handler = { ownKeys: trap_ownKeys, getOwnPropertyDescriptor: trap_getOwnPropertyDescriptor, };

var proxy = new Proxy(target, handler);

log(Object.keys(proxy)); // (3) ['name', 'age', 'additional']

//////////////////////////////////////////////
// protecting properties with "_": functions

var target =
{
    name: "Alice",
    age: 18,
    _pass: 12345,
    checkPassword(pass)
    {
        return pass === this._pass;
    }
};

var trap_get = function(target, prop)
{
    if (prop.startsWith("_"))
        throw new Error("Access denied");
    else
    {
        let value = target[prop];
        // otherwise it will be access denied in proxy.checkPassword
        return (typeof value === "function") ? value.bind(target) : value;
    }
}

var trap_ownKeys = function(target)
{
    return Object.keys(target).filter(key => !key.startsWith("_"));
}

var handler = { get: trap_get, ownKeys: trap_ownKeys, };

var proxy = new Proxy(target, handler);

log(Object.keys(proxy)); // (3) ['name', 'age', 'checkPassword']
log(proxy.checkPassword(12345)); // true

//////////////////////////////////////////////
// proxyig functions

var target = function(a, b) { return a + b; }
var handler =
{
    apply(target, thisArg, args)
    {
        return target.apply(thisArg, args);
    }
}
var proxy = new Proxy(target, handler);

log(proxy(1, 2)); // 3

//////////////////////////////////////////////
// using Reflect and receiver

var user = {_name: "Guest", get name() { return this._name; }, };

var trap_get = function(target, prop, receiver)
{
    return target[prop];
}

var handler = { get: trap_get, }

var proxy = new Proxy(user, handler);

var admin = { __proto__: proxy, _name: "admin", };

log(admin.name); // Guest // !
// it is because "admin" has no prop "name"
// so it is found in its __proto__, which is a proxy of user
// here trap triggers and value returns as target[prop]: user[_name]

var trap_get = function(target, prop, receiver)
{
    return Reflect.get(target, prop, receiver);
}

var handler = { get: trap_get, }

var proxy = new Proxy(user, handler);

var admin = { __proto__: proxy, _name: "admin", };

log(admin.name); // admin

var user = {_name: "Guest", get name() { return this._name; }, };
var admin = { __proto__: proxy, _name: "admin", };
log(admin.name); // admin

// kt: binding funcs in maps, sets, binding private class fields..

// kt: revoking proxy