// eval
"use strict"
let log = console.log;

// the result of evel is last expression/instruction
// eval executed in current LE
// in strict mode eval has its own LE (although being executed in current LE)

// measures of safety
// window.eval — execution in global LE
// using new Function() for using local vars