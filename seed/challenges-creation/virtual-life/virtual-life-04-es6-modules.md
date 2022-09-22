
# Virtual Life App with ES6 Modules

* Languages: Javascript ES5
* Languages Additional: Javascript ES6 Modules
* Tools: VS Code, Live Server extension, Git (if available)
* Libraries: animate-world.js
* Patterns and Practices: [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html), [Factory method pattern](http://brickhousecodecamp.org/wikipedia/factory_method_pattern.html)

### Feature Specification

* Same features as Virtual Life Plan Builder project

### Code Design

* Convert all js files to ES6 modules using import and export
* Create an app object in an app.js script file
	* Add the following methods
		* load() - starting point for the application
			* Use the world plan, world and animateworld here to initialize and start the world
* Export the app, world plan builder, world item factory, world item, world and any other shared objects
* Improve the file structure with folders
	* Add an app folder to contain files related directly to the application like world.js
	* Add a lib folder for any generic script files like math.js or string.js
	* Keep the index.html and app.js files in the root of the project
* In the index.html file only link to the animate world file
* In the index.html use a script of type module to import the app object and call load()
		<body>
			<script src="http://brickhousecodecamp.org/educationMaterials/workbenchProjects/phase-i/virtual-life-01-app/animate-world.js"></script>
			<script type="module">

				import { app } from "./app.js";

				app.load();

			</script>
		</body>

### Notes

* How to use ES6 Modules for the browser
	* Set scripts in the html to type module
			<script type="module"></script>

	* Use the export key word to export any variables
			export { app }

	* Use the import key word to import any variables
		* The from must use a path to the js file that is relative to the module
		* Paths must use ./ or ../ at the beginning
		* Paths must use the .js file extension after the module name
				import { app } from "./app.js";

### References

* [ECMAScript modules in browsers](http://brickhousecodecamp.org/educationMaterials/booksMaterials/languages/JavaScript-ES6/ES6-modules/ECMAScript%20modules%20in%20browsers%20-%20JakeArchibald.com.html)
* [export](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/export.html)
* [import](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/import.html)
* [Script element](http://brickhousecodecamp.org/docs/html/developer.mozilla.org/en-US/docs/Web/HTML/Element/script.html#attr-type)