//  Immediately Invoked Function Expressions (IIFE)
// Global scope ke pollution se bachane ke liye aur Immediately execute karne ke liye we use IIFE

// named IIFE
(function chai(){
   console.log(`DB Connected`);
}) ();

// Syntax of IIFE -->  ()() first parenthesis for function definition and second one is for function execution
// need to end iife ,function ends withs semicolon;

( (name) => {
    console.log(`DB Connected 2 ${name}`)
} )('shivam');


