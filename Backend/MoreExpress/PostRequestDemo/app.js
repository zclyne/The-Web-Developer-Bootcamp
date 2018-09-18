var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); // tell express to use body-parser package, this line req.body a javascript object

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

// "/friends"
app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res) {
    // body-parser makes it possible to extract the data from the server side
    // if we want to console.log(req.body), we must npm install body-parser
    console.log(req.body);
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends"); //redirect to /friends route and run the codes in it
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");
});