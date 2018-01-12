var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send('This is a test!');
});

app.listen(3000, function(){
    console.log('Server is up on 3000');
});
