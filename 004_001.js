//objects
"use strict"
let log = console.log;

// способы создания объектов
var o1 = new Object();
var o2 = {};
var o3 = { name: "Alice", age: 30, }; //trailing comma висячая запятая
// назначение свойства
o1.name = "Alice";
// удаление свойства
delete o1.name;
log(o1.name); //undefined, т.е. можно обращаться к несуществующему свойству
// произвольные названия свойств, вычисляемые свойства и квадратные скобки
o2["first name"] = "Alice";
log(o2["first name"]);
var key = "name";
var o4 = { [key]: "Alice", };
log(o4);
// свойство из переменной
function make_obj(name, age)
{
    return {
        name,
        age,
    }
}
var o5 = make_obj("Peter", 18);
log(o5);
// проверка существования свойства
log("age" in o5);
//перечисление свойств
for (let prop in o5)
{
    log(prop, o5[prop]);
}