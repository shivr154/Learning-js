class User{
    constructor(username){
       this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User{
   constructor(username,email,password){
       super(username)
       this.email = email
       this.password = password
   }

    addCourse(){
        console.log(`new Course has been added by ${this.username}`);
    }
}

const Shivam = new Teacher("Shivam","siva@gmail.com",123)

Shivam.addCourse()
Shivam.logMe()

const ashu = new User("AsHu")
ashu.logMe()

console.log(Shivam == ashu);

console.log(Shivam instanceof Teacher);

console.log(Shivam instanceof User);

