// Yolanda Siegrist 10/7/13 Expressions Worksheet

// Dog Years
var dogAge = 7; // Age in Dog years
var humanAge = 1; // Age in Human years
console.log("Sparky is" + " " + humanAge + " " + "human years old which is" + " " + dogAge + " " + "in dog years."); // Results of Sparky's age


// Slice of Pie Part I
var numberStudents = 12; // Number of students at the party
var numberPizzas = 5; // Number of pizza ordered for the party
var numberSlices = 8; // Number of slices per pizza ordered
var totalSlices = numberPizzas * numberSlices / numberStudents; // Amount of pizza each student ate.
console.log("Each person ate" + " " + totalSlices + " " + "slices of the pizza"); // Results of the pizza party

// Slice of Pie Part II
var dogsTreat = numberStudents / 3; // Amount of pizza leftover for Sparky
console.log("Sparky got" + " " + dogsTreat + " " + "slices of pizza"); // Results for Sparky's treat

// Average Shopping Bill
var shoppingBills = [200,250,275,250,200]; // Amount of shopping bills for 5 weeks
var shoppingTotal = shoppingBills[0] + shoppingBills[1] + shoppingBills[2] + shoppingBills[3] + shoppingBills[4]; // Total of shopping bills
console.log("You have spent a total of" + " " + "$" + shoppingTotal + " " + "on groceries over 5 weeks. That is an " +
"average of" + " " + "$" + shoppingTotal / 5 + " " + "per week."); // Results of the total and average shopping bills

// Discounts
var startPrice = 299; // Starting price for item
var discPercent = 10; // Percent of discount for item
var salesTax = .08; // Sales Tax for item
var itemName = "iPhone5s"; // Name of item for purchase
var discPrice = startPrice * discPercent; // Finding the discount amount for item
var totalDiscPrice = discPrice / startPrice; // Total amount of discount for item
var withoutTax = startPrice - totalDiscPrice; // Price for item after discount before taxes 
var withTax = withoutTax * salesTax; // Price of item's sales taxes
var totalCost = withoutTax + withTax; // Total cost of the item after sales taxes added
console.log("Your" + " " + itemName + " " + "was originally" + " " + "$" + startPrice + "," + " " + "but after a" + " "
+ discPercent + "%" + " " + "discount, it is now" + " " + "$" + withoutTax + " " + "without tax, and" + " " + "$" +
totalCost + " " + "with tax."); // Results of item's original cost, amount of discount, amount after discount applied before taxes, and amount with taxes added
