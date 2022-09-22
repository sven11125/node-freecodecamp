
var path = require("path");
var webAppRootPath = path.resolve("server/webApp");
var directoryWalkerSync = require("../../common/core/fs/directoryWalkerSync");

// NOTE: Controllers should remain small, however, if adding routes in controllers
//  begins to take too much file space, then a .routes.js model should be used and adding routes
//  should be moved to those files. Checkout commit: b940d01 Used a loopback router instead ...
//  for an example.

function boot(app) {

	directoryWalkerSync.walkDirectory(webAppRootPath, null, null, function(filePathName, stats) {

		if (filePathName.endsWith(".controller.js")) {

			var routes = require(filePathName);

			if (routes && routes.initialize) {
				
  				var router = app.loopback.Router();

				routes.initialize(router);
				app.use(router);
			}
		}
	});
};

module.exports = boot;