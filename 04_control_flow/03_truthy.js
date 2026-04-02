const userEmail = NaN

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// Truthy and Falsy values in JavaScript

// Falsy values in JavaScript are: 0 , "" , undefined , null , NaN , false

// Truthy values in JavaScript are: "0" , " " , [] , {} , function(){} , true

if (userEmail.length === 0) {
    console.log("Array is empty");
    
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1 = undefined ?? 15
console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

