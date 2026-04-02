let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // console.log("Inner : " , a);
    
    // var c = 30;
}
{} // this is scope. object m jo curly braces hote h vo object declaration h, yaha ye scope h functions m

// console.log(a);
// console.log(b);
// console.log(c); // ye print ho jayega isliye hm l,og var ko km use krte h .

// console.log(a);



// Nested Scopes :-

function one() {
    const username = "Navdeep"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  yaha access kaise kr skte h ?

    two()
}
// one()

if (true) {
    const username = "Navdeep"
    if (username === "Navdeep") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++++++ interesting ++++++++++++++++++++

function addone(num) {
    return num + 1
}

console.log(addone(5));

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5));
