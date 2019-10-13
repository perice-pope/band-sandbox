
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors'); 

 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// io.set('origins', '*');
//io.origins(['localhost:3000']);

// Created an instance of IO
// var io = require('socket.io')(app);
app.use(cors({origin:'*'})); 
io.on('connection', function (socket) {
  //socket.emit('music', { type: 'trumpet' });
  socket.emit('welcome', { data: 'Hello Wrold'});
  socket.on('music', (data) => {
    socket.broadcast.emit('music', {data: data })
    
  });
});

/*End of socket io*/



require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes-api/users'));


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

server.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});