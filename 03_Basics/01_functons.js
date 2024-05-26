function sayMyName() {
    console.log("O")
    console.log("m")
}

sayMyName // Reference of function ~ function present hai
// sayMyName() // calling a function

// function Addition(number1, number2){
//    console.log(number1+number2);
// }
function Addition(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
Addition(4, 5);
Addition(4, "5");
Addition(4, "a");
Addition(4, null);
const result = Addition(4, 5);
// console.log("Result : ", result);

function loginUserMessage(username) {
    if (!username) {             //only executes true statement
        console.log("Please enter a username");    //undefined = false, // "" = false
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Om"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());//undefined

// use of rest operator ...  => returns an array
function calculateCartPrice(val1, val2, ...num1) {              //val1 = 100 ,val2 =200 
    return num1;
}
// console.log(calculateCartPrice(100,200,300,2000)); 


// Passing Objects in a function
const user = {
    username: "Om Vishwakarama",
    price: 199
}
function ObjectHandling(anyObject) {
    console.log(`The username is ${anyObject.username} and the course price is ${anyObject.price}`);
}

// ObjectHandling(user)
// ObjectHandling({
//     username: "Sam",
//     price:399
// })

//Passing arrays in a function
const myNewArray = [200,400,300,1000]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,500,1000,8000,600000]));
