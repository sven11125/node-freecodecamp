// Problem: Using Asynchronous Values with Search
// Search the random values for the search value and count the tries
// Console log the number of tries to find the search value in the searchRandomValue function
// You can modify the code of the searchRandomValue function
// You can add functions
// You cannot modify the getRandomValueAsync function
// You cannot modify the parameters of the searchRandomValue function
// You cannot use a global variable
// You cannot delete any code
// Code can be found at http://jsbin.codecamp.edu/zah

function getRandomValueAsync(callback) {

	window.setTimeout(function() {

		var randomValue = Math.floor(Math.random() * 10);

		console.log("Generated random value: " + randomValue);

		callback(randomValue);
		
	}, 300)
}

function searchRandomValue(searchValue) {

}

searchRandomValue(8);
