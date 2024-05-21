// concatenate
const name = "Om"
const repoCount = 50

// console.log(name + repoCount + " value");

//using backticks
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// declaration of string using objects(new)

const gameName = new String('GamingKing-This World is full of drama')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase().bold());
// //original string remains same
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('n'));

//substring
const newString = gameName.substring(0, 6) // cannot initialize with negative value
// console.log(newString)

const anotherString = gameName.slice(-8,8)
// console.log(anotherString);

const newStringOne = "  Om  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://OM.com/OmVish%20Vishu";
//replacing %20
console.log(url.replace('%20' , '-'));
console.log(url.includes('Om'));

//using split() to separate string into array
const sepratedString = gameName.split('-');
console.log(sepratedString);


