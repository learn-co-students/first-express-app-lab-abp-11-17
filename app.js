var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  resp.send("Hello, World!")
})

app.get("/about", function(req, resp){
  resp.send("<h1>About Page</h1>")
})

module.exports = app
