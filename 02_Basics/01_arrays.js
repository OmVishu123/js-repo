//Array(objects)

const myArr= [2,3,6,5,6,1,4]
const myHeros= ["Ironman", "Shaktiman"]
const myArr2= new Array(1,2,3,4,5,6)
// console.log(myArr);
// console.log(myArr[8]);
// console.log(myArr2);
// console.log(myHeros);

//Array methods

// myArr.push('jsncjn'); //add an element to the array from last
// myArr.pop(); //Removes element from last
// myArr.shift(); //Removes the first element
// myArr.unshift(10)

const newArr= myArr.join() //converts array into string

// console.log(typeof myArr);
// console.log(typeof newArr);



//slice and splice

// console.log("A " , myArr)
// const myn1 = myArr.slice(1,3) //
// // console.log(myn1)
// console.log("B " , myArr)

// const myn2 = myArr.splice(1,3) //includes both element from the described range and removes selected elements from the array
// console.log(myn2)
// console.log("C " , myArr)

console.log(myArr.sort());