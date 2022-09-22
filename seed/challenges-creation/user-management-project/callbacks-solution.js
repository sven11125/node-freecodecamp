

// Solution

function getRandomValueAsync(callback) {

	window.setTimeout(function() {

		var randomValue = Math.floor(Math.random() * 10);

		console.log("Random value: " + randomValue);

		callback(randomValue);

	}, 300)
}

function printRandomValue() {


	getRandomValueAsync(function(value) {


		console.log("Found value: " + value);
	});
}

printRandomValue();