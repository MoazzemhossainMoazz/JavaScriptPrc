var num = 20;
var num2 = "hello";
var num3 = 3.2423;
var num4 = true;


console.log(typeof(num));
console.log(typeof(num2));
console.log(typeof(num3));
console.log(typeof(num4));


num = toString(num);
console.log(typeof(num));


var num = "20";
num = parseInt(num);
console.log(num);
console.log(typeof(num));


var num = "20.5";
num = parseFloat(num);
console.log(num);
console.log(typeof(num));


var num = 2.5678;
console.log(num.toFixed(1));
console.log(num.toFixed(2)); 
console.log(num.toPrecision(4)); //I want to show how many number



console.log(Number("12"));
console.log(typeof(Number("12")));
console.log(Number(true));
console.log(Number(false));

