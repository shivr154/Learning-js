// let myName = "shivam     "
// let Name2 = "ashu       "

// console.log(myName.truelength);


 let myHeros = ["thor","spiderman"]

 let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
 }

 // Agar OBJECT ke andar kuch bhi add karonga to vo uske children pe pass hoga can see fig1
 // like function, Array,String aur bhi sab OBJECT hai to OBJECT mai jo hoga vo sab neche pass hoga
 // Par Array,String,function etc. mai jo bhi dalonga vo OBJECT mai pass nhi hoga


 Object.prototype.shivam = function(){
    console.log(`Shivam is present in all Objects`);
 }

 Array.prototype.heyShivam = function(){
    console.log(`shivam says hello`);
 }


//  heroPower.shivam()
//  myHeros.shivam()

myHeros.heyShivam()
// heroPower.heyShivam() // yaha par heroPower Object hai par heyShivam Array mai add kara hai to Object ke pass uska access nhi hai


// Inheritance

const User = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

// __proto__ => used to take access, prototypal inheritance 
const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User


// Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)
// Teaching Support sari property acces karlo Teacher ki


let anotherUsername = "chaiAurCode         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"hites    ".trueLength()
"icetea ".trueLength()
