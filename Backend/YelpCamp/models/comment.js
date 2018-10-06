var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    text: String,
    createdAt: { type: Date, default: Date.now },
    author: {
        id: { // the id of the user that created the comment
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String// the username of that user
    }
});

module.exports = mongoose.model("Comment", commentSchema);