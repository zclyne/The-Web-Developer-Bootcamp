// the reason why we name this file index.js is that if we require a directory but not a file, it will automatically require the contents of index.js in that directory
// all the middleware goes here
var Campground     = require("../models/campground"),
    Comment        = require("../models/comment");
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) { // check whether the currently logged in user is permitted to edit the campground
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground){
            if (err)
            {
                req.flash("error", "Campground not found.");
                res.redirect("back");
            }
            else {
                // check whether the user own the campground
                // if (foundCampground.author.id === req.user._id) // this will not work
                // foundCampground.author.id is a mongoose object, but req.user._id is a string
                if (foundCampground.author.id.equals(req.user._id)) next();// this works well
                else
                {
                    req.flash("error", "You don't have permission to do that.");
                    res.redirect("back");
                }
            }
        });
    }
    else
    {
        req.flash("error", "You need to be logged in to do that.");
        res.redirect("back"); // take the user back to where they came from
    }
}

// check whether the currently logged in user is permitted to edit the comment
middlewareObj.checkCommentOwnership = function(req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.commend_id, function(err, foundComment){
            if (err) res.redirect("back");
            else {
                if (foundComment.author.id.equals(req.user._id)) next();
                else
                {
                    res.flash("error", "You don't have permission to do that.");
                    res.redirect("back");
                }
            }
        });
    }
    else
    {
        res.flash("error", "You need to be logged in to do that.");
        res.redirect("back"); // take the user back to where they came from
    }
}

// check whether the user is logged in
middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) return next();
    req.flash("error", "You need to be logged in to do that."); // error is used to determine if the message should be green or red. The second argument is the message to display
    // this message will show up for only one time
    // the above line just gives us a way of accessing it on the next request
    res.redirect("/login");
}

module.exports = middlewareObj;