// Primitive (7 types) : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId);

const bigNumber = 212365478325n
console.log(typeof bigNumber)


// Reference Type (Non-primitive) : Objects, Array, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ankit",
    age: 28
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof outsideTemp);




// ******************************************** Memory Allocations *********************************


// Stack (Primitive), Heap (Non-primitive)

let myWebsite = "ankitdotcom"
let anotherWebsite = myWebsite
anotherWebsite = "Helloankit"
console.log(anotherWebsite);
console.log(myWebsite)

let userOne = {
    email: "ankit@gmail.com",
    upi: "ankit@ybl"
}

let userTwo = userOne

userTwo.email = "rahul@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)