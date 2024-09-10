
//primitive Types

/*
number 
array 
string

*any (a special type ) ->TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.


*/

//any

//it is used when we dont want to check further typeChecking!!
let data: any = {
    x: 0
}
data.dv;
data.x;
data.y;

//withOut Type Checking

let data2 ={
    a: 2,
    b: "dev"
}
//data2.aa; this will throw an error
//thats all about Any is!


//number

let num: number = 100;
num.toFixed();

let bol:boolean = true;
bol.valueOf();


//boolean






export{};