// fetch('htpps://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls ,cryptography, network
    setTimeout(function(){
        console.log("async task is complete");
    },1000)
    resolve()
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"shivam",emailId:"shivamrathi123@gamil.com"})
    }, 1000);
})

promiseThree.then((user)=>{
  console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"shivam",pass:123})
        }
        else{
            reject("ERROR: Something went wrong")
        }
       },1000)
})

promiseFour.then(function(user){
   console.log(user);
   return user
}).then(function(name){
    console.log(name.username);
    return name.pass 
}).then((pass)=>{
    console.log(pass);
}).catch((error)=>{
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log(response);
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))


