// const userEmail ="OK@email.com"
const userEmail = []
if (userEmail) {
    console.log(`Got an Email`);
} else {
    console.log(`Don't have an email`);

}

//Falsy values
// false , 0 ,-0, BigInt 0n ,null , "" ,undefined , NaN

// truthy values
// '0' , 'false' , " ", [] , {} ,function(){} ... empty obj/array/func


// if (userEmail.length === 0) {
//     console.log(`Array is empty`);
// } 




const emptyObj = {}
if ((Object.keys(emptyObj)).length === 0) { // (Object.keys(emptyObj))~returns an array
    console.log(`Object is empty`);
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // sometimes we get two results , so in order to avoid null and undefined ,we use this operator
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = undefined ?? null //***********Returns ~ null************
 val1 = undefined ?? 6 ?? 9


// console.log(val1);


//**********Terniary Operator**************

const iceTeaPrice = 100;
(iceTeaPrice <=80)? console.log(`Less than 80`) : console.log(`Greater than 80`);