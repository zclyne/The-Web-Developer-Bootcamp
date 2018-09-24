var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });
var Post = require("./models/post.js"); // ./ looks for references in what we currently are
var User = require("./models/user.js");

Post.create({
    title: "How to cook the best burger pt. 4",
    content: "dfshgfhsdfherah"
}, function(err, post) {
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
        if (err) console.log(err);
        else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data) {
                if (err) console.log(err);
                else console.log(data);
            });
        }
    })
});

// find user
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) { // populate the posts array with the entire content of the posts, rather than just id
//     if (err) console.log(err);
//     else console.log(user);
// });
// // find all posts for that user

// User.create({
//     email: "bob@gmail.com",
//     name:"Bob Belcher"
// });
