var request = require('request');
// print the html
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// error
// request('http://www.googleasdfaweretw.com', function(error, response, body) {
//     if (error) {
//         console.log("Something went wrong!");
//         console.log(error);
//     } else {
//         if (response.statusCode == 200) { // normal status
//             // things worked!
//             console.log(body); // the stuff that came back, namely the html from google
//         }
//     }
// });

// yahoo API for sunset time in Hawaii
console.log("Sunset in Hawaii is at...");
var yahooSunset = "https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// error holds any potential error that we get
request(yahooSunset, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body["query"]); // this doesn't work. It will say 'undefined'.
        // IMPORTANT!!!!!!
        // the reason is that body is not a javascript object. It is actually a string.
        console.log(typeof(body)); // string
        // This is the solution. JSON.parse() is a method provided by JSON
        var parsedData = JSON.parse(body);
        // parsedData is the corresponding javascript object
        console.log(parsedData["query"]); // this works well
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]); // this is the sunset time
        
    }
});