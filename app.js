const express = require('express');
const app = express();

// Build Your Route Here
app.get('/', function (req, res) {
  res.send('Hello, World!');
})

module.exports = app
