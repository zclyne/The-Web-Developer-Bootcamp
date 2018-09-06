//keypress()
//Bind an event handler to the "keypress" JavaScript event,
//or trigger that event on an element.
$("input").keypress(function() {
    console.log("You pressed a key");
});

$("input").keypress(function(event) {
    console.log(event);
});
//the returned content contains a 'charCode', a 'keyCode' and a 'which'
//'which' refers to the code of the key that was pressed
$("input").keypress(function(event) { // the argument name 'event' can be replaced by anything
    if (event.which === 13) { // = 13 means the user hit an enter
        alert("You hit enter");
    }
});