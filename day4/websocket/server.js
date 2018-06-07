//express做一个http服务器
//socket做一个socket服务器

var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client) {

	//只要改这里面的内容
	/*client.on('connect', function(data) {
		
	});*/
	client.on('message', function(data) {
		console.log(data);
	});
	setInterval(() => {
		client.emit('run', {
			title:"你好，我是xx赌场",
			body:"性格荷官在线发牌"
		});
	}, 3000)
});
server.listen(3000);