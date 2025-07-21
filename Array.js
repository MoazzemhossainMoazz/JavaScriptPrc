var names = new Array(5);
names[0] = "Rakib";
names[1] = "Sakib";
names[2] = "Tamim";
names[3] = "Fahim";
names[4] = "Karim";
names[5] = "Rahim";
console.log(names[2]);
console.log(names[5]);
console.log(names);


var names = ["Rakib", "Sakib", "Tamim", "Fahim", "Rahim", "Karim"];
console.log("Length of names:");
console.log(names.length);
console.log("Show all names");
console.log(names);

names.push("Moazz");
names.push("Rafi");
console.log(names.length);
console.log(names);
console.log(names[6]);

names.pop();
console.log("After pop");
console.log(names.length);
console.log(names);

var country1 = ["Bangladesh", "Pakistan"];
var country2 = ["Nepal", "Katmondu"];

console.log("Before concate");
console.log(country1);
console.log(country2);
console.log("After concate");
var country = country1.concat(country2);
console.log(country);