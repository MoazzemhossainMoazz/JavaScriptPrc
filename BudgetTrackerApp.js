var userName = "Moazzem Hossain";
var income = 5000;
var userName = prompt("Enter a user name: ");
var income = prompt("Total income: ");
var NumberofExpenses = parseInt(prompt("How many expenses do you have: "));

for(i=1; i<=product; i++){
    product = 
    expense = expense +i;
}
let rent = 4200;
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
document.write("Savings (20% of balance): $" + Savings + "<br>");

if (Savings >= 1000)
    document.write("Excellent" + "<br>");
else if(Savings >500 && Savings < 999)
    document.write("Good" + "<br>");
else if(Savings >100 && Savings < 499)
    document.write("Needs Improvement." + "<br>");
else if(Saving < 100)
    document.write("Critical" + "<br>");

var overSpendingMessege = '';
if(Expense > income)
    document.write("Warning!! Over Expense");