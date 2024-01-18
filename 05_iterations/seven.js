// Map it also return value and iterate on every value unlike filter u can add conditional
const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map( (num) => num + 10 )

// const newNums = myNumers.map().map().filter() // chaining

const newNums = myNumers
.map( (num) => num*10 )
.map( (num) => num + 1 )
.filter( (num) => num >= 40 )

console.log(newNums);





