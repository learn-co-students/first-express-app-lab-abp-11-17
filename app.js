var express = require('express')
var app = express()

app.get("/",function(rep,resp){
  resp.send("Hello, World!")
})

module.exports = app
