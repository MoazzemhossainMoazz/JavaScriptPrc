// // Find Positive or Negetive or Zero value 
// var number = Number(prompt("Enter a number: "));
// number > 0 ? console.log("Positive") : number<0? console.log("Negative") : console.log("Zero");


//Find largest value 
var num1 = parseInt(prompt("Enter num1: "));
var num2 = parseInt(prompt("Enter num2: "));
var num3 = parseInt(prompt("Enter num3: "));

var max = (num1 > num2) 
? (num1 > num3 ? num1 : num3) 
: (num2 > num3 ? num2 : num3) ;
console.log(max);







