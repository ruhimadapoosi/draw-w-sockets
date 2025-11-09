//
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log ("hello world");

var sockets = require('socket.io');
var io = sockets(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('new connection' + socket.id);
    console.log(socket.id + 'connected');

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse',data);
        console.log(data);
    }
}


