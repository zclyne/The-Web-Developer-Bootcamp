//method 1
var isPurple = false;
document.querySelector("button").addEventListener("click", function() {
	//document.querySelector("body") is equivalent to document.body
	//body is a shortcut built into the document
	if (!isPurple) document.body.style.background = "purple";
	else document.body.style.background = "white";
	isPurple = !isPurple;
});

//method 2
//define a css class
document.querySelector("button").addEventListener("click", function() {
	document.body.classList.toggle("purple");
});