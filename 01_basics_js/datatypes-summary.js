// JS is dynamically typed language
// data type depends on how data is stored and accessed from memory
// two data types primitive and non primitive(Refrence)
// primitive 7 types-> (pass by value(make copy)) String, Number, Boolean, null, undefined, Symbol, BigInt 

    // const score = 100
    // const scoreValue = 100.4
    // const isLoggedIn = false;
    // const outsideTemp = null    
    // let userEmail; // let userEmail = undefined

    // const id = Symbol('123')
    // const anotherId = Symbol('123')

    // console.log(id == anotherId);
    
    // const bigNumber = 4353656452367n


// Non Primitve(Refrence)->pass by reference
// Array , Objects, Functions 


// const heros = ["shaktiman" ,"nagraj", "doga"]; // array
// // Object
// let myObj = {     
//     name: "shivam",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof outsideTemp);



// ******************** Memory ********************
// Stack(primitive) , Heap(non-primitive)
// all primitive data type use stack memory
// all non primitive data type uses heap memory


let myyoutubeName = "ShivamRAthi"
let anotherName = myyoutubeName
anotherName = "honey"

console.log(myyoutubeName);
console.log(anotherName);

let userOne = {
    email: "shivamrathi@google.com",
    upi: "user@axl"
}

 let userTwo = userOne

 userTwo.email = "user@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);


 // type of     -->    result
 // NULL        -->    Object
 // object      -->    function
 // function    -->    object function
