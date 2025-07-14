var userName = "Moazzem Hossain";
var income = 5000;

let rent = 1200;
let groceries = 600;
let transport = 200;
let entertainment = 300;
var Expense = rent + groceries + transport + entertainment;

document.write("Total Income: $" + income + "<br>");
document.write("Total Expense: $" + Expense + "<br>");

var textdeduct = income * (10/100);
document.write("Text Deducted (10%) : $" + textdeduct + "<br>");

var NetIncome = income - textdeduct;
document.write("Net Income After Tex: $" + NetIncome + "<br>");

var RemBalance = (income - (Expense + textdeduct));
document.write("Remaining Balance: $" + RemBalance + "<br>");

var Savings = RemBalance * (20/100);
document.write("Savings (20% of balance): $" + Savings);