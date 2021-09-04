// private and protected properties
"use strict"
let log = console.log;

class CoffeeMachine
{
    // private fields should be declared in an enclosing class
    #waterAmount = 0;
    // getters and setters can have the same name with a private field
    get waterAmount() { return this.#waterAmount; }
    set waterAmount(value)
    {
        if (this.#checkWaterAmount(value)) 
        {
            this.#waterAmount = value;
            log("water set");
        }
        else
            log("set correct amount");
    }
    #checkWaterAmount(value)
    {
        return value > 0 && value <= 1000;
    };
}

var ci = new CoffeeMachine();
log (ci);
ci.waterAmount = 1200; // set correct amount
ci.waterAmount = 1000; // water set

// so private props are with #
// protected are with _, although they are accessible
// this['#name'] doesnt work