// truthy values means they are assumed to be true
// falsy values means they are assumed to be false
const userEmail = []

if (userEmail) {
    console.log("got userEmail");
}
else{
    console.log("dnt get email");
}

// falsy value
// false, 0 ,-0, BigInt 0n, "", null, undefinde, NaN

// truthy value (except all value of falsy all are truthy)
//  "0", 'false', " ",[], {}, function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
      console.log("object is empty");
}

// Nullish Coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 30

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");


