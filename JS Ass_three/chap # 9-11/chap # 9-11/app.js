//***** CHAPTER # 9-11 *****\\
// Question # 1

/*
var cityName = prompt("Enter Your city Name:")
if (cityName === "Karachi") {
    document.write("<h1> Welcome to the city of lights </h1>")
}
*/

// Question # 2
/*
var gender = prompt("<h1> Enter your Gender:</h1>")
if (gender === "male") {
    document.write("<h1> Good Morning Sir! </h1>")
}
if (gender === "female") {
    document.write("<h1> Good Morning Ma'am! </h1>")
}
*/

// Question # 3
/*
var signalColor = prompt("Enter a Color: ")
if (signalColor === "red") {
    document.write("<h1> Must stop! </h1>")
}
if (signalColor === "yellow") {
    document.write("<h1> Ready to move... </h1>")
}
if (signalColor === "green") {
    document.write("<h1> Move now... </h1>")
}
*/

// Question # 4
/*
var fuel = prompt("Enter the remaining fuel in liter:")
if (fuel <= "3 liter") {
    document.write(" <h1> Please Refill the fuel in your car! </h1> ")
}
*/

// Question # 5

/*
//a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//it Runs 

//b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//Not Runs 


//c.

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

//condition 2 and 4 runs


//d.

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

//it Runs

//e.

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

//True Runs


//f.

if ("car" < "cat") {
    alert("car is smaller than cat");
}

//It Runs

*/


// Question # 5

/*
var sub1 = prompt("Enter Subject 1")
var sub2 = prompt("Enter Subject 2")
var sub3 = prompt("Enter Subject 3")
var marks1 = +prompt("Enter Marks of " + sub1)
var marks2 = +prompt("Enter Marks of " + sub2)
var marks3 = +prompt("Enter Marks of " + sub3)
var obtainedMarks = marks1 + marks2 + marks3
obtainedMarks = Number.parseInt(obtainedMarks)
var totalMarks = 300
var percentage = (obtainedMarks / totalMarks * 100)

document.write("<h1>" + "MarkSheet" + "</h1>" + "<br><br>")
document.write("Total Marks: " + totalMarks + "<br>")
document.write("Marks Obtained: " + obtainedMarks + "<br>")
document.write("Percentage: " + percentage + "%" + "<br>")

// Grades

if (percentage >= 80) {
    document.write("Grade: " + "A+" + "<br>")
}
if (percentage >= 70 && percentage < 80) {
    document.write("Grade: " + "A" + "<br>")
}
if (percentage >= 60 && percentage < 70) {
    document.write("Grade: " + "B" + "<br>")
}
if (percentage >= 50 && percentage < 60) {
    document.write("Grade: " + "C" + "<br>")
}
if (percentage < 50) {
    document.write("Grade: " + "Fail" + "<br>")
}

// Remarks

if (percentage >= 80) {
    document.write("Remarks: " + "You Learned very Well" + "<br>")
}
if (percentage >= 70 && percentage < 80) {
    document.write("Remarks: " + "You are Good Student")
}
if (percentage >= 60 && percentage < 70) {
    document.write("Remarks: " + "Nice but learn more")
}
if (percentage >= 50 && percentage < 60) {
    document.write("Remarks: " + "Work Hard")
}
if (percentage < 50) {
    document.write("Remarks: " + "Better luck next time")
}
*/

// Question # 7
/*
var secretNum = 7
var guessNum = +prompt("Guess the Secret Number:")
if (guessNum === secretNum) {
    document.write("<h1>" + "Bingo! Correct answer.." + "</h1>")
}
if (guessNum === ++secretNum) {
    document.write("<h1>" + "Close enough to the correct answer.." + "</h1>")
}
*/

// Question # 8

/*
var num = +prompt("Enter a Number:")
if (num % 3 == 0) {
    document.write("This Number is Divisible by 3..")
}
if (num % 3 !== 0) {
    document.write("This Number is not Divisible by 3..")
}
*/

// Question # 9

/*
var num = +prompt("Enter a Number:")
if (num % 2 == 0) {
    document.write("This Number is Even")
} else {
    document.write("This number id Odd")
}
*/

// Question # 10

/*
var num = +prompt("Enter a Number..")
if (num > 40) {
    document.write("It is too hot outside")
}
if (num > 30 && num < 40) {
    document.write("The weather today is Normal")
}
if (num > 20 && num < 30) {
    document.write("Today Weather is cool")
}
if (num > 10 && num < 20) {
    document.write("OMG! Today's weather is so cool")
}
*/

// Question # 11
/*
var num1 = +prompt("Enter first Number:")
var opt = prompt("Enter Operator:")
var num2 = +prompt("Enter second Number:")

if (opt == "+") {
    document.write("The sum is: " + (num1 + num2) + "<br>")
}
if (opt == "-") {
    document.write("The Subtraction is: " + (num1 - num2) + "<br>")
}
if (opt == "*") {
    document.write("The Multiplication is: " + (num1 * num2) + "<br>")
}
if (opt == "/") {
    document.write("The sum is: " + (num1 / num2) + "<br>")
}
if (opt == "%") {
    document.write("The Remainder is: " + (num1 % num2) + "<br>")
}
*/


//