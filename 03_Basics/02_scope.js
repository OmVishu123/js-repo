
let a = 300
{
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner : " , a);
}

// console.log("Outer : ",a);
// console.log(b);
// console.log(c); // var is scope independent , so its value will be changed accordingly



function one() {
    username = "Om"
    function two() {
        website = "YouTube"
        // console.log(username);
    }
    // console.log(website);  out of defined scope
    two()
}
one()


//Functions

function addOne(num) {
    return num + 1;
}
addOne(7)

//expression type ~ function declared as a variable 
addTwo(5) // will give an error
const addTwo = function (num) {
    return num + 2;
}