//class inheritance
"use strict"
let log = console.log;

// if derived class calls constructor it should call super first line
// it is because derived constructor has [[ConstructorKind]]:"derived"
// and has no defined 'this'

// when function is declared as an object/class property
// its inner property [[HomeObject]] is equal to this object/class

// in simple objects functions should be declared as method() and not method: function()
// so that to have [[HomeObject]]

// the only usage of it is in super call
// if a function does not call super it can be copied