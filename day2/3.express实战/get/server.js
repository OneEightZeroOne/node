var express = require("express");
var db = require("./mysql.js");
var app = express();

//app是express框架的入口

//回调函数里面的req是代表请求，请求头是浏览器的信息，请求体是你上传服务器的具体内容（文本，音频，视频，图片）
//res是代表响应，响应头和响应体，响应头服务器的信息，响应体就是服务器返回的数据
app.get("/home", (req, res) => {
	res.send("hello world");
})
//$_GET[""]
app.get("/login/:username/:password", (req, res) => {
	res.append("Access-Control-Allow-Origin","*");
	console.log(req.query);
	console.log(req.params);
	/*var sql = db.query("SELECT * FROM `stu` where ?", {
		username: req.query.username
	}, (results) => {
		console.log(results[0].password,req.query.password);
		if(results[0].password === req.query.password) {
			res.send("登录成功");
		} else {
			res.send("登录失败");
		}
	})*/
})

//监听端口
var server = app.listen(54321, () => {
	var host = server.address().address;
	var port = server.address().port;
	console.log(host, port);
}); //0~65535   上网80 443   mysql3306