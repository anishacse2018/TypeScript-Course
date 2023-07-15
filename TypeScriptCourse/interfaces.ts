/*
Interfaces are like type aliases.We can use them to create reusable
modular types that describes the shape of objects
it is similar to type alias but the keyword used here is interface
*/
type Pt={
    x:number,
    y:number;
}//Type Alias

//Interface
interface Pti{
    x:number,
    y:number
}
const pointi:Pti={x:3,y:8};
//To define optional properties in an interface, we use a "?" symbol
//We can also define methods in interfaces
interface Person{
    readonly id:number,
    first:string,
    last:string,
    middle?:string//optional property
    sayHi:()=>string;//function with 0 arguments that returns a string
/*
The above statement can also be written like this: sayHi():string
*/
}
const thomas:Person={id:12,first:"Thomas",last:"Hardy",sayHi:()=>{
    return "hello";
}};//valid bcoz middle is an optional property
thomas.first="Thompson";//valid
thomas.id=13;//invalid as Id is a readonly property that cant be changed
interface Product{
    name:string,
    price:number,
    applyDiscount(discount:number):number;
}
const shoes:Product={
    name:"shoes",
    price:100,
    applyDiscount(amt:number){
        return this.price*(1-amt);
    }
}
//Reopening Interfaces: Adds extra properties to the interfaces later
interface dog{
    name:string,
    age:number
}
interface dog{
    breed:string,
    bark():string
}
const elton:dog={
   name:"Elton",
   age:0.5,
   breed:"Pomerian",
   bark(){
    return "Bark bark";
   }
}
//Extending Interfaces
interface ServiceDog extends dog{
    job:"drug sniffer"|"bomb"|"guide dog";
}
const chewy: ServiceDog={
    name:"Chewy",
    job:"drug sniffer",
    age:2,
    bark() {
        return "Bark bark"
    },
    breed:"Pomerian"
}
//We can extend from multiple interfaces-Multiple Inheritance
interface Persons{
    name:string
}
interface Employee{
    readonly id:number,
    email:string
}
interface Engineer extends Persons,Employee{
    level:string,
    skills:string[]
}
const Tony:Engineer={
    name:"Tony",
    id:2,
    email:"tony@gmail.com",
    level:"Junior",
    skills:["CPP","Java"]
}
/*
Interfaces Vs Type aliases

Interfaces describe the shape of an object.
type Color="red"|"blue" possible with types, not possible with interfaces
Reopening interfaces is valid..reopening types is not valid, it throws duplicate type error
We use extends keyword to extend interfaces but in Type Aliases, we make use of ampersand

*/