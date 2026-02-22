// Singleton 
// Constructor se bnega to Singleton bnega nhi to nhibnega literals se. (Object.create) --> like this

// Object Literals


const mySym = Symbol("Key1")

const JsUser = {
    name : "Navdeep" ,
    "Full Name" : "Navdeep Rohilla" ,
    mySym : "mykey1" , // If isko symbol k liye use krna h to use square braces
    [mySym] : "mykey2" ,
    age : 19,
    location : "Jaipur" ,
    email : "navdeep@gmail.com" ,
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Wednesday"]
}

// ye keys back of the table string ki trh use kiye jate h 
// object k ander keys and value ka chakkar hota h . 
// yaha pr hm keys and value dono define kr skte h . but Arrays m sirf value kr skte h bcoz keys fixed h .

// console.log(JsUser.email);
// console.log(JsUser["email"]); // ye notation tb use hoti h jb keys string m likhi ho like Full name

// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "navdeep@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "navdeep@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user , ${this.name} `); // jis js user ko refernce kr rahe h uske ander kya kya h usko dekhne k liye kaam aata h. We use this
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// Js user m ho name h usko refernce krne k liye function



