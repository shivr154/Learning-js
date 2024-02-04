// Static is used to refuse the access , access nhi lene deta 

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is : ${this.username}`);
    }

    static createId(){
        return `${Math.floor(Math.random()*10 +1)}`
    }
}

const hitesh = new User('shivam')
hitesh.logMe()
// console.log(hitesh.createId()); 

