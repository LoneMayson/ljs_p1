// rest parameters and spread operator
"use strict"
let log = console.log;

// arguments
function f()
{
    log(Array.isArray(arguments)); // false
    log(arguments); // Arguments(4) [1, 2, Array(2), {…}, callee: <accessor>, Symbol(Symbol.iterator): ƒ]
}
f(1,2,["Alice", "Peter"], {name: "Alice"});

// rest parameters
function test(param, ...rest)
{
    log(arguments);
    log(rest);
}
test("path", 5, {name: "Alice"}, new Set([1, 2]));
//output:
// Arguments(4) ['path', 5, {…}, Set(2), callee: <accessor>, Symbol(Symbol.iterator): ƒ]
// (3) [5, {…}, Set(2)]

// ...rest in function declaration makes array from list
// ...rest in function call makes list from array

test("path", "size", [0, 1, 2]);
// output:
// Arguments(3) ['path', 'size', Array(3), callee: <accessor>, Symbol(Symbol.iterator): ƒ]
// (2) ['size', Array(3)]

test("path", "size", ...[0, 1, 2]);
// output
// Arguments(5) ['path', 'size', 0, 1, 2, callee: <accessor>, Symbol(Symbol.iterator): ƒ]
// (4) ['size', 0, 1, 2]

//arrays concatenation
var arr = [0, 1, ...[2, 3, 4], 5, ...[6, 7, 8]];
log(arr); // (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

//string to array
log([..."London"]); // (6) ['L', 'o', 'n', 'd', 'o', 'n']
log(Array.from("London")); // (6) ['L', 'o', 'n', 'd', 'o', 'n']

// Array.from works with pseudoarrays and iterables
// spread operator works only with iterables
