
import { usersStore } from "./users-store.js";
import { messageBoxController } from "../message-box.controller.js";
import { usersDetailsView } from "./users-details.view.js";
import { usersMasterView } from "./users-master.view.js";

var usersController = {};

usersController.load = function() {

	usersDetailsView.render();

	var users = usersStore.getAll();

	usersMasterView.render(users);
	messageBoxController.close();
};

usersController.newUser = function(userId) {

	usersDetailsView.render();
	messageBoxController.close();
}

usersController.editUser = function(userId) {

	var user = usersStore.get(userId);

	usersDetailsView.render(user);
	messageBoxController.close();
}

usersController.cancelEditUser = function(userId) {

	var userFound = false;

	if (userId) {

		var user = usersStore.get(userId);

		if (user) {

			userFound = true;

			usersDetailsView.render(user);
			messageBoxController.message(`Changes to user <strong>${user.name}</strong> have been canceled.`);
		}
	}

	if (!userFound) {
		
		usersDetailsView.render();
		messageBoxController.close();
	}
}

usersController.saveUser = function(user) {

	var currentUser = null;

	if (user.userId) {

		currentUser = usersStore.get(user.userId);
	}

	if (currentUser) {

		user.createdDate = currentUser.createdDate;
		user.updatedDate = new Date();

		usersStore.update(user);

		messageBoxController.message(`User <strong>${user.name}</strong> has been saved.`);

	} else {

		user.userId = usersStore.getNextUserId();
		user.createdDate = new Date();
		user.updatedDate = new Date();

		usersStore.add(user);

		messageBoxController.message(`User <strong>${user.name}</strong> has been created.`);
	}

	usersDetailsView.render(user);

	var users = usersStore.getAll();

	usersMasterView.render(users);
}

usersController.deleteUser = function(userId) {

	var user = usersStore.get(userId);

	if (user) {

		usersStore.remove(user.userId);
	
		messageBoxController.message(`User <strong>${user.name}</strong> has been deleted.`);

		var users = usersStore.getAll();
	
		usersMasterView.render(users);

	} else {
	
		messageBoxController.message(`User <strong>${user.name}</strong> not found.`, true);
	}
}


export { usersController }