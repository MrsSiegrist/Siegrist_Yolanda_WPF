// Yolanda Siegrist 10/12/13 Conditionals Worksheet

// Group 1: Expressions with Conditionals
// Celsius to Fahrenheit Converter
var tempDeg = prompt("Please enter the temperature");
var unitDeg = prompt("What unit would you like to use? Please put F for Fahrenheit or C for Celsius.");

var answerF = (tempDeg * (9/5) + 32);
var answerC = ((tempDeg -32)* 5/9);

if (unitDeg == "F" || unitDeg == "f"){
    console.log("The temperature is" + " " + answerF + " " + "degrees Celsius")
}
else if (unitDeg == "C" || unitDeg == "c"){
    console.log("The temperature is" + " " + answerC + " " + "degrees Fahrenheit")
}

// Group 2: Multiple Results
// Grade Letter Calculator
var myGrade = prompt("Please enter your grade percentage:");

if (myGrade >= 95 && myGrade <= 100) {
    console.log("You have a" + " " + myGrade + "%, which means you have earned an A+ in the class!")
}
if (myGrade >= 90 && myGrade <= 94) {
    console.log("You have a" + " " + myGrade + "%, which means you have earned an A in the class!")
}
if (myGrade >= 85 && myGrade <= 89) {
    console.log("You have a" + " " + myGrade + "%, which means you have earned an B+ in the class!")
}
if (myGrade >= 80 && myGrade <= 84) {
    console.log("You have a" + " " + myGrade + "%, which means you have earned an B in the class!")
}
if (myGrade >= 76 && myGrade <= 79) {
    console.log("You have a" + " " + myGrade + "%, which means you have earned an C+ in the class!")
}
if (myGrade >= 73 && myGrade <= 75) {
    console.log("You have a" + " " + myGrade + "%, which means you have earned an C in the class!")
}
if (myGrade >= 70 && myGrade <= 72) {
    console.log("You have a" + " " + myGrade + "%, which means you have earned an D in the class!")
}
if (myGrade >= 0 && myGrade <= 69) {
    console.log("You have a" + " " + myGrade + "%, which means you have earned an F in the class!")
}

// Group 3: Multiple Conditions
// Movie Ticket Price
var movieTime = prompt("What time is the movie?");
var customerAge = prompt("What is your age?");
var ticketPrice = 12;
var discountPrice = 7;

if (customerAge >= 55) {
    console.log("The ticket price is" + " " + discountPrice);
}
else if (customerAge < 10){
    console.log("The ticket price is" + " " + discountPrice);
}
else if (movieTime >= 3 && movieTime <= 5){
    console.log("The ticket price is" + " " + discountPrice);
}
else {
    console.log("The ticket price is" + " " + ticketPrice);
}
