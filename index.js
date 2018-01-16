var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/gbsketch", function(req, res){
    res.send("This is a test.");
});

app.listen(3000, function(){
    console.log('Server is up on 3000');
});
