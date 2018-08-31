var input = prompt("Guess a number:");
var num = 7;
// === cannot be used here because when you type in a number, it will be changed into a string
// Number(input) can change the input into a number
if (Number(input) === num) {
	alert("You guessed it.");
}
else if (Number(input) < num) {
	alert("Too low. Try again.");
}
else {
	alert("Too high. Try again.");
}