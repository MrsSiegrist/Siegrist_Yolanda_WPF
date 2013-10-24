// Yolanda Siegrist 10/22/2013 Functions Assignment - Personal

// Calculating total area of my home

var myHome = calcArea(16,72,12); // Information to be used for width, length, and height

function calcArea(width,length,height){ // Function for calculating area mass
    var area = width * length * height; // Formula to find total area mass of my home
    return area; // Function is spitting out the calculated information
}
console.log("My home's total area is " + myHome + " square feet"); // Total area mass of my home
