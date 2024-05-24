//when object is made using constructor it is called singleton ~ only one of its type

//objects can be created by literals or constructor

//object literals
//object syntax~ data_type name = {argument} object its stored in {}
const mySym = Symbol("key1")
const JsUser = {
    name: "Om", // name is stored as "name" (for all)
    "full name": "Om Vishwakarma",
    // mySym: "mykey1", // not used as a symbol
    [mySym]: "myKey1", //used as a symbol
    age: 21,
    location: "Varansi",
    email: "Om@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email); // not a good approach
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // use square brackets

//changing the value of object
JsUser.email = "OmNew@chatgpt.com"
//to restrict changes in object use freeze
// Object.freeze(JsUser)
JsUser.email = "OmNew@microsoft.com" // will not be applied
console.log(JsUser);
console.table(JsUser);

//Adding function in object
JsUser.greetings = function () {
    console.log("Hello JS user");

}
JsUser.greetingsTo = function () {
    console.log(`Hello JS user , ${this.name}`); //string interpulation

}
// console.log(JsUser.greetings); //Referal of function
console.log(JsUser.greetings());// here we declared JsUser.greetings() as a function
console.log(JsUser.greetingsTo());