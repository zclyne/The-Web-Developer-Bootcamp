var express = require("express");
var app = express();

app.use(express.static("public")); // this line tells express to serve the public directory, otherwise the css file in it won't be find

app.set("view engine", "ejs"); // tells express that files without .ejs are ejs files

app.get("/", function(req, res) {
    res.render("home"); // express will automatically expect home to be home.ejs
    // to use ejs file, npm install ejs --save first
});

// /fallinlovewith/rusty
// /fallinlovewith/pomsky
app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing}); // take the value of thing and pass it to thingVar in the ejs file
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server is listening"); 
});