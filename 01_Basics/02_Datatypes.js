"use strict"; // treat all JS code as newer version

// alert(3+3) cannot use in nodejs
console.log(3+3);
let name = "Om"
let age = 19 ;
let isLoggedIn = false
let  state ;
//Primitive Data Types
/*
number  => 2 to power 53
bigint
string =< ""
boolean => true / false
null => stand alone value
undefined 
symbol => for uniqueness
*/

console.log(typeof "Om");
console.table([typeof age,typeof name,typeof isLoggedIn,typeof state,typeof null ,typeof undefined])  //null is an object( inspite being a data type on its own)
