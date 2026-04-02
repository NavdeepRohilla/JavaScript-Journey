const user = {
    username: "Navdeep",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


function chai() {
    let username = "Navdeep"
    console.log(this.username);
    
}

// chai()

const coffee = function () {
    let username = "Navdeep"
    console.log(this);
}

// coffee()

// ARROW FUNCTION

const addTwo = (num1 , num2) => {
    return num1 + num2
}

console.log(addTwo(3 , 4));

// Implicit Return

const twoSub = (num1 , num2) => (num1 - num2)

console.log(twoSub(5 , 7));

// Remember jb hm curly braces lgayenge tbhi return keyword ayega nhi to ni ayega .
