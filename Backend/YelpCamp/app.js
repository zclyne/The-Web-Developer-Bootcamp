var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); // tells express to use body-parser
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f7c270afefb7bf_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f7c270afefb7bf_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f7c270afefb7bf_340.jpg"}
];

app.get("/", function(req, res) {
    res.render("landing");
})

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

// we use /campgrounds because we want to follow the convention called 'rest'
app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    // the above two variables comes from the from in the ejs file
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds"); // although we have two /campgrounds, when we do a redirect, the default is to redirect as a get request
});

// show the form that will send the data to the post '/campgrounds'
app.get("/campgrounds/new", function(req, res) {
    res.render("new"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server has started");
});