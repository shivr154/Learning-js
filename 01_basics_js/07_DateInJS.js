// Dates 

let myDate = new Date()
console.log(typeof myDate)// Object

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2023, 0, 24,3,5,32) // Format(Year,Month,Date,hr,min,sec) Month starts from 0(jan)
// let myCreatedDate = new Date("2023-01-14") // format("YY-MM-DD")
let myCreatedDate = new Date("1-14-2023") // Format("MM-DD-YY") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now() // timeStamp in milliSecond
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)) // to convert ms into sec

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());// starts from 0(jan)
console.log(newDate.getDay());// starts from Monday

// console.log(` ${newDate. getDay()} and the date`)

newDate.toLocaleString('default',{
    // ctrl+space to get suggestions
    weekday :"long",
    // hour12 : 
})


