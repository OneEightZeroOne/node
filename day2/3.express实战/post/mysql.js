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
