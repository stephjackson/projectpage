var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require("body-parser");
var howler = require("howler");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/gbsketch", function(req, res){
    res.render("sketch");
});

app.listen(port, function(){
    console.log('Server is up on ' + port);
});
