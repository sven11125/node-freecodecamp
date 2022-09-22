
var jsonDateStringRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?Z/;

function dateReviver(key, value) {

	if (typeof value === "string") {

		if (value.match(jsonDateStringRegex)) {

			value = new Date(value);
		}
	}

	return value;
}


export { dateReviver }