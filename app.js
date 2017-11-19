var express = require('express')
var app = express()

// Build Your Route Here
// GET method route
app.get('/', function (req, res) {
  res.send('Hello, World!')
})
app.get('/home', function (req, res) {
  res.send('GET request to the homepage')
})
app.get('/services', function (req, res) {
  res.send('GET request to the services')
})
app.get('/contactus', function (req, res) {
  res.send('GET request to the contactus')
})


module.exports = app
