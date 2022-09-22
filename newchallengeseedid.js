var allowedCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

var newChallengeSeedId = "";

for (var count = 1; count <= 7; count++){

	var randomIndex = Math.floor(Math.random() * 62 - 1);
	newChallengeSeedId += allowedCharacters[randomIndex];
}

console.log(newChallengeSeedId);