// if

const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log(`Navdeep is loggedin : ${isUserLoggedIn}`);
    
}

// < , > , <= , >= , == , === , != 

const temperature = 40

if (temperature > 40) {
    console.log("Temperature is greater than 40");
    
} else {
    console.log("Temperature is less than 40");
}
console.log("Execute");



const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User Power : ${power}`);
}


const balance = 1000

// if (balance > 500) console.log("test") , console.log("test2");

//  ye nhi krna achi practice nhi h


if (balance < 500) {
    console.log("less than 500");
    
}else if (balance < 750) {
    console.log("less than 750");
}else{
    console.log("less than 1200");
    
}

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    console.log("Allow to buy course");   
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in");
}