var dog = {
    name: "Elton",
    breed: "German Sheperd",
    age: 7
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "John", last: "Walt" });
//What happens if we pass extra parameters 
printName({ first: "Micky", last: "Jack", age: 23 }); //invalid
//It thorws an error as we can only specify known properties and age isnt defined there, so, age cant be passed
//However, if we assign a variable and then pass it, it doesnt throw an error
var param1 = { first: "Micky", last: "Jack", age: 23 };
printName(param1); //This is totally valid, it doesnt throw any error
//The above code considers only 
var coordinate = { x: 2, y: 5 };
function randomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
/*
Type Alias: Instead of writing out Object Types in an annotation,
we can declare them separately in a type alias, which stores the desired shape of the object
Now, this can be used at multiple places, it makes the code look cleaner as it increases reusability and
minimum re-defining
*/
//Code without type alias:
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function doublePointAlias(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var done3 = {
    x: 1,
    y: 3
}; //Valid
//It is valid bcoz z is defined as an optional parameter, else, it would have thrown an error
//"?" indicates optional
var done3d2 = {
    x: 1,
    y: 2,
    z: 3
}; //valid
var user = {
    id: 2345,
    username: "Niki"
};
console.log(user.id);
user.id = 567; //This is invalid as id is a read-only field
var happyFace = {
    radius: 5,
    color: "red"
};
//So using an ampersand, we can add extra properties to the object
var christy = {
    numLives: 7,
    breed: "Dog",
    age: 5
};
