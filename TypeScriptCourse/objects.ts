const dog={
    name:"Elton",
    breed:"German Sheperd",
    age:7
}
function printName(person:{first:string,last:string}){
  console.log(`${person.first} ${person.last}`);
}
printName({first:"John",last:"Walt"})
//What happens if we pass extra parameters 
printName({first:"Micky",last:"Jack",age:23})//invalid
//It thorws an error as we can only specify known properties and age isnt defined there, so, age cant be passed
//However, if we assign a variable and then pass it, it doesnt throw an error
var param1={first:"Micky",last:"Jack",age:23};
printName(param1);//This is totally valid, it doesnt throw any error
//The above code considers only 

let coordinate:{x:number,y:number}={x:2,y:5};
function randomCoordinates():{x:number,y:number}{
   return {x:Math.random(),y:Math.random()};
}

/*
Type Alias: Instead of writing out Object Types in an annotation,
we can declare them separately in a type alias, which stores the desired shape of the object
Now, this can be used at multiple places, it makes the code look cleaner as it increases reusability and
minimum re-defining
*/
//Code without type alias:
function doublePoint(point:{x:number,y:number}):{x:number,y:number}{
    return {x:point.x*2,y:point.y*2};
}
//Code with type alias:
type Point={
    x:number,
    y:number
}
function doublePointAlias(point:Point):Point{
    return {x:point.x*2,y:point.y*2};
}
//Type alias is extremely useful when we deal with nested objects
//Optional properties are defined using a question mark
type Point3D={
    x:number,
    y:number,
    z?:number
}
const done3:Point3D={
    x:1,
    y:3
}//Valid
//It is valid bcoz z is defined as an optional parameter, else, it would have thrown an error
//"?" indicates optional
const done3d2:Point3D={
    x:1,
    y:2,
    z:3
}//valid

//ReadOnly property in typescript
type User={
    readonly id:number,
    username:string
}
const user:User={
    id:2345,
    username:"Niki"
}
console.log(user.id);
user.id=567;//This is invalid as id is a read-only field

/*
Intersection of Object Types
*/
type Circle={
  radius:number;
}
type Colorful={
    color:string;
}
//Lets say there is an object ColorfulCircle that wants to take both the above parameters
//In this case, we can use the intersection,i.e.,combine the above 2 types using an ampersand symbol
//So, we dont need to redefine all the properties again
type ColorfulCircle=Circle&Colorful;
const happyFace:ColorfulCircle={
    radius:5,
    color:"red"
}

type Cat={
    numLives:number;
}
type Dog={
    breed:"Dog";
}
type CatDog=Cat&Dog&{
    age:number
}
//So using an ampersand, we can add extra properties to the object
const christy : CatDog ={
  numLives:7,
  breed:"Dog",
  age:5
}