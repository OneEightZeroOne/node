//http  
var express = require("express");
var app = express();
app.listen(3001);

//ws   websocket协议 双工
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client) {
	//client局部客户
	//io    全局
	console.log(client.id);
	client.on('getMessage', function(data) {
		console.log(data);
		io.emit('setMessage', data)
	});
});
server.listen(3000);