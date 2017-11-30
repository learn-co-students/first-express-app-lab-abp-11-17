var express = require('express')
var app = express()

app.get('/', (req, resp) => {
  resp.send('Hello, World!');
});

module.exports = app
