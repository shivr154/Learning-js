const user ={
    username:"shivam",
    loginCount : 8,
    signedIn : true,

    getUserDetails :function(){
        console.log(`got user details from database`);
        console.log(`username: ${this.username}`);
        console.log(this); // gives current context 
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // gives {}

// const promisOne = new Promise()
// const date = new Date()
// new keyword is constructor function it allows to make multiple instances from one object literal

function User(username,loginCount,isLoggedIn){
    this.username = username //left wali(this wali)value variable hai jo bnaya hai aur right wali vo hai jo pass hoke arhi hai
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}


const userOne = new User("shivam",12,true)
const userTwo = User("ashu",15,false) // without the use of new keyword value gets overwrite 

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor); // refernce hoti hai khudi ke bare mai

// new Keyword
// 1-> sabse phle Empty Object create hota hai jisko instance bolte hai
//2-> constructor function call hota hai
//3-> sare arguments wagera inject hojate hai


