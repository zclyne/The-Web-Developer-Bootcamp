//addClass()
//Adds the specified class(es) 
//to each element in the set of matched elements.

//removeClass()
//Remove a single class, multiple classes,
//or all classes from each element in the set of matched elements.

//toggleClass()
//Add or remove one or more classes from each element 
//in the set of matched elements,
//depending on either the class's presence 
//or the value of the state argument.

$("h1").addClass("correct");// the h1 will turn green
$("h1").removeClass("correct");// the h1 will return to black
$("li").addClass("wrong");// all lis will have pink background and red text-color
$("li").toggleClass("correct");//add the class "correct" to or remove it from all lis
$("li").first().toggleClass("done");//add the class "done" to or remove it from the 1st li
