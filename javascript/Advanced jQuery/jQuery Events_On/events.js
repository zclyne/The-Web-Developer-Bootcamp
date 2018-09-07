//on()
//Attach an event handler function
//for one or more events to the selected elements.
//on() works similarly to addEventListener
//It lets you specify the type of event to listen for
//all other methods can be done with on()
$("h1").on("click", function() {
    $("h1").css("color", "purple");// if we click on the 1st h1, all h1s will turn purple
    $(this).css("color", "purple");// if we click on the 1st h1, only it will turn purple
});
$("button").on("dblclick", function() { // double click
    alert("double clicked");
});
$("a").on("dragstart", function() {
    console.log("drag started");
});
$("input[type='text']").on("keypress", function() { // select all inputs with type 'text'
    console.log("key press in an input");
});
$("button").on("mouseenter", function() { // if hovered on, it changes to bold and will never change back
    $(this).css("font-weight", "bold");
});
$("button").on("mouseleave", function() { // if you move out the mouse, it will change back from blod to normal
    $(this).css("font-weight", "normal");
});

//difference between click() and on('click')
//click() only adds listeners for existing elements
//on() will add listeners for all potential future elements