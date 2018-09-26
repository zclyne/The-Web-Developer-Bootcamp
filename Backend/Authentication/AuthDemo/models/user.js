var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose); // add a lot of functions that are provided by passport-local-mongoose to our user shcema
// the above line takes care of everything from the hashing to the salting to storing things in the database

module.exports = mongoose.model("User", UserSchema);