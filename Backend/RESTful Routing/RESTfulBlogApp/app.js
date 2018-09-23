var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    methodOverride   = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    mongoose         = require("mongoose");

// app config
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public")); // use css files in /public
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now} // automatically take the date here when the user post that blog
});
var Blog = mongoose.model("Blog", blogSchema);

// RESTful routes
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

// index route
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs){
       if (err) console.log(err);
       else res.render("index", {blogs: blogs});
    });
});

// new route
app.get("/blogs/new", function(req, res) {
   res.render("new"); 
});

// create route
app.post("/blogs", function(req, res) {
   // create blog
   req.body.blog.body = req.sanitize(req.body.blog.body); // sanitize the content of the blog(delete script codes from it)
   Blog.create(req.body.blog, function(err, newBlog) {
      if (err) res.render("new");
      else res.redirect("/blogs");
   });
   // redirect to the index
});

// show route
app.get("/blogs/:id", function(req, res) {
   Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) res.redirect("/blogs");
        else res.render("show", {blog: foundBlog});
   });
});

// edit route
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) res.redirect("/blogs");
        else res.render("edit", {blog: foundBlog});
    })
});

// update route
// upt request is to update sth.
app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body); // sanitize the content of the blog
    // 3 arguments: id, newData, callback
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
       if (err) res.redirect("/blogs");
       else res.redirect("/blogs/" + req.params.id);
   });
});

// delete route
app.delete("/blogs/:id", function(req, res) {
    // destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) res.redirect("/blogs");
        else res.redirect("/blogs");
    });
    // redirect
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server started"); 
});