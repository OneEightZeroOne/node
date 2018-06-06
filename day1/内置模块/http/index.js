var http = require('http');
var fs = require('fs');
//console.log(http);
http.get('http://www.mm131.com/xiaohua/2001.html', (res) => {
	//console.log(res);
	let rawData = '';
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		rawData += chunk;
	});
	res.on('end', () => {
		console.log(rawData);
		fs.writeFile('test.html', rawData, (err) => {
			if(err) throw err;
			console.log('The file has been saved!');
		});
	})
})

console.log("开始");