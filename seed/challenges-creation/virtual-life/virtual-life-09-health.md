
# Virtual Life App with Health

* Languages: Javascript ES5
* Languages Additional: Javascript ES6 Modules
* Tools: VS Code, Live Server extension, Git (if available)
* API Features: [DOM Elements](http://brickhousecodecamp.org/docs/Javascript/developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.html)
* Libraries: Font Awesome 5.5.0
* Patterns and Practices: [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html), [Factory method pattern](http://brickhousecodecamp.org/wikipedia/factory_method_pattern.html), [Inheritance](http://brickhousecodecamp.org/wikipedia/inheritance_oop.html)

### Feature Specification

* Make the living world items life based on health
* Plants will have the following behavior on each turn
	* Reduce health by one and check if dead
	* Chance to increase or decrease health
	* If health above a certain level, chance to reproduce
* Animals will have the following behavior on each turn
	* Reduce health by one and check if dead
	* Chance to eat a plant
		* If it does eat, chance to eat a percentage of the plant's health
			* Add health to the animal
			* Subtract health from the plant
	* If health above a certain level, chance to reproduce
		* Reproduce only to an empty space
		* Reduce health if it does reproduce
	* If health above a certain level, chance to move
		* Move only to an empty space
		* Reduce health if it does move
* Carnivores will have the following behavior on each turn
	* Reduce health by one and check if dead
	* Chance to eat an animal
		* If it does eat, wil eat all the health of the animal
			* Add health to the carnivore
			* Subtract health from the animal
	* If health above a certain level, chance to reproduce
		* Reproduce only to an empty space
		* Reduce health if it does reproduce
	* If health above a certain level, chance to move
		* Move only to an empty space
		* Reduce health if it does move

### Code Design

* Create a living world item prototyped object that inherits from world item
	* Will have a health property
	* May have common living world item methods
* Plant, animal, and carnivore will inherit from the living world item