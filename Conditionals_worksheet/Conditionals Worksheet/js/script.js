// Yolanda Siegrist 10/13/13 Conditionals Worksheet

// Group 1: Expressions with Conditionals
// Celsius to Fahrenheit Converter
var tempDeg = prompt("Please enter the temperature"); // Enter the temperature you want to convert
var unitDeg = prompt("What unit would you like to use? Please put F for Fahrenheit or C for Celsius."); // Enter the unit of degree you want to use

var answerF = (tempDeg * (9/5) + 32); // Formula to convert Fahrenheit to Celsius
var answerC = ((tempDeg -32)* 5/9); // Formula to convert Celsius to Fahrenheit

if (unitDeg == "F" || unitDeg == "f"){ // Enables the use of capital or lower case letter F
    console.log("The temperature is" + " " + answerF + " " + "degrees Celsius"); // Results for tempDeg converted from Fahrenheit to Celsius
}
else if (unitDeg == "C" || unitDeg == "c"){ // Enables the use of capital or lower case letter C
    console.log("The temperature is" + " " + answerC + " " + "degrees Fahrenheit"); // Results for tempDeg converted from Celsius to Fahrenheit
}

// Group 2: Multiple Results
// Grade Letter Calculator
var myGrade = prompt("Please enter your grade percentage:"); // Enter number of grade percentage

if (myGrade >= 95 && myGrade <= 100) { // Grade percentage has to be between 95 and 100
    console.log("You have a" + " " + myGrade + "%, which means you have earned an A+ in the class!"); // Results print for an A+
}
if (myGrade >= 90 && myGrade <= 94) { // Grade percentage has to be between 90 and 94
    console.log("You have a" + " " + myGrade + "%, which means you have earned an A in the class!"); // Results print for an A
}
if (myGrade >= 85 && myGrade <= 89) { // Grade percentage has to be between 85 and 89
    console.log("You have a" + " " + myGrade + "%, which means you have earned an B+ in the class!"); // Results print for an B+
}
if (myGrade >= 80 && myGrade <= 84) { // Grade percentage has to be between 80 and 84
    console.log("You have a" + " " + myGrade + "%, which means you have earned an B in the class!"); // Results print for an B
}
if (myGrade >= 76 && myGrade <= 79) { // Grade percentage has to be between 76 and 79
    console.log("You have a" + " " + myGrade + "%, which means you have earned an C+ in the class!"); // Results print for an C+
}
if (myGrade >= 73 && myGrade <= 75) { // Grade percentage has to be between 73 and 75
    console.log("You have a" + " " + myGrade + "%, which means you have earned an C in the class!"); // Results print for an C
}
if (myGrade >= 70 && myGrade <= 72) { // Grade percentage has to be between 70 and 72
    console.log("You have a" + " " + myGrade + "%, which means you have earned an D in the class!"); // Results print for an D
}
if (myGrade >= 0 && myGrade <= 69) { // Grade percentage has to be between 0 and 69
    console.log("You have a" + " " + myGrade + "%, which means you have earned an F in the class!"); // Results print for an F
}

// Group 3: Multiple Conditions
// Movie Ticket Price
var movieTime = prompt("What time is the movie?"); // Enter in the time of the movie
var customerAge = prompt("What is your age?"); // Enter in the customer's age
var ticketPrice = 12; // Original price for the movie ticket
var discountPrice = 7; // Discounted price for the movie ticket

if (customerAge >= 55) { // If customer is aged 55 or above console.log will print
    console.log("The ticket price is" + " " + discountPrice); // Results print discounted ticket price if this line is true
}
else if (customerAge < 10){ // If customer is aged under 10 console.log will print
    console.log("The ticket price is" + " " + discountPrice); // Results print discounted ticket price if this line is true
}
else if (movieTime >= 3 && movieTime <= 5){ // Exception to the above statements is if movie time is between 3 and 5
    console.log("The ticket price is" + " " + discountPrice); // Results print discounted ticket price if this line is true
}
else {
    console.log("The ticket price is" + " " + ticketPrice); // Results print if all above statements are false
}
