// for of loop // used for iterating array
// for (const iterator of object) {
    
// }

//["", "", ""]  array of string
// [ {}, {} ,{}]  array of object

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// MAPS

const map = new Map()
map.set('IN', "INDIA")
map.set("USA", "United State Of America")
map.set('fr',"France")
map.set("IN","India")// key should be unique ,map dnt store duplicate value

// console.log(map);

for (const key of map) {
    // console.log(key); // this prints whole object
}

// this syntax for printing adjacent key and val 
for (const [key,val] of map) { // [key,val] syntax
    // console.log(key,":-",val);
}

const myObject = {
     game1 : "NFS",
     game2 : "spiderman"
}

// for (const iterator of object) { // this dnt work
//     console.log(key,"-:",val);
// }



