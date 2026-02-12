// Dates

let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());

console.log(myDate.toDateString());
console.log(typeof myDate);

// Date is an object in a JavaScript


let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

// Months Started from Zero In JS

console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("2024-02-16") // its yy mm dd in india we prefer mm dd yy
console.log(myCreatedDate2.toLocaleString());


let createdDate = new Date("01-14-2006")
console.log(createdDate.toDateString());


let myTimeStamp = Date.now

// In situation where we do polls in Js , quizzes in these cases we use this 