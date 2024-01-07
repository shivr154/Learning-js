// arrays (js array can be resizable and contain mix of different data types and zero indexed)
// it creates shallow copy (pass by refernce)

const myArr = [0,1,4,3,2,5]
const myHeroes = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // insert value at the starting of array
// myArr.shift()  // remove value from start of array
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

const newArr = myArr.join()// join and convert it into string


console.log(myArr);
console.log(newArr); 
console.log(typeof newArr); // string

// slice, splice

// slice --> it include range form starting value and dnt include last value and dont have a change in original array
// splice--> it include starting and ending value but it cut out the range from original array too


console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" ,myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
console.log("D" ,myArr)

