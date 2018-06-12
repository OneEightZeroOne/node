var MongoClient = require('mongodb').MongoClient;
//结尾是选择数据库名
var DB_CONN_STR = 'mongodb://localhost:27017';
MongoClient.connect(DB_CONN_STR, function(err, client) {
	console.log("连接成功！");
	const db = client.db('gz1802');
	//console.log(db);
	let collection = db.collection("name");
	//增
	/*collection.insert({
		name:"老谢",
		age:18
	})*/

	//改
	collection.update({
		name: "老谢",
	}, {
		$set: {
			age: 888
		}
	})

	//查
	/*collection.find().toArray(function(err, result) {
		if(err) {
			console.log('Error:' + err);
			return;
		}
		console.log(result);
	});*/
});