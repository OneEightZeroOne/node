function getMainHead(app) {
	app.get("/getMainHead", (req, res) => {
		res.json({
			head: "Album example",
			textMuted: "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."
		});
	})
}

module.exports = {
	getMainHead
};


//数组 函数 对象