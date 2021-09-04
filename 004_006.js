//optional chaining
"use strict"
let log = console.log;

// value before ?. could be undefined or null
var o = { name: "Alice", };
// equal:
log(o.adress && o.adress.country);
log(o.adress?.country);

o = null;
//equal but first null, second undefined
log(o && o.adress); // null
log(o?.adress); // undefined

//function doesnt exist
o = {};
log(o.f?.())
o = null;
log(o?.f?.())

o = null;
log(o?.["name"]);
delete o?.name;

//resume
//o?.prop
//1. if o is null or undefined then undefined
//2. if prop exists then prop else undefined
//3. for functions o.prop?.() if o is not null/undefined else o?.prop?.()