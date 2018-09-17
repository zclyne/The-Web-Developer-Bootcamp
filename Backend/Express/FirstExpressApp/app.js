var express = require("express");
var app = express();

// "/" =? "Hi there!"
app.get("/", function(req, res) { // the 1st argument: the url, the 2nd argument: the call back function. res: request, res: response
    // req is an object that contains all the information about the request that was made that triggered this route
    // res contains all of the information about what we're going to respond with
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    // the above console.log() will papear in the node console when we have start it by running node apps
    res.send("MEOW!");
});

// router parameters
app.get("/r/:subredditName", function(req, res) { // this tells express to not actually match character for character subredditName, this is a pattern
    // subredditName cannot have '/' in it, only one level is permitted
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit!");
});
app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    res.send("Welcome to the comments page!"); 
    // to know the subredditName and id and title
    console.log(req.params);
    // { subredditName: 'puppies',
    //   id: '1234',
    //   title: 'my_corgi_is_cute' }
});


// changing the order of the 4 app.get()'s will affect the function
// if the following app.get() is put first in this .js file, nothing else will be matched ever
// the first route that matches is the only route that will be run
app.get("*", function(req, res) { // when the user get to any url other than the 3 that are defined, this will be triggered
   res.send("You are a star!"); 
});

// tell express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
}); // the 1st argument: the port listened on. process.env.PORT and process.env.IP are provided by cloud9
