
import { usersController } from "./users.controller.js";
import { dom } from "../../core/web/dom.js";

var tableElement = document.getElementById("usersMaster");

var usersMasterView = {};

usersMasterView.render = function(users) {

	var tableBody = tableElement.getElementsByTagName("tbody")[0];
	tableElement.removeChild(tableBody);	

	tableBody = document.createElement("tbody");

	for (var index in users) {
		
		var user = users[index];
		var tableRow = buildUserTableRow(user);

		tableBody.appendChild(tableRow);
	}

	tableElement.appendChild(tableBody);
};

function buildUserTableRow(user) {

	var tableRow = document.createElement("tr");
	var tableCell;
	var element;

	tableCell = dom.createElement("td", {textContent: user.userId});
	tableRow.appendChild(tableCell);

	tableCell = dom.createElement("td", {textContent: user.name, className: "text-center"});
	tableRow.appendChild(tableCell);

	tableCell = dom.createElement("td", {textContent: user.email, className: "text-center"});
	tableRow.appendChild(tableCell);

	element = getGenderIcon(user.gender);
	tableCell = dom.createElement("td", {className: "text-center"}, [element]);
	tableRow.appendChild(tableCell);

	element = dom.createIcon("fa fa-pencil-square-o");
	element = dom.createElement("a", {href: "#", className: "mr-3"}, [element]);
	element.dataset.userId = user.userId;
	element.addEventListener("click", onEditClick);
	
	tableCell = dom.createElement("td", {className: "text-nowrap"}, [element]);

	element = dom.createIcon("fa fa-trash-o");
	element = dom.createElement("a", {href: "#"}, [element]);
	element.dataset.userId = user.userId;
	element.addEventListener("click", onDeleteClick);
	
	tableCell.appendChild(element);
	
	tableRow.appendChild(tableCell);

	return tableRow;
}

function getGenderIcon(gender) {

	var genderIcon = null;

	if (gender === "male") {

		genderIcon = dom.createIcon("fa fa-male");

	} else if (gender === "female") {

		genderIcon = dom.createIcon("fa fa-female");
	}

	return genderIcon;
}

function onEditClick(event) {

	var editLink= event.target.parentElement;
	var userId = editLink.dataset.userId;

	usersController.editUser(userId);

	event.preventDefault();
}

function onDeleteClick(event) {

	var deleteButton = event.target.parentElement;
	var userId = deleteButton.dataset.userId;

	usersController.deleteUser(userId);

	event.preventDefault();
}


export { usersMasterView }