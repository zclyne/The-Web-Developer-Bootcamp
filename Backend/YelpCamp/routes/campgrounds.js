var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware"); // because the file inside of this directory is called 'index.js', we can require the directory rather than the file itself

// INDEX - show all campgrounds
// /campgrounds is changed to / because /campgrounds is given in app.js
router.get("/", function(req, res) {
    // get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if (err) console.log(err);
       else res.render("campgrounds/index", {campgrounds: allCampgrounds, page: "campgrounds"}); // req.user contains information about the currently logged-in user
    });
});

//CREATE - add new campground to DB
// we use /campgrounds because we want to follow the convention called 'rest'
router.post("/", middleware.isLoggedIn, function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var price = req.body.price;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    // the above two variables comes from the from in the ejs file
    var newCampground = {name: name, image: image, description: desc, author: author, price: price};
    // create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err)  {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds"); // although we have two /campgrounds, when we do a redirect, the default is to redirect as a get request
        }
    });
});

// NEW - show form to create new campground
// show the form that will send the data to the post '/campgrounds'
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new"); 
});

// be careful that /campgrounds/new must be in front of /campgrounds/:id

// SHOW - show the info about one campground
router.get("/:id", function(req, res) {
    // find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) { // req.params.id is the id after /campgrounds/
        if (err) console.log(err);
        else {
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// edit campground route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) { // we don't need to handle err here because we have done this step in the middleware
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// update campground route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
    // find and update the correct campground
    // and redirect to the show page
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
        if (err) res.redirect("/campgrounds");
        else res.redirect("/campgrounds/" + req.params.id);
    });
});

// destroy campgroun route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if (err) res.redirect("/campgrounds");
        else res.redirect("/campgrounds");
    });
});

module.exports = router;