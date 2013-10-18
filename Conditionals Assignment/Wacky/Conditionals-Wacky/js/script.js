// Yolanda Siegrist 10/16/2013 Conditionals Assignment - Wacky

var favColor = "purple"; // Plugging in the answer to my favorite color
var colorGuess = prompt("Can you guess my favorite color?"); // Asking user to guess a color

if (colorGuess ==null || colorGuess =="") // If user inputs nothing a message pops up
    {
        alert("Come on, Take a guess!"); // This is the message the user will see if they don't input anything
    }
else if (colorGuess === favColor) // If the color guessed equals to my favorite color
    {
    console.log("Congrats! You guessed my favorite color!"); // Message sent if answered correctly
    }
else {
    console.log("Sorry, but that's not it"); // Message sent if answered wrongly
}

