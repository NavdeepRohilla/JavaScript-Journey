// Immediately Invoked Function Expression (IIFE)

// These are named IIFE.
(function chai() {
    console.log("DB CONNECTED");
})();
// Kai baar Global scope k polution se problem hoti h Us global scope k variables ya pollution ko htane k liye we use IIFE. 


// These are unnamed IIFE
( () => {
    console.log(`DB CONNECTED TWO`);
})();