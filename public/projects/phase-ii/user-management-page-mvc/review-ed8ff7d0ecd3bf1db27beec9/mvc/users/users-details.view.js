
import { usersController } from "./users.controller.js";
import { dom } from "../../core/web/dom.js";

var dateStringFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

var formElement = document.getElementById("usersDetails");
formElement.addEventListener("submit", onSubmit);

var userIdElement = document.getElementById("userId");
var userIdHiddenInputElement = document.getElementById("userIdHiddenInput");
var nameElement = document.getElementById("name");
var emailElement = document.getElementById("email");
var genderElements = document.getElementById("gender").elements;
var ageElement = document.getElementById("age");
var roleElement = document.getElementById("role");
var verifiedElement = document.getElementById("verified");
var createdDateElement = document.getElementById("createdDate");
var updatedDateElement = document.getElementById("updatedDate");

var button = document.getElementById("newButton");
button.addEventListener("click", onNew);

button = document.getElementById("cancelEditButton");
button.addEventListener("click", onCancelEdit);

var usersDetailsView = {};

usersDetailsView.render = function(user) {

	if (user) {

		bind(user);	

	} else {

		formElement.reset();
		
		userIdElement.textContent = null;
		userIdHiddenInputElement.value = null;
		createdDateElement.textContent = null;
		updatedDateElement.textContent = null;
	}
};

function bind(user) {

	userIdElement.textContent = user.userId;
	userIdHiddenInputElement.value = user.userId;
	nameElement.value = user.name;
	emailElement.value = user.email;
	dom.setRadioValue(genderElements, user.gender);
	ageElement.value = user.age;
	roleElement.value = user.role;
	verifiedElement.checked = user.verified;
	createdDateElement.textContent = user.createdDate.toLocaleDateString('us-EN', dateStringFormatOptions);
	updatedDateElement.textContent = user.updatedDate.toLocaleDateString('us-EN', dateStringFormatOptions);
}

function inBind() {

	var user = {};

	if (userIdHiddenInputElement.value) {

		user.userId = Number.parseInt(userIdHiddenInputElement.value);
	}

	user.name = nameElement.value;
	user.email = emailElement.value;
	user.gender = dom.getRadioValue(genderElements, "gender");
	user.age = Number.parseInt(ageElement.value);
	user.role = roleElement.value;
	user.verified = verifiedElement.checked;

	return user;
}

function onNew() {

	usersController.newUser();
}

function onCancelEdit() {

	var user = inBind();

	usersController.cancelEditUser(user.userId);
}

function onSubmit(event) {
	
	event.preventDefault();

	var user = inBind();

	usersController.saveUser(user);
}


export { usersDetailsView }