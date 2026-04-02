const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
coding.forEach(function (item) {
    console.log(item);
    
})

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
})

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Now we just discusses strings inside array now we will do objects in arrays

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp",
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }

]
myCoding.forEach((item) => {
    console.log(`Language name is ${item.languageName} and file name is ${item.languageFileName}`);
    }
)

