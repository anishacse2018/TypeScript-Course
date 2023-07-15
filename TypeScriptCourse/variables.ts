let nameofPerson: string = "Anisha";
nameofPerson="Ana";
nameofPerson=100; //Typescript throws error
nameofPerson.toUpperCase()

let num:number = 5;
num+=1;
num="6"; //typescript throws error

let gameOver: boolean = true;
gameOver="true"; //typescript throws error

//Type Inference
let tvShow = "Never Have I Ever";//Even if we dont specify that
//tvShow is a string while declaration, typescript figures it out by itself and understands it
tvShow=9;//Typescript throws Error

//Any is a type which is unique to typescript which means any datatype
let thing:any="hello";
thing=5;//no error here becoz the type of thing is any, so it accepts
//string, boolean, number, etc
thing() //even this is valid
thing.toUpperCase() //this is also valid
//No error is thrown becoz thing does not bind itself to any
//particular data type

const movies=["Apple","banana","pear","orange"];
let foundMovie; //we didnt assign anything here. Typescript 
//infers the type of foundMovie to be "any"
for(let movie in movies){
    if(movie=="banana"){
        foundMovie="banana";
    }
}
//As type of foundMovie is any, it could be assigned any value, string, number, boolean, etc.
//However, if we want to assign a type to it in advance,let foundMovie:string

function square(num){
    return num*num;
}
square(3)//Valid
square("eight");//Valid, typescript wont throw an error
//type of num in the above function is any
//To fix that, we can write the below code:

function squareOfNum(num : number){
    return num*num;
}
function greet(person:string){
    person*person;//Typescript error as type of person is string
    return `Hi there ${person}!`;
}
greet(true);//Error bcoz type of function argument is string and not boolean

const doSomething=(person:string,age:number,isFunny:boolean)=>{}
doSomething("ChickenFace",14,true);

function greetP(person:string="stranger"){
    return `Hi There ${person}`;
}
//if we need to define a type strictly on the return value of a function, we can do so, by using the below code
const cube=(num:number):number=>{
    return num*num*num;
}
//if we have a function that can return multiple datatypes, for eg, string or a number,we can use the below code:
function rando(num:number):string|number{
    if(Math.random()<0.5){
        return num.toString();
    }
    return num;
}
//It works with arrow functions as well
//For anonymous functions
var colors=["red","green","blue"];
colors.forEach((color)=>{
    console.log(color.toUpperCase());
    //Here, the type of color is string, typescript identifies it automatically based on the context
    //Even if we dont assign it expicitly
})
//the return type of a void function can be specified using the void keyword
function printTwice():void{
   console.log("Print method");
   return ""; //This throws an error because void is the return type for the function
   //So, the function shouldnt return anything, but here, we are returning string, so it throws an error
}
//Never type in typescript says that a function never returns a value, basically the function never finishes executing
//It is different from void bcoz void returns null/undefined
//Never is generally used in functions that always throw exceptions or never finishes executing
function neverStop():never{
    while(true){
        console.log("Never stops");
        return "err";//throws an error bcoz the functions return type is never...so, it cant return anything nor should it finish its execution
    }
}

function makeError(msg:string):never{
    throw new Error(msg);
}

