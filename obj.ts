

//object

const User = {
    name: "user",
    email: "user@123",
    isAtive : true
}


function createobject({name: string,ispaid: boolean}){

};

createobject({name :"devsns", ispaid: true})


function createobject1(person: {name: string,ispaid: boolean}){
     
    //here we can use any property name ,isPaid
    return person.ispaid;
    return person.name;

};

createobject1({name :"devsns", ispaid: true})




//return


//using interface
interface myobj {
    name: string
    age : number
    class: string
}

function myfn(ob : myobj){
     return "hello"+ob.age;
}


//using type
type myobj1 = {
    name: string
    age : number
    class: string
    newone: true
}
function myfn1(ob :myobj1){
    return ob.newone
}


//Properties Modifiers

//Optional properties

type Optional = {
     name : string;
     age ?: number
     dob ?: number
     class ?: string;
     isAdult ?: boolean;
};

function createOptionalObj(ob:Optional){
      
    return ob;
}
createOptionalObj({name:"dev"}) //no error becouse ? 
createOptionalObj({name:"dev",age:22,dob:10,class:""})
createOptionalObj({name:"dev",age:22,dob:10,class:""})


//in the above example rest Optional Value will be Undefiend in Case of Calling without it;

//so here we handle it 


interface newOne{
    shape: string
    xPos ?: number
    yPos ?: number
}
function newfn(nO: newOne){
       let xPos = nO.xPos === undefined ? 0 : nO.xPos;
       let yPos = nO.yPos === undefined ? 0 : nO.yPos;
}

newfn({shape:"polygon"}) //now xPos ,yPos will be 0 not undefiend
newfn({shape:"polygon",xPos:0}) //yPos = 0;
newfn({shape:"polygon",xPos:1,yPos:1}) //all are filled!


//read Only property 
interface newO{
    readonly shape: string
    xPos ?: number
    yPos ?: number
}
function newfnn(nO: newO){
       let xPos = nO.xPos === undefined ? 0 : nO.xPos;
       let yPos = nO.yPos === undefined ? 0 : nO.yPos;
       //nO.shape = "fr"; //cnt do this bcz its a read Only properties
}

newfnn({shape:"polygon"}) //now xPos ,yPos will be 0 not undefiend
newfnn({shape:"polygon",xPos:0}) //yPos = 0;
newfnn({shape:"polygon",xPos:1,yPos:1}) //all are filled!

//modification on ReadOnly Properties

type  readonlyPp={
    readonly user: {name : string,
    age : number }
}

function readonly(data:readonlyPp){
    console.log(`hello ${data.user.name}`);
    data.user.age++; //TypeScript allows updation on child!
    data.user.name = "newName";
    //but cnt
    //data.user ={} it will give you an error
}


//Extending types


interface firstUser{
    name : string
    age : number
    city : string
}
interface secondUser{
    country : string
}
//here we create another separate InterFace
interface merge   extends firstUser,secondUser {
   
}
//all are in merge 
function check(mg:merge){
    mg.age
    mg.city
    mg.country
    mg.name
}

//now copy properties from one to another interface

interface firstUser extends secondUser{}

function test(d:firstUser){
            d.age
            d.city
            d.country
            d.name
}


//interSection Type

interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle = Colorful & Circle;
   function cc(c:ColorfulCircle){
    c.color
    c.radius //
   }

//type assertion

let str = "DSevansh"

let newStr = (str as string).toLowerCase();
console.log(newStr);





export{}