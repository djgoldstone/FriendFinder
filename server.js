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

app.post("/api/friends", function(req,res) {
    var survey = req.body;
    var scores = survey.scores;
    console.log(scores);
    var match = {
        name: "",
        photo: "",
        difference: 100
    };
    
    for (var i = 0; i < friends.length; i++) {
        //outer loop iterates through friends array of objects to obtain each friend score
        var currentDiff = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            //inner loops iterates through friend score and user score to calculate absolute difference using Math.abs
            currentDiff += Math.abs(friends[i].scores[j] - scores[j]);
        }
        if (currentDiff <= match.difference) {
            match.name = friends[i].name;
            match.photo = friends[i].photo;
            match.difference = currentDiff;
        }
    };
    res.json(match);
});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});