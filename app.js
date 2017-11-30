var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, resp){
  resp.send('Hello, World!')
})

app.listen(3000)

module.exports = app
