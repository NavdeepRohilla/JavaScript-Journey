// More about Array

const marvel_heroes = ["Thor" , "Ironman" , "Spiderman"]
const dc_heroes = ["Superman" , "Flash" , "Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// ----- Spread ------ => In this we have to spread array take kaanch ka glass and usse fod do vo spread ho jayga.

const all_new_heroes = [...marvel_heroes , ...dc_heroes] // We use this instead of concat bcoz we can add any number of array we want to spread together.

// console.log(all_new_heroes);

const another_array = [1 , 2 , 3 , [4 , 5 , 6 ] , 7 , [6 , 7 , [4 , 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Navdeep"))
console.log(Array.from("Navdeep"));
console.log(Array.from({name: "Navdeep"})); // Interesting

// We have to declare ki sari keys ya sari values se array bnaiye.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));



// Learn More about Methods of Array
