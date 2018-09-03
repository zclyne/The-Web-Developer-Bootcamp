//element.addEventListener(type, functionToCall);

//example 1
var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("Someone clicked the button!");
});

//example 2
var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    h1.style.background = "orange";
});

//example 3
document.querySelector("ul").addEventListener("click", function() {
    console.log("YOU CLICKED THE UL!");
});

//example 4
var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++)
{
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";
        //inside of a listener, this refers to the item before the .addEventListener
        //here this refers to lis[i]
    });
}

//example 5
//we could also rewrite it using a named function
var button = document.querySelector("button");
var paragraph = document.querySelector("p");
button.addEventListener("click", changeText);
function changeText()
{
    paragraph.textContent = "Someone clicked the button!";
}