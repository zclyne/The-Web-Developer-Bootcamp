//Instead of doing this
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";

//Do this
//Define a class in css
// .some-class {
//     color: blue;
//     border: 10px solid red;
// }
var tag = document.getElementById("highlight");
//Add the new class to the selected element
tag.classList.add("some-class");
tag.classList.remove("another-class");
//toggle is super useful
tag.classList.toggle("another-class"); // if have the class, remove it; otherwise add it

//Classlist is a read-only list that contains the classes for a given element
//It is NOT AN ARRAY.