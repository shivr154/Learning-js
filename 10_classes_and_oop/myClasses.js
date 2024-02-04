// ES6

class User{
    constructor(username,email,password){
           this.username = username;
           this.email = email;
           this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

}

const chai = new User("chai","chai@gmail.com",123)

console.log(chai);
console.log(chai.encryptPassword());


function Tea(username,email,password){
     this.username = username
     this.email = email
     this.password = password
}

 Tea.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
 }

 const yoyo = new Tea("shivam","shiv@gmail.com",123)

 console.log(yoyo);

console.log(yoyo.changeUserName());
