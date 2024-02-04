// Java Script behaviour is prototypal itni asani se har nhi manti hai aur upar jati rhti hai parent -> grand parent-> grand grand parent -> ancestor jati rhti hai jab tak null na mil jaye
// Prototypal inheritance 
// prototype ke andar prototype 
// Javascript mai sab kuch hi Object hai


function multiplyBy5 (num){
    return num*5
}


multiplyBy5.power = 2

console.log(multiplyBy5);
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // {}


function createUser(username,score){
    this.username = username
    this.score = score
}

// making our own function and adding them into function
createUser.prototype.increment = function(){
    this.score++;
}
// this ka matlab jisne bhi bulaya hai

createUser.prototype.printMe = function(){
    console.log(`price is: ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = createUser("tea",250)

chai.printMe()


/*
new keyword functionality->

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

