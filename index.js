var express = require('express')
var http = require('http')
var app = express()

var users = ['user 1', 'user 2', 'user 3']

app.post('/users', (req, res) => {
  users.push('user ' + users.length);
  res.send(users)
})

app.get('/', (req, res) => {
  res.status(200).send("Welcome to API REST")
})

app.post('/users', (req, res) => {
    users.push('User ' + users.length)
    res.send("New user add")
  })

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});