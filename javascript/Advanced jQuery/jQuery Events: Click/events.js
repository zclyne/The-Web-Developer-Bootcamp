//click()
//Bind an event handler to the "click" JavaScript event,
//or trigger that event on an element.
$("#submit").click(function() {
    console.log("Another click");
});
$("button").click(function() {
    alert("Someone clicked a button");
    $(this).css("background", "pink");// use $(this) instead of this, this is the jQuery version
    // this is because .css() is a jQuery method which can only be used on a jQuery object
    var text = $(this).text();
    console.log("You clicked " + text);
});