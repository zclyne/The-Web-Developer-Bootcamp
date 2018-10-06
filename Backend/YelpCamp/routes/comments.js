var express = require("express");
var router = express.Router({mergeParams: true}); // mergeParams: true ensures that req.params.id will work well, or it won't work because :id is given in app.js where we use app.use("/campgrounds/:id/comment", commentRoutes)
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware"); // because the file inside of this directory is called 'index.js', we can require the directory rather than the file itself

router.get("/new", middleware.isLoggedIn, function(req, res) {
    // find campground by id
    Campground.findById(req.params.id, function(err, campground) {
        if (err) console.log(err);
        else res.render("comments/new", {campground: campground});
    });
});

router.post("/", middleware.isLoggedIn, function(req, res) {
    // lookup campground using ID
    Campground.findById(req.params.id, function(err, campground) {
        if (err)
        {
            console.log(err);
            res.redirect("/campgrounds");
        }
        else
        {
            // create new comment
            Comment.create(req.body.comment, function(err, comment) {
                if (err)
                {
                    req.flash("error", "Something went wrong.");
                    console.log(err);
                }
                else
                {
                    // add username to the comment
                    // req.user is the user that is currently logged in
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    // save comment
                    comment.save(); // save the new contents to the db
                    campground.comments.push(comment);
                    campground.save();
                    req.flash("success", "Successfully added comment.");
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

// comment edit route
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) { // notice that here we use comment_id to differentiate it from the id of the campground
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if (err) res.redirect("back");
        else res.render("comments/edit", {campground_id: req.params.id, comment: foundComment}); // req.params.id is defined in app.js
    });
});

// comment update
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
        if (err) res.redirect("back");
        else res.redirect("/campgrounds/" + req.params.id);
    });
});

// comment destroy route
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
        if (err) res.redirect("back");
        else
        {
            res.flash("success", "Comment deleted.");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

module.exports = router;