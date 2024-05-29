const user = {
    username: "Om",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the website.`); // this: current context i.e, targets the value defined within the scope
        console.log(this); //works in the defined object
    }
}

// user.welcomeMessage()
// user.username= "Sam"
// user.welcomeMessage() 
// console.log(this); // works in the global context {} an empty object
// //In browser we get windows object on consoling 'this'


// function coffee() {
//     let username = "Om"
//     console.log(this.username); // cannot access elements in the function like this, can access elements in objects
// }
// coffee()


// *************************arrow function******************************


// const coffee1 = () => {
//     console.log(this); // an empty element
// }
// coffee1()

//***********************Explicit Return*****************
//in this type of function we have to use return
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(4, 5));

//********Implicit Return*********

// const addthree = (num1, num2, num3) => num1 + num2 + num3
// console.log(addthree(2,6,5));

// const obj1 = () => {username : "Om"} //Will not work~ output:Undefined


const obj1 = () => ({username : "Om"})
console.log(obj1());