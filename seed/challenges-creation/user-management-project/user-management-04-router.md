
# User Management Page with Router

* Languages: HTML, CSS, Javascript ES5, JSON
* Languages Additional: Javascript ES6 Modules
* Libraries: Bootstrap, Font Awesome, Handlebars
* API Features: [DOM Elements](http://brickhousecodecamp.org/docs/Javascript/developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.html), [Events](http://brickhousecodecamp.org/docs/JavaScript/developer.mozilla.org/en-US/docs/Web/Events.html), [Web Storage API](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API.html), [XMLHttpRequest](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest.html), [History API](http://brickhousecodecamp.org/docs/javascript/developer.mozilla.org/en-US/docs/Web/API/History_API.html)
* Tools: VS Code, Live Server extension, Git (if available)
* Patterns and Practices: Master details, [MVC](http://brickhousecodecamp.org/wikipedia/model_view_controller.html), [Separation of concerns](http://brickhousecodecamp.org/wikipedia/separation_of_concerns.html), [Command pattern](http://brickhousecodecamp.org/wikipedia/command_pattern.html)

* Copy your User Management Templates project to a new git repository for the starting point

### Feature Specification

* Same features as User Management Template project with the following changes
* Create a Single Page Application (SPA)
* The SPA will have a single static index.html page
* The other pages are dynamic pages that upon navigation will change the url, add navigation history, and change the index.html body content
* The SPA has three dynamic page views with unique urls:
	* /index.html - (home) welcome message
	* /user-management.html - same functionality from previous project
	* /user.html - read-only view of a single user
* Clicking anchor links, to navigate to any page view, will change the url, add navigation history, and change the index.html body content
* Browser's back and forward buttons will change the url and the index.html body content appropriately
* The SPA will have to always be started from the /index.html page
* Only the /index.html page will be bookmarkable
* Refreshing the page on any page other than /index.html will result in a 404

### Code Design

* Add a home page with a welcome message, a short app description and a link to user management page
	* Url: / and /index.html
	* Use the MVC pattern with a controller and view
* Add a user page for viewing the user information with no use of a form or form controls (strictly a read-only view)
	* Url: /user.html?userId=value
	* Add a link to the user management page
	* Add a link to edit viewed user on the user management page
	* Add a link to the home page
* Use the user management page from the user management templates project
	* Url: /user-mangement.html
	* Edit user url: /user-mangement.html?userId=value
	* Change the edit links to navigate to /user-mangement.html?userId=value
		* These links must update the url and create navigation history
		* Use the router to route these links to the appropriate handler
	* Update the User Masters View
		* Add a view link that will navigate to the /user.html?userId=value page to view the user's information
	* Add a link to the home page
* Add a router to your project with the following functions
	* Add(path, handler) - adds a path to the router list with a handler function that takes a request object
		* The request object should have a parameters property with any parameters provided by the path
		* All parameters will be parsed from query string, i.e. /user.html?userId=4
	* navigateTo(path, query) - calls the handler method from the router list and passes a request object
		* This function will need to parse out any query string parameters and build the request object
	* setRouteLinks - finds all the links (anchors) that need to be handled by the router and attaches a method to call navigateTo
		* Note: the HTMLAnchorElement has the following properties:
			* pathname - path from the href attribute (no query string)
			* search - query string including leading ? from the href attribute
* Browse history must be created between different route paths
	* Use the history.pushState() to add new history to the browser on navigateTo include a history State object
	* Add an event listener to the window's popstate event and navigate to the path (event.state has the history State object)
	* Include enough information in the history State object to get a path for navigateTo
	* Do not create history when handling the popstate event
	* Forward and back history should work properly just like other websites
* Use root relative for all paths i.e. /user.html and href="/user.html"
* setRouteLinks will need to be called every time the html content is changed that includes any route links
	* use a data- attribute on the route links for querySelectorAll identification i.e. "a[data-route-link]"
	* consider a base view object that has a standard render method that might raise a render event
	* consider adding the setRouteLinks as an event listener to this event
* Use router.add() in the controllers to add a handler function that will call one of the controller methods
	* i.e. router.add("/", function(request) { homeController.load(); })
* The views should use a DOM call to set the title of the page