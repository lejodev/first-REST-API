var express = require('express')
var http = require('http')
var app = express()

var users = ['user 1', 'user 2', 'user 3']

app.get('/', (req, res) => {
  res.status(200).send("Welcome to API REST")
});

app.post('/users/:userName/userInfo', (req, res) => {
  
  users.push('user ' + users.length);
  res.send(users)
});

app.get('/users', function(req, res){
  const nameParam = req.query;
  res.json(nameParam);
})

app.get('/users/:userName/:userInfo', function(req, res){
  const userName = req.params.userName;
  const userInfo = req.params.userInfo;
  users.push(userName);
  res.send('Welcome: ' + userName + ', We are happy to get you here, your aditional info is: ' + userInfo);

});

app.put('/users', function(req, res){
  res.send('Put executed');
} );

app.delete('/users', (req, res) =>{
  users.pop();
  res.send(users);
});

app.post('/users', (req, res) => {
  users.push('User ' + users.length)
  res.send("New user add")
});

app.listen(8001, function(){
  console.log('Listening on port 8001');
});