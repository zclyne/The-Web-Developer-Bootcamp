var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++)
{
	lis[i].addEventListener("mouseover", function() {
	this.classList.add("selected");//this inside eventListener refers to the item or the element that the event was triggered on
	});
	lis[i].addEventListener("mouseout", function() {
	this.classList.remove("selected");
	});
	lis[i].addEventListener("click", function() {
		this.classList.toggle("done");
	});
}