// singleton (agar literal se banege to singelton nhi banega)or(agar constructor se bnaege to singleton banega)

// constructor --> singleton , literals --> not singleton

// singleton means one of a type( apne jaisa sirf ek)

// Object.create -> constructor method,singelton

// --------------------------------------------------------------------
// Object literals Method

const mySym = Symbol("key1")

const JsUser = { 
    name : "Shivam",          // by default system process key as string " "
    "full name": "Shivam Rathi",
    [mySym] : "mykey1",  // to use symbol in object this is the syntax IMP  
    age : 19,
    email : "shivam@google.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Mondays","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // another syntax to access
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // syntax to access symbol from object

JsUser.email = "shivam@chatgpt.com"
// Object.freeze(JsUser) // it freezes changes in object
JsUser.email = "shivam@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
        console.log(`Hello JS User, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


