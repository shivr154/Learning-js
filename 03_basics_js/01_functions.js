function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
}

// sayMyName; // this is only reference of function
// sayMyName(); // by adding parenthesis () function is executed

function addTwoNumber(number1, number2){  //  numb1 and numb2 are ->parameter
    console.log(number1 + number2);
}

function addTwoNumber(number1, number2){  //  numb1 and numb2 are ->parameter
    let result11 = number1 + number2
    return result11
    console.log(number1+number2); // return ke baad kuch bhi execute nhi hota
}

const result = addTwoNumber(3,5); // 3 and 5 are ->arguments

// console.log("Result: ",result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Shivam"));
// console.log(loginUserMessage()); // it return undefined


//----------------- Functions with Object -----------------

function calculateCartPrice(...num1){ // ...rest operator
      return num1
}

// console.log(calculateCartPrice(100,200,300,4500,453252));




const user = {
    username : "shivam",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username : "shiv",
    price: 3413

})

const myNewArr = [200,400,500,420]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,300,4005,133413]));


