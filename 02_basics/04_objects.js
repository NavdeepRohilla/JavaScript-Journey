// const tinderUser = new Object()  --- It is a singleton object
const tinderUser = {}  //This is not a singleton object

console.log(tinderUser);


tinderUser.id = "123abc"
tinderUser.name = "Happy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com" ,
    fullname : {
        userfullname : {
            firstname : "Navdeep" ,
            lastname : "Rohilla"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}

const obj3 = {obj1 , obj2} // vhi problem jaise array k ander array and object k ander object hoyga.
console.log(obj3);  // ye expected tha { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({} , obj1 , obj2) // khali bracket isliye h taki usi ko target maan  lo baki sbko source maan lo.  (ye bhi km use hoga)
console.log(obj4);

// Learn it from mdn also.
const obj5 = {...obj1 , ...obj2}
console.log(obj5); // most used because latest and best way

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "n@gmail.com"
    },
    {
        id : 3,
        email : "a@gmail.com"
    }
]

console.log(users[0]);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log((tinderUser.hasOwnProperty("isLoggedIn")));

const course = {
    courseName: "JS in English",
    price: "989",
    courseInstructor: "Navdeep"
}

// course.courseInstructor

const {courseInstructor} = course // just a syntatical sugar (we are jsut doing destructuring.)
console.log(courseInstructor);


// Json file

// {
//     "name": "Navdeep",
//     "courseName": "JS in English",
//     "Price" : "free"
// }


// We will get api in the form of array in which we have objects .. you can use randomuser me 