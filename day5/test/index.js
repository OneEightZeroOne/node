const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'gz1802';

MongoClient.connect(url, function(err, client) {
	const db = client.db(dbName);
	const collection = db.collection('name');

	//单条能查询出来，全部查询用toArray不出来，用forEach行

	collection.find({}).toArray(function(err, result) {
		console.log(result);
	});

	client.close();
})