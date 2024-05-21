const marvels_Heros = [ "Thor","Ironman","Spiderman"]
const dc_Heros = ["Superman" , "Batman" , "Flash"]
const ind_heros = ["Shaktiman", "Naagraj"]
// marvels_Heros.push(dc_Heros) // Takes dc_Heros array as a single element
// console.log(marvels_Heros);
// // to access individual element
// console.log(marvels_Heros[3][2]);

//Concat

// const newArr = marvels_Heros.concat(dc_Heros,ind_heros)
// // const newArr = marvels_Heros.concat(dc_Heros).concat(ind_heros)
// // Adds two or more Arrays
// console.table(newArr);


//Spread operator ...
const all_new_Heros = [...marvels_Heros,...dc_Heros,...ind_heros]
// console.log(all_new_Heros);

//flat
const anotherArray = [1,2,3,[4,5,6] , 7,8,[5,6,[7,8,10]]]

const real_another_array = anotherArray.flat(Infinity) //we can define the depth or use Infinity like flat(2)
console.log(real_another_array);

//To Check if it is an array
console.log(Array.isArray("OmVishu"))
//To convert string into an  array
console.log(Array.from("OmVishu"))
console.log(Array.from({name : "OmVishu"}))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))