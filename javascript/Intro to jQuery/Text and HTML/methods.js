//text()
//this is like .textContent
//Get the combined text contents of each element in
//the set of matched elements, including their descendants, 
//or set the text contents of the matched elements.
$("h1").text();// "jQuery Methods Demo Page"
$("ul").text();// " Skittles Starburst Twix "
$("li").text();// "SkittlesStarburstTwix"
$("h1").text("New Text");// change the content of h1 to "New Text"
$("li").text("Rusty");// change all 3 lis' text to be "Rusty"

//html()
//this is like .innerHTML
//Get the HTML contents of the first element in the set of 
//matched elements or set the HTML contents of every matched element.
$("ul").html();// " <li>Skittles</li> <li>Starburst</li> <li>Twix</li> "
$("ul").html("<li>I hacked you ul!</li><li>Rusty is still adorable!</li>");
$("li").html("<a href='google.com'>Click me to go to google</a>");// update all lis to this new content
