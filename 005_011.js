//datetime
"use strict"
let log = console.log;

var now = new Date();
log(now); // current time
// 01.01.1970 UTC+0
log(new Date(0));
var d = new Date("2021-01-01");
log(d); // Fri Jan 01 2021 05:00:00 ..
var d = new Date(2021,0,1,0,0,0,0);
log(d); // Fri Jan 01 2021 00:00:00 ..
var d = new Date();
log(+d === d.getTime()); // true

var start = new Date();
for(var i = 0; i < 1e6; i++);
log(new Date() - start); // ms

log(new Date().getTime() - Date.now()); // 0 or about 0

// YYYY-MM-DDTHH:mm:ss.sssZ
// YYYY-MM-DD
// YYYY-MM
// YYYY
// Z is +/- hh:mm
var d = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
log(d); // Fri Jan 27 2012 02:51:50 ..