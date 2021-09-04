//promise api
"use strict"
let log = console.log;

let names = ['iliakan', 'LoneMayson'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses =>
    {
        for(let response of responses)
        {
            log(`${response.url}: ${response.status}`);
            // output
            // https://api.github.com/users/iliakan: 200
            // https://api.github.com/users/LoneMayson: 200
        }
        return responses;
    })
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(users => users.forEach(user => log(user.login)));
    // output
    // iliakan
    // LoneMayson

let urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/LoneMayson', 'https://no-such-url'];
Promise.allSettled(urls.map(url=>fetch(url)))
    .then(results => results.forEach((value, index) => log(value)));
    // output
    // {status: 'fulfilled', value: Response}
    // {status: 'fulfilled', value: Response}
    // {status: 'rejected', reason: TypeError: Failed to fetch}

Promise.allSettled_polyfil = function(promises)
{
    function onFulfilled(value)
    {
        return {status: 'fufilled', value: value,}
    }
    function onRejected(value)
    {
        return {status: 'rejected', reason: value,}
    }
    return Promise.all(promises.map(promise =>
        Promise.resolve(promise)
            .then(onFulfilled, onRejected)));
}

Promise.allSettled_polyfil(urls.map(url=>fetch(url)))
    .then(results => results.forEach((value, index) => log(value)));
    // output
    // {status: 'fulfilled', value: Response}
    // {status: 'fulfilled', value: Response}
    // {status: 'rejected', reason: TypeError: Failed to fetch}