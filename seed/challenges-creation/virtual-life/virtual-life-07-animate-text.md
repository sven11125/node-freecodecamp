
# Virtual Life App with Animate Text

* Languages: Javascript ES5
* Languages Additional: Javascript ES6 Modules
* Tools: VS Code, Live Server extension, Git (if available)
* API Features: [DOM Elements](http://brickhousecodecamp.org/docs/Javascript/developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.html)
* Libraries: none
* Patterns and Practices: [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html), [Factory method pattern](http://brickhousecodecamp.org/wikipedia/factory_method_pattern.html), [Inheritance](http://brickhousecodecamp.org/wikipedia/inheritance_oop.html)

### Feature Specification

* Create a user interface that displays the state of the world using text symbols i.e. #, a, p, etc

### Code Design

* Create html using only the DOM
	* There will be no changes to your index.html
* Create a world animator prototyped object that is responsible for the animation cycle and using the world object
	* Add the following methods
		* start() - Will start the animation
	* Use window.setInterval() for the turn and animation process
* Create a world view prototyped object that is render the html and state of the world
	* Add the following methods 
		* initialize(worldString) - Will prepare any html
			* Will take the string representation of the world
		* render(worldString) - Will draw the state of the world
			* Will take the string representation of the world
* Change the app.js to import and construct a world animator and call start()

### Notes

* Create and append DOM objects to the body
		var tableElement = document.createElement("table");
		document.body.appendChild(tableElement);

### References

* [Introduction to the DOM](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Introduction.html)
* [setInterval()](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval-2.html)