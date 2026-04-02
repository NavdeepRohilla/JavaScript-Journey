function sayMyName() {
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
        
}

// sayMyName()

// function addTwoNumbers(num1 , num2) {
//     console.log(num1 + num2);
// }  
// aise kabhi ni krte.

// addTwoNumbers(3 , 5)
// const result = addTwoNumbers(3 , 5)
// console.log("result : " + result);


function addTwoNumbers(num1 , num2) {
    // let result = num1 + num2
    // return result

    // yaha ek new variable declare krna pada h to jyada space lega usko km krne k liye we have to do this 

    return num1 + num2
}


// console.log(addTwoNumbers(3 , 5));

function userLoginMessage(username = "bob"){ // default se kr diya.
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(userLoginMessage("Navdeep"));
// console.log(userLoginMessage());


// Functions with Objects:-

function calculateCartPrice(num1){ // we want ki hme pta ni h kitte arguments dene h to use kasie sambhale.
    return num1
}

// console.log(calculateCartPrice(2));


function calculateCartPriceNew(...num1){ // is aise hoga (val1 , val2 , ...num1 ) to num1 me bs -> [65 , 854 , 25] ye hoga
    return num1
}

// console.log(calculateCartPriceNew(200 , 45 , 65 , 854 , 25));

const user = {
    username: "Navdeep",
    price: 189
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username : "Ananya",
    price : 9635,
})

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 500 , 600]));

