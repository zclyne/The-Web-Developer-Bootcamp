//method 1
var target = document.getElementById("first");

//method 2
var byClass = document.getElementsByClassName("special");
var target = byClass[0];

//method 3
var target = document.querySelector("#first");

//method 4
var selectAll = document.querySelectAll(".special");
var target = selectAll[0];

//method 5
var target = document.querySelector(".special"); //querySelector only returns one item

//method 6
var target = document.getElementByTagName("p")[0];

//method 7
var target = document.querySelector("p");

//method 8
var target = document.querySelector("h1 + p"); //the first p after h1