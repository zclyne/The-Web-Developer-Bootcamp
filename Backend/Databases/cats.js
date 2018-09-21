var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true }); // connect to a db called 'cat_app' if we have one. if we don't, create a db called 'cat_app' and connect to it

// the following schema says that every cat has a name, an age and a temperament
var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

// take the above schema and compile it into a model and return an object that have a bunch of methods, and save it to Cat
var Cat = mongoose.model("Cat", catSchema); // "Cat" is the singular version of our model, and it will automatically take that and make a new collection in our db that would look like db.cats
// use "cat" instead of "Cat" is also viable

// adding a new cat to the DB
// var george = new Cat({
//   name: "George",
//   age: 7,
//   temperament: "Grouchy"
// });
// george.save(function(err, cat) { // add george to the database, the call-back function will be executed after the save is done.
//     if (err) // save failed
//     {
//         console.log("Something went wrong!")
//     }
//     else
//     {
//         console.log("We just saved a cat to the db:");
//         console.log(cat); // cat is referring to what came back from the database, not george that we have in javascript, that we're trying to save to the database
//     }
// });

// another method to create a new cat and save it to the database
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) { // call-back function
    if (err) console.log(err);
    else console.log(cat);
});

// retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats) { // the call-back function will be executed after the find is done.
    if (err)
    {
        console.log("Oh no, error!");
        console.log(err);
    }
    else
    {
        console.log("All the cats.....");
        console.log(cats);
    }
});