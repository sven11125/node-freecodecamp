
function HashTable(sourceObject) {

	if (sourceObject) {
		
		var keys = Object.keys(sourceObject);
	
		for (var index in keys) {
			
			var key = keys[index];
			var value = sourceObject[key];

			this[key] = value;
		}
	}
}

HashTable.prototype.add = function(key, value) {

	this[key] = value;
}

HashTable.prototype.remove = function(key) {

	delete this[key];
}

HashTable.prototype.includesKey = function(key) {

	return this.hasOwnProperty(key);
}

HashTable.prototype.values = function(key) {

	var values = [];
	var keys = Object.keys(this);

	for (var index in keys) {
		
		var key = keys[index];
		var value = this[key];

		values.push(value);
	}

	return values;
}

HashTable.prototype.forEachValue = function(callback) {

	Object.keys(this).forEach(function(key){

		var value = this[key];
		
		callback(value);

	}, this);
}


export { HashTable };