var express = require("express");
var app = express();
//下载
//设置静态文件夹
app.use(express.static('public'));
app.use(express.static('images'));
var server = app.listen(54321, () => {
	var host = server.address().address;
	var port = server.address().port;
	console.log(host, port);
});