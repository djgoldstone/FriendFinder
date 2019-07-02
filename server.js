var express = require("express");
var path = require("path");
//dependencies/npm packages

var app = express();
//a variable assigned to express package methods

var PORT = process.env.PORT || 8080;
//variable assigned to the initial port

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = require("./app/data/friends");

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname,"app/public/home.html"));
});

app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname,"app/public/survey.html"));
});

app.get("/api/friends", function(req,res) {
    res.json(friends);
});





app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});