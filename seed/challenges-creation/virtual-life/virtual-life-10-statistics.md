
# Virtual Life App with Statistics

* Languages: Javascript ES5
* Languages Additional: Javascript ES6 Modules
* Tools: VS Code, Live Server extension, Git (if available)
* API Features: [DOM Elements](http://brickhousecodecamp.org/docs/Javascript/developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.html)
* Libraries: Font Awesome 5.5.0
* Patterns and Practices: [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html), [Factory method pattern](http://brickhousecodecamp.org/wikipedia/factory_method_pattern.html), [Inheritance](http://brickhousecodecamp.org/wikipedia/inheritance_oop.html)

### Feature Specification

* Add a start and stop button to the user interface
* Add a statistics table to the user interface with the following stats
	* interval - setInterval() speed of the animation in milliseconds
	* generation - the current incremental count of each call to turn
	* turn - the time in milliseconds that turn() takes
	* render - the time in milliseconds that it takes to render the life world
	* the number of world items and the percentage of world items for the following
		* wall, plant, animal, carnivore, and empty
	* total - the total number of world items
* The statistics should update on every turn

### Code Design

* Separate the statistics view from the world items view
* Create the statistics data in the world animator
* Pass the statistics data to the statistics view for rendering
* Optimize the world items view by using a character code for the icon instead of Font Awesome class names
	* symbol: "\uf6f0"
* Optimize the app so that a 500 by 500 world will run with an interval under 1000 milliseconds
* Optimize the living world items so that all items will live past 300 generations in a 100 by 100 world