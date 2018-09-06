//fadeOut()
//Hide the matched elements by fading them to transparent.
//default: 400ms

//if the button is clicked, the 3 divs will fade out
//example 1
$("button").on("click", function() {
    //$("div").fadeOut(); // fade out in 400ms
    $("div").fadeOut(1000); // fade out in 1s
    //fade out won't remove the elements from the page, they are just hidden
    console.log("Fade Completed!");// this will be executed before the fadeOut is done
});

//example 2
$("button").on("click", function() {
    $("div").fadeOut(1000, function() {
        console.log("Fade Completed!");// this will be executed after the fadeOut is done
        //we will get 3 "Fade Completed" because there are 3 divs
    });
});

//example 3
$("button").on("click", function() {
    $("div").fadeOut(1000, function() {
        $(this).remove();//for each div, it will be removed from the page after faded out
    });
});

//example 4
$("button").on("click", function() {
    $("div").fadeOut(1000);
    $("div").remove();//for each div, it will be removed from right after the button is clicked
    //therefore, there is no fade at all
});

//fadein()
$("button").on("click", function() {
    $("div").fadeIn(1000);
    //if the elements are hidden, namely display: none, it will fade in after click the button
    //if .remove() has been invoked, they won't fade in
});

//fadeToggle()
$("button").on("click", function() {
    $("div").fadeToggle(1000);
    //fade in or fade out depends on whether the elements are visible now
});


//slideDown()
//Display the matched elements with a sliding motion.
//the height is animated down
//default: 400ms
$("button").on("click", function() {
    $("div").slideDown();
    //when the elements are hidden, they will slide down and become visible
});

//slideUp()
$("button").on("click", function() {
    $("div").slideUp();
    //when the elements are visible, they will slide up and display: none at the end
});

//slideToggle()
$("button").on("click", function() {
    $("div").slideToggle(1000, function() {
        console.log("slide is done");
        //this will print out one the full second slide has finished
    });
});