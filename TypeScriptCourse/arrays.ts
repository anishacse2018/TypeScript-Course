const activeUsers:[]=[];
//Type of activeUsers is an empty array. So, if we try to push any
//values into the array or initialize it with some values,
//It throws an error. So, activeUsers should always be an empty array
const active:string[]=[];
//All elements of the array should be a string
active.push("red");//Valid as its a string
active.push("orange");//Valid as its a string
active.push(5);//Error , invalid bcoz its a number

/*
Another Syntax for defining Array types is as follows:
*/

const ages: Array<number>=[];
//is equivalent to:
const age:number[]=[];
//We can not only work on arrays with premitive types, but also with custom types
type Points ={
    x:number,
    y:number
}
const coords:Points[]=[];
coords.push({x:5,y:3});
coords.push({x:5});//Error as we need to pass both x and y as its of type Point

//Nested Arrays
const board: string[][]=[["X","O","X"],["X","O","X"],["X","O","X"]];