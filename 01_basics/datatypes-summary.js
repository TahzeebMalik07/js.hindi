// Primitive types
// 7 types: string, number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); 


const bigNumber = 8346279575n

// Non-primitive / reference types
// Arrays, Objects, Functions


const heros = ["shaktiman", "kholi", "doga"];
let myObj = {
    name: "malik",
    age: 20,
}

const myFunction = function(){
    console.log("hellow world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof outsideTemp);