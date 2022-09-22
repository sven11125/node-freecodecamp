// Problem: Using Asynchronous Values
// Console log the generated random value from within the printRandomValue function
// You can modify the parameters and code of the two functions
// You cannot use a global variable
// You cannot delete any cody
// Code can be found at http://jsbin.codecamp.edu/tuv

function getRandomValueAsync(callback) {

	window.setTimeout(function() {

		var randomValue = Math.floor(Math.random() * 10);

		console.log("Generated random value: " + randomValue);

		callback(randomValue);
		
	}, 300)
}

function searchRandomValue(searchValue) {

		
	searcher(searchValue, 1, getRandomValueAsync, function(result){
			
			console.log("Tries: " + result);
		});

}

function searcher(target, tries, getVariable, callback) {
	
	getVariable(function(randomValue) {
		
		console.log("target: " + target + " randomValue: " + randomValue)
		
		if (target == randomValue) {
			
			callback(tries);
			
		} else {			
			
			if (tries > 100) {
				
				callback(-1);
				
			} else {
				
				tries++;			
			
				searcher(target, tries, getVariable, callback);
			}			
		}
	});
}




searchRandomValue(8);
