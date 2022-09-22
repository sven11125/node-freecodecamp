
var escapeRegex = require("../system/escapeRegEx").escapeRegEx;
var coreString = {};

coreString.includesAny = function(values, search) {

	var includes = false;

	for (var value of values) {

		if (search.includes(value)) {

			includes = true;
			break;
		}
	}

	return includes;
};

coreString.compressWhiteSpace = function(value) {

	if (value) {

		value = value.replace(/\s+/g, " ");
	}

	return value;
}

coreString.trimStartString = function(value, trimString) {

	if (value) {

		trimString = escapeRegex(trimString);
		
		var regex = new RegExp("^" + trimString, "g");

		value = value.replace(regex, "");
	}

	return value;
}

const ellipsis = "...";

coreString.truncate = function(value, length, addEllipsis) {

	if (value) {

		if (addEllipsis) {

			length = length - ellipsis.length;
		}

		if (value.length > length) {

			value = value.substr(0, length);

			if (addEllipsis) {

				value += ellipsis;
			}
		}
	}

	return value;
}


if (typeof module != "undefined" && module.exports) {

	module.exports.coreString = coreString;
}