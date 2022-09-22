
import { messageBoxView } from "./message-box.view.js";

var messageBoxController = {};

messageBoxController.close = function() {

	messageBoxView.render();
};

messageBoxController.message = function(message, isError) {

	var messageData = {
		message: message,
		messageType: (isError) ? "danger" : "success"
	}

	messageBoxView.render(messageData);
};


export { messageBoxController }