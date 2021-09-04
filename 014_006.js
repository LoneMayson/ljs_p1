// intl
"use strict"
let log = console.log;

let collator = new Intl.Collator();
log("ёжик" > "яблоко"); // true
log(collator.compare("ёжик", "яблоко")); // -1