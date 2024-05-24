//singleton- objects using constructor

// const tinderUser = new Object() //singleton obj
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firtsname: "Om",
            lastname: "Vishwakarma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firtsname); //fullname? for protection - if the value exists (using if else statement)


// merging to objects

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj3 = {obj1,obj2} // objects in objects
// const obj3 = Object.assign( obj1 ,obj2) // not a generalised format


// const obj4 = Object.assign( {}, obj1 ,obj2,obj3) 
// // syntax obj = Object.assign(target ,source1,source2,...)  All sources get copied in target

// console.log(obj1 === obj4);

// {}= empty object

const obj4 = { ...obj1, ...obj2, ...obj3 } // using spread operation
// console.log(obj4);

//onjects in an array
const user = [
    {
        id: 1,
        name: "Sammy"
    },
    {
        id: 2,
        name: "Rocky"
    },
    {
        id: 3,
        name: "Harry"
    },
]

user[0].id

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // prints as an array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // transform each value into an array

// //to ask system , object has this value or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //returns boolean value

const course = {
    cousrename : " Js in Hindi",
    fee : "999",
    courseInstructor : "Om Vishwakarma"
}
//Destructuring
course.courseInstructor; // to access the value

//method 2  syntax ~ const {valueToBeAccessed} = objectName
//can be reammed syntax ~ const {valueToBeAccessed : new name} = objectName
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);



//API JSON
//JSON
// {
//     "name" : "OmVishwakarma",
//     "coursenmae" : "JvaScript",
//     "price" : "free"

// }

// can be as arrays also
// [
//     {},
//     {},
//     {}
// ]
