var express = require("express");
var app = express();

// home page
app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!"); 
});

// /speak/animal
app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        marmot: "AAAAAAAAAAAAA!!!!!!!!!!!!!!!!!"
    };
   var animal = req.params.animal.toLowerCase(); // .toLowerCase() ensures that terms like Dog can also be detected as dog
   var sound = sounds[animal];
   res.send("The " + animal + " says '" + sound + "'");
});

// /repeat
app.get("/repeat/:str/:time", function(req, res) {
   var string = req.params.str;
   var time = Number(req.params.time); // Number() converts a string into a number
   var toSend = "";
   for (var i = 0; i < time ; i++) toSend = toSend + string + ' ';
   res.send(toSend);
});

// *
app.get("*", function(req, res) {
   res.send("Sorry, page not found...What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});