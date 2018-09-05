$("div").css("background", "purple");
$(".highlight").css("width", "200px");//div.highlight can be used instead of .highlight which specifies that it is a div
$("#third").css("border", "1px solid orange");
//bonus: make the 1st div pink
//method 1
$("div:first-of-type").css("color", "pink");//a built-in css selector
//method 2
//$("div:first").css("color", "pink");//a built-in jQuery shortcut
//using method 2 a little slower than method 1
//$("div").first().css("color", "pink") is also viable