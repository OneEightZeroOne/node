function maipisa() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log("买披萨");
			resolve();
		}, 800)
	})
}

function napisa() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log("拿披萨");
			resolve();
		}, 500)
	})
}

function paoniu() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log("泡妞");
		}, 1000)
	})
}

maipisa().then(napisa).then(paoniu);