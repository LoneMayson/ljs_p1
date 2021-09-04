//weakmap, weakset
"use strict"
let log = console.log;

// weakMap has only following methods: get, set, delete, has

log("weak map");
var wm = new WeakMap();
//wm.set("name", "Alice"); // Uncaught TypeError: Invalid value used as weak map key
var o = {name: "Alice", }
wm.set(o, "London");
wm.set(o, "Moscow");
log(wm); // WeakMap {{name: 'Alice'} => Moscow}
// here record is deleted not at showed as if it exists!
// but weak map is not iterable!
o = null;
log(wm); // WeakMap {{name: 'Alice'} => Moscow}

// Lets compare to usual map
// The same logic in ouput
log("usual map");
var um = new Map();
var o = {name: "Alice", }
um.set(o, "London");
um.set(o, "Moscow");
log(um); // Map(1) {{name: 'Alice'} => Moscow}
// here record should not be deleted
o = null;
log(um); // Map(1) {{name: 'Alice'} => Moscow}
for(let entry of um)
    log(entry);

// weak map may be used for cashing

// kt: weak set