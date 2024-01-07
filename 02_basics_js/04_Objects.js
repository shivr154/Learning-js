// const tinderUser = new Object()     // Singelton
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmial.com" ,
    fullname : {
        userfullname :{
               firstname :"shivam",
               lastname : "Rathi"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"} 
const obj2 = {3 : "a", 4 : "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1 , ...obj2} // spread

// console.log(obj3);

const users = [  // array ka object
    {
        id : 1,
        email : "shiv@gmail.com" 
    },
    {
        id : 2,
        email : "shiv1@gmail.com"
    },
    {
        id : 3,
        email : "shiv2@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // output is in array , used frequently in backend
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // array bnadete hai [[]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // return boolean



// Object destructring

const course = {
    coursename : "js in hindi",
    price : "999",
    courseTeacher : "hitesh"
}

// console.log(course.courseTeacher);
const {courseTeacher : teacher} = course

//  console.log(courseTeacher);
 console.log(teacher); // both give same result

//  const navbar = ({company}) => {

//  }

//  navbar(company = "hitesh")


// JSON (API) -> JSON(javaScript Object Notation)

// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// used JSON formatter to read api and understand them

[
    {},
    {},
    {}
]

// https://randomuser.me/api/ 


