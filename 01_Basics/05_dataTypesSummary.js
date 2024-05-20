//JavaScript is Statically typed or Dynamically typed

//Primitive

// 7 types : String , Number , Boolean , undefined , Symbol ,BigInt

const score = 335
const Newscore = 335.54


const isLoggedIn = false
const outsidetemp = null // type= object
let userEmail; //undefined

// console.log(typeof outsidetemp); //object

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);  //false

const bigNumber = 432145421241511452n
// console.log(typeof bigNumber);  // bigint



// Reference type or Non-Primitive
//Arrays ,Objects , Functions
//Array
const heros = ['Shaktiman', "Naagraj" , "Doga"];
//Objects

let myObj = {
    name :"Om",
    age : "22"
}

//function as a variable

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction); // object functions



//************stack(Primitive) and heap(Non-Primitive************

let userOne = {
    email : "OM@google.com",
    upi : "user@pay"

}

let userTwo = userOne
userTwo.email = "User@gamil.com"
console.log(userOne.email);
console.log(userTwo.email);