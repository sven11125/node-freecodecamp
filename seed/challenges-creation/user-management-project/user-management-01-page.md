
# User Management Page

* Languages: HTML, CSS, Javascript ES5, JSON
* Languages Additional: Javascript ES6 Modules
* Libraries: Bootstrap, Font Awesome
* API Features: [DOM Elements](http://brickhousecodecamp.org/docs/Javascript/developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.html), [Events](http://brickhousecodecamp.org/docs/JavaScript/developer.mozilla.org/en-US/docs/Web/Events.html), [Web Storage API](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API.html)
* Tools: VS Code, Live Server extension, Git (if available)
* Patterns and Practices: Master details

### Feature Specification

* Create a single web page for managing users
	* The left half of the page will display the details of a single user (Users Details)
	* The right half will display all users (Users Masters)
* Use bootstrap for look and feel, forms, grids, buttons and layout
* Use minimal custom CSS
* Use the presented design or a simple design of your choice
* The page will be able to create, edit, and display users
* A user has the following properties
	* unique id (generated read only number, guarantee uniqueness)
	* name
	* email
	* gender (male or female)
	* age (number)
	* role (administrator, contributor, user)
	* verified (checked is verified, unchecked is not verified)
	* created date (generated read only) (format as: month as name of month, day as number, year as number)
	* updated date (generated read only) (format as: month as name of month, day as number, year as number)
* The Users Details should have a left side of labels and a right side for the form elements
* The Users Details should have the following buttons at the bottom
	* new (clear the Users Details view)
	* save (save the user)
	* cancel (cancel the edit and reload the same user or clear the Users Details view if the user was new)
* Each row of Users Masters should display the following user properties
	* unique id
	* name
	* email
	* gender (use a font awesome icon)
	* edit (edit this user in the Users Details) (use a font awesome icon)
	* delete (delete the user) (use a font awesome icon)

### Code Design

* Use the following html elements to display and edit the user's properties
	* unique id - span
	* name - input type=text
	* email - input type=email
	* gender - input type=radio
	* age - input type=number
	* role - select with options
	* verified - input type=checkbox
	* created date - span
	* updated date - span
* Do not use the form element
* Do not do any data validation
* All users should be stored in a single key value pair in window.localStorage
	* The value should be a JSON string of all users