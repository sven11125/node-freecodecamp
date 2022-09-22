// Problem: Using Multiple Asynchronous Values
// Console log (in the same log) the generated number and letter together from within the printRandomValue function
// You can modify the parameters and code of the two functions
// You cannot use a global variable
// You cannot delete any code
// Code can be found at http://jsbin.codecamp.edu/hize

function getRandomNumberAsync() {

	window.setTimeout(function() {

		var randomNumber = Math.floor(Math.random() * 10);

		console.log("Generated random number: " + randomNumber);

	}, 300)
}

function getRandomLetterAsync() {

	window.setTimeout(function() {

		var letters = "abcdefghij";

		var randomIndex = Math.floor(Math.random() * 10);
		var randomLetter = letters[randomIndex];

		console.log("Generated random letter: " + randomLetter);

	}, 300)
}

function printRandomValue() {
	// Use getRandomNumberAsync and getRandomLetterAsync and console.log (in the same log) the generated number and letter
	//  together from somewhere inside this function

}

printRandomValue();
