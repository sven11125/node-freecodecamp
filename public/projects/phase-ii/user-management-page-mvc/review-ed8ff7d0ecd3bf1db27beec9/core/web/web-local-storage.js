
var webLocalStorage = {};

webLocalStorage.replace = function(key, value) {

	var valueString = JSON.stringify(value);

	window.localStorage[key] = valueString;
}

webLocalStorage.get = function(key, jsonReviver) {

	var valueString = window.localStorage[key];
	var value = null;

	if (valueString) {

		value = JSON.parse(valueString, jsonReviver);
	}

	return value;
}


export { webLocalStorage }