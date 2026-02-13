// Arrays
/* 
- JS arrays are resizable and can contain a mix of different data Types
- JS arrays are not associative arrays and so , array elements can not be accessed using arbitrary strings as indexes.
- JS arrays are zero indexed 
- JS array copy operations create shallow copies (A shallow copy is a copy whose properties share the same reference as those of the source object from which the copy was made).
*/

const myArr = [0 , 1 , 2 , 3 , 4 , 5 ]
const myHeroes = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1 , 2 , 3 , 4)
// console.log(myArr[5]);
// console.log(myArr2[2]);


// Array Methods 

// myArr.push(6)  // Add an element in an Array
// myArr.push(7)
// myArr.pop() // Removes an element in an Array


// myArr.unshift(9) // By using unshift we can add element in the satrting of an array . and this is not recommendable bcoz it shifts the all values . which is very time consuming.

// myArr.shift() // Removes element from the starting of the array

// console.log(myArr.includes(9))
// console.log(myArr.includes(3))

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice or splice

console.log("A " , myArr);

const myn1 = myArr.slice(1 , 3) // In this range is not included 

console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1 , 3) // In this rance is included .And it also manipulates the original Array.
console.log("C " , myArr);

console.log(myn2);


