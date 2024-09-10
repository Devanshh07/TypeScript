"use strict";
//object
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "user",
    email: "user@123",
    isAtive: true
};
function createobject(_a) {
    var string = _a.name, boolean = _a.ispaid;
}
;
createobject({ name: "devsns", ispaid: true });
function createobject1(person) {
    //here we can use any property name ,isPaid
    return person.ispaid;
    return person.name;
}
;
createobject1({ name: "devsns", ispaid: true });
function myfn(ob) {
    return "hello" + ob.age;
}
function myfn1(ob) {
    return ob.newone;
}
function createOptionalObj(ob) {
    return ob;
}
createOptionalObj({ name: "dev" }); //no error becouse ? 
createOptionalObj({ name: "dev", age: 22, dob: 10, class: "" });
createOptionalObj({ name: "dev", age: 22, dob: 10, class: "" });
function newfn(nO) {
    var xPos = nO.xPos === undefined ? 0 : nO.xPos;
    var yPos = nO.yPos === undefined ? 0 : nO.yPos;
}
newfn({ shape: "polygon" }); //now xPos ,yPos will be 0 not undefiend
newfn({ shape: "polygon", xPos: 0 }); //yPos = 0;
newfn({ shape: "polygon", xPos: 1, yPos: 1 }); //all are filled!
function newfnn(nO) {
    var xPos = nO.xPos === undefined ? 0 : nO.xPos;
    var yPos = nO.yPos === undefined ? 0 : nO.yPos;
    //nO.shape = "fr"; //cnt do this bcz its a read Only properties
}
newfnn({ shape: "polygon" }); //now xPos ,yPos will be 0 not undefiend
newfnn({ shape: "polygon", xPos: 0 }); //yPos = 0;
newfnn({ shape: "polygon", xPos: 1, yPos: 1 }); //all are filled!
function readonly(data) {
    console.log("hello ".concat(data.user.name));
    data.user.age++; //TypeScript allows updation on child!
    data.user.name = "newName";
    //but cnt
    //data.user ={} it will give you an error
}
//all are in merge 
function check(mg) {
    mg.age;
    mg.city;
    mg.country;
    mg.name;
}
function test(d) {
    d.age;
    d.city;
    d.country;
    d.name;
}
function cc(c) {
    c.color;
    c.radius; //
}
//type assertion
var str = "devansh";
var newStr = str.toLowerCase();
console.log(newStr);
