const accountId = 12345
let accountEmail = "sggisg@gmail.com"
var accountPassword = "21r3r"
accountCity = "Delhi"
let accountState;

console.log(accountId)
// accountId = 34314 // changes not allowed when const keyword is used
accountEmail = "shivaM@sgg.com"
accountPassword ="3rwrsf"
accountCity = "UP"


/*
prefer to use let instead of var bcz of its issues in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]) 