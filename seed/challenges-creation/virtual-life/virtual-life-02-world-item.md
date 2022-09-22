
# Virtual Life App with World Item

* Languages: Javascript ES5
* Tools: VS Code, Live Server extension, Git (if available)
* Libraries: animate-world.js
* Patterns and Practices: [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html), [Factory method pattern](http://brickhousecodecamp.org/wikipedia/factory_method_pattern.html)

*Copy your previous project for the starting point*

### Feature Specification

* Same features as Virtual Life app project

### Code Design

* The design of the code will change to make the virtual life app more modular
* Concerns will be separated between the world, a world item, and a factory for creating a new world item
* The world will be converted to a prototyped object
	* The constructor of the world object will take a world plan string as a parameter
		* The world plan will be a string representation of the world (identical to the output of .toString())
	* The world.js file should contain a function to parse the world plan into the needed data structure
		* This function is only used by the world item object and therefore does not need to be part of the object's prototype
	* Extend the world object with the following methods
		* look(worldItem, targetWorldItemTypes) - Will return an array of items immediately nearby
			* Takes a world item and an array of world item types to look for
		* copy(targetWorldItem, sourceWorldItem) - Will copy the source world item to the location of the target world item
		* move(targetWorldItem, sourceWorldItem) - Will move the source world item to the location of the target world item
		* remove(worldItem) - Will remove the world item and replace it with an empty space
	* Because the world holds the data for the world grid, it should be responsible for parsing the 
* Create an object prototype (with a constructor) named world item to represent an item that occupies a cell in a world-item script file
* The world item object should keep track of its location in the world and other information related to the world item
	* Add the following methods
		* act(world) - Will complete the action for a single world item during it's turn i.e. die, reproduce, move
			* Takes the world object for use to look, move, remove etc.
* Create a world item factory object that will build new world items
	* This object will be responsible for creating an instance of world item objects
	* This object will call *new* on the world item constructor
			new worldItem()
	* Add the following methods
		* build() - Will return a new world item
			* Takes a symbol and information used for location
* Create links to your world-item.js, world-item-factory.js, and world.js files
		<body>
			<script src="http://brickhousecodecamp.org/educationMaterials/workbenchProjects/phase-i/virtual-life-01-app/animate-world.js"></script>
			<script src="world-item.js"></script>
			<script src="world-item-factory.js"></script>
			<script src="world.js"></script>
			<script>
				var worldPlan =
					"######" + "\n" +
					"# p# #" + "\n" +
					"# # a#" + "\n" +
					"# pa #" + "\n" +
					"# #p #" + "\n" +
					"######";

				var world = new World(worldPlan);

				animateWorld(world)
			</script>
		</body>

### Notes

* How to define a prototyped object
	* Make a constructor (use upper camel case)
			function WorldItem(data) { this.data = data }

	* Add functions
			WorldItem.prototype.act = function() {
				console.log(this.data);
			}

	* Create an instance of the object
			var worldItem = new WorldItem(data);
			worldItem.act();

### References

* [Object prototypes](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes.html)