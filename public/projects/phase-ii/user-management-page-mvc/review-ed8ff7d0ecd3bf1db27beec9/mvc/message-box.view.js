
var messageBoxElement = document.getElementById("messageBox");
var messageBoxContentElement = document.getElementById("messageBoxContent");
var messageBoxCloseLinkElement = document.getElementById("messageBoxCloseLink");

messageBoxCloseLinkElement.addEventListener("click", onClose);

var messageBoxView = {};

messageBoxView.render = function(messageData) {

	messageBoxElement.classList.remove("d-none");
	messageBoxElement.classList.remove("d-inline-block");
	messageBoxElement.classList.remove("alert-error");
	messageBoxElement.classList.remove("alert-success");

	if (messageData && messageData.message) {

		messageBoxContentElement.innerHTML = messageData.message;

		messageBoxElement.classList.add("d-inline-block");
		messageBoxElement.classList.add(`alert-${messageData.messageType}`);

	} else {

		messageBoxElement.classList.add("d-none");
	}
};

function onClose(event) {
	
	event.preventDefault();

	messageBoxElement.classList.remove("d-inline-block");
	messageBoxElement.classList.add("d-none");
}


export { messageBoxView }