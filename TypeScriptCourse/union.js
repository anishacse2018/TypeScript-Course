//union denoted by "|"
var aging = 21;
aging += 1;
aging = "old";
aging = true;
var exactPoint = { x: 4, y: 5 }; //valid
exactPoint = { lat: 50, long: 30 }; //Valid
//Using unions with functions
function printAge(age) {
    console.log("Age is ".concat(age));
}
printAge(23);
printAge("87");
/*
Typescript throws an error however, when we try to perform operation
on a variable that could be a number or a string.For eg, the functions specific to strings
cant be applied to numbers and viceversa.
*/
function calTax(price, tax) {
    price.replace("$", ""); //throws an error bcoz price could be a 
    //number too and replace function 
    //cant be applied on number
    return price * tax; //throws an error bcoz multiplication can be applied on numbers not strings
}
//To solve the above problem, we can use Type Narrowing
function calTaxmodified(price, tax) {
    if (typeof price === "string") {
        price.replace("$", "");
    }
    else {
        price * tax;
    }
    //However, if we write something like this, it will not throw an error
    if (typeof price == "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax; //Here it doesnt throw any error bcoz, after 
    // the if condition gets executed, price is converted to number
}
//const stuff:any[]=[1,2,"one","two",4];
var stuff = 2; //valid->stuff is a number or an array of strings
var stuffed = [1, 2, "to"]; //valid->stuffed is an array that accepts elements of type number 
//or string bcoz of paranthesis
var stuff2 = [1, 2, 3]; //this type check indicates that stuff2 is open to be an array of all strings or an array of all numbers
//Literal types
var zero = 0;
//This means, the variable zero os of type 0. So, it can only accept the value 0
zero = 2; //invalid, throws an error as 0 is the only allowed value
var mood = "Happy";
mood = "Sad";
mood = "Angry"; //invalid->throws error as acceptable values of mood are only Happy or Sad
var today = "Mon"; //valid
today = "jjj"; //invalid as its not any one of the following that has been decided by day of the week
