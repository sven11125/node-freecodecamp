
import { coreObject } from "../extensions/core-object.js"

var dom = {};

dom.createElement = function(tagName, elementProperties, children) {

	var element = document.createElement(tagName);

	if (elementProperties) {

		coreObject.forEach(elementProperties, function(key, value) {

			element[key] = value;
		});
	}

	if (children) {

		children.forEach(function (child) {

			element.appendChild(child);
		});
	}

	return element
}

dom.createIcon = function(className) {

	var iconElement = this.createElement("i", {className: className});

	return iconElement;
}

dom.getRadioValue = function(htmlCollection) {

	var value = null;

	if (htmlCollection) {

		for (var index in htmlCollection) {

			var element = htmlCollection[index];

			if (element.checked) {

				value = element.value;
				break;
			}
		}
	}

	return value;
}

dom.setRadioValue = function(htmlCollection, value) {

	if (htmlCollection) {

		for (var index in htmlCollection) {

			var element = htmlCollection[index];

			if (element.value === value) {

				element.checked = true;
				break;
			}
		}
	}
}


export { dom }