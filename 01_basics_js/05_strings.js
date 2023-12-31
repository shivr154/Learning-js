const name = "shivam"
const repoCount = 50

// console.log(name.length)
// console.log(name.toUpperCase());

// console.log(name + repoCount + " value");
 
// IMP--> string interpolation(this is the way we should use to write string)
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shiv-am-R')

console.log(typeof gameName); // object
console.log(gameName); // [String: 'Shiv-am-R']
console.log(gameName[1]); // h
console.log(gameName.__proto__); // {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));

// const newString = gameName.substring(0,5)
// console.log(newString);

// const anotherString = gameName.slice(-4,5)
// console.log(anotherString);

// const newStringOne = "   Shivam   "
// console.log(newStringOne);
// console.log(newStringOne.trim());// it trims spaces from start and end of string

// const url = "https://ShivamRathi.com/shivam%20Rathi"
// console.log(url.replace('%20', '-')); // used to replace string

// console.log(url.includes('ash'));// it give true or false

// console.log(gameName.split('-'));// it gives array of split strings

