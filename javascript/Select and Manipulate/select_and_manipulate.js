var h1 = document.querySelector("h1"); // select h1 on the page, it returns an object that represents "My title" on the page and saves it in the variable h1
h1.style.color = "pink"; // manipulate

// one more example, change the background color every second between blue and white
var body = document.querySelector("body"); // select
var isBlue = false;
setInterval(function() { // manipulate
	if (isBlue) body.style.background = "white";
	else body.style.background = "#3498db";
	isBlue = !isBlue;
}, 1000); // call the function every 1 second