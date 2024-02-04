function SetUsername(username){
    // complex DB calls
   this.username = username
}

function createUser(username,email,password){
    // SetUsername(username) //call to horaha hai par call hone ke baad call stack se nikal ja rah hai bina refernce diye
    SetUsername.call(this,username)// refernce hold karne ke liye call use karte hai 
//call mai jo this pass karte hai vo jo func call hua hai uska sara refernece rakhta hai 
// basically current EC dusre func ko pass karta hai

    this.email = email
    this.password = password
}


const chai = new createUser('chai','chai@123',123)
console.log(chai);

