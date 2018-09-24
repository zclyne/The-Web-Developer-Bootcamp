var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });

// post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// user - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] // associated data, one user can have many posts, but one post only has one user
    // to embed postSchema in userSchema, postSchema must be defined ahead of userSchema
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });
// // add a post to newUser
// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "Just kidding. Go to potions class to learn it."
// });
// newUser.save(function(err, user) {
//     if (err) console.log(err);
//     else console.log(user);
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });
// newPost.save(function(err, post) {
//     if (err) console.log(err);
//     else console.log(post);
// });

User.findOne({name: "Hermione Granger"}, function(err, user) { // findOne only return one item, find() will return a list that contains all valid items
    if (err) console.log(err);
    else {
        // add a new post
        user.posts.push({ // the user here is the user that comes back from the db
            title: "3 Things I really hate",
            content: "Voldemort. Voldemort. Voldemort."
        });
        user.save(function(err, user) { // the user in the brackets is the user that comes back from the save
            if (err) console.log(err);
            else console.log(user);
        })
    }
});