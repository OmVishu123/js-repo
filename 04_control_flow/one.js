//if
//if-else
// const score = 200
// if (score > 100) {
//     let power = "fly" // do not use var , because it has fully global scope
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`); // power is out of scope

const balance = 1000
// if (balance > 500) console.log("test"),console.log("Not a good practice");


const isLoggedIn = true
const debitCard =true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (isLoggedIn && debitCard) {
    console.log(`Allowed to buy items`);
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log(`Logged In`);
}