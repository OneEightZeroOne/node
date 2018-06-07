var express = require("express");
var exec = require('child_process').exec;
var app = express();
app.get("/jump", (req, res) => {
	res.append("Access-Control-Allow-Origin","*");
	new Promise((resolve, reject) => {
		execCmd(`adb shell input swipe 200 500 200 500 ${parseInt(req.query.length * 5.5)}`, function() {
			resolve();
		})
	}).then(() => {
		//删除图片
		return new Promise((resolve, reject) => {
			execCmd(`adb shell rm -r /sdcard/wscats/`, function() {
				resolve();
			})
		})
	}).then(() => {
		//新增图片文件夹
		return new Promise((resolve, reject) => {
			execCmd(`adb shell mkdir -p /sdcard/wscats`, function() {
				resolve();
			})
		})
	}).then(() => {
		//截图
		return new Promise((resolve, reject) => {
			execCmd('adb shell screencap -p /sdcard/wscats/screen.png', function() {
				resolve();
			})
		})
	}).then(() => {
		//截图
		return new Promise((resolve, reject) => {
			execCmd('adb shell screencap -p /sdcard/wscats/screen.png', function() {
				resolve();
			})
		})
	}).then(() => {
		//上传图片
		return new Promise((resolve, reject) => {
			execCmd('adb pull /sdcard/wscats/screen.png .', function() {
				resolve();
			})
		})
	}).then(function() {
		res.send('执行成功');
	})
})
app.listen(8888);

function execCmd(cmd, callback) {
	exec(cmd, function(err, stdout, stderr) {
		if(err) {
			console.log('error:' + stderr);
			return;
		} else {
			//var data = JSON.parse(stdout);
			console.log(stdout);
			callback()
		}
	});
}