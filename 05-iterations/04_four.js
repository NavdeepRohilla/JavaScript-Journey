const myObject = {
    js: 'JavaScript',
    Cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
} // object pr to for in loop work krra h kya ye array pr bhi kregaa?

const programmingLanguages = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programmingLanguages) {
    // console.log(key);
    console.log(programmingLanguages[key]);
    
    
}


const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('FR' , "France")
map.set('IN' , "India")

for (const key in map) {
    console.log(key);
    
}