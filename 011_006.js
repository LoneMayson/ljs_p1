//promisify
"use strict"
let log = console.log;

function onFulfilled(val)
{
    log("inside onFulfilled, val:", val);
}

// Это оригинальная функция из 011_001.js
// Она названа loadScript_old в 011_002.js
function loadScript(src, callback)
{
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Error loading script ${src}`), script);
    document.head.append(script); // Hello world
}

// Её в 011_002.js переделали в loadScript
// Здесь просто названа loadScript_from011_002
function loadScript_from011_002(src)
{
    return new Promise((resolve, reject) =>
        {
            let script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error("Error loading script"));
            document.head.append(script);
        });
}

// А эта функция промисифицирует оригинальный loadScript
// Т.е. здесь мы не модифицируем ориг. функцию в промисовозвращающую,
// а делаем обёртку
function loadScriptPromise(src)
{
    return new Promise((resolve, reject) =>
        {
        loadScript(src, (err, script) =>
        {
            if (err)
                reject(err);
            else
                resolve(script);
        });
    });
}

// Это дополнительный пример
// Есть функция orig
function orig(param, callback)
{
    let res = param *= 2;
    if(res > 5)
        callback(new Error("inside orig Error"));
    else
        callback(null, res);
}

function promisify(f)
{
    return function(...args)
    {
        return new Promise((resolve, reject) =>
        {
            function callback(err, res)
            {
                if (err)
                    reject(err);
                else
                    resolve(res);
            }
            args.push(callback);
            f.call(this, ...args);
        });
    };
}
var promise = loadScriptPromise("./scripts/HelloWorld.js");
log(promise); // Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined}
promise.then(onFulfilled); // inside onFulfilled, val: script

var origPromise = promisify(orig);
var promise = origPromise(2);
log(promise); // Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 4}
promise.then(onFulfilled); // inside onFulfilled, val: 4

// output
