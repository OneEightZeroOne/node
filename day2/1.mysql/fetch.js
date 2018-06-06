var request = require('request');
var request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');
var db = require('./index.js');
console.log(db);
/*
 1.爬取整个html的结构
 2.把所有图片的地址
 * */

//回调金字塔
request('http://www.27270.com/ent/meinvtupian/', (error, response, body) => {
	//console.log(body);
	const $ = cheerio.load(body, {
		decodeEntities: false
	});
	//console.log($("img"));
	$("img").each(function(i, e) {
		console.log($(e).attr("src"));
		console.log($(e).attr("alt"));
		db.query('INSERT INTO beauty SET ?', {
			url: $(e).attr("src"),
			title: $(e).attr("alt")?$(e).attr("alt"):""
		}, (results) => {
			console.log("导入成功");
		})
		//request($(e).attr("src")).pipe(fs.createWriteStream(`${i}.png`))
	})
})