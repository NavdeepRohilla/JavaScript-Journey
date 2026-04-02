// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }


for (let i = 0; i < 10; i++) {
    // console.log(`Outer loopvalues: ${i}`);
    
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner loop values ${j} and inner loop ${i}`);
        
        // console.log(i + " * " + j + " = " + i*j);
        
        
    }
}

let myArray = ["flash" , "batman" , "superman"]

console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]; 
    // console.log(element);
    
}


// break and continue


// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Deteted 5");
//         break
//     }
//     console.log(`Value of i is ${i}`);
    
    
// }


for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("Deteted 5");
        continue
    }
    console.log(`Value of i is ${i}`);
    
    
}