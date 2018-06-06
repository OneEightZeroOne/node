//1.先获取回复者的文本
document.querySelector(".tt-type-submit").addEventListener("click", function() {
	//var text = document.querySelector("[name='message']").value;
	var text = $(".tt-msg-content-h5-chat:last").text();
	console.log(text);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			console.log(xhr.responseText);
		}
	}
	xhr.open("get", "http://localhost:3000/douyu?"+`text=${text}`, true);
	xhr.send(null);
})