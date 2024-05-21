//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);//object

let myCreatedDate1 =new Date(2024 , 11 , 13,0,0,0)
let myCreatedDate2 =new Date(2024 , 9 , 2,0,0,0)
let myCreatedDate3 =new Date("01-15-2023")
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

let anyDate = newDate.toLocaleString('default',{
    weekday: 'long'
})
console.log(anyDate);