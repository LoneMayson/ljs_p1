//array methods
"use strict"
let log = console.log;

var arr = [0, 1, 2, 3, 4];
log(arr); // (10) [0, 1, 2, 3, 4]
delete arr[1];
log(arr[1]); // undefined

log("splice");
// delete 1 elem from index 1 and replace deleted elems with new elem with value 1
// means restore array
arr.splice(1, 1, 1);
log(arr); // (10) [0, 1, 2, 3, 4]
var removed = arr.splice(1, 2);
log(removed); // (2) [1, 2]
log(arr); // (3) [0, 3, 4]
var removed = arr.splice(1, 0, 5, 5);
log(removed); // (0) []
log(arr); // (5) [0, 5, 5, 3, 4]
var removed = arr.splice(-1, 0, 5, 5);
log(removed); // (0) []
log(arr); // (7) [0, 5, 5, 3, 5, 5, 4]

log("slice");
var arr = [0, 1, 2, 3, 4];
// copies from start till end
log(arr.slice(1, 2)); // (1) [1]
log(arr.slice(-2)); // (2) [3, 4]
// make copy
log(arr.slice()); // (5) [0, 1, 2, 3, 4]

log("concat");
var arr = [0, 1, 2];
log(arr.concat([3, 4], [5, 6])); // (7) [0, 1, 2, 3, 4, 5, 6]

log("forEach");
var arr = ["London", "Paris", "Moscow"];
arr.forEach((item, index, array) => log(item));
// this is possible
//arr.forEach(log); // prints all args
//arr.forEach(alert); // shows items

// kt: indexOf, lastIndexOf, includes

log("find");
var arr = [0, 1, 2, 3, 4];
log(arr.find((item, index, array) => (item > 1))); // 2

// kt: findIndex

log("filter");
log(arr.filter((item, index, array) => (item > 1))); // (3) [2, 3, 4]

log("map");
log(arr.map((item, index, array) => (item**2))); // (5) [0, 1, 4, 9, 16]

log("sort");
var arr = [1, 4, 0, 2, 3];
// compareFn should return negative value if a < b
arr.sort((a, b) => a - b);
log(arr); (5) [0, 1, 2, 3, 4];

// kt: reverse

log("split and join");
var str = "London";
log(str.split("o")); // (3) ['L', 'nd', 'n']
log(str.split("")); // (6) ['L', 'o', 'n', 'd', 'o', 'n']
log(str.split("").join("_")); // L_o_n_d_o_n

log("reduce");
var arr = [0, 1, 2, 3, 4];
log(arr.reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 0)); // 10
// equivalent to
log(arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)); // 10

// kt: reduceRight

log("isArray")
log(typeof {}); // object
log(typeof []); // object
log([] instanceof Array); // true
log(Array.isArray([])); // true

log("thisArg");
var o =
    {
        begin: 4,
        end: 6,
        inside(value)
            {
                return value >= this.begin && value <= this.end;
            },
    };
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var filtered = arr.filter((value, index, array) => o.inside(value));
log(filtered); // (6) [4, 5, 6]
// equivalent to
var filtered = arr.filter(o.inside, o);
log(filtered); // (6) [4, 5, 6]