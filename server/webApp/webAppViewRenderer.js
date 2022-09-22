
var path = require("path");
var webAppRootPath = path.resolve("server/webApp");

function render(res, template, model) {

	var pathName = path.join(webAppRootPath, template);

	if (!pathName.endsWith(".jade")) {

		pathName += ".jade";
	}
	
	res.render(pathName, model);
}


module.exports.render = render;