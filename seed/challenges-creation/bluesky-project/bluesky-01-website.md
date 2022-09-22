
# Bluesky Website

* Languages: HTML, CSS, Javascript ES5, JSON
* Languages Additional: Javascript ES6 Modules
* Libraries: Bootstrap, Font Awesome, Handlebars
* API Features: [DOM Elements](http://brickhousecodecamp.org/docs/Javascript/developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.html), [Events](http://brickhousecodecamp.org/docs/JavaScript/developer.mozilla.org/en-US/docs/Web/Events.html), [Web Storage API](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API.html), [XMLHttpRequest](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest.html), [History API](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/History_API.html), [Location](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/Location.html)
* Tools: VS Code, Live Server extension, Git (if available)
* Patterns and Practices: Master details, [MVC](http://brickhousecodecamp.org/wikipedia/model_view_controller.html), [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html), [Command pattern](http://brickhousecodecamp.org/wikipedia/command_pattern.html)

### Feature Specification

* Create the designed Bluesky website for selling property
* The page must match the design as close as possible
* The website will be a single page application (SPA)
* Create administration pages for managing the website
	* The administration pages will be of your own design
	* The admin pages will manage creating, editing, and deleting of properties
	* The admin pages will manage viewing the contact and subscribe lists
* A real estate property has the following properties
	* unique id (generated read only number, guarantee uniqueness)
	* title
	* description
	* city
	* price (number)
	* type (sea view, vacation home, city, townhouse)
	* status (standard, featured, offer, new)
	* for rent (true or false)
	* bedrooms (count)
	* bathrooms (count)
	* area (in square feet)
	* patio (count)
	* active (true or false)
	* image name (file name)
	* created date (generated read only) (format as: month as name of month, day as number, year as number)
	* updated date (generated read only) (format as: month as name of month, day as number, year as number)
* The website will have the following pages:
	* /index.html - (home)
	* /properties.html - (displays all active properties or search results)
	* /property.html - (displays a single property)
	* /contact.html - (contact form that saves to storage)
* Each page has a search bar that will display the results on the properties page
	* The search will have the following filters
		* for rent, type, city, bedrooms, bathrooms
* Each page has a subscribe bar that will save an email to storage
* Home page will have an offer under the header that will randomly display
	one of the properties of status offer
* The home page will have images of cities that will like to a search by that city
* The home page will a section of testimonials
* The navbar will be fixed and will shrink upon scrolling

### Code Design

* The SPA will be bookmarkable
* Create an app.js file for listening to the DOMContentLoaded and error windows events
	* In the app.js initialize base html content need for the SPA
	* Initialize and load your page on DOMContentLoaded
* Include html pages for all possible bookmarkable urls
	* Use a valid html page with doctype, html, head, and body tags
	* Add a single script link to the app.js file
	* No other content should be in these pages
* Use the MVC Pattern
* Use handlebars for generating html
* Use controllers, views, or partial templates for code reuse
* All data should be stored in window.localStorage