var request = require('request');

request({
	url: 'http://stu.1000phone.net/student.php/Public/login',
	methods: 'post',
	headers: {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.9',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'Content-Length': '39',
		'Content-Type': 'application/x-www-form-urlencoded',
		'Cookie': 'PHPSESSID=non7ap3ir908vg3p7ir8a2as53',
		'Host': 'stu.1000phone.net',
		'Origin': 'http://stu.1000phone.net',
		'Pragma': 'no-cache',
		'Referer': 'http://stu.1000phone.net/student.php/Public/login',
		'Upgrade-Insecure-Requests': 1,
		//'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
	},
	formData: {
		'Account': '362524199301274017',
		'PassWord': '274017'
	}
}, (error, response, body) => {
	/*if(!error && response.statusCode == 200) {
		console.log(body);
	}*/
	console.log(body);
});