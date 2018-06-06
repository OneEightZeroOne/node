# mysql

[mysql的npm文档](https://www.npmjs.com/package/mysql)

```js
var mysql = require('mysql');

function query(sql, params, callback) {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'yjl',
		password: '123',
		database: 'gz1802'
	});

	connection.connect();

	connection.query(sql, params, function(error, results, fields) {
		if(error) throw error;
		//console.log(results);
		callback(results);
	});
	connection.end();
}

module.exports = {
	query
}

```

# node与前端的联系

$_GET["xxx"];
$_POST["xxx"];

|x|x|
|-|-|
|请求头|带的浏览器信息|
|请求体|get url上的参数 post 就是请求体参数|
|响应头|带的是服务器信息|
|响应体|服务器响应 responseText  jq success->data|
