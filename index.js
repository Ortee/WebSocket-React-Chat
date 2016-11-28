var app = require('express')();
const express = require('express');
const fallback = require('express-history-api-fallback');
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');

const root = path.join(__dirname, '/public/');

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));

app.get('/', function(req, res){
  console.log(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3034, function(){
  console.log('listening on *:3034');
});
