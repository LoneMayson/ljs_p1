//arrays
"use strict"
let log = console.log;

var arr = new Array();
var x = [];
log(typeof arr, typeof x); // object object
log(arr, x); // (0) [] (0) []
var arr = ["London", "Paris", "Moscow", ]; // trailing comma

// queue: <-shift array <-push
// stack: array <-push pop->
// also unshift-> array

for(var elem of arr)
    log(elem); // London Paris Moscow
// in is used for properties
// here they will be indexes
// it is slow methos
for(var prop in arr)
    log(prop); // 0 1 2

var arr = [0, 1, 2, 3];
arr[9] = 9;
log(arr.length); // 10
arr.length = 2;
log(arr); // (2) [0, 1]

//kt: arr.lenght=0 "clears" arr

var arr = new Array(3);
log(arr[0]); // undefined
log(arr[3]); // undefined

//task
function arrsum(arr, b, e)
{
    let res = 0;
    for(let i = b; i <= e; i++)
    {
        res += arr[i];
    }
    return res;
}
function maxarr(arr)
{
    let sum = arr[0];
    let res = {b: 0, e: 0, s: sum};
    var cursum = sum;
    
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            cursum = arrsum(arr, i, j);
            if (cursum  >sum)
            {
                sum = cursum;
                res.b = i;
                res.e = j;
                res.sum = sum;
            }
        }
    }
    return res;
}
function printmaxarr(arr)
{
    var res = maxarr(arr);
    log(`b: ${res.b}, e: ${res.e}, sum: ${res.sum}`);
}
printmaxarr([-1, 2, 3, -9]); // b: 1, e: 2, sum: 5
printmaxarr([2, -1, 2, 3, -9]); // b: 0, e: 3, sum: 6
printmaxarr([-1, 2, 3, -9, 11]); // b: 4, e: 4, sum: 11