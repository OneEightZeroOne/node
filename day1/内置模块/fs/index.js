const fs = require('fs');
//console.log(fs);
//在披萨店留了电话，等他打电话回来

//异步非阻塞
fs.readFile('./index.html', (err, data) => {
	if(err) throw err;
	console.log(data.toString());
});

console.log(data);
