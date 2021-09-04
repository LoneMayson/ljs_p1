//primitive wrapper types
"use strict"
let log = console.log;

// there are following primitive types: string, number, boolean, symbol, null, undefined и bigint.

log(typeof 3); // number
log(typeof Number(3)); // number
log(typeof new Number(3)); // object

var o = new Number(3);
log(o); // Number (3)

// Конструкторы String/Number/Boolean предназначены только для внутреннего пользования
// Предполагается, что нет смысла в их использовании

//two dots
log(5..toFixed(0));
//one dot
log(5.65.toFixed(1));
// brackets
log((5).toFixed(0));