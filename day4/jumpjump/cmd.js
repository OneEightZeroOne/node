var exec = require('child_process').exec;
var cmdStr = `adb shell input swipe 200 500 400 500 ${length}`;
exec(cmdStr, function(err, stdout, stderr) {
	if(err) {
		console.log('error:' + stderr);
		return;
	} else {
		//var data = JSON.parse(stdout);
		console.log(stdout);
	}
});