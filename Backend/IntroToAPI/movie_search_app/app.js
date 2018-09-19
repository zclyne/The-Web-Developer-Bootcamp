var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs"); // tells express that files without .ejs are ejs files

app.get("/", function(req, res) {
   res.render("search"); 
});

app.get("/results", function(req, res) {
    // do the API call
    var query = req.query.search; // search in defined in search.ejs, and it is the name for the input text
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Movie App has started"); 
});