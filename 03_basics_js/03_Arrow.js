// this means current context 
// jab console.log(this) console me karte hai browser mai jake to empty object{} nhi window ata hai ,  global object-> window hai
// cant use this in arrow functions
const user = {
    username : "Shivam",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); // it gives current context like what is present in its scope
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // gives empty object {} when in node environment


// function chai1(){
//     let username = "shivam"
//     console.log(this)
//     console.log(this.username);
// }

// chai1()

// const chai = function(){
//     let username = "shivam"
//     console.log(this);
// }
// chai()

const chai = () => {
    let username = "shivam"
    console.log(this); // gives empty object {}
}
chai()

// const addTwo = (num1,num2) => {
//       return num1+num2
// }

// Implicit return (dnt need to write return) () => () jaha bhi return krna hoo parenethsis lga dena

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username : "shivam"})

console.log(addTwo(2,4));

