// custom errors
"use strict"
let log = console.log;

class ReadError extends Error
{
    constructor(message, cause)
    {
        super(message);
        this.cause = cause;
        this.name = "ReadError";
    }
}

class ValidationError extends Error {}
class PropertyRequiredError extends Error {}

function validateUser(user)
{
    if (!user.name)
        throw new PropertyRequiredError("name");
    if (!user.age)
        throw new PropertyRequiredError("age");
}

function readUser(json)
{
    let user;
    try { user = JSON.parse(json); }
    catch(err)
    {
        if(err instanceof SyntaxError)
            throw new ReadError("Syntax error", err);
        else
            throw err;
    }
    try { validateUser(user); }
    catch(err)
    {
        if (err instanceof ValidationError)
            throw new ReadError("Validation error", err);
        else
            throw err;
    }
    return  user;
}

var json = `{"name": "Alice", "age": 18 }`;
//var json = "{json}";

try { log(readUser(json)); }
catch(err)
{
    if (err instanceof ReadError)
        log(err);
    else
        throw err;
}

