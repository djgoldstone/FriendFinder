var express = require("express");
var path = require("path");
//dependencies/npm packages

var app = express();
//a variable assigned to express package methods

var PORT = process.env.PORT || 8080;
//variable assigned to the initial port

app.use(express.urlencoded({ extended: true }));
app.use(express.json());






app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});