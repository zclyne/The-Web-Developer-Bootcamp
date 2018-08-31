// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// 	];//notice the space here, it is important, the app won't work properly without the spaces
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init(); // everything that needs to run when the page loads

resetButton.addEventListener("click", function() {
	reset();
});

function init() {
	//modeButtons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons()
{
	for (var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares()
{
	for (var i = 0; i < squares.length; i++)
	{
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change colors of squares
	for (var i = 0; i < squares.length; i++)
	{
		if (colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
	//loop through all sqaures
	for (var i = 0; i < squares.length; i++)
	{
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}

//pick a random color
function pickColor() {
	//Math.random() picks a number between 0 and 1 and it doesn't include 1
	//Math.floor() get rid of the numbers after the decimal point
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//generate random colors
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++)
	{
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

//generate a random color
function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b + ")";
}