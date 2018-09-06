// Check off specific todos by clicking
$("li").click(function() {
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

    //use this method
    $(this).toggleClass("completed");
});

// this method will lead to bubble event
// if you click on the span, you also click on the li, the ul, the div and the body
// so that all events on these elements will be triggered
// the click bubbles up into all parent elements
// $("span").click(function() {
//     alert("123");
// });

// this method is viable, which doesn't cause bubbling
$("span").click(function(event) {
    event.stopPropagation(); // this is a jQuery method that stops the event from bubbling up
    // remove the li that contains this span
    $(this).parent().fadeOut(500, function() {// $(this) is span, $("this").parent() is li
        $(this).remove();// now $(this) is alreay li, so don't use .parent() again
    });
});