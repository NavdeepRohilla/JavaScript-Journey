const name = "Navdeep"
const repoCount = 50

// console.log(name + repoCount + "Value");   // This is old way to do it.

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// It is more readable and easy to write. and a better way to do it.

const gameName = new String("Navdeep-Rohilla")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));
console.log(gameName.substring(0, 4));

console.log(gameName.replace('Navdeep', 'Ananya'));
console.log(gameName.includes('Navdeep'));


console.log(gameName.slice(-8, 4));

const newStringOne = "       Navdeep         "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://navdeep.com/navdeep%20rohilla"
console.log(url);

console.log(url.replace('%20' , '-'))


console.log(gameName.split('v'));
