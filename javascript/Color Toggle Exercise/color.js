//method 1
var flag = false;
document.querySelector("button").addEventListener("click", function() {
	//document.querySelector("body") is equivalent to document.body
	//body is a shortcut built into the document
	if (!flag) document.body.style.background = "purple";
	else document.body.style.background = "white";
	flag = !flag;
});

//method 2
//define a css class
document.querySelector("button").addEventListener("click", function() {
	document.body.classList.toggle("purple");
});