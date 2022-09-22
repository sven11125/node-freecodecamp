
import { dateReviver } from "../../core/system/date-reviver.js"
import { webLocalStorage } from "../../core/web/web-local-storage.js";
import { HashTable } from "../../core/collections/hash-table.js";

var usersStore = {};

usersStore.add = function (user) {

	var users = this.getAllAsHashTable();

	if (users[user.userId]) {

		users[userId] = user;

		webLocalStorage.replace("users", users);

	} else {

		users[user.userId] = user;
		webLocalStorage.replace("users", users);
	}
}

usersStore.get = function (userId) {

	var users = this.getAllAsHashTable();

	return users[userId];
}

usersStore.getAll = function () {

	var usersHashTable = this.getAllAsHashTable();

	return usersHashTable.values();
}

usersStore.getAllAsHashTable = function () {

	var users = webLocalStorage.get("users", dateReviver);

	return new HashTable(users);
}

usersStore.getNextUserId = function () {

	var users = this.getAllAsHashTable();
	var nextUserId = 1;

	users.forEachValue(function (user) {

		if (user.userId >= nextUserId) {

			nextUserId = user.userId + 1;
		}
	});

	return nextUserId;
}

usersStore.update = function (user) {

	var users = this.getAllAsHashTable();

	if (users[user.userId]) {

		users[user.userId] = user;

		webLocalStorage.replace("users", users);

	} else {

		throw new Error("User not found.");
	}
}

usersStore.remove = function (userId) {

	var users = this.getAllAsHashTable();

	if (users[userId]) {

		delete users[userId];

		webLocalStorage.replace("users", users);
	}
}


export { usersStore }