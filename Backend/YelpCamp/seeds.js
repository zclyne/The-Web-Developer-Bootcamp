var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "camp1",
        image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg",
        description: "blah blah blah"
    },
    {
        name: "camp2",
        image: "https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1440478008/campground-photos/csnhvxn0qcki2id5vxnc.jpg",
        description: "blah blah blah blah"
    },
    {
        name: "camp3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXVT1PPOOdhN-sLlz0zPSUaw9JFniWaLIROV8Anw4ksWUo5FZ3A",
        description: "blah blah blah blah blah"
    },
]

function seedDB()
{
    // remove all campgrounds from the database
    Campground.remove({}, function(err) {
        // if (err) console.log(err);
        // else
        // {
        //     console.log("removed campgrounds");
        //     // add a few campgrounds
        //     // data.forEach() must be put here to ensure that it is executed after the .remove() is done
        //     data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground) {
        //             if (err) console.log(err);
        //             else
        //             {
        //                 console.log("Added a campground");
        //                 // create a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet",
        //                         author: "Homer"
        //                     }, function(err, comment) {
        //                         if (err) console.log(err);
        //                         else
        //                         {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created new comment");
        //                         }
        //                 });
        //             }
        //         });
        //     });
        // }
    });
    // important: if we put data.forEach() outside of the callback of the .remove(), it may be executed before .remove() is done
    // data.forEach(function(seed) {
    //     Campground.create(seed, function(err, data) {
    //         if (err) console.log(err);
    //         else console.log("Added a campground");
    //     });
    // });
    
    // add a few comments
}

module.exports = seedDB;