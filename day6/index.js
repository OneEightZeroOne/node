//数据
var obj = {
	name: "winds",
	age: 18
};

function observe(obj) {
	//判断对象的自属性是否对象，如果时对象继续执行监听
	if(!obj || typeof obj !== 'object') {
		return;
	}
	Object.keys(obj).forEach(function(key) {
		//console.log(key + '=>' + obj[key]);
		//遍历监听
		defineProperty(obj, key, obj[key]);
	})
};

function defineProperty(obj, key, val) {
	observe(val); //监听子属性，如果子属性也是对象，继续监听
	Object.defineProperty(obj, key, {
		set: function(newValue) {
			console.log('newValue:' + newValue);
			//设置新值
			val = newValue;
			var html = `
							<p>${obj.name}</p>
							<p>${obj.age}</p>
							<input value="${obj.name}" />
						`;
			document.querySelector("#demo").innerHTML = html;
			document.querySelector("input").oninput = function(e) {
				console.log(e.target.value);
				obj.name = e.target.value;
			}
		},
		get: function() {
			console.log("getValue:" + val);
			//返回val设置对应属性值
			return val;
		}
	})
}
observe(obj); //对对象遍历并监听每个属性值的变化
//设置值 把数组改变
obj.name = "wscats";