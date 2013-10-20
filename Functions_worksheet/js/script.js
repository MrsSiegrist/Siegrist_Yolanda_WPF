// Yolanda Siegrist 10/20/2013 Functions Worksheet

// Calculate the circumference of a circle.

var circle = circumference(10); // Calculates the Circumference by calculating the Radius

function circumference(radius){ // Function for calculating the Circumference depending on the Radius
    var circumference = radius * 2 * 3.14; // Formula for finding the Circumference of a Circle from the Radius
    return circumference; // Function is spitting out the calculated information
}
console.log("The circumference of the circle is " + circle); // The total Circumference for the Circle

// Calculate how many bee stings are needed to kill an animal.

var toKill = beeStings(180);

function beeStings(weightVictim){ // Function for calculating depending on Victim's Weight
   var beeStings = weightVictim * 8.666666667; // Formula for finding the amount of Bee Stings it takes to kill the Victim
   return beeStings;  // Function is spitting out the calculated information
}
console.log("It takes " + toKill + " bee stings to kill this animal."); // The total amount of Bee Stings it takes to kill the Victim