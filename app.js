const express = require('express')
const app = express()

app.get('/', function(req, resp){
  resp.send('Hello, World!')
})


module.exports = app
