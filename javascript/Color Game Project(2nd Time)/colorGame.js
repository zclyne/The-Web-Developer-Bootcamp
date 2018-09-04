var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", reset);

function init()
{
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons()
{
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
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
            if (clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct!";
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
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change the colors of squares
    for (var i = 0; i < squares.length; i++)
    {
        if (colors[i])//visible
        {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else squares[i].style.display = "none";//not visible
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
 }

function changeColors(color)
{
    //loop through all squares
    for (var i = 0; i < colors.length; i++)
    {
        //change each color to match given color
        squares[i].style.backgroundColor = color;    
    }
}

function pickColor()
{
    var random = Math.random() * colors.length;//Math.random() will pick a number between 0 and 1, doesn't include 1
    random = Math.floor(random);//Math.floor() will chop off the remaining decimal point
    return colors[random];
}

function generateRandomColors(num)
{
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++)
    {
        //get random color and push into arr
        arr[i] = randomColor();
    }
    //return the array
    return arr;
}

function randomColor()
{
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);//255 should the the max, so *256
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}