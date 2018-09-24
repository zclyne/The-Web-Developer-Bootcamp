var mongoose = require("mongoose");

// post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Post", postSchema); // When we require this js file, this will send out the model