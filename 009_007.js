// mixins
"use strict"
let log = console.log;

let sayHiMixin =
{
    sayHi()
    {
        log(`Hi, I'm ${this.name}`);
    }
}

class Person
{
    constructor(name)
    {
        this.name = name;
    }
}

Object.assign(Person.prototype, sayHiMixin);

var ci = new Person("Alice");
ci.sayHi(); // Hi, I'm Alice

// mixins can inherit from other mixins

// Example of EventMixin just for code

let EventMixin =
{
    on(eventName, handler)
    {
        if (!this._eventHandlers)
            this._eventHandlers = {};
        if (!this._eventHandlers[eventName])
            this._eventHandlers[eventName] = [];
        this._eventHandlers[eventName].push(handler);
    },
    off(eventName, handler)
    {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if (!handlers)
            return;
        for (let i = 0; i < handlers.length; i++)
        {
            if (handlers[i] === handler)
                handlers.splice(i--, 1);
        }
    },
    trigger(eventName, ...rest)
    {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if (!handlers)
            return;
        handlers.forEach(handler => handler.apply(this, rest));
    }
};

var a = "London", b = "Washington";
var z = a && b;
log(z); // Washington

Object.assign(Person.prototype, EventMixin);

// 'this' doesnt work here
//ci.on("message", message => log(`I'm ${this.name} and I got message: ${message}`));
// but work here
ci.on("message", function(message) { log(`I'm ${this.name} and I got message: ${message}`); });
ci.trigger("message", "You are chosen"); // I'm Alice and I got message: You are chosen