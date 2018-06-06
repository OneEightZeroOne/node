var request = require('request');
var fs = require('fs');

//console.log(request);
request('http://t2.hddhhn.com/uploads/tu/201805/9999/27d145024a.jpg').pipe(fs.createWriteStream('download.jpg'))

