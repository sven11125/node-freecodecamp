
# User Management Page with MVC

* Languages: HTML, CSS, Javascript ES5, JSON
* Languages Additional: Javascript ES6 Modules
* Libraries: Bootstrap, Font Awesome
* API Features: [DOM Elements](http://brickhousecodecamp.org/docs/Javascript/developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.html), [Events](http://brickhousecodecamp.org/docs/JavaScript/developer.mozilla.org/en-US/docs/Web/Events.html), [Web Storage API](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API.html)
* Tools: VS Code, Live Server extension, Git (if available)
* Patterns and Practices: Master details, [MVC](http://brickhousecodecamp.org/wikipedia/model_view_controller.html), [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html)

* Copy your User Management page project to a new git repository for the starting point

### Feature Specification

* Same features as User Management page project
* Add a message box at the top of the screen to communicate the success or failure of changes
	* Use bootstrap alerts for the message box, use success and danger
* Add a global error handler and display any errors in the message box

### Code Design

* Create an app.js file for listening to the DOMContentLoaded and error windows events
* Initialize and load your page on DOMContentLoaded
* Refactor your code using the MVC Pattern
* Use a single controller for the page with methods for
	* load
	* new
	* save
	* cancel
	* edit
	* delete
	* The controller should not know anything about the technology used in the view. i.e. Window, DOM and DOM events
* Create a User's Store object that handles all storage responsibilities (to window.localStorage) with the following methods
	* add(object)
	* get(id)
	* getAll() (returns an array of users)
	* update(object)
	* remove(id)
* Add a view object for the following UI areas
	* User Master
	* User Details
	* Messages ()
* The controller should communicate to the view what data it should display
* Update the User Details view with the following features	
	* Use spans for all read only fields
	* Use a form element and a button type=submit to allow for HTML5 form validation (require all form elements)
		Listen to the form submit event and prevent the default
	* Use a hidden input field For keeping track of the current user's unique id
* Your views, controller, and store objects do not need to be prototyped objects, they can be simple objects {}
* The data object for the user does not need to be a prototyped object
