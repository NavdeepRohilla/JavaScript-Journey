// Primitive DataTyes

// 7 Types => String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 545351546513254135351n


// console.log(typeof bigNumber);







// Reference Type (Non Primitive)

// Arrays , Objects , Functions

const heros = ["Shaktiman" , "Naagraj" , "Doga"]
let myObj = {
    name: "Navdeep",
    age: 19,

}

const myFunction = function () {
    console.log("Hello World");
    
}

// console.log(typeof anotherId);



// **************************************************************************************

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "CeodeWithNavdeepdotcom"
let anotherName = "Chaiaurcode"


console.log(myYoutubename)
console.log(anotherName);

let userOne = {
    email: "navdeep@google.com",
    upi: "navdeep@ybl",
}

let userTwo = userOne
userTwo.email = "ananya@google.com"
userTwo.upi = "ananya@ybl"

console.log(userOne.email);
console.log(userTwo.email);

console.log(userOne.upi);
console.log(userTwo.upi);


