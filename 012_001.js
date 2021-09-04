//generators
"use strict"
let log = console.log;

function* sequence()
{
    yield 1;
    yield 2;
    return 4;
}

var g = sequence();

log(g); // sequence {[[GeneratorState]]: 'suspended'}
log(g.next()); // {value: 1, done: false}
log(g.next()); // {value: 2, done: false}
log(g.next()); // {value: 4, done: true}
log(g.next()); // {value: undefined, done: true}

var g = sequence();
for(let item of g)
    log(item);
// output
// 1
// 2
log(g.next()); // {value: undefined, done: true}

// generators can be used as iterables with spread syntax
var arr = [...sequence()];
log(arr); // (2) [1, 2]

// this is an iterable from 005_006.js
//#region Range
function Range(from, till)
{
    this.from = from;
    this.till = till;
    this.current = from;
}
Range.prototype.next = function()
{
    if (this.current < this.till)
        return {done: false, value: this.current++};
    else
        return {done: true};
}
Range.prototype[Symbol.iterator] = function()
{
    return this;
}

for(var item of new Range(1, 5))
    log(item); // 1, 2, 3, 4
//#endregion Rabge

// this iterable can be rewritten through use of a generator
function RangeWithGenerator(from, till)
{
    this.from = from;
    this.till = till;
}
RangeWithGenerator.prototype[Symbol.iterator] = function*()
{
    for(let value = this.from; value < this.till; value++)
        yield value;
}

for(var item of new RangeWithGenerator(1, 5))
    log(item); // 1, 2, 3, 4

// generators composition

function* fsequence(from, till)
{
    for(let i = from; i < till; i++)
        yield i;
}
function* nfsequence(till)
{
    yield* fsequence(1, till);
}
for(let value of nfsequence(3))
    log(value); // 1, 2

// sending value to generator
var simplegen = function*()
{
    let result = yield("London");
    log(result);
}
var g = simplegen();
log(g.next().value); // London
g.next("Washington"); // Washington

// sending an exception to generator

var simplegen = function*()
{
    try
    {
        let result = yield("London");
        log(result); // this code won't execute
    }
    catch(err)
    {
        log(err); // Error: Error to generator
    }
}
var g = simplegen();
log(g.next().value); // London
g.throw(new Error("Error to generator"));