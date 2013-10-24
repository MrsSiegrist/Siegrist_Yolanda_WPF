// Yolanda Siegrist 10/22/2013 Functions Assignment - Industry

// Calculating your gross weekly salary

var calculateSalary = function(hoursWorked,payPerHour){ // Function for calculating gross weekly salary
    var salary = hoursWorked * payPerHour; // Formula for finding the gross weekly salary
    return salary; // Function is spitting out the calculating the information
};

var a = calculateSalary(40,12); // Calculating 40 work hours by $12 per hour
var b = calculateSalary(30,8); // Calculating 30 work hours by $8 per hour
var c = calculateSalary(20,10); // Calculating 20 work hours by $10 per hour

console.log("Your gross income for this week is: $" + a); // Result print for variable a
console.log("Your gross income for this week is: $" + b); // Result print for variable b
console.log("Your gross income for this week is: $" + c); // Result print for variable c