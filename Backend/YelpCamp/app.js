var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    flash          = require("connect-flash"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    Campground     = require("./models/campground"),
    Comment        = require("./models/comment"),
    User           = require("./models/user"),
    seedDB         = require("./seeds"); // invode seedDB() function in seeds.js

// require routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes       = require("./routes/index");
    
// we use local db when testing the website, but on heroku, we connect the website with the db on mLab
var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp"; // the second url is the backup. if for some reason process.env.DATABASEURL doesn't work or doesn't exist, url=local db url
mongoose.connect(url, { useNewUrlParser: true });
// "mongodb://localhost/yelp_camp" is the local db
// "mongodb://user1:yelpcamp1@ds223763.mlab.com:23763/yelpcamp" is the db provided by mLab
// to set process.env.DATABSEURL, use the following command
// to set local db: export DATABASEURL=monngodb://localhost/yelp_camp
// to set mLab db on heroku: go to heroku website and add in a key-value pair

app.use(bodyParser.urlencoded({extended: true})); // tells express to use body-parser
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); // __dirname + "/public" is a safer way than just "public", but they function the same. It enables header.ejs to link to the css files and js files in /public
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); // seed the database

// use moment js
app.locals.moment = require('moment');

// passport configuration
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// pass req.user to every single template
app.use(function(req, res, next) {
    res.locals.currentUser = req.user; // if no one signed in, req.user will be empty, or it will contain the username and the ID of the current user
    // the above line will add currentUser to every route so that currentUser is available
    res.locals.error = req.flash("error"); // if there's anything in the flash, we'll have access to it in the template under message
    res.locals.success = req.flash("success");
    next(); // move on to the next middleware
});

// routes
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes); // all campground routes start with /campgrounds, and we don't need /campgrounds in campgroudns.js any more
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server has started");
});