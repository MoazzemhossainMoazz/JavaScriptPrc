var num1 = prompt("Enter num1: ");
var num2 = prompt("Enter num2: ");
var num3 = prompt("Enter num3: ");

if(num1 > num2 && num1 > num3)
    console.log("Large number is: " + num1);
if(num2 > num3 && num2 > num1)
    console.log("Large number is: " + num2);
if(num3 > num1 && num3 > num2)
    console.log("Large number is: " + num3);