var fs = require('fs');
var path = require('path');

function walkDirectory(pathName, directoryStatistics, directoryAction, fileAction) {

	directoryStatistics = ensureDirectoryStatistics(directoryStatistics);

    if (fs.existsSync(pathName)) {

		var stats = fs.statSync(pathName);
		
        if (stats.isDirectory()) {

            directoryStatistics.directoriesFound++;
			
			if (directoryAction) {

				directoryAction(pathName, stats);
			}

			var entries = fs.readdirSync(pathName);
			
            for (var entry of entries) {

				var subPath = path.join(pathName, entry);
				
                walkDirectory(subPath, directoryStatistics, directoryAction, fileAction);
			}		
        } else {

            directoryStatistics.filesFound++;
			
			if (fileAction) {

				fileAction(pathName, stats);
			}
        }

    } else {

        console.log("Path not found: " + pathName);
	}

	return directoryStatistics;
}

function ensureDirectoryStatistics(directoryStatistics) {

	if (!directoryStatistics) {

		directoryStatistics = {
			directoriesFound: 0,
			filesFound: 0
		}
	}

	if (!directoryStatistics.directoriesFound) {

		directoryStatistics.directoriesFound = 0;
	}

	if (!directoryStatistics.filesFound) {

		directoryStatistics.filesFound = 0;
	}

	return directoryStatistics;
}



if (typeof module != "undefined" && module.exports) {
	module.exports.walkDirectory = walkDirectory;
}
