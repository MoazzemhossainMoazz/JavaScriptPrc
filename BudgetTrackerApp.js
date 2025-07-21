
var userName = prompt("Enter a user name: ");
var income = prompt("Total income: ");
var NumberofExpenses = parseInt(prompt("How many expenses do you have: "));

if(isNaN(income) || isNaN(NumberofExpenses) || income <= 0 || NumberofExpenses < 0)
    console.log("Invalid input, please enter valid numbers.");
else{
    let totalExpenses = 0;
    for(let i=1; i<=NumberofExpenses; i++){
        let expense = parseFloat(prompt(`Enter expense ${i}: `));

        if(isNaN(expense) || expense < 0){
            console.log(`Invalid input for expense ${i}`);
            expense = 0;
        }
        totalExpenses += expense;
    }

    
console.log("Total Income: $" + income );
console.log("Total Expense: $" + expense );

var textdeduct = income * (10/100);
console.log("Text Deducted (10%) : $" + textdeduct + "<br>");

var NetIncome = income - textdeduct;
console.log("Net Income After Tex: $" + NetIncome + "<br>");

var RemBalance = (income - (expense + textdeduct));
console.log("Remaining Balance: $" + RemBalance + "<br>");

var Savings = RemBalance * (20/100);
console.log("Savings (20% of balance): $" + Savings + "<br>");

if (Savings >= 1000)
    console.log("Excellent" + "<br>");
else if(Savings >500 && Savings < 999)
    console.log("Good" + "<br>");
else if(Savings >100 && Savings < 499)
    console.log("Needs Improvement." + "<br>");
else if(Saving < 100)
    console.log("Critical" + "<br>");

var overSpendingMessege = '';
if(totalExpenses > income){
    console.log("Warning!! Over Expense");
}
    

console.log(`User: ${userName}`);
console.log(`Total income: $${income}`);
console.log(`Total expense: $${totalExpenses}`);
console.log(`Text deduct: $${textdeduct}`);
console.log(`Net income: $${NetIncome}`);
console.log(`Balance: $${RemBalance}`);
console.log(`Svaing: $${Savings}`);


}

