var http = require("http");
var fs = require("fs");

var server = http.createServer((request, response) => {
	fs.readFile('./test.html', (err, data) => {
		if(err) throw err;
		//console.log(data.toString());
		response.end(data.toString());
	});
})

server.listen(12345);