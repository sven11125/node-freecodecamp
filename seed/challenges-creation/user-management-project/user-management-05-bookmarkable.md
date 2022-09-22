
# User Management Page with Bookmarkable

* Languages: HTML, CSS, Javascript ES5, JSON
* Languages Additional: Javascript ES6 Modules
* Libraries: Bootstrap, Font Awesome, Handlebars
* API Features: [DOM Elements](http://brickhousecodecamp.org/docs/Javascript/developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.html), [Events](http://brickhousecodecamp.org/docs/JavaScript/developer.mozilla.org/en-US/docs/Web/Events.html), [Web Storage API](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API.html), [XMLHttpRequest](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest.html), [History API](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/History_API.html), [Location](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/Location.html)
* Tools: VS Code, Live Server extension, Git (if available)
* Patterns and Practices: Master details, [MVC](http://brickhousecodecamp.org/wikipedia/model_view_controller.html), [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html), [Command pattern](http://brickhousecodecamp.org/wikipedia/command_pattern.html)

* Copy your User Management Router project to a new git repository for the starting point

### Feature Specification

* Same features as User Management Router project with the following changes
* Make the SPA bookmarkable by having page placeholders for all possible navigation paths
* Add a bootstrap navbar at the top of each page with a link to the home and user management page

### Code Design

* Create an index.html, user.html, and users-management.html html placeholder files
	* Use a valid html page with doctype, html, head, and body tags
	* Add a single script link to the app.js file
	* No other content should be in these pages
* In the app.js initialize base html content need for the SPA
	* Get the head content from an html file for easy editing
	* Add a script link to the handlebars.js file
		* This must be done by creating a script element, setting the src, and appending it to the DOM
		* An event listener must be added to the script element for the load event
		* Add the listener before appending it to the DOM and handle asynchronously the loading of this script before
			the use of any other handlebars dependent scripts
		* Add a placeholder for replacing view content
	* After the SPA is fully initialized, route the view to the window.location
* Use a handlebars partial for the navbar
* Use handlebars to set the bootstrap "active" class on the (li) of current page's link (user.html will not have a link)

### Notes

* How to asynchronously load a JavaScript file after page load
		var script = document.createElement("script");
		script.src = "url to your script";
		script.addEventListener("load", function(){ // script is loaded });
		document.body.appendChild(script);

* How to append a string of HTML to an element
	* Do not use the experimental element.insertAdjacentHTML()
	* Use an [HTMLTemplateElement](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement.html)
			var template = document.createElement("template");
			template.innerHTML = html;
			element.appendChild(template.content);