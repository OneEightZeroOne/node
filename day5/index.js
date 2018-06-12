var MongoClient = require('mongodb').MongoClient;
//结尾是选择数据库名
var DB_CONN_STR = 'mongodb://localhost:27017';

function collection(callback) {
	MongoClient.connect(DB_CONN_STR, function(err, client) {
		console.log("连接成功！");
		const db = client.db('beauty');
		//console.log(db);
		let collection = db.collection("images");
		/*collection.update({
			name: "老谢",
		}, {
			$set: {
				age: 888
			}
		})*/
		callback(collection);
		client.close();
	});
}

module.exports = {
	collection
}
