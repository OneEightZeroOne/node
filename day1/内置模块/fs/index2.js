const fs = require('fs');
//console.log(fs);
//在披萨店留了电话，等他打电话回来

//同步阻塞  30分钟

//单进程单线程
//多进程多线程

var data = fs.readFileSync('./index.html');

console.log(data);