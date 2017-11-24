var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  resp.send("Hello, World!")
});

app.get("/about", function(req, resp){
  resp.send("About Page")
});

module.exports = app
