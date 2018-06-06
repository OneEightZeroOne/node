var request = require("request");
function middleWare(app) {
	app.get("/middleWare", (req, res) => {
		new Promise((resolve, reject) => {
			request.get("http://localhost:88/gz1802/node/day2/5.expressWebsite/php/home.php",(error, response, body)=>{
				body = body + "ed";
				resolve(body);
			})
		}).then((data) => {
			res.json({
				data
			});
		})
	})
}

module.exports = {
	middleWare
};

//数组 函数 对象