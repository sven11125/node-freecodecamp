
import { usersController } from "./mvc/users/users.controller.js";
import { messageBoxController } from "./mvc/message-box.controller.js"


document.addEventListener("DOMContentLoaded", function (event) {

	usersController.load();
});

window.addEventListener("error", function (event) {

	var error = event.error;
	var message = error.message;

	if (error.stack) {

		message = `${message}<hr><div class="text-left">${error.stack}</div>`;
	}

	messageBoxController.message(message, true);
});
