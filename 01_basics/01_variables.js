const accountId = 144553 // Can not be changed , its fix
let accountEmail = "navdeep@google.com" // we use it nowdays it solves the problem of scope in the code.
var accounPassword = "12456" // We dont use it nowdays. scope vali problem h var  .
accountCity = "Jaipur" // not a good way we can declare in this type also in JavaScript

let accountState;

/* 
Prefer not to use var bcoz of issue in block scope and functionla Scope.
*/

// accountId = 2  // not 
accounPassword = 212121212
accountCity = "Delhi"
accountEmail = "abc@xyz.com"

console.log(accountId);

console.table([accountId , accounPassword , accountEmail , accountCity , accountState]);