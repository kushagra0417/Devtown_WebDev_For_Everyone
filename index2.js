console.log("Function Expression vs Decleration")

let a = 10;

sum(2,3)
//Function Decelaration 
function sum(a, b) {
    console.log(a+b)
}

sum(10, 30)
 

//Function Expression
let avg = function(a, b) {
    console.log((a+b)/2)
}

avg(10,10)