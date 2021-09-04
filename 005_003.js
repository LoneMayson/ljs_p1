//strings
"use strict"
let log = console.log;

// there's no symbol type as char in js — only strings
// inner format is UTF-16

//backtick
var x=5;
log(`x is ${x}`); // x is 5
log(`first
second`); // with \n

//unicode
log("\u00A9"); // copyright sign

var s="London is the capital of GB";
log(s.length); // 27
log(s[0]); // L
log(s[100]); //undefined
log(s.charAt(100)); //''

let pos = -1;
while ( (pos = s.indexOf("o", pos+1) ) != -1)
{
    log(pos);
} //1,4,22
log(s.lastIndexOf("o", 10)); //4
log(s.includes("o", 23)); // false

// substring methods
// slice: from start till end
log(s.slice(0, 1)); // L
log(s.slice(-2, -1)); // G
// substring: from start till end
log(s.substring(0, 1)); // L
// substr: from start <length> symbols
log(s.substr(1, 3)); // ond
log(s.substr(-2, 2)); // GB

// encoding
log(s.codePointAt(0)); // 76
log(String.fromCodePoint(76)); // L
// old methods
log(s.charCodeAt(0)); // 76
log(String.fromCharCode(76)); // L