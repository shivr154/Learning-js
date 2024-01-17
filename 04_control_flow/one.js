// < , > ,<=, >=, ==, != ,===, !==

// const isloggedIn = true;
// const temperature = 41;

// if(temperature < 50){
//     console.log(`temperature less than 50`)
// }
// else{
//     console.log("temperature is greater than 50")
// }

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power is ${power}`)
// }

// console.log(`user power is ${power}`) // this give error bcz of scope

// const balance = 1000;

// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log(`less than 1200`);
// }

const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userloggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged In");
}



