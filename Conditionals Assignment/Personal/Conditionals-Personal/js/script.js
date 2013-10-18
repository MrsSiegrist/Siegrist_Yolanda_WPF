// Yolanda Siegrist 10/16/2013 Conditionals Assignment - Personal

var yourAge = prompt("How old are you?"); //Asking for your age
if (yourAge ==null || yourAge =="") // If user inputs nothing a message pops up
    {
    alert("Please enter in an age?"); // This is the message that appears if nothing typed in
    }
drinkingLimit = (yourAge <= 21) ? "Congrats, have a beer!" : "Sorry, your too young!"; // Results print either statement