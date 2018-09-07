// Check off specific todos by clicking
$("ul").on("click", "li", function() { // use $("ul").on("click", "li") rather than $("li").click() or $("li").on("click")
    // this is because we can only add a listener using jQuery on elements
    // that exist when this code is run the first time
    // when the code is run the first time, we don't have the lis that will be added by the user

    // don't use the following method
    // if li is gray, turn it black
    // if ($(this).css("color") === "rgb(128, 128, 128)") // use rgb color instead of 'gray' 
    // {
    //     $(this).css({
    //         textDecoration: "none", // this is js, use textDecoration instead of text-decoration
    //         color: "black"
    //     });
    // }
    // //else turn it gray
    // else
    // {
    //     $(this).css({
    //         textDecoration: "line-through",
    //         color: "gray"
    //     });
    // }

    // use this method
    $(this).toggleClass("completed");
    // although we use $("ul").on(), it actually add listeners to lis
});

// this method will lead to bubble event
// if you click on the span, you also click on the li, the ul, the div and the body
// so that all events on these elements will be triggered
// the click bubbles up into all parent elements
// $("span").click(function() {
//     alert("123");
// });

//remove a todo
// this method is viable, which doesn't cause bubbling
$("ul").on("click", "span", function(event) {
    event.stopPropagation(); // this is a jQuery method that stops the event from bubbling up
    // remove the li that contains this span
    $(this).parent().fadeOut(500, function() {// $(this) is span, $("this").parent() is li
        $(this).remove();// now $(this) is alreay li, so don't use .parent() again
    });
});

//add a new todo
$("input[type='text']").keypress(function(event) {
    if (event.which === 13)// if the character typed in is an 'enter'
    {
        //grabbing new todo text from input
        var todoText = $(this).val();// $(this).val() is the content in the input
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        //the above line will take the string inside the brackets
        //and add it to the ul as html inside of that ul
        //clear the input
        $(this).val("");
    }
});

//plus icon
$("#toggle-form").click(function() {
    $("input[type='text']").fadeToggle();
});