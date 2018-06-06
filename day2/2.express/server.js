var express = require('express')
var app = express();
var fs = require("fs");
//路由 cors
app.get('/', function(req, res) {
	//req请求
	//res响应
	console.log(res);
	res.send('Hello World')
})

app.get('/home', function(req, res) {
	console.log(req.query);
	res.append('Access-Control-Allow-Origin', '*');
	res.send(JSON.stringify({
		name:"ly",
		skill:['ps','css']
	}))
})

app.get('/douyu', function(req, res) {
	console.log(req.query);
	res.append('Access-Control-Allow-Origin', '*');
	fs.writeFile("text.txt",req.query.text,()=>{
		
	})
	res.send(JSON.stringify({
		name:"ly",
		skill:['ps','css']
	}))
})
//监听的端口
app.listen(3000)

//ajax --请求头 请求体-->
//后端   --响应头 响应体-->