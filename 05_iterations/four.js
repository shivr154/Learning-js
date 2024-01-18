// for in loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in myObject) {
//    console.log(key);
}

// for (const key in myObject) {
//    console.log(`${key} -> ${myObject[key]}`); 
// }

const programming = ["js","rb","py","java","cpp"]

// for (const key in programming) {
//    console.log(key);  // programming[key] for getting value
// }

const map = new Map()
map.set('IN', "INDIA")
map.set("USA", "United State Of America")
map.set('fr',"France")
map.set("IN","India")// key should be unique ,map dnt store duplicate value

// console.log(map);
 // map is not iteratble this loop is not possible
// for (const key in map) {
//     console.log(key);
// }







