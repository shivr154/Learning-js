// var c = 300
// Global scope
let a = 300

if (true) { // block/ local scope
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c); // measure issue of using var 

// console.log(a);

function one(){ // closure
    const username = "shivam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if (true) {
     const username = "shivam"
     if (username === "shivam") {
          const website = " youtube"
          console.log(username + website);
     }
    //  console.log(website);
}

// console.log(username);


//++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
     return num + 1;
}

// addTwo(5) // this give error bcz of syntax used is differnt to declare function (hoisting)

const addTwo = function(num){
    return num + 2;
}
addTwo(5)
