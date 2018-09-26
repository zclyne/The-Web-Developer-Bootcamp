var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app", {useNewUrlParser: true});

var app = express();
app.set("view engine", "ejs");

app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world", // a secret is used to encode and decode the sessions, and it can be anything at all
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
// to use passport, we have to use the two lines above

passport.use(new LocalStrategy(User.authenticate())); // create a new local strategy using the User.authenticate() method. This line is responsible for the login function

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// the two above lines are responsible for reading the session, taking the data from the session that's encoded and unencode it

// ====================================================================================================
// Routes

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res) { // when a request comes in to "/secret", it's going to run isLoggedIn before it does anything else
    res.render("secret");
});

// Auth Routes
// show sign up form
app.get("/register", function(req, res) {
    res.render("register");
});
// handling user sign up
app.post("/register", function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) { 
        // make a new user object and pass in the username, but not password. We pass the password as the 2nd argument to User.register
        // User.register will hash that password, namely turns it into a huge string of numbers and letters and it stores that in the database
        if (err)
        {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            // passport.authenticate will actually log the user in, who will take care of everything in the session and it will store the correct information and run the serialized user method that we specified above
            // and we want to use the local strategy, "local" can be changed to "twitter" or "facebook" or other
            res.redirect("/secret");
        });
    });
});

//render login form
app.get("/login", function(req, res) {
    res.render("login");
})

// handling user login
app.post("/login", passport.authenticate("local", { // notice that passport.authenticate is the second argument of app.post(), not in the callback function. This is called middleware
        // middleware runs before the callback function
        // it checks your credentials and tries to log you in
        // it's going to take the password and the username that are in the request inside req.body and compare the password that the user typed in to the hashed version in the database
        successRedirect: "/secret",
        failureRedirect: "/login"
    }), function(req, res) { // this is the callback function
});

// handling user log out
app.get("/logout", function(req, res) {
    req.logout(); // logout doesn't change anything in the database, it is just destroying all the user data in the session
    res.redirect("/");
})

function isLoggedIn(req, res, next) { // next is the next thing to be called if is logged in
    if (req.isAuthenticated()) return next(); // it should be next() rather than next. Here next is the callback function of app.get("/secret"), and we don't need to explicitly specify it
    res.redirect("/login"); // if not logged in, redirect
}

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");
});