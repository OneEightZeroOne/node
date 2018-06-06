/*setTimeout(function(){
	console.log(1)
},1000)*/

/*function a(){
	console.log(1)
}

function b(){
	console.log(2)
}
a();
b();*/

function a(callback) {
	console.log(1);
	setTimeout(function(){
		console.log(3);
		callback();
	})
}

a(function b() {
	console.log(2)
})
//如果异步，它才有意义
a();
b();
