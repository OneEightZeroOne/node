var ms = require("../lib/mysql.js");

function getMainImg(app) {
	app.get("/getMainImg", (req, res) => {
		new Promise((resolve, reject) => {
			ms.query("SELECT * FROM `beauty`", null, (data) => {
				resolve(data);
			});
		}).then((data) => {
			res.json({
				imgs: data
			});
		})
	})
}

module.exports = {
	getMainImg
};

//数组 函数 对象