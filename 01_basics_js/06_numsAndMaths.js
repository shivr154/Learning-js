const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);//.toString convert num into string
// console.log(balance.toFixed(2));// it is used to fixed decimal places have to give input value

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));// it returns string(gives priority to before decimal values)
const hundreds = 10345000
// console.log(hundreds.toLocaleString('en-IN'));// gives comma in btw number

// ****************** MATHS ***************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));// round off
// console.log(Math.ceil(4.3));// it round off based on upper value
// console.log(Math.floor(4.9));// it round off based on lower value
// console.log(Math.min(1,3,4,6,5));
// console.log(Math.max(3,43531,61363,1353,413,));

console.log(Math.random());// it give random value between [0,1]
console.log(Math.random() * 10 + 1);// used to avoid getting 0 and get value from 1 (to avoid value like 0.04)
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;
// formula 
console.log(Math.floor(Math.random() * (max-min + 1)) + min);// added min so we get atlest min value
 



