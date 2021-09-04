//set, get
"use strict"
let log = console.log;

var o =
{
    get name() { return this._name; },
    set name(value) { this._name = value},
};
log(o.name); // undefined
o.name = "Alice";
log(o.name); // Alice

var desc =
{
    get() { return this._birthday; },
    set(value) { this._birthday = value; }
}
Object.defineProperty(o, "birthday", desc);
log(o); // {name: <accessor>, _name: 'Alice', birthday: <accessor>}