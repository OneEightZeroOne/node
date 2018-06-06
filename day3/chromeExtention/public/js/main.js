console.log("植入了脚本");

setInterval(() => {
	document.querySelector(".tt-type-msg").value = "你很漂亮啊！";
	document.querySelector(".tt-type-submit").click();
}, 3000)

/*window.navigator.mediaDevices.getUserMedia({
	video: true
}).then((stream) => {
	//document.getElementById("camra").src = ""
}).catch(() => {
	console.log("fail")
})*/

if(location.href == "https://www.baidu.com/") {
	document.querySelector(".index-logo-src").src = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=860353018,1603281892&fm=200&gp=0.jpg";
	document.querySelector("#su").style.backgroundColor = "yellow";
	document.querySelector("#su").value = "搜一下吧"
}

if(location.href == "http://www.jb51.net/") {
	console.log($);
	$("#txtlink").remove();
	$("[class='main clearfix']").remove();
}