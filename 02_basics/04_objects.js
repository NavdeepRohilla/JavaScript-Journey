// const tinderUser = new Object()  --- It is a singleton object
const tinderUser = {}  //This is not a singleton object

console.log(tinderUser);


tinderUser.id = "123abc"
tinderUser.name = "Happy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmial.com" , 
    fullname : {
        userfullname : {
            firstname : "Navdeep" , 
            lastname : "Rohilla"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
