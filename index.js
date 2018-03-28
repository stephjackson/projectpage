var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require("body-parser");
var howler = require("howler");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/gbsketch", (req, res) => {
    res.render("sketch");
});

app.listen(port, () => {
    console.log('Server is up on ' + port);
});