//attr()
//Get the value of an attribute for the first element 
//in the set of matched elements 
//or set one or more attributes for every matched element.
$("img").css("width", "300px");// change the width of all images to 300px
//$("img").attr("src", "https://cdn.teslarati.com/wp-content/uploads/2018/03/Falcon-Heavy-side-booster-landings-SpaceX.jpg");
//the above line changes all images to another image
//$("input").attr("type", "color");
//the above line changes the type of the input from text to color
//$("input").attr("type", "checkbox");
$("img:first-of-type").attr("src", "https://cdn.teslarati.com/wp-content/uploads/2018/03/Falcon-Heavy-side-booster-landings-SpaceX.jpg");
//the above line only changes the first image to be the new image
//$("input").first().attr("type", "checkbox") is also viable
$("img").last().attr("src", "https://cdn.teslarati.com/wp-content/uploads/2018/03/Falcon-Heavy-side-booster-landings-SpaceX.jpg");
//the above line only changes the last image to be the new image

//if we don't pass in the 2nd argument of attr, it will return the value of that attribute

//val()
//Get the current value of the first element 
//in the set of matched elements 
//or set the value of every matched element.
$("input").val();
//if the input is empty, it will return ""
//if we type "Colt Steele" in the input, this function will return "Colt Steele"
$("input").val("Rusty Steele");
//the above line changes the content of the input to "Rusty Steele"
$("input").val("");
//the above line erases the content of the input
//val() works on all elements that have a value attribute, not just input
$("select").val();//this will return one of the 3 options that the user has chosen