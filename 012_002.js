//async iterators and generators
"use strict"
let log = console.log;

function AsyncRangeWithGenerator(from, till)
{
    this.from = from;
    this.till = till;
}
AsyncRangeWithGenerator.prototype[Symbol.asyncIterator] = async function*()
{
    for(let value = this.from; value < this.till; value++)
        yield value;
}
async function test()
{
    for await (var item of new AsyncRangeWithGenerator(1, 5))
        log(item);
}
test(); // 1, 2, 3, 4
