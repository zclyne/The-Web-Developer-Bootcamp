var mongoose = require("mongoose");

// user - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId, // a mongoose object id
        ref: "Post"
    }] // posts is an array of object ids
});

module.exports = mongoose.model("User", userSchema);