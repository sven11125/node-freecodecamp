// Problem: Using Asynchronous Values
// Console log the generated random value from within the printRandomValue function
// You can modify the parameters and code of the two functions
// You cannot use a global variable
// You cannot delete any code
// Code can be found at http://jsbin.codecamp.edu/tuv

function getRandomValueAsync() {

	window.setTimeout(function() {

		var randomValue = Math.floor(Math.random() * 10);

		console.log("Generated random value: " + randomValue);

	}, 300)
}

function printRandomValue() {
	// Use getRandomValueAsync and console.log the random value somewhere inside this function

}

printRandomValue();
