// Yolanda Siegrist 10/22/2013 Functions Assignment - Wacky

// Santa Claus is coming to town!

var santaComing = prompt("Have you been Naughty, Nice or Unsure?"); // Prompt user to answer a question

if (santaComing == "Naughty" || santaComing == "naughty"){ // Formula for being "Naughty"
    console.log("You have been Naughty! Santa's going to put coal in your stocking!"); // Result print for being Naughty
}
else if (santaComing == "Nice" || santaComing == "nice"){ // Formula for being "Nice"
    console.log("You have been Nice! Santa's definitely coming to your house!"); // Result print for being Nice
}
else {
    console.log("It's OK! Santa knows if you have been Naughty or Nice!"); // Result print for anything other than Naughty or Nice
}
