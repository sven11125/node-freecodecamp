
# Virtual Life App with Carnivore

* Languages: Javascript ES5
* Languages Additional: Javascript ES6 Modules
* Tools: VS Code, Live Server extension, Git (if available)
* Libraries: animate-world.js
* Patterns and Practices: [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html), [Factory method pattern](http://brickhousecodecamp.org/wikipedia/factory_method_pattern.html), [Inheritance](http://brickhousecodecamp.org/wikipedia/inheritance_oop.html)

### Feature Specification

* Add carnivores to the world
* Carnivores will have a chance to move, reproduce or die
	* If a carnivore moves to a cell with an animal, that animal will die
	* A carnivore cannot move to a cell occupied by a wall, plant or another carnivore

### Code Design

* Create a carnivore world item prototyped object that derives from world item
	* Override the act method
* Change the world item factory to include the carnivore
* Make the symbol used for each world item configurable
* Use an options object that will have a key for the world item type
	* The type will be wall, plant, animal, carnivore, or empty
	* Add a symbol for each world item type
	* Add a build chance to configure the chance for the world plan to build that world item
* Do not use *hard coded* symbols in the app, only use the symbol from the options object
* Pass the options object to the world plan builder and world item factory