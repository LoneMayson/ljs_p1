// extending native classes
"use strict"
let log = console.log;

class PowerArray extends Array
{
    isEmpty()
    {
        return this.length === 0;
    }
}

var ci = new PowerArray(0, 1, 2);
log(ci); // PowerArray(3) [0, 1, 2]
// returns PowerArray and not Array
// it is because the method calls an object constructor and not function itself
var ni = ci.map(value => value**2);
log(ni); // PowerArray(3) [0, 1, 4]

// But theres a static getter [Symbol.species] which tells what constructor to use
class PowerArray2 extends Array
{
    static get [Symbol.species]() { return Array; }
}
var ci = new PowerArray2(0, 1, 2);
log(ci); // PowerArray2(3) [0, 1, 2]
var ni = ci.map(value => value**2);
log(ni); // (3) [0, 1, 4] // usual Array

// native classes do not inherit static methods from Object
// i.e. Array has not method keys from Object
log(Array.__proto__ === Function.prototype); // true
log(Array.__proto__.__proto__ === Object.prototype); // true