//setTimeout(function() {
//	console.log("买披萨");
//}, 800)
//setTimeout(function() {
//	console.log("拿披萨");
//}, 500)
//setTimeout(function() {
//	console.log("泡妞");
//}, 1000)

/*setTimeout(function() {
	console.log("买披萨");
	setTimeout(function() {
		console.log("拿披萨");
		setTimeout(function() {
			console.log("泡妞");
		}, 1000)
	}, 500)
}, 800);*/

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//监听第一个事件
eventEmitter.on('maipisa', function() {
	setTimeout(function() {
		console.log("买披萨");
		eventEmitter.emit('napisa');
	}, 800)
});

eventEmitter.on('napisa', function() {
	setTimeout(function() {
		console.log("拿披萨");
		eventEmitter.emit('paoniu');
	}, 500)
});

eventEmitter.on('paoniu', function() {
	setTimeout(function() {
		console.log("泡妞");
	}, 500)
});

eventEmitter.emit('maipisa');