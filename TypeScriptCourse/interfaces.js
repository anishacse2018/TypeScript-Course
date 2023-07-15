var pointi = { x: 3, y: 8 };
var thomas = { id: 12, first: "Thomas", last: "Hardy", sayHi: function () {
        return "hello";
    } }; //valid bcoz middle is an optional property
thomas.first = "Thompson"; //valid
thomas.id = 13; //invalid as Id is a readonly property that cant be changed
var shoes = {
    name: "shoes",
    price: 100,
    applyDiscount: function (amt) {
        return this.price * (1 - amt);
    }
};
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Pomerian",
    bark: function () {
        return "Bark bark";
    }
};
var chewy = {
    name: "Chewy",
    job: "drug sniffer",
    age: 2,
    bark: function () {
        return "Bark bark";
    },
    breed: "Pomerian"
};
var Tony = {
    name: "Tony",
    id: 2,
    email: "tony@gmail.com",
    level: "Junior",
    skills: ["CPP", "Java"]
};
/*
Interfaces Vs Type aliases

Interfaces describe the shape of an object.
type Color="red"|"blue" possible with types, not possible with interfaces
Reopening interfaces is valid..reopening types is not valid, it throws duplicate type error
We use extends keyword to extend interfaces but in Type Aliases, we make use of ampersand

*/ 
