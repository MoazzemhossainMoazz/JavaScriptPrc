var mark = parseInt(prompt("Enter a grade: "));

if(mark > 80)
    document.write("A+");
else if(mark > 70)
    document.write("A");
else if(mark > 60)
    document.write("A-");
else if(mark > 50)
    document.write("B");
else if(mark > 40)
    document.write("C");
else if(mark > 33)
    document.write("D");
else
document.write("Fail");